import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";

type FlowNode = { label: string; sublabel?: string | null };

/**
 * Connected-node diagram — the "your company → gap → overflow → outcome"
 * visual language from spec sections 11 & 12. Nodes stagger-reveal along a
 * connecting line so the relationship reads as sequence, not a static
 * list. `direction="horizontal"` only takes effect at `lg:` and up (see
 * globals.css breakpoint convention) — below that it stays the original
 * vertical layout, so callers never need a separate mobile fallback.
 */
export function Flow({
  nodes,
  invert = false,
  direction = "vertical",
}: {
  nodes: FlowNode[];
  invert?: boolean;
  direction?: "vertical" | "horizontal";
}) {
  const horizontal = direction === "horizontal";

  return (
    <ol
      className={cx(
        "relative flex flex-col gap-0",
        horizontal && "lg:flex-row lg:items-start lg:gap-2",
      )}
    >
      {nodes.map((node, i) => (
        <li
          key={node.label}
          className={cx(
            "relative pb-10 pl-10 last:pb-0",
            horizontal && "lg:flex-1 lg:pb-0 lg:pt-10 lg:pl-3 lg:last:flex-none",
          )}
        >
          {i < nodes.length - 1 && (
            <span
              aria-hidden="true"
              className={cx(
                "absolute top-3 left-[7px] h-full w-px",
                invert ? "bg-line-on-ink" : "bg-line-strong",
                horizontal && "lg:top-[7px] lg:left-3 lg:h-px lg:w-full",
              )}
            />
          )}
          {/*
            The marker is a sibling of Reveal, not a child — Motion applies an
            inline `transform` to its wrapper even at rest, which creates a
            new containing block and would otherwise hijack this span's
            `absolute` coordinates (it rendered on top of the label text).
          */}
          <span
            aria-hidden="true"
            className={cx(
              "absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-accent bg-(--color-paper) data-[invert]:bg-ink-900",
              horizontal && "lg:top-0 lg:left-3",
            )}
            data-invert={invert || undefined}
          />
          <Reveal index={i} from={horizontal ? "below" : "left"}>
            <p className={cx("font-display text-xl font-medium", invert ? "text-paper-on-ink" : "text-ink")}>
              {node.label}
            </p>
            {node.sublabel && (
              <p className={cx("mt-1 text-sm", invert ? "text-paper-on-ink-soft" : "text-ink-soft")}>
                {node.sublabel}
              </p>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
