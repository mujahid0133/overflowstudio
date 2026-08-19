import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";

export type TimelineItem = {
  /** Stage number, e.g. "01". Omit for an unnumbered node (plain dot). */
  index?: string;
  title: string;
  body?: string;
};

type Tone = "default" | "muted" | "accent";

const toneDot: Record<Tone, string> = {
  default: "border-accent",
  accent: "border-accent",
  muted: "border-line-strong",
};

const toneDotInvert: Record<Tone, string> = {
  default: "border-accent",
  accent: "border-accent",
  muted: "border-line-on-ink",
};

const toneTitle: Record<Tone, string> = {
  default: "text-ink",
  accent: "text-ink",
  muted: "text-ink-soft",
};

const toneTitleInvert: Record<Tone, string> = {
  default: "text-paper-on-ink",
  accent: "text-paper-on-ink",
  muted: "text-paper-on-ink-soft",
};

/**
 * Numbered (or dot-marked) vertical stage list with a connecting line —
 * shared by /outcomes (before/after) and /how-it-works (the 8-stage
 * engagement timeline). Reveal handles the stagger; this component just
 * lays out the node + connector + copy, per spec section 32's "Timeline"
 * design-system component.
 */
export function Timeline({
  items,
  invert = false,
  tone = "default",
  className,
}: {
  items: TimelineItem[];
  invert?: boolean;
  tone?: Tone;
  className?: string;
}) {
  const dotClass = invert ? toneDotInvert[tone] : toneDot[tone];
  const titleClass = invert ? toneTitleInvert[tone] : toneTitle[tone];
  const lineClass = invert ? "bg-line-on-ink" : "bg-line-strong";
  const bodyClass = invert ? "text-paper-on-ink-soft" : "text-ink-soft";

  return (
    <ol className={cx("relative flex flex-col gap-0", className)}>
      {items.map((item, i) => (
        <li key={item.title} className="relative pb-10 pl-12 last:pb-0">
          {i < items.length - 1 && (
            <span
              aria-hidden="true"
              className={cx("absolute top-8 left-[15px] h-[calc(100%-1.75rem)] w-px", lineClass)}
            />
          )}
          <Reveal index={i} from="left">
            <span
              aria-hidden="true"
              className={cx(
                "absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-[11px]",
                dotClass,
                invert ? "bg-ink-900 text-paper-on-ink-soft" : "bg-(--color-paper) text-ink-faint",
              )}
            >
              {item.index ?? <span className="h-1.5 w-1.5 rounded-full bg-current" />}
            </span>
            <p className={cx("font-display text-xl font-medium", titleClass)}>{item.title}</p>
            {item.body && <p className={cx("mt-1.5 text-sm", bodyClass)}>{item.body}</p>}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
