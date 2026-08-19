"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHasFinePointer } from "@/hooks/useHasFinePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { magnetic } from "@/lib/motion-tokens";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Pointer-tracked wrapper: pulls its child toward the cursor within a small
 * radius, springs back on leave. Desktop craft-signature only — reserve
 * for the one or two CTAs per section that should carry it, not every
 * button. On touch or under reduced motion it renders children untouched
 * with zero listeners attached; the child Button's own `active:scale`
 * already covers tap feedback there.
 */
export function MagneticButton({ children, className }: MagneticButtonProps) {
  const hasFinePointer = useHasFinePointer();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });

  if (!hasFinePointer || reducedMotion) {
    return <>{children}</>;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    if (Math.hypot(dx, dy) > magnetic.radius) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(dx * magnetic.strength);
    y.set(dy * magnetic.strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}
