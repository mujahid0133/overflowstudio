"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { outcomeProof } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { cx } from "@/lib/cx";

/**
 * The proof grid visually compresses into place: the three columns start
 * wider-spaced and slightly faded/scaled down, then scrub-converge into
 * their tight, full-opacity final position as the section scrolls into
 * view. Dramatizes spec section 23's "8 → 3 visually compresses" as a
 * structural motion, since there's no real numeric counter to animate to
 * yet — see docs/CONTENT-TODO.md. The middle column stays anchored
 * (it's the hero), the two flanking columns compress in toward it.
 */
export function OutcomeProof() {
  const gridRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<HTMLDivElement[]>([]);

  useScrollTrigger(gridRef, (container) => {
    const cols = colRefs.current;
    if (cols.length === 0) return;

    cols.forEach((col, i) => {
      gsap.set(col, { x: (i - 1) * 32, opacity: 0.3, scale: 0.92 });
    });

    gsap.to(cols, {
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 35%",
        scrub: 0.6,
      },
    });
  });

  return (
    <Section className="overflow-x-clip bg-paper-dim">
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {outcomeProof.headline}
        </h2>
      </Reveal>

      <div ref={gridRef} className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
        {outcomeProof.proofs.map((proof, i) => {
          const isHero = i === 1;
          return (
            <Reveal
              key={proof.label}
              index={i}
              className={cx("pt-10", isHero ? "border-t-2 border-accent" : "border-t border-line")}
            >
              <div
                ref={(el) => {
                  if (el) colRefs.current[i] = el;
                }}
              >
                {isHero && <span aria-hidden="true" className="mb-4 block h-1 w-10 bg-accent" />}
                <p
                  className={cx(
                    "font-display font-medium text-accent",
                    isHero ? "text-3xl md:text-5xl" : "text-2xl",
                  )}
                >
                  {proof.label}
                </p>
                <p className={cx("mt-3 text-ink-soft", isHero ? "text-lg" : "text-base")}>
                  {proof.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
