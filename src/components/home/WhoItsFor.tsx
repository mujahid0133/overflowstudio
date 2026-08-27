"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { whoItsFor } from "@/content/home";

/**
 * §20 — qualification, without arrogance.
 *
 * The "not a fit" column is set at lower contrast rather than being marked
 * with crosses or warning color: it disqualifies calmly. Note the last
 * item — the spec bans the phrase "staff augmentation" as positioning, so
 * the disqualifier is written in plain language instead (§41).
 */
export function WhoItsFor() {
  return (
    <Section className="border-t border-line">
      <SectionHead index={whoItsFor.index} kicker={whoItsFor.kicker} headline={whoItsFor.headline} />

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {whoItsFor.intro}
          </p>
          <ul className="mt-6 flex flex-col">
            {whoItsFor.fit.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 font-display text-lg leading-snug font-medium text-ink last:border-b-0 md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
            {whoItsFor.notFitLabel}
          </p>
          <ul className="mt-6 flex flex-col">
            {whoItsFor.notFit.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 text-base leading-snug text-ink-soft last:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
