"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { oldVsNew } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

/**
 * Scroll-scrubbed and pinned: the section holds in place while the old
 * (hiring) timeline visibly stretches out, the new (plug-in) timeline
 * stays tight — spacing does the explaining instead of a caption. Spec
 * section 23 animation map: "Long hiring timeline compresses into
 * execution timeline." Pinning gives the compression room to read as a
 * held, deliberate beat rather than something scrolled past quickly.
 */
export function OldVsNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const spacerRefs = useRef<HTMLDivElement[]>([]);

  useScrollTrigger(sectionRef, (container) => {
    const spacers = spacerRefs.current.filter(Boolean);
    if (spacers.length === 0) return;

    gsap.fromTo(
      spacers,
      { height: 6 },
      {
        height: 30,
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 0.6,
          pin: true,
        },
      },
    );
  });

  return (
    <Section ref={sectionRef}>
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {oldVsNew.headline}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
            {oldVsNew.old.label}
          </p>
          <ol className="mt-4">
            {oldVsNew.old.steps.map((step, i) => (
              <li key={step}>
                <p className="text-sm text-ink-soft">{step}</p>
                {i < oldVsNew.old.steps.length - 1 && (
                  <div
                    ref={(el) => {
                      if (el) spacerRefs.current[i] = el;
                    }}
                    className="ml-1.5 w-px bg-line-strong"
                    style={{ height: 6 }}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            {oldVsNew.new.label}
          </p>
          <ol className="mt-4">
            {oldVsNew.new.steps.map((step, i) => (
              <Reveal as="li" key={step} index={i}>
                <p className="font-display text-lg font-medium text-ink">{step}</p>
                {i < oldVsNew.new.steps.length - 1 && (
                  <div className="ml-1.5 h-1.5 w-px bg-line-strong" aria-hidden="true" />
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
