import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/plug-in-departments";

export function Hero() {
  return (
    <Section invert className="pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow invert>{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-medium text-balance text-paper-on-ink md:text-6xl">
            {hero.headline}
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-8 max-w-xl text-lg text-paper-on-ink-soft">{hero.body}</p>
        </Reveal>
      </div>
    </Section>
  );
}
