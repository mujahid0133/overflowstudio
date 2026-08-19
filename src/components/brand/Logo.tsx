import { cx } from "@/lib/cx";

/**
 * Placeholder wordmark — swap for the real Overflow Studio logo/symbol.
 * See docs/CONTENT-TODO.md. The bracket motif nods to "plug-in" without
 * depending on an asset file, so the nav/footer aren't blocked on brand art.
 */
export function Logo({ invert = false, className }: { invert?: boolean; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-baseline gap-[2px] font-display text-lg font-semibold tracking-tight",
        invert ? "text-paper-on-ink" : "text-ink",
        className,
      )}
    >
      <span className="text-accent">[</span>
      overflow
      <span className="text-accent">]</span>
    </span>
  );
}
