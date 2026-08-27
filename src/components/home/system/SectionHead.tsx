import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";

/**
 * Editorial section opener: a mono coordinate (the step's number in the
 * argument) and kicker on a hairline, then the headline at display scale.
 *
 * Left-set rather than centered on purpose — the page reads as a document
 * with a spine, not as a stack of centered hero cards (build spec §30).
 * The numbering is what makes the homepage legible as one continuous
 * argument (§04) rather than eleven interchangeable marketing blocks.
 */
export function SectionHead({
  index,
  kicker,
  headline,
  children,
  className,
  headlineClassName,
}: {
  index: string;
  kicker: string;
  headline: ReactNode;
  children?: ReactNode;
  className?: string;
  headlineClassName?: string;
}) {
  return (
    <div className={cx("max-w-4xl", className)}>
      <Reveal>
        <div className="flex items-center gap-4 border-t border-line pt-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{index}</span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
            {kicker}
          </span>
        </div>
      </Reveal>

      <Reveal index={1}>
        <h2
          className={cx(
            "mt-8 font-display text-3xl leading-[1.06] font-medium tracking-[-0.02em] text-balance md:text-5xl",
            headlineClassName,
          )}
        >
          {headline}
        </h2>
      </Reveal>

      {children}
    </div>
  );
}
