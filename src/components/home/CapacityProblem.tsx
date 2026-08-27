"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { duration, ease } from "@/lib/motion-tokens";
import { problem } from "@/content/home";

/**
 * §08 — the capacity gap, stated as a systems problem.
 *
 * The spec is explicit that this must not be illustrated with stressed
 * founders or office photography: it is a systems problem and should be
 * drawn as one. So the visual is a constraint chart — what needs to happen
 * measured against what the current organization can execute, with the
 * overrun drawn as an explicit, hatched, unfilled region.
 *
 * The one animated idea: the "need" bar extends PAST the capacity boundary
 * as it enters the viewport. That is the whole argument in one movement —
 * demand exceeded the organization, and the remainder has nowhere to go.
 */

// Where the current organization's capacity runs out, as a percentage of
// the need. Deliberately a round, obviously-illustrative proportion: this
// is a diagram of a shape of problem, not a measurement of any client.
const CAPACITY_LIMIT = 55;

export function CapacityProblem() {
  return (
    <Section className="border-t border-line">
      <SectionHead index={problem.index} kicker={problem.kicker} headline={problem.headline} />

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="max-w-md">
          {problem.body.map((paragraph, i) => (
            <Reveal key={paragraph} index={i}>
              <p
                className={cx(
                  i > 0 && "mt-5",
                  i === problem.body.length - 1
                    ? "font-display text-xl font-medium text-ink"
                    : "text-base leading-relaxed text-ink-soft",
                )}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <ConstraintChart />
      </div>

      <Reveal>
        <p className="mt-20 max-w-4xl border-t border-line pt-10 font-display text-xl leading-snug font-medium text-balance md:text-3xl">
          {problem.statement}
        </p>
      </Reveal>
    </Section>
  );
}

function ConstraintChart() {
  return (
    <Reveal className="relative">
      {/* The boundary: where the current organization stops. Everything to
          the right of it is work the company cannot currently execute. */}
      <div
        aria-hidden="true"
        className="absolute top-8 bottom-14 hidden w-px bg-line-strong sm:block"
        style={{ left: `${CAPACITY_LIMIT}%` }}
      />

      <Row label={problem.diagram.need.label} note={problem.diagram.need.note}>
        <motion.div
          className="h-10 border border-line-strong bg-void-soft"
          initial={{ width: `${CAPACITY_LIMIT}%` }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: duration.dramatic, ease: ease.signature }}
        />
      </Row>

      <Row
        label={problem.diagram.capacity.label}
        note={problem.diagram.capacity.note}
        className="mt-6"
      >
        <div className="h-10 border border-line-strong bg-void-soft" style={{ width: `${CAPACITY_LIMIT}%` }} />
      </Row>

      {/* The remainder. Outlined and hatched, never filled — the site's
          consistent language for capacity that does not exist yet. */}
      <div className="mt-6 flex">
        <div style={{ width: `${CAPACITY_LIMIT}%` }} aria-hidden="true" />
        <motion.div
          className="gap-hatch flex h-14 flex-1 items-center border border-dashed border-accent px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: duration.slow, delay: 0.5, ease: ease.signature }}
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {problem.diagram.gap.label}
            </p>
            <p className="mt-0.5 text-xs text-ink-soft">{problem.diagram.gap.note}</p>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function Row({
  label,
  note,
  className,
  children,
}: {
  label: string;
  note: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.16em] text-ink uppercase">{label}</span>
        <span className="text-xs text-ink-faint">{note}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
