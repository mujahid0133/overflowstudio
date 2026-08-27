"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Plate } from "@/components/home/system/Plate";
import { duration, ease } from "@/lib/motion-tokens";
import { hero } from "@/content/home";

/**
 * The hero has to explain the company, not decorate the page (build spec §05/§06).
 *
 * Composition: a mostly-empty near-black field, a tiny technical label, an
 * oversized left-set headline, and — underneath it — the capacity system
 * stated as a diagram: the internal team is at capacity, an empty slot sits
 * between it and the work that's ready to move, and the Overflow module
 * arrives and locks into that slot.
 *
 * The animation runs ONCE on mount and then rests. It is not scroll-driven:
 * §32 forbids making the visitor scroll through an animation before they can
 * continue, and the point of this sequence (capacity can be activated) has
 * to land in the first seconds, not after a scroll gesture.
 *
 * Sequence, in the order §06 specifies: existing blocks stable → gap visible
 * → module approaches → aligns → locks → system stabilizes. Each step is a
 * delay on the shared signature curve; nothing bounces, spins, or floats
 * afterwards.
 *
 * REDUCED MOTION (§45) is handled in CSS, not here — see the
 * `[data-hero-beat]` block in globals.css. It has to be CSS: this sequence
 * is a mount animation, and any JS media-query hook resolves only after
 * hydration, by which point Motion has already started animating. The CSS
 * rule wins deterministically on the first paint and pins every element to
 * its resting state (module seated, gap gone, rail complete) — a static
 * diagram, exactly as legible, with no frame of movement. The data
 * attributes below exist for that rule; keep them in sync with it.
 */

// Beat timings (seconds) for the insertion sequence. Named rather than
// inlined so the choreography is readable as a sequence in one place.
const beat = {
  headline: 0.1,
  subhead: 0.35,
  body: 0.5,
  cta: 0.65,
  system: 0.9,
  approach: 1.35,
  lock: 2.05,
  stabilize: 2.35,
};

export function Hero() {
  return (
    <Section className="relative !pt-28 !pb-16 md:!pt-32 md:!pb-20">
      <div className="flex min-h-[calc(100svh-13rem)] flex-col justify-between gap-14">
        <div>
          <motion.p
            data-hero-beat
            className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration.slow, ease: ease.signature }}
          >
            {hero.eyebrow}
          </motion.p>

          {/*
            The two most dramatic type-scale steps on the site are reserved
            for this headline and the closing statement — see the breakpoint
            convention in globals.css.
          */}
          <motion.h1
            data-hero-beat
            className="mt-7 max-w-4xl font-display text-4xl leading-[1.02] font-medium tracking-[-0.03em] text-balance md:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.dramatic, delay: beat.headline, ease: ease.signature }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            data-hero-beat
            className="mt-7 max-w-2xl font-display text-xl leading-snug font-medium text-balance md:text-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, delay: beat.subhead, ease: ease.signature }}
          >
            {hero.subhead}
          </motion.p>

          <motion.p
            data-hero-beat
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, delay: beat.body, ease: ease.signature }}
          >
            {hero.body}
          </motion.p>

          <motion.div
            data-hero-beat
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.slow, delay: beat.cta, ease: ease.signature }}
          >
            <MagneticButton>
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
            </MagneticButton>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
              {hero.supportingLine}
            </span>
          </motion.div>
        </div>

        <motion.div
          data-hero-beat
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.slow, delay: beat.system, ease: ease.signature }}
        >
          <CapacitySystem />
        </motion.div>
      </div>
    </Section>
  );
}

/**
 * The diagram itself. Three slots on one rail; the middle slot renders the
 * gap and the arriving module stacked in the same grid cell, so the module
 * lands in exactly the space the gap occupied rather than near it —
 * "magnetic alignment", not a floating object (§11 animation rules).
 */
function CapacitySystem() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
          {hero.system.label}
        </span>
        <motion.span
          data-hero-beat
          className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration.standard, delay: beat.stabilize, ease: ease.standard }}
        >
          {hero.system.resolved}
        </motion.span>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
        <Plate label={hero.system.internal.label} note={hero.system.internal.note} state="solid" />

        <div className="relative">
          <motion.div
            data-hero-gap
            className="h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: duration.fast, delay: beat.lock, ease: ease.standard }}
          >
            <Plate
              label={hero.system.gap.label}
              note={hero.system.gap.note}
              state="gap"
              className="h-full"
            />
          </motion.div>

          {/*
            Both plates stay in the DOM and both stay in the accessibility
            tree, in reading order: "capacity gap" then "Overflow — product
            execution". That is the correct sentence for a screen reader —
            the gap is what's being described, the module is what fills it.
            Only the visual layer swaps.
          */}
          <motion.div
            data-hero-beat
            className="absolute inset-0"
            initial={{ opacity: 0, y: 28, x: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{
              duration: duration.dramatic,
              delay: beat.approach,
              ease: ease.signature,
            }}
          >
            <Plate
              label={hero.system.module.label}
              note={hero.system.module.note}
              state="active"
              className="h-full"
            />
          </motion.div>
        </div>

        <Plate label={hero.system.pending.label} note={hero.system.pending.note} state="solid" />
      </div>

      {/*
        The rail that "stabilizes" once the module is seated: a hairline that
        resolves to signal orange, left to right, after the lock. It reads as
        the system coming online — the one thing on the page allowed to say
        "capacity is active" in color.
      */}
      <div className="relative mt-4 h-px w-full bg-line">
        <motion.div
          data-hero-rail
          className="absolute inset-y-0 left-0 bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration.dramatic, delay: beat.stabilize, ease: ease.signature }}
        />
      </div>
    </div>
  );
}
