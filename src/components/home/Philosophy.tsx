"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { philosophy } from "@/content/home";

/**
 * §22 — the operating philosophy. Deliberately the quietest section on the
 * page: no diagram, no motion beyond the shared reveal. It sits between the
 * emotional payoff and the future-vision beat as a pause, which is what
 * makes the closing statement land (creative-direction §8, on rhythm).
 */
export function Philosophy() {
  return (
    <Section className="border-t border-line">
      <SectionHead
        index={philosophy.index}
        kicker={philosophy.kicker}
        headline={philosophy.headline}
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-ink-soft">{philosophy.body}</p>
        </Reveal>

        <Reveal index={1}>
          <ul className="flex flex-col">
            {philosophy.principles.map((principle) => (
              <li
                key={principle}
                className="border-t border-line py-5 font-display text-xl leading-snug font-medium text-ink last:border-b last:border-line md:text-2xl"
              >
                {principle}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
