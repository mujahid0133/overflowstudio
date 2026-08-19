import { cx } from "@/lib/cx";

type SystemLineNode = { label: string; sublabel?: string | null };

/**
 * The hero's cinematic roadmap axis (docs/creative-direction.md §11):
 * `origin` (the company's real roadmap) runs into `constraint` (the
 * execution-capacity gap), where pressure visibly accumulates. Deliberately
 * only two labeled nodes — `Overflow` and `Outcome` don't exist in this
 * beat's story yet; they're the payoff of the later plug-in section
 * (CategoryCreation), not something to pre-empt here. The ticks between
 * them are decorative rhythm, not invented roadmap items.
 *
 * All data-* attributes below are hooks for Hero.tsx's GSAP timeline
 * (reaching into rendered markup rather than this component owning any
 * animation — same convention CategoryCreation.tsx uses against `Flow`).
 * Every element renders in its final, fully-legible resting state by
 * default; GSAP only ever adds motion on top for pointer/motion-safe users.
 */
export function SystemLine({
  axisLabel,
  origin,
  constraint,
  stallLabels,
  className,
}: {
  axisLabel: string;
  origin: SystemLineNode;
  constraint: SystemLineNode;
  stallLabels: string[];
  className?: string;
}) {
  return (
    <div className={cx("relative", className)} data-system-line>
      <p className="font-mono text-[11px] tracking-[0.18em] text-paper-on-ink-soft uppercase">
        {axisLabel}
      </p>

      {/* Desktop / lg+: horizontal axis with scroll-driven congestion. */}
      <div className="relative mt-8 hidden lg:block">
        <div
          data-axis-line
          className="absolute top-[7px] right-0 left-0 h-px bg-line-on-ink"
        />
        <div className="absolute top-[3px] right-0 left-0 flex justify-between px-[7px]" aria-hidden="true">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="h-[9px] w-[9px] rounded-full border border-line-on-ink" />
          ))}
        </div>

        <div className="relative flex items-start justify-between">
          <div className="flex flex-col items-start gap-3">
            <span
              data-node="origin"
              className="h-[15px] w-[15px] rounded-full border-2 border-paper-on-ink-soft bg-void"
            />
            <div>
              <p className="font-mono text-[11px] tracking-[0.1em] text-paper-on-ink uppercase">
                {origin.label}
              </p>
              {origin.sublabel && (
                <p className="mt-0.5 max-w-40 text-xs text-paper-on-ink-soft">{origin.sublabel}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <span
              data-node="constraint"
              className="h-[15px] w-[15px] rounded-full border-2 border-accent bg-void"
            />
            <div>
              <p className="font-mono text-[11px] tracking-[0.1em] text-paper-on-ink uppercase">
                {constraint.label}
              </p>
              {constraint.sublabel && (
                <p className="mt-0.5 max-w-40 text-xs text-paper-on-ink-soft">{constraint.sublabel}</p>
              )}
              <ul className="mt-3 flex flex-col items-end gap-1.5">
                {stallLabels.map((label, i) => (
                  <li
                    key={label}
                    data-stall-label={i}
                    className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Below lg: complete, non-scrubbed vertical fallback — see
          useScrollTrigger's minWidth gate; this markup is the whole story
          on its own, not a degraded version of the desktop animation. */}
      <ol className="relative mt-8 flex flex-col gap-6 border-l border-line-on-ink pl-5 lg:hidden">
        {[origin, constraint].map((node) => (
          <li key={node.label} className="relative">
            <span
              className={cx(
                "absolute top-1.5 -left-[25px] h-[11px] w-[11px] rounded-full border-2 bg-void",
                node === constraint ? "border-accent" : "border-paper-on-ink-soft",
              )}
            />
            <p className="font-mono text-[11px] tracking-[0.1em] text-paper-on-ink uppercase">
              {node.label}
            </p>
            {node.sublabel && (
              <p className="mt-0.5 text-xs text-paper-on-ink-soft">{node.sublabel}</p>
            )}
          </li>
        ))}
        <li className="flex flex-wrap gap-x-3 gap-y-1.5 pl-0.5">
          {stallLabels.map((label) => (
            <span key={label} className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              {label}
            </span>
          ))}
        </li>
      </ol>
    </div>
  );
}
