"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { ownership } from "@/content/home";

/**
 * §15 — what stays yours, what we take.
 *
 * The spec calls this crucial and it is the section most easily got wrong:
 * the client's column must never visually collapse into Overflow's. So the
 * two columns are separated by a real, persistent boundary that is drawn as
 * a structural object (a full-height rule with a label on it), and neither
 * side's styling implies containment by the other. Both columns are equal
 * width and equal weight; only the boundary carries the signal color,
 * because the boundary is the thing being asserted.
 *
 * Nothing here animates across the boundary. Movement between the columns
 * would say "the work merges" — the argument is that direction and
 * execution stay distinct and connected, which is a static relationship.
 */
export function Ownership() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead index={ownership.index} kicker={ownership.kicker} headline={ownership.headline} />

      <div className="relative mt-16 grid gap-10 md:grid-cols-2 md:gap-0">
        {/* The boundary. Present at every breakpoint — horizontal when the
            columns stack, vertical when they sit side by side. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px bg-accent md:inset-x-auto md:inset-y-0 md:left-1/2 md:h-auto md:w-px"
        />

        <Column
          label={ownership.yours.label}
          items={ownership.yours.items}
          className="md:pr-12 lg:pr-20"
        />
        <Column
          label={ownership.ours.label}
          items={ownership.ours.items}
          accent
          className="md:pl-12 lg:pl-20"
        />
      </div>

      <Reveal>
        <p className="mt-16 font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
          {ownership.boundaryLabel}
        </p>
      </Reveal>

      <Reveal index={1}>
        <p className="mt-10 max-w-4xl border-t border-line pt-10 font-display text-2xl leading-[1.12] font-medium text-balance md:text-4xl">
          {ownership.statement[0]}{" "}
          <span className="text-ink-soft">{ownership.statement[1]}</span>
        </p>
      </Reveal>
    </Section>
  );
}

function Column({
  label,
  items,
  accent = false,
  className,
}: {
  label: string;
  items: string[];
  accent?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <span
        className={cx(
          "font-mono text-[11px] tracking-[0.2em] uppercase",
          accent ? "text-accent" : "text-ink",
        )}
      >
        {label}
      </span>
      <ul className="mt-6 flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-line py-3 font-display text-lg font-medium text-ink last:border-b-0 md:text-xl"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
