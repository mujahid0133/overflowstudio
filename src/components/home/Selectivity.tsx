"use client";

import { motion, type Variants } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { selectivity } from "@/content/home";
import { duration, ease, stagger } from "@/lib/motion-tokens";

/**
 * "Good fit" settles in from the right, "poor fit" from the left — the two
 * lists visibly arrive from opposite directions, a lighter echo of the
 * diverging-paths motif in Control.tsx. Each item's +/– glyph scales in
 * from 0 alongside it.
 */
const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.base },
  },
};

function itemVariants(fromX: number): Variants {
  return {
    hidden: { opacity: 0, x: fromX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration.slow, ease: ease.signature },
    },
  };
}

const glyphVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.standard, ease: ease.signature },
  },
};

export function Selectivity() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight font-medium md:text-5xl">
            {selectivity.headline}
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-6 text-lg text-ink-soft">{selectivity.body}</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal index={2}>
            <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">Good fit</p>
          </Reveal>
          <motion.ul
            className="mt-4 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={listVariants}
          >
            {selectivity.good.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants(24)}
                className="flex gap-3 text-base text-ink"
              >
                <motion.span aria-hidden="true" variants={glyphVariants} className="text-accent">
                  +
                </motion.span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <Reveal index={3}>
            <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">Poor fit</p>
          </Reveal>
          <motion.ul
            className="mt-4 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={listVariants}
          >
            {selectivity.poor.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants(-24)}
                className="flex gap-3 text-base text-ink-soft"
              >
                <motion.span aria-hidden="true" variants={glyphVariants}>
                  –
                </motion.span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
