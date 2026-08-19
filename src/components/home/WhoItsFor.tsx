import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { whoItsFor } from "@/content/home";

export function WhoItsFor() {
  return (
    <Section className="bg-paper-dim">
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {whoItsFor.headline}
        </h2>
      </Reveal>

      <div className="mt-16 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {whoItsFor.scenarios.map((scenario, i) => (
          <Reveal
            key={scenario.title}
            index={i}
            className="flex flex-col gap-4 py-10 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0"
          >
            <span
              aria-hidden="true"
              className="font-mono text-5xl leading-none font-medium text-ink-faint md:text-6xl"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-display text-lg font-medium text-ink">{scenario.title}</p>
            <p className="text-sm text-ink-soft">{scenario.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
