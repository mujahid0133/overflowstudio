"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { duration, ease } from "@/lib/motion-tokens";
import { proof } from "@/content/home";

/**
 * §19 — proof.
 *
 * These are the only two numbers on this site, and both describe work that
 * already happened. Nothing here may be extrapolated into a promise, and no
 * third metric, client, logo or testimonial may be added to make the
 * section feel fuller (§43, CLAUDE.md, docs/CONTENT-TODO.md). The
 * disclaimer is part of the section, not fine print to be trimmed later.
 *
 * The compression metric is drawn as a measurement: the eight weeks that
 * were planned stay visible as an outlined span, and the three weeks it
 * actually took are filled inside it. The animation is the fill contracting
 * to its real length — factual, weighty, no bounce, no SaaS counter
 * theatrics.
 *
 * The founder-hours figure is a RANGE, so it is not counted up: a counter
 * ticking through numbers that were never measured would be theatre
 * dressed as data. It rises as a measure instead, and the range is stated
 * plainly.
 *
 * Anchored as `#proof`.
 */

// The planned span is the denominator the compressed span is drawn against.
const PLANNED_WEEKS = 8;
const ACTUAL_WEEKS = 3;

export function Proof() {
  return (
    <Section id="proof" className="border-t border-line bg-paper-dim">
      <SectionHead index={proof.index} kicker={proof.kicker} headline={proof.headline} />

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Compression />
        <Recovered />
      </div>

      <Reveal>
        <p className="mt-16 border-t border-line pt-6 font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
          {proof.disclaimer}
        </p>
      </Reveal>
    </Section>
  );
}

function Compression() {
  const metric = proof.metrics[0];

  return (
    <Reveal>
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="font-display text-4xl leading-none font-medium tracking-[-0.03em] text-ink-faint md:text-6xl">
          {metric.from}
        </span>
        <span aria-hidden="true" className="font-mono text-xl text-accent">
          →
        </span>
        <span className="font-display text-5xl leading-none font-medium tracking-[-0.03em] text-ink md:text-7xl">
          {metric.to}
        </span>
      </div>

      {/* The measurement. Outline = what was planned; fill = what it took. */}
      <div className="mt-8" aria-hidden="true">
        <div className="relative h-8 border border-dashed border-line-strong">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "100%" }}
            whileInView={{ width: `${(ACTUAL_WEEKS / PLANNED_WEEKS) * 100}%` }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: duration.dramatic, delay: 0.2, ease: ease.signature }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
          <span>Actual</span>
          <span>Planned</span>
        </div>
      </div>

      <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">{metric.body}</p>
    </Reveal>
  );
}

function Recovered() {
  const metric = proof.metrics[1];

  return (
    <Reveal index={1}>
      <div className="flex flex-wrap items-baseline gap-x-4">
        <span className="font-display text-5xl leading-none font-medium tracking-[-0.03em] text-ink md:text-7xl">
          {metric.value}
        </span>
        <span className="font-mono text-sm tracking-[0.16em] text-accent uppercase">
          {metric.unit}
        </span>
      </div>

      {/*
        Deliberately a rule, not a bar. A bar needs a denominator, and the
        only denominator available here would be an invented working week —
        which would turn a real figure into a fabricated ratio (§43).
      */}
      <div className="mt-8" aria-hidden="true">
        <div className="relative h-px w-full bg-line">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: duration.dramatic, delay: 0.3, ease: ease.signature }}
          />
        </div>
        <div className="mt-2 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
          Recovered · per week
        </div>
      </div>

      <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">{metric.body}</p>
    </Reveal>
  );
}
