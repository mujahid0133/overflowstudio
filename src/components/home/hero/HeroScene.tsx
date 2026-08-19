"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Line, OrthographicCamera, PointMaterial, Points } from "@react-three/drei";
import gsap from "gsap";
import type {
  BufferAttribute,
  Group,
  Mesh,
  Points as ThreePoints,
  PointsMaterial,
} from "three";
import { gsapEase } from "@/lib/motion-tokens";

/*
  The hero's one 3D moment. It says exactly what spec section 23 asks the
  hero animation to say — "execution capacity plugs into a gap" — and
  nothing else:

    1. a thin line draws inward from both ends, leaving a visible gap
    2. accent points drift in from the two gap edges and gather in the gap
    3. that gathering becomes a bridge segment, reconnecting the line
    4. one point runs the finished line to a resting marker and settles

  Deliberately cheap: three short fat-line draws, one unlit Points buffer,
  two flat circles, an orthographic camera — no textures, no lights, no
  postprocessing, no loaded models. `frameloop="demand"` means nothing
  renders unless the timeline explicitly asks for a frame, so the canvas
  costs nothing at all once the sequence has settled. The colors below
  mirror globals.css; WebGL needs real values, not var() references.
*/

const LINE_COLOR = "#f2efe6"; // --color-paper-on-ink
const ACCENT = "#ff5a1f"; // --color-accent

/** Share of the convergence spent staggering points in. */
const CONVERGE_STAGGER = 0.35;

export type HeroSceneProps = {
  /** Length of the hero flow — sizes the point cluster proportionally. */
  nodeCount: number;
  onReady?: () => void;
};

type Layout = {
  x0: number;
  x1: number;
  gapStart: number;
  gapEnd: number;
  markerX: number;
  y: number;
};

type ClusterSeeds = {
  count: number;
  positions: Float32Array;
  side: Float32Array;
  distance: Float32Array;
  spreadY: Float32Array;
  restX: Float32Array;
  restY: Float32Array;
  delay: Float32Array;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Deterministic stand-in for Math.random, so the component stays pure. */
function noise(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

/**
 * The orthographic camera is driven in CSS pixels (drei sizes its frustum
 * from the canvas), so the composition is laid out in pixels too and stays
 * in proportion with the Flow diagram underneath. The line sits in the
 * lower band of the cell — below the last flow node — so it reads as a
 * closing rule rather than a stripe across live text.
 */
function useLayout(): Layout {
  const width = useThree((state) => state.size.width);
  const height = useThree((state) => state.size.height);

  return useMemo(() => {
    const x0 = -width / 2 + 8;
    const x1 = width / 2 - 8;
    const span = x1 - x0;
    return {
      x0,
      x1,
      gapStart: x0 + span * 0.42,
      gapEnd: x0 + span * 0.63,
      markerX: x0 + span * 0.93,
      y: -height / 2 + clamp(height * 0.18, 64, 132),
    };
  }, [width, height]);
}

/**
 * Per-point offsets, generated once. Everything is stored *relative* to the
 * gap so the same seeds still resolve correctly if the canvas resizes and
 * the layout is recomputed mid-sequence.
 */
function useClusterSeeds(nodeCount: number): ClusterSeeds {
  const count = clamp(Math.round(nodeCount * 5), 16, 48);

  return useMemo(() => {
    const seeds: ClusterSeeds = {
      count,
      positions: new Float32Array(count * 3),
      side: new Float32Array(count),
      distance: new Float32Array(count),
      spreadY: new Float32Array(count),
      restX: new Float32Array(count),
      restY: new Float32Array(count),
      delay: new Float32Array(count),
    };

    for (let i = 0; i < count; i += 1) {
      const angle = noise(i, 1) * Math.PI * 2;
      const radius = Math.sqrt(noise(i, 2)) * 9;
      seeds.side[i] = i % 2 === 0 ? -1 : 1;
      seeds.distance[i] = 18 + noise(i, 3) * 78;
      seeds.spreadY[i] = (noise(i, 4) - 0.5) * 44;
      seeds.restX[i] = Math.cos(angle) * radius;
      seeds.restY[i] = Math.sin(angle) * radius * 0.5;
      seeds.delay[i] = noise(i, 5) * CONVERGE_STAGGER;
    }

    return seeds;
  }, [count]);
}

/** Writes the cluster's convergence at progress `p` (0 → 1). */
function writeCluster(
  target: Float32Array,
  seeds: ClusterSeeds,
  layout: Layout,
  p: number,
) {
  const center = (layout.gapStart + layout.gapEnd) / 2;

  for (let i = 0; i < seeds.count; i += 1) {
    const local = clamp((p - seeds.delay[i]) / (1 - CONVERGE_STAGGER), 0, 1);
    const eased = 1 - (1 - local) ** 3;
    const edge = seeds.side[i] < 0 ? layout.gapStart : layout.gapEnd;
    const startX = edge + seeds.side[i] * seeds.distance[i];
    const startY = seeds.spreadY[i];
    const endX = center + seeds.restX[i];
    const endY = seeds.restY[i];

    target[i * 3] = startX + (endX - startX) * eased;
    target[i * 3 + 1] = startY + (endY - startY) * eased;
    target[i * 3 + 2] = 0;
  }
}

function Scene({ nodeCount, onReady }: HeroSceneProps) {
  const invalidate = useThree((state) => state.invalidate);
  const dpr = useThree((state) => state.viewport.dpr);
  const layout = useLayout();
  const seeds = useClusterSeeds(nodeCount);

  // Read inside GSAP ticks so a mid-sequence resize doesn't animate toward
  // stale coordinates. Kept in sync by the effect below, never during render.
  const layoutRef = useRef(layout);

  const segmentARef = useRef<Group>(null);
  const segmentBRef = useRef<Group>(null);
  const bridgeRef = useRef<Group>(null);
  const clusterRef = useRef<ThreePoints>(null);
  const travelerRef = useRef<Mesh>(null);
  const markerRef = useRef<Mesh>(null);

  const gapCenter = (layout.gapStart + layout.gapEnd) / 2;
  const gapHalf = (layout.gapEnd - layout.gapStart) / 2;

  const segmentAPoints = useMemo<[number, number, number][]>(
    () => [
      [0, 0, 0],
      [layout.gapStart - layout.x0, 0, 0],
    ],
    [layout.gapStart, layout.x0],
  );

  const segmentBPoints = useMemo<[number, number, number][]>(
    () => [
      [0, 0, 0],
      [layout.gapEnd - layout.x1, 0, 0],
    ],
    [layout.gapEnd, layout.x1],
  );

  const bridgePoints = useMemo<[number, number, number][]>(
    () => [
      [-gapHalf - 0.5, 0, 0],
      [gapHalf + 0.5, 0, 0],
    ],
    [gapHalf],
  );

  useLayoutEffect(() => {
    layoutRef.current = layout;
  }, [layout]);

  useLayoutEffect(() => {
    const segmentA = segmentARef.current;
    const segmentB = segmentBRef.current;
    const bridge = bridgeRef.current;
    const cluster = clusterRef.current;
    const traveler = travelerRef.current;
    const marker = markerRef.current;
    if (!segmentA || !segmentB || !bridge || !cluster || !traveler || !marker) return;

    const clusterMaterial = cluster.material as PointsMaterial;
    const clusterAttribute = cluster.geometry.getAttribute("position") as BufferAttribute;
    const clusterPositions = clusterAttribute.array as Float32Array;

    // Zero state, applied before the first GL frame so nothing can pop in.
    gsap.set([segmentA.scale, segmentB.scale, bridge.scale], { x: 0 });
    gsap.set([traveler.scale, marker.scale], { x: 0, y: 0 });
    clusterMaterial.opacity = 0;
    traveler.position.x = layoutRef.current.x0;
    writeCluster(clusterPositions, seeds, layoutRef.current, 0);

    onReady?.();

    const converge = { progress: 0 };
    const timeline = gsap.timeline({
      delay: 0.35,
      // Demand frameloop: the canvas only draws when asked to.
      onUpdate: invalidate,
      onComplete: invalidate,
    });

    timeline
      // 1 — the line draws inward from both ends, leaving the gap.
      .to(segmentA.scale, { x: 1, duration: 0.9, ease: gsapEase.signature }, 0)
      .to(segmentB.scale, { x: 1, duration: 0.9, ease: gsapEase.signature }, 0.1)
      // 2 — capacity drifts in from the gap's edges and gathers in it.
      .to(clusterMaterial, { opacity: 0.9, duration: 0.4, ease: "power1.out" }, 0.75)
      .to(
        converge,
        {
          progress: 1,
          duration: 1.2,
          ease: "none",
          onUpdate: () =>
            writeCluster(clusterPositions, seeds, layoutRef.current, converge.progress),
        },
        0.75,
      )
      // 3 — what gathered becomes the connection.
      .to(bridge.scale, { x: 1, duration: 0.8, ease: gsapEase.signature }, 1.85)
      .to(clusterMaterial, { opacity: 0, duration: 0.5, ease: "power2.in" }, 2.05)
      // 4 — one point runs the finished line and settles on the marker.
      .to(traveler.scale, { x: 1, y: 1, duration: 0.35, ease: gsapEase.signature }, 2.5)
      .to(marker.scale, { x: 1, y: 1, duration: 0.6, ease: gsapEase.signature }, 2.7)
      .to(
        traveler.position,
        { x: () => layoutRef.current.markerX, duration: 1.2, ease: "power2.inOut" },
        2.7,
      )
      .to(traveler.scale, { x: 1.5, y: 1.5, duration: 0.28, ease: "power2.out" }, 3.95)
      .to(traveler.scale, { x: 1, y: 1, duration: 0.5, ease: "power2.inOut" }, 4.23);

    return () => {
      timeline.kill();
    };
  }, [invalidate, onReady, seeds]);

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={1} near={0.1} far={1000} />

      <group position={[0, layout.y, 0]}>
        <group ref={segmentARef} position={[layout.x0, 0, 0]}>
          <Line points={segmentAPoints} color={LINE_COLOR} lineWidth={1} transparent opacity={0.28} />
        </group>

        <group ref={segmentBRef} position={[layout.x1, 0, 0]}>
          <Line points={segmentBPoints} color={LINE_COLOR} lineWidth={1} transparent opacity={0.28} />
        </group>

        {/*
          The reconnection is the only line carrying the accent: the gap is
          closed by the capacity that arrived, not by the line itself.
        */}
        <group ref={bridgeRef} position={[gapCenter, 0, 0]}>
          <Line points={bridgePoints} color={ACCENT} lineWidth={1.5} transparent opacity={0.95} />
        </group>

        <Points ref={clusterRef} positions={seeds.positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            depthWrite={false}
            toneMapped={false}
            color={ACCENT}
            size={2.6 * dpr}
            sizeAttenuation={false}
          />
        </Points>

        {/* Resting marker — the ring the Flow nodes already use, in 3D. */}
        <mesh ref={markerRef} position={[layout.markerX, 0, 0]}>
          <ringGeometry args={[5.4, 7, 40]} />
          <meshBasicMaterial color={ACCENT} toneMapped={false} />
        </mesh>

        <mesh ref={travelerRef}>
          <circleGeometry args={[3.4, 28]} />
          <meshBasicMaterial color={ACCENT} toneMapped={false} />
        </mesh>
      </group>
    </>
  );
}

export function HeroScene({ nodeCount, onReady }: HeroSceneProps) {
  return (
    <Canvas
      flat
      orthographic
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <Scene nodeCount={nodeCount} onReady={onReady} />
    </Canvas>
  );
}

export default HeroScene;
