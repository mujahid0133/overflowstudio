"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { duration, ease } from "@/lib/motion-tokens";
import { whyNotHiring } from "@/content/home";

/**
 * §17 — hiring isn't wrong; waiting is sometimes the problem.
 *
 * Both paths are drawn on the SAME total width, so the difference the
 * visitor sees is how much of that span each one spends before execution
 * begins — not a scoreboard. Hiring is never marked in red, never crossed
 * out, never labelled "bad": the spec is explicit that hiring is valuable
 * and only the timing is at issue.
 */
export function WhyNotHiring() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead
        index={whyNotHiring.index}
        kicker={whyNotHiring.kicker}
        headline={whyNotHiring.headline}
      >
        <Reveal index={2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            {whyNotHiring.body}
          </p>
        </Reveal>
      </SectionHead>

      <div className="mt-16 flex flex-col gap-12">
        {whyNotHiring.comparison.map((path, pathIndex) => (
          <Reveal key={path.label} index={pathIndex}>
            <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
              <span
                className={cx(
                  "font-mono text-[11px] tracking-[0.2em] uppercase",
                  pathIndex === 1 ? "text-accent" : "text-ink",
                )}
              >
                {path.label}
              </span>
              <span className="font-mono text-[11px] tracking-[0.14em] text-ink-faint">
                {path.steps.length} steps
              </span>
            </div>

            {/*
              From `md` up, both paths share one equal-width track: fewer
              steps means each one occupies more of the same span, which is
              what "compressed" actually looks like as a measurement.

              Below `md` that track would divide 390px by six and clip every
              label, so the geometry converts instead of shrinking (§44):
              a fixed two-up grid, where the contrast is carried by how many
              cells each path needs rather than by their width.
            */}
            <ol
              className="mt-5 grid grid-cols-2 gap-px sm:grid-cols-3 md:[grid-template-columns:repeat(var(--steps),minmax(0,1fr))]"
              style={{ "--steps": path.steps.length } as React.CSSProperties}
            >
              {path.steps.map((step, i) => (
                <motion.li
                  key={step}
                  className={cx(
                    "border px-3 py-4",
                    pathIndex === 1
                      ? "border-accent/40 bg-accent-soft"
                      : "border-line-strong bg-paper",
                  )}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: duration.standard,
                    delay: i * 0.07,
                    ease: ease.signature,
                  }}
                >
                  <span className="font-mono text-[10px] tracking-[0.12em] text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-xs leading-tight text-ink md:text-sm">{step}</p>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-20 max-w-4xl border-t border-line pt-10 font-display text-2xl leading-[1.12] font-medium text-balance md:text-4xl">
          {whyNotHiring.statement}
        </p>
      </Reveal>
    </Section>
  );
}
