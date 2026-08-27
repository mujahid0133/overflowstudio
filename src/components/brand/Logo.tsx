import { cx } from "@/lib/cx";

/**
 * Placeholder wordmark — swap for the real Overflow Studio logo/symbol.
 * See docs/CONTENT-TODO.md.
 *
 * Set as OVERFLOW per build spec §07. The bracket on the right is a slot
 * waiting to be filled — the same idea the whole site is built on — and it
 * keeps the nav/footer from being blocked on a brand asset. `invert` is
 * retained for callers on lighter surfaces; the site is dark throughout, so
 * the default already reads correctly everywhere today.
 */
export function Logo({ invert = false, className }: { invert?: boolean; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-baseline font-display text-sm font-semibold tracking-[0.2em] uppercase",
        invert ? "text-paper-on-ink" : "text-ink",
        className,
      )}
    >
      Overflow
      <span className="text-accent" aria-hidden="true">
        ]
      </span>
    </span>
  );
}
