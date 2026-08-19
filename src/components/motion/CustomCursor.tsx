"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHasFinePointer } from "@/hooks/useHasFinePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion-tokens";

const SIZE = 20;
const SIZE_HOVER = 64;
// Mirrors --color-accent-soft in globals.css — kept as a literal here the
// same way motion-tokens.ts already mirrors the CSS duration/ease tokens,
// since Motion's color interpolation needs a real color, not a var().
const HOVER_FILL = "#ffe4d4";

/**
 * Single fixed cursor ring, mounted once in the root layout. Purely
 * additive on top of normal focus/hover affordances — never the only
 * signal something is interactive. Self-gates to zero listeners and zero
 * DOM on touch devices or under reduced motion. Any element can opt into
 * the enlarged hover state via a `data-cursor` attribute.
 */
export function CustomCursor() {
  const hasFinePointer = useHasFinePointer();
  const reducedMotion = useReducedMotion();
  const active = hasFinePointer && !reducedMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!active) return;

    function handleMove(event: globalThis.PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = (event.target as HTMLElement | null)?.closest("[data-cursor]");
      setHovering(Boolean(target));
    }

    document.body.classList.add("cursor-none");
    window.addEventListener("pointermove", handleMove);
    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-(--z-cursor) rounded-full border border-accent"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? SIZE_HOVER : SIZE,
        height: hovering ? SIZE_HOVER : SIZE,
        backgroundColor: hovering ? HOVER_FILL : "rgba(255,90,31,0)",
      }}
      transition={{ duration: duration.fast, ease: ease.standard }}
    />
  );
}
