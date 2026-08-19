import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { outcomeLibrary } from "@/content/outcomes";

export function OutcomeLibrary() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>{outcomeLibrary.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {outcomeLibrary.headline}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-5 md:gap-6">
        {outcomeLibrary.items.map((item, i) => (
          <Reveal key={item.label} index={i}>
            <p className="font-display text-lg font-medium text-accent">{item.label}</p>
            <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
