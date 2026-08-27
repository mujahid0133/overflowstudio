"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { bigIdea } from "@/content/home";

/**
 * §24 — the conclusion of the argument.
 *
 * Deliberately the least "designed" section on the page: one statement at
 * the largest type size the site uses, a lot of empty space, and nothing
 * else. No diagram, no rule, no supporting copy, no button — the next
 * section is the CTA and this one is allowed to just land.
 *
 * `invert` drops it onto the deepest plate in the palette so it reads as a
 * held breath between the argument and the ask.
 */
export function BigIdea() {
  return (
    <Section invert className="border-t border-line !py-36 md:!py-56">
      <Reveal>
        <p className="max-w-5xl font-display text-3xl leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-6xl xl:text-7xl">
          {bigIdea.statement}
        </p>
      </Reveal>

      <Reveal index={2}>
        <p className="mt-14 font-display text-2xl leading-tight font-medium text-accent md:text-4xl">
          {bigIdea.resolution}
        </p>
      </Reveal>
    </Section>
  );
}
