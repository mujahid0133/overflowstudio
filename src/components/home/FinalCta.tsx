"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { finalCta } from "@/content/home";

/**
 * §25 — the ask.
 *
 * The primary CTA is the same words as the hero's, on purpose: "activate
 * product capacity" is the action the entire page has been defining, and
 * repeating it exactly is what makes it a term rather than a button label.
 * The secondary is the low-commitment version of the same destination for
 * anyone not ready to frame their outcome yet.
 */
export function FinalCta() {
  return (
    <Section className="border-t border-line !py-32 md:!py-40">
      <div className="max-w-4xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.04] font-medium tracking-[-0.03em] text-balance md:text-7xl xl:text-8xl">
            {finalCta.headline}
          </h2>
        </Reveal>

        <Reveal index={1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">{finalCta.subhead}</p>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <MagneticButton>
              <Button href={finalCta.primaryCta.href} variant="primary">
                {finalCta.primaryCta.label}
              </Button>
            </MagneticButton>
            <Button href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal index={3}>
          <p className="mt-10 font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
            {finalCta.supportingLine}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
