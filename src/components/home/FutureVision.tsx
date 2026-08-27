"use client";

import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/home/system/SectionHead";
import { Plate } from "@/components/home/system/Plate";
import { Reveal } from "@/components/motion/Reveal";
import { future } from "@/content/home";

/**
 * §23 — Product is only the beginning.
 *
 * The hierarchy here is the whole point and it is enforced structurally,
 * not just with copy: Product is a full, active `Plate` at full contrast;
 * the potential departments are small dashed outlines at low contrast, set
 * apart under their own label. They cannot be mistaken for current
 * services, and the disclaimer says so in words as well.
 *
 * No dates. No "coming soon". No launch commitments (§23, §43).
 */
export function FutureVision() {
  return (
    <Section className="border-t border-line bg-paper-dim">
      <SectionHead index={future.index} kicker={future.kicker} headline={future.headline}>
        <Reveal index={2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{future.body}</p>
        </Reveal>
      </SectionHead>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {future.currentLabel}
          </span>
          <Plate
            label={future.current.label}
            note={future.current.state}
            state="active"
            className="mt-4 min-h-32"
          />
        </Reveal>

        <Reveal index={1}>
          <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
            {future.potentialLabel}
          </span>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {future.potential.map((department) => (
              <li
                key={department}
                className="flex min-h-16 items-center border border-dashed border-line px-3 py-3 font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase"
              >
                {department}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-faint">
            {future.disclaimer}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
