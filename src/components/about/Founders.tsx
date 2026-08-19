import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { founders } from "@/content/about";

/**
 * Renders nothing when there are no real founder profiles yet — same
 * honest-omission approach as the homepage's Founder Experience section.
 * No "bios coming soon" apology copy; just don't claim what isn't real yet.
 * See docs/CONTENT-TODO.md.
 */
export function Founders() {
  if (founders.length === 0) return null;

  return (
    <Section>
      <Eyebrow>Founders</Eyebrow>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {founders.map((founder, i) => (
          <Reveal key={founder.name} index={i}>
            <p className="font-display text-xl font-medium text-ink">{founder.name}</p>
            <p className="mt-1 font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
              {founder.role}
            </p>
            <p className="mt-4 text-base text-ink-soft">{founder.bio}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
