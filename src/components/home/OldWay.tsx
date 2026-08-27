"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { duration, ease, stagger } from "@/lib/motion-tokens";
import { oldWay } from "@/content/home";

/**
 * §09 — the two default responses to a capacity gap, and what each costs.
 *
 * The spec asks for accumulated friction to be visually understandable
 * without being dramatic or negative: neither path is being attacked, both
 * are being measured. So each step sits on a rail whose weight increases
 * step by step — by the last node the rail is thick. Nothing shakes, nothing
 * turns red; the sequence simply gets heavier as it goes, which is exactly
 * the argument ("if the need is temporary, why should the overhead be
 * permanent?").
 */
export function OldWay() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead index={oldWay.index} kicker={oldWay.kicker} headline={oldWay.headline} />

      <div className="mt-16 flex flex-col gap-12">
        {oldWay.paths.map((path, pathIndex) => (
          <div key={path.label}>
            {pathIndex > 0 && (
              <Reveal>
                <p className="mb-12 font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
                  or
                </p>
              </Reveal>
            )}
            <PathTimeline label={path.label} steps={path.steps} />
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft">{oldWay.reconcile}</p>
        </Reveal>
        <Reveal index={1}>
          <p className="font-display text-xl leading-snug font-medium text-balance md:text-3xl">
            {oldWay.statement}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function PathTimeline({ label, steps }: { label: string; steps: string[] }) {
  return (
    <Reveal>
      <p className="font-mono text-[11px] tracking-[0.2em] text-ink uppercase">{label}</p>

      {/*
        One markup for every viewport: the steps wrap from a single row into
        a stack instead of switching to a separate mobile diagram, so the
        weight-accumulation idea survives at any width (§44).
      */}
      <ol className="mt-6 flex flex-col gap-0 md:flex-row md:gap-0">
        {steps.map((step, i) => {
          // Each step is heavier than the last, and every bar sits in a
          // track of the same height so the growth is measurable against a
          // constant baseline. The final node carries the full weight the
          // organization has taken on by the time it can execute.
          const weight = 2 + i * 3;
          return (
            <li key={step} className="flex flex-1 flex-row items-center gap-4 md:flex-col md:items-stretch md:gap-0">
              <div className="flex h-6 w-24 shrink-0 items-end md:w-auto">
                {/* Grows from the left so the rail reads as one continuous
                    line being drawn through the process, not five bars. */}
                <motion.div
                  className="w-full bg-line-strong"
                  style={{ height: weight, transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: duration.standard,
                    delay: i * stagger.loose,
                    ease: ease.standard,
                  }}
                />
              </div>

              <motion.div
                className="py-2 md:py-0 md:pt-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: duration.standard,
                  delay: i * stagger.loose + 0.1,
                  ease: ease.signature,
                }}
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm text-ink">{step}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
