import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/about";

export function Hero() {
  return (
    <Section invert className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <Eyebrow invert>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-medium text-balance text-paper-on-ink md:text-5xl">
              {hero.headline}
            </h1>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4 md:pt-2">
          {hero.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} index={i + 2}>
              <p className="text-lg text-paper-on-ink-soft">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
