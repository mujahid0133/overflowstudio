"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Flow } from "@/components/ui/Flow";
import { categoryCreation } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

/**
 * "Capacity enters and the timeline accelerates" — spec section 23's
 * animation map for this section. The horizontal `Flow` (distinct from
 * Hero's vertical one — today's literal duplicate is the sameness bug this
 * redesign fixes) draws its per-node connector segments left-to-right and
 * pops each node marker in, with shrinking step durations so later nodes
 * arrive faster than earlier ones.
 *
 * `Flow` renders its connecting line as one `<span>` segment per node gap,
 * not a single continuous line, and doesn't expose a way to customize
 * per-node timing (see Flow.tsx) — rather than editing that shared
 * primitive, this wrapper reaches into its own rendered DOM via a ref to
 * animate those segments and each node's dot marker directly. Flow's own
 * text reveal (Motion, per-node `whileInView`) is left completely
 * untouched and runs independently alongside this.
 */
export function CategoryCreation() {
  const flowRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(flowRef, (container) => {
    // Each `<li>` but the last renders exactly two aria-hidden spans: the
    // connector line first, the node marker dot last (see Flow.tsx).
    const segments = Array.from(
      container.querySelectorAll<HTMLElement>("li:not(:last-child) > span[aria-hidden]:first-of-type"),
    );
    const markers = Array.from(
      container.querySelectorAll<HTMLElement>("li > span[aria-hidden]:last-of-type"),
    );
    if (segments.length === 0 || markers.length === 0) return;

    gsap.set(segments, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(markers, { scale: 0, transformOrigin: "center center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "top 20%",
        scrub: 0.6,
      },
    });

    segments.forEach((segment, i) => {
      // Each step is shorter than the last — the draw-in visibly speeds up.
      const segmentDuration = Math.max(0.55 - i * 0.13, 0.18);
      tl.to(markers[i], { scale: 1, duration: 0.16, ease: "back.out(2)" }).to(
        segment,
        { scaleX: 1, duration: segmentDuration, ease: "none" },
        "-=0.08",
      );
    });

    const lastMarker = markers[markers.length - 1];
    tl.to(lastMarker, { scale: 1, duration: 0.16, ease: "back.out(2)" }, "-=0.05");
  });

  return (
    <Section className="bg-paper-dim">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-medium md:text-5xl">
              {categoryCreation.headline}
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 max-w-md text-lg text-ink-soft">{categoryCreation.body}</p>
          </Reveal>
        </div>
        <div ref={flowRef}>
          <Flow nodes={categoryCreation.flow} direction="horizontal" />
        </div>
      </div>
    </Section>
  );
}
