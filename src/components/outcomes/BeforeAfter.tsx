import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { beforeAfter } from "@/content/outcomes";

/**
 * Before/after comparison, spec section 13: the visual should communicate
 * relief, not just speed. Muted tone for "before" (grey, effortful), accent
 * tone for "after" — both fully visible at once, no click required, per
 * section 24 (nothing important hides behind interaction on mobile).
 */
export function BeforeAfter() {
  return (
    <Section invert>
      <Reveal>
        <Eyebrow invert>{beforeAfter.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight font-medium text-paper-on-ink md:text-5xl">
          {beforeAfter.headline}
        </h2>
      </Reveal>
      <Reveal index={2}>
        <p className="mt-6 max-w-lg text-lg text-paper-on-ink-soft">{beforeAfter.body}</p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-paper-on-ink-soft uppercase">
            {beforeAfter.before.label}
          </p>
          <Timeline items={beforeAfter.before.items} tone="muted" invert className="mt-6" />
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            {beforeAfter.after.label}
          </p>
          <Timeline items={beforeAfter.after.items} tone="accent" invert className="mt-6" />
        </div>
      </div>
    </Section>
  );
}
