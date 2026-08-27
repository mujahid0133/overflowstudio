"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { duration, ease } from "@/lib/motion-tokens";
import { whatOverflowIs } from "@/content/home";

/**
 * §12 — not people, not projects: a department.
 *
 * The animation carries the argument literally: four separate roles start
 * as four separate objects, then converge into a single bounded object
 * labelled "Product department". After the convergence the individual
 * pieces are still visible but demoted — smaller, muted, inside the
 * boundary — because the department, not the headcount, is the thing being
 * activated. Roles that stop being the focus IS the point (§12).
 */
export function WhatOverflowIs() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead
        index={whatOverflowIs.index}
        kicker={whatOverflowIs.kicker}
        headline={whatOverflowIs.headline.map((line, i) => (
          <span key={line} className={i === 2 ? "block text-accent" : "block"}>
            {line}
          </span>
        ))}
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="max-w-md">
          {whatOverflowIs.body.map((paragraph, i) => (
            <Reveal key={paragraph} index={i}>
              <p className={cx("text-base leading-relaxed text-ink-soft", i > 0 && "mt-5")}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:pt-2">
          <Assembly />
        </Reveal>
      </div>

      <Reveal>
        <p className="mt-20 max-w-4xl border-t border-line pt-10 font-display text-2xl leading-[1.1] font-medium text-balance md:text-5xl">
          {whatOverflowIs.statement[0]}{" "}
          <span className="text-accent">{whatOverflowIs.statement[1]}</span>
        </p>
      </Reveal>
    </Section>
  );
}

function Assembly() {
  return (
    <div>
      <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
        {whatOverflowIs.fragmentsLabel}
      </span>

      {/* Four separate objects, deliberately misaligned to each other. */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {whatOverflowIs.fragments.map((fragment, i) => (
          <motion.li
            key={fragment}
            className="border border-line-strong bg-paper px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: duration.standard, delay: i * 0.08, ease: ease.signature }}
          >
            {fragment}
          </motion.li>
        ))}
      </ul>

      <motion.div
        aria-hidden="true"
        className="mt-6 ml-1 h-10 w-px bg-line-strong"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: duration.standard, delay: 0.4, ease: ease.standard }}
      />

      {/*
        The assembled object. The roles are still listed inside it — nothing
        is hidden — but they are now contents of one thing rather than four
        things to hire.
      */}
      <motion.div
        className="mt-6 border border-accent bg-accent-soft p-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: duration.slow, delay: 0.55, ease: ease.signature }}
      >
        <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
          {whatOverflowIs.assembled}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {whatOverflowIs.fragments.map((fragment) => (
            <li key={fragment} className="text-xs text-ink-soft">
              {fragment}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
