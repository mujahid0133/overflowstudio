"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { howItWorksTeaser } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

// Mirrors --color-accent / --color-paper in globals.css — gsap animates
// color properties directly and can't resolve CSS custom properties
// reliably mid-tween, so the source-of-truth hex is duplicated here (same
// convention as lib/motion-tokens.ts).
const NODE_ACTIVE = {
  backgroundColor: "#ff5a1f",
  borderColor: "#ff5a1f",
  color: "#f7f5f0",
};

/**
 * The four steps read as one connected system, not four independent
 * cards: the connector scrub-draws left to right as the section scrolls
 * into view, and each node fills solid accent the moment the line
 * reaches it. Spec section 23: "Four stages progress as one continuous
 * system." Same GSAP-scrub line-draw grammar as Control's divider and
 * OldVsNew's timeline stretch elsewhere on the page.
 */
export function HowItWorksTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<HTMLSpanElement[]>([]);

  useScrollTrigger(sectionRef, (container) => {
    const line = lineRef.current;
    const nodes = nodeRefs.current;
    if (!line || nodes.length === 0) return;

    gsap.set(line, { scaleX: 0, backgroundColor: "#ff5a1f" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.6,
      },
    });

    tl.to(line, { scaleX: 1, ease: "none", duration: 1 }, 0);

    nodes.forEach((node, i) => {
      const pos = (i + 0.5) / nodes.length;
      tl.to(node, { ...NODE_ACTIVE, duration: 0.08, ease: "none" }, pos);
    });
  });

  return (
    <Section ref={sectionRef}>
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {howItWorksTeaser.headline}
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-8 md:grid-cols-4">
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute top-5 right-0 left-0 hidden h-px origin-left bg-line-strong md:block"
        />
        {howItWorksTeaser.steps.map((step, i) => (
          <Reveal key={step.index} index={i} className="relative">
            <span
              ref={(el) => {
                if (el) nodeRefs.current[i] = el;
              }}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper font-mono text-xs text-ink-faint"
            >
              {step.index}
            </span>
            <p className="mt-4 font-display text-lg font-medium text-ink">{step.title}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{step.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal index={4} className="mt-12">
        <Button href={howItWorksTeaser.cta.href} variant="ghost">
          {howItWorksTeaser.cta.label} →
        </Button>
      </Reveal>
    </Section>
  );
}
