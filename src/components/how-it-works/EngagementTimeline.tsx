import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { timeline, transitionNote } from "@/content/how-it-works";

export function EngagementTimeline() {
  const items = timeline.stages.map((stage, i) => ({
    index: String(i + 1).padStart(2, "0"),
    title: stage.title,
    body: stage.body,
  }));

  return (
    <Section>
      <Reveal>
        <Eyebrow>{timeline.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {timeline.headline}
        </h2>
      </Reveal>

      <Timeline items={items} className="mt-16 max-w-2xl" />

      <Reveal index={items.length} className="mt-4 max-w-2xl border-t border-line pt-8">
        <p className="text-sm text-ink-soft">{transitionNote}</p>
      </Reveal>
    </Section>
  );
}
