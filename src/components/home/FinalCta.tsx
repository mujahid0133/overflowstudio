import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <Section invert className="text-center">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="font-display text-4xl leading-tight font-medium text-paper-on-ink md:text-6xl xl:text-7xl">
          {finalCta.headline}
        </h2>
        <p className="mt-6 max-w-md text-lg text-paper-on-ink-soft">{finalCta.body}</p>
        <div className="mt-10">
          <MagneticButton>
            <Button href={finalCta.cta.href} variant="primary">
              {finalCta.cta.label}
            </Button>
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
