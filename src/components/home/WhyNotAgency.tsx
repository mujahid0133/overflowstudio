"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { whyNotAgency } from "@/content/home";

/**
 * §18 — the operating-model distinction, made without insulting anyone.
 *
 * The whole section is built on the two opening questions, because that is
 * genuinely where the models diverge: one starts from a specification, the
 * other from a missing piece of execution capacity. The chains underneath
 * just show what each question leads to. No agency is named, nothing is
 * marked wrong — the two are simply different mechanisms, shown side by
 * side at equal weight.
 */
export function WhyNotAgency() {
  return (
    <Section className="border-t border-line">
      <SectionHead
        index={whyNotAgency.index}
        kicker={whyNotAgency.kicker}
        headline={whyNotAgency.headline}
      >
        <Reveal index={2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            {whyNotAgency.body}
          </p>
        </Reveal>
      </SectionHead>

      <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
        {whyNotAgency.questions.map((question, i) => (
          <Reveal key={question.label} index={i} className="bg-paper p-8 md:p-10">
            <span
              className={cx(
                "font-mono text-[11px] tracking-[0.2em] uppercase",
                i === 1 ? "text-accent" : "text-ink-faint",
              )}
            >
              {question.label}
            </span>
            <blockquote className="mt-5 font-display text-xl leading-snug font-medium text-balance md:text-2xl">
              &ldquo;{question.quote}&rdquo;
            </blockquote>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        {whyNotAgency.models.map((chain, chainIndex) => (
          <Reveal key={chain.label} index={chainIndex}>
            <span
              className={cx(
                "font-mono text-[11px] tracking-[0.2em] uppercase",
                chainIndex === 1 ? "text-accent" : "text-ink-faint",
              )}
            >
              {chain.label}
            </span>
            <ol className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              {chain.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="font-mono text-xs text-ink-faint">
                      →
                    </span>
                  )}
                  <span
                    className={cx(
                      "font-display font-medium",
                      chainIndex === 1 ? "text-lg text-ink md:text-xl" : "text-lg text-ink-soft",
                    )}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
