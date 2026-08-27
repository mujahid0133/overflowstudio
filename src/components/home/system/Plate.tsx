import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * The site's atomic visual object: a block of organizational capacity.
 *
 * Everything on the homepage that diagrams the model is built from these,
 * so the same four states mean the same thing everywhere (build spec §48):
 *
 *   solid   — capacity that already exists inside the company
 *   gap     — capacity that does NOT exist; drawn as an outline and hatch,
 *             never filled, because the whole point is that it's missing
 *   module  — the Overflow block, at rest outside the system
 *   active  — the Overflow block once it has locked into the gap; this is
 *             the only state that earns the signal orange
 *
 * Sharp corners and flat planes are deliberate: these are architectural
 * blocks, not rounded product cards (creative-direction §7, build spec §27).
 */
export type PlateState = "solid" | "gap" | "module" | "active";

const surfaces: Record<PlateState, string> = {
  solid: "border-line-strong bg-void-soft text-ink",
  gap: "border-dashed border-line-strong bg-transparent text-ink-faint gap-hatch",
  module: "border-line-strong bg-void-soft text-ink",
  active: "border-accent bg-accent-soft text-ink",
};

export function Plate({
  label,
  note,
  state = "solid",
  className,
  children,
  ...rest
}: {
  label: string;
  note?: string | null;
  state?: PlateState;
  className?: string;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex min-h-24 flex-col justify-center border px-5 py-4",
        surfaces[state],
        className,
      )}
      {...rest}
    >
      <p
        className={cx(
          "font-mono text-[11px] tracking-[0.16em] uppercase",
          state === "active" ? "text-accent" : state === "gap" ? "text-ink-faint" : "text-ink",
        )}
      >
        {label}
      </p>
      {note && <p className="mt-1.5 text-sm text-ink-soft">{note}</p>}
      {children}
    </div>
  );
}
