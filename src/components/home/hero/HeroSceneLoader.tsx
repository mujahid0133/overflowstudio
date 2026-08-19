"use client";

import { Component, useCallback, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { duration, ease } from "@/lib/motion-tokens";
import { useHasFinePointer } from "@/hooks/useHasFinePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/*
  Load discipline for the hero's Three.js moment. This file deliberately
  imports nothing from three / @react-three — that entire dependency lives
  behind the dynamic import below, so the chunk is only ever *requested*
  when all of these hold:

    - fine pointer (never on touch)
    - viewport ≥ lg (see the breakpoint convention in globals.css)
    - reduced motion is off
    - the browser has gone idle at least once since hydration

  The <Flow> diagram this canvas layers over is always in the DOM and is the
  real, accessible content. So the fallback for every excluded case is not
  fallback code at all — it's the page as already rendered.
*/

/** `lg` — matches the Tailwind breakpoint gating desktop composition. */
const MIN_WIDTH = 1024;
/** Safari has no requestIdleCallback; wait out the first paint instead. */
const IDLE_FALLBACK_DELAY = 200;

// Module scope so the chunk is created at build time, but `import()` still
// only fires when this component is actually rendered — i.e. at idle.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * A dead WebGL context must never take the hero down with it. Anything that
 * throws inside the canvas simply removes the decorative layer.
 */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function HeroSceneLoader({ nodeCount }: { nodeCount: number }) {
  const hasFinePointer = useHasFinePointer();
  const reducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (reducedMotion || !hasFinePointer) return;
    if (window.innerWidth < MIN_WIDTH) return;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setShouldLoad(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      const handle = window.requestIdleCallback(start, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(handle);
      };
    }

    const handle = window.setTimeout(start, IDLE_FALLBACK_DELAY);
    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [hasFinePointer, reducedMotion]);

  if (!shouldLoad || reducedMotion || !hasFinePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      // `hidden lg:block` mirrors the JS width gate for resizes after load.
      className="pointer-events-none absolute inset-0 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: duration.standard, ease: ease.signature }}
    >
      <SceneBoundary>
        <HeroScene nodeCount={nodeCount} onReady={handleReady} />
      </SceneBoundary>
    </motion.div>
  );
}
