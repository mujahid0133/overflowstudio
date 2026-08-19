"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type UseScrollTriggerOptions = {
  /**
   * Below this viewport width, the animation never wires up. The plain
   * fallback markup underneath must already be complete on its own —
   * pinning/scrubbing a cramped mobile viewport is wrong UX, not a
   * degraded nice-to-have.
   */
  minWidth?: number;
  deps?: unknown[];
};

/**
 * Shared gsap.context + ScrollTrigger scaffolding, generalized from the
 * pattern proven in OldVsNew.tsx: scoped to `container`, cleaned up via
 * ctx.revert(), gated behind reduced-motion and a minimum viewport width.
 * `setup` receives the mounted container element — query/animate elements
 * within it directly, the same way OldVsNew used its own refs.
 */
export function useScrollTrigger<T extends HTMLElement>(
  ref: RefObject<T | null>,
  setup: (container: T) => void,
  { minWidth = 1024, deps = [] }: UseScrollTriggerOptions = {},
) {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const container = ref.current;
    if (!container) return;
    if (!window.matchMedia(`(min-width: ${minWidth}px)`).matches) return;

    const ctx = gsap.context(() => setup(container), container);
    return () => ctx.revert();
    // `setup` is intentionally excluded: pass any values it closes over via
    // `deps` instead of an inline arrow function, so the GSAP context isn't
    // torn down and rebuilt on every unrelated parent re-render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, minWidth, ...deps]);
}
