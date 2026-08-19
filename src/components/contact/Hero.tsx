import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { hero } from "@/content/contact";

export function Hero() {
  return (
    <Section invert className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal>
            <Eyebrow invert>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-6 max-w-md font-display text-4xl leading-[1.08] font-medium text-balance text-paper-on-ink md:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-8 max-w-md text-lg text-paper-on-ink-soft">{hero.body}</p>
          </Reveal>
        </div>

        <Reveal index={3} className="rounded-3xl bg-paper p-8 md:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
