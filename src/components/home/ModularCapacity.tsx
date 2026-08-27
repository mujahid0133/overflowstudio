"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Plate } from "@/components/home/system/Plate";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion-tokens";
import { modular } from "@/content/home";

/**
 * §11 — modular capacity: don't keep stacking, swap in what you need.
 *
 * The spec is emphatic that this must NOT read as an endless tower of
 * blocks; accumulation is the old model, not this one. So the composition
 * is a fixed core with exactly ONE slot, and the slot's occupant changes.
 * Nothing is ever added to the stack — the same space is re-occupied.
 *
 * The swap runs on a slow interval rather than on scroll, because the idea
 * being communicated is reversibility over time, not progress through the
 * page. It pauses on hover/focus and never runs at all under reduced
 * motion, where both configurations are simply listed instead (§45).
 */

const SWAP_INTERVAL_MS = 3600;

export function ModularCapacity() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = window.setInterval(
      () => setIndex((v) => (v + 1) % modular.configurations.length),
      SWAP_INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [reducedMotion, paused]);

  const current = modular.configurations[index];

  return (
    <Section className="border-t border-line">
      <SectionHead index={modular.index} kicker={modular.kicker} headline={modular.headline} />

      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-md">
          {modular.body.map((paragraph, i) => (
            <Reveal key={paragraph} index={i}>
              <p className={cx("text-base leading-relaxed text-ink-soft", i > 0 && "mt-5")}>
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal index={2}>
            <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {modular.states.map((state, i) => (
                <li key={state} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="font-mono text-xs text-ink-faint">
                      →
                    </span>
                  )}
                  <span className="font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase">
                    {state}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Pausing on pointer/keyboard entry keeps the swap from stealing
            attention while someone is actually reading the labels. */}
        <Reveal className="lg:pt-2">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
                {modular.slotLabel}
              </span>
              {!reducedMotion && (
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  {current.state}
                </span>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Plate
                label={modular.core}
                note={modular.coreNote}
                state="solid"
                className="min-h-28"
              />

              <div className="relative min-h-28">
                {reducedMotion ? (
                  // Static equivalent: the slot, and everything that can
                  // occupy it, with no motion required to understand it.
                  <div className="grid h-full gap-3">
                    {modular.configurations.map((config) => (
                      <Plate
                        key={config.label}
                        label={config.label}
                        note={config.state}
                        state={config.label === modular.configurations[0].label ? "active" : "gap"}
                      />
                    ))}
                  </div>
                ) : (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.label}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: duration.standard, ease: ease.signature }}
                    >
                      {/*
                        The second configuration renders as an empty slot,
                        not as a second filled department: Product is the
                        only department that exists today, and a visitor
                        landing mid-cycle must never see a peer to it
                        (§23). What the swap demonstrates is that the slot
                        is a slot — not that there is a second offer.
                      */}
                      <Plate
                        label={current.label}
                        note={current.state}
                        state={index === 0 ? "active" : "gap"}
                        className="h-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm text-ink-soft">{modular.slotNote}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
