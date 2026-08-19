"use client";

import { motion, type Variants } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { caseStudyTeaser } from "@/content/home";
import { duration, ease } from "@/lib/motion-tokens";

/**
 * "Before / Overflow / After" strap-line — stages the narrative shape from
 * the spec's animation map ("CASE STUDIES: Before → Overflow → After")
 * without inventing any outcome data. Each label takes its turn in the same
 * slot; only "After" is left standing as the real headline resolves below.
 */
const STRAP_LABELS = ["Before", "Overflow", "After"] as const;
const STRAP_STEP = 0.3;

function strapVariants(index: number, isLast: boolean): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: isLast ? [0, 1] : [0, 1, 0],
      transition: {
        duration: isLast ? duration.fast : STRAP_STEP,
        delay: index * STRAP_STEP,
        times: isLast ? [0, 1] : [0, 0.3, 1],
        ease: ease.standard,
      },
    },
  };
}

export function CaseStudyTeaser() {
  return (
    <Section>
      <div className="border-t border-line pt-10 md:pt-16">
        <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">Case study</p>

        <div
          aria-hidden="true"
          className="relative mt-3 h-4 overflow-hidden font-mono text-xs tracking-[0.14em] uppercase"
        >
          {STRAP_LABELS.map((label, i) => (
            <motion.span
              key={label}
              className="absolute inset-0 text-ink-faint"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={strapVariants(i, i === STRAP_LABELS.length - 1)}
            >
              {label}
            </motion.span>
          ))}
        </div>

        <Reveal index={1}>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight font-medium md:text-4xl">
            {caseStudyTeaser.headline}
          </h2>
          <p className="mt-4 max-w-lg text-base text-ink-soft">{caseStudyTeaser.body}</p>
          <div className="mt-8">
            <Button href={caseStudyTeaser.cta.href} variant="secondary">
              {caseStudyTeaser.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
