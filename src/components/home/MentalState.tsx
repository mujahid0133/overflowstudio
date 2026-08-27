"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { mentalState } from "@/content/home";

/**
 * §21 — the emotional transformation, stated structurally.
 *
 * Relief is communicated with space, not with illustration: the "before"
 * column is narrow and tightly stacked inside a bounded box, the "after"
 * column is wide, unbounded and openly spaced. Same content weight, very
 * different room to breathe. No cartoon emotion, no faces, no color
 * signalling stress.
 */
export function MentalState() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead
        index={mentalState.index}
        kicker={mentalState.kicker}
        headline={mentalState.headline}
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
            {mentalState.before.label}
          </span>
          {/* Bounded and tight — constrained on purpose. */}
          <ul className="mt-5 flex max-w-xs flex-col gap-1 border border-line-strong p-5">
            {mentalState.before.items.map((item) => (
              <li key={item} className="text-sm leading-tight text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1}>
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {mentalState.after.label}
          </span>
          {/* Unbounded and open — the same number of items, given room. */}
          <ul className="mt-5 flex flex-col gap-6">
            {mentalState.after.items.map((item) => (
              <li key={item} className="font-display text-xl leading-snug font-medium text-ink md:text-3xl">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
