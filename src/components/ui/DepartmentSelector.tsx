"use client";

import { useState } from "react";
import { cx } from "@/lib/cx";

type Department = {
  id: string;
  label: string;
  contribution: string;
  detail: string;
};

/**
 * Plug-in Departments' interactive core (spec section 12). All four
 * department → contribution pairs stay visible and legible at all times —
 * per section 24, interactive components must not hide critical business
 * information, and nothing important can live behind hover-only. Selecting
 * a department spotlights it against the shared outcome; it doesn't hide
 * the other three.
 *
 * This is a toggle-button group (aria-pressed), not an ARIA tabs widget —
 * since every "panel" stays visible and mounted, the tabs pattern's
 * exactly-one-panel-visible contract and roving-tabindex/arrow-key
 * behavior don't apply, so using role="tab"/"tabpanel" here would promise
 * interaction a screen reader user doesn't get. Native buttons already give
 * this correct keyboard access and focus states.
 */
export function DepartmentSelector({
  outcome,
  departments,
}: {
  outcome: string;
  departments: Department[];
}) {
  const [selectedId, setSelectedId] = useState(departments[0]?.id);
  const selected = departments.find((d) => d.id === selectedId) ?? departments[0];

  return (
    <div>
      <div className="rounded-2xl border border-line-strong bg-ink-900 px-8 py-7 text-center">
        <p className="font-mono text-xs tracking-[0.14em] text-paper-on-ink-soft uppercase">
          Outcome
        </p>
        <p className="mt-2 font-display text-2xl font-medium text-paper-on-ink md:text-3xl">
          {outcome}
        </p>
      </div>

      <div
        role="group"
        aria-label="Spotlight a department"
        className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4"
      >
        {departments.map((dept) => {
          const isSelected = dept.id === selected?.id;
          return (
            <button
              key={dept.id}
              type="button"
              aria-pressed={isSelected}
              aria-describedby={`department-row-${dept.id}`}
              onClick={() => setSelectedId(dept.id)}
              className={cx(
                "rounded-full border px-4 py-3 text-sm font-medium transition-colors duration-(--duration-fast) ease-(--ease-standard)",
                isSelected
                  ? "border-accent bg-accent text-white"
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink",
              )}
            >
              {dept.label}
            </button>
          );
        })}
      </div>

      <ol className="mt-10 flex flex-col divide-y divide-line border-t border-b border-line">
        {departments.map((dept) => {
          const isSelected = dept.id === selected?.id;
          return (
            <li
              key={dept.id}
              id={`department-row-${dept.id}`}
              className={cx(
                "grid gap-1 py-5 transition-opacity duration-(--duration-standard) ease-(--ease-standard) md:grid-cols-[1fr_1fr_2fr] md:items-baseline md:gap-8",
                isSelected ? "opacity-100" : "opacity-50",
              )}
            >
              <p
                className={cx(
                  "font-display text-lg font-medium",
                  isSelected ? "text-accent" : "text-ink",
                )}
              >
                {dept.label}
              </p>
              <p className="font-mono text-sm text-ink-faint">→ {dept.contribution}</p>
              <p className="text-sm text-ink-soft">{dept.detail}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
