"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { duration, ease } from "@/lib/motion-tokens";
import { product } from "@/content/home";

/**
 * §13 + §14 — Product, the first department, and what it can assemble.
 *
 * Two ideas, one section, because they are the same idea: the department is
 * a continuous execution function (stages, not services), and what it
 * contains is decided by the outcome (capabilities, not a menu).
 *
 * The stages animate left to right and each one STAYS connected to the last
 * — the connecting rail is drawn once, continuously, rather than each stage
 * appearing as an independent card. That continuity is the difference
 * between a department and a handoff chain.
 *
 * Capability discipline (§14): Product / Design / Engineering are the
 * constant spine and read as solid. AI, Research, Infrastructure, QA and
 * Analytics are drawn as outlines — they exist as capabilities that can be
 * activated, not as things being sold. AI in particular appears here and
 * nowhere else on the site, and never as a headline (§38).
 *
 * Anchored as `#product`.
 */
export function ProductDepartment() {
  return (
    <Section id="product" className="border-t border-line">
      <SectionHead index={product.index} kicker={product.kicker} headline={product.headline}>
        <Reveal index={2}>
          <p className="mt-6 max-w-2xl font-display text-lg leading-snug font-medium text-ink md:text-xl">
            {product.subhead}
          </p>
        </Reveal>
        <Reveal index={3}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{product.body}</p>
        </Reveal>
      </SectionHead>

      <Stages />

      <div className="mt-24 border-t border-line pt-16">
        <Reveal>
          <h3 className="max-w-3xl font-display text-2xl leading-tight font-medium text-balance md:text-3xl">
            {product.capabilities.headline}
          </h3>
        </Reveal>

        <Capabilities />

        <Reveal>
          <p className="mt-14 max-w-3xl font-display text-xl leading-snug font-medium text-balance md:text-3xl">
            {product.capabilities.statement}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function Stages() {
  return (
    <Reveal className="mt-20">
      <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
        {product.stagesLabel}
      </span>

      <div className="relative mt-8">
        {/* The continuous rail. One line under every stage — drawn once. */}
        <div aria-hidden="true" className="absolute top-[5px] right-0 left-0 h-px bg-line" />
        <motion.div
          aria-hidden="true"
          className="absolute top-[5px] left-0 h-px bg-accent"
          style={{ transformOrigin: "left" }}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: duration.dramatic, ease: ease.signature }}
        />

        <ol className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {product.stages.map((stage, i) => (
            <motion.li
              key={stage}
              className="flex flex-col gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: duration.standard,
                delay: 0.15 + i * 0.13,
                ease: ease.signature,
              }}
            >
              <span
                aria-hidden="true"
                className="h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent bg-paper"
              />
              <span className="font-mono text-[11px] tracking-[0.14em] text-ink uppercase">
                {stage}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

function Capabilities() {
  return (
    <div className="mt-12 grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
      <Reveal>
        <div className="border-l-2 border-accent pl-5">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {product.capabilities.coreLabel}
          </span>
          <ul className="mt-4 flex flex-col gap-2">
            {product.capabilities.core.map((capability) => (
              <li key={capability} className="font-display text-lg font-medium text-ink">
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal index={1}>
        <div className="border-l border-line pl-5">
          <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
            {product.capabilities.conditionalLabel}
          </span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.capabilities.conditional.map((capability) => (
              <li
                key={capability}
                className="border border-dashed border-line-strong px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
