import { cx } from "@/lib/cx";

export type AccordionItem = { question: string; answer: string };
export type AccordionGroup = { category: string; items: AccordionItem[] };

/**
 * Native <details>/<summary> — keyboard accessible and screen-reader
 * friendly with zero JavaScript, satisfying spec section 24 ("not
 * hover-only, keyboard accessible") without adding a client bundle for
 * something this simple. `group` + `group-open:` drives the chevron
 * rotation purely in CSS.
 */
export function Accordion({
  groups,
  invert = false,
}: {
  groups: AccordionGroup[];
  invert?: boolean;
}) {
  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => (
        <div key={group.category}>
          <p
            className={cx(
              "font-mono text-xs tracking-[0.14em] uppercase",
              invert ? "text-accent" : "text-accent",
            )}
          >
            {group.category}
          </p>
          <div
            className={cx(
              "mt-4 divide-y border-t border-b",
              invert ? "divide-line-on-ink border-line-on-ink" : "divide-line border-line",
            )}
          >
            {group.items.map((item) => (
              <details key={item.question} className="group py-5">
                <summary
                  className={cx(
                    "flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden",
                    invert ? "text-paper-on-ink" : "text-ink",
                  )}
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={cx(
                      "shrink-0 text-xl leading-none font-normal transition-transform duration-(--duration-fast) ease-(--ease-standard) group-open:rotate-45",
                      invert ? "text-paper-on-ink-soft" : "text-ink-faint",
                    )}
                  >
                    +
                  </span>
                </summary>
                <p
                  className={cx(
                    "mt-4 max-w-2xl text-base",
                    invert ? "text-paper-on-ink-soft" : "text-ink-soft",
                  )}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
