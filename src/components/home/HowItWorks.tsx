"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorks } from "@/content/home";

/**
 * §16 — from capacity gap to shipped product.
 *
 * The progress line is scroll-linked, which §16 explicitly asks for, but
 * scrolling stays completely normal: nothing is pinned, nothing is
 * scrubbed, and no step is hidden until the visitor "earns" it. The rail
 * simply reports where they are in the process — it enhances the scroll
 * rather than taking it over (§32).
 *
 * `useSpring` smooths the raw progress value so the fill glides instead of
 * tracking wheel jitter one-to-one. Under reduced motion the spring still
 * resolves to the same value; `MotionConfig reducedMotion="user"` leaves
 * the rail as a plain, correct indicator rather than removing it.
 *
 * Anchored as `#how-it-works` — the hero's secondary CTA lands here.
 */
export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start filling when the list's top reaches the lower third of the
    // viewport; finish when its bottom passes the middle. Keeps the rail in
    // sync with what the visitor is actually reading.
    offset: ["start 70%", "end 55%"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <Section id="how-it-works" className="border-t border-line">
      <SectionHead
        index={howItWorks.index}
        kicker={howItWorks.kicker}
        headline={howItWorks.headline}
      />

      <div ref={containerRef} className="relative mt-16 pl-8 md:pl-14">
        {/* Rail + fill. Sits in the gutter created by the padding above, so
            the steps themselves stay on the page's text spine. */}
        <div aria-hidden="true" className="absolute top-2 bottom-2 left-0 w-px bg-line" />
        <motion.div
          aria-hidden="true"
          className="absolute top-2 left-0 w-px origin-top bg-accent"
          style={{ scaleY: progress, height: "calc(100% - 1rem)" }}
        />

        <ol className="flex flex-col">
          {howItWorks.steps.map((step, i) => (
            <Reveal as="li" key={step.index} index={i} className="relative border-b border-line py-8 last:border-b-0">
              <span
                aria-hidden="true"
                className="absolute top-[42px] -left-8 h-[7px] w-[7px] -translate-x-[3px] rounded-full bg-line-strong md:-left-14"
              />
              <div className="grid gap-3 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-8">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                  {step.index}
                </span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl leading-tight font-medium text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
