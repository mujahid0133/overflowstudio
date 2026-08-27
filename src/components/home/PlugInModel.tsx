"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Plate } from "@/components/home/system/Plate";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { duration, ease } from "@/lib/motion-tokens";
import { model } from "@/content/home";

/**
 * §10 — the most important section after the hero: the Plug-in Department.
 *
 * The equation (company − gap + department = shipped) is rendered as a
 * system diagram, not as a marketing animation: the terms are the same
 * `Plate` objects used everywhere else, the operators are plain type, and
 * the sequence resolves left to right once. The only color event is the
 * Overflow term and the result — activation and outcome.
 *
 * Anchored as `#model`: this is what the "Model" nav item points at.
 */
export function PlugInModel() {
  return (
    <Section id="model" className="border-t border-line">
      <SectionHead index={model.index} kicker={model.kicker} headline={model.headline}>
        <Reveal index={2}>
          <p className="mt-6 max-w-2xl font-display text-lg leading-snug font-medium text-ink md:text-xl">
            {model.subhead}
          </p>
        </Reveal>
        <Reveal index={3}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{model.body}</p>
        </Reveal>
      </SectionHead>

      <div className="mt-20 grid gap-px border border-line bg-line lg:grid-cols-4">
        {model.equation.map((term, i) => (
          <motion.div
            key={term.label}
            className={cx("relative p-6 md:p-8", i === 2 ? "bg-accent-soft" : "bg-paper")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: duration.slow, delay: i * 0.14, ease: ease.signature }}
          >
            {/*
              The operator belongs BETWEEN terms, so it's set as an overlay
              on the divider rather than as a fifth column of content.
            */}
            {term.operator && (
              <span
                aria-hidden="true"
                className={cx(
                  "absolute -top-3 left-6 px-2 font-mono text-sm text-accent lg:top-1/2 lg:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-1.5",
                  i === 2 ? "bg-accent-soft" : "bg-paper",
                )}
              >
                {term.operator}
              </span>
            )}

            <Plate
              label={term.label}
              note={term.note}
              state={i === 1 ? "gap" : i === 2 ? "active" : "solid"}
              className="h-full border-0 !bg-transparent p-0"
            />
          </motion.div>
        ))}
      </div>

      {/*
        The operators are decorative spans, so the equation's grammar would
        be lost to a screen reader reading only the four labels. This states
        it once, for assistive tech only — visually it would just duplicate
        the row above.
      */}
      <p className="sr-only">
        {model.equation
            .map((term) => `${term.operator ? `${term.operator} ` : ""}${term.label}`)
          .join(" ")}
      </p>
    </Section>
  );
}
