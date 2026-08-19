import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { DepartmentSelector } from "@/components/ui/DepartmentSelector";
import { interactiveCore } from "@/content/plug-in-departments";

export function InteractiveCore() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>{interactiveCore.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mt-6 font-display text-3xl leading-tight font-medium md:text-5xl">
            {interactiveCore.headline}
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-6 text-lg text-ink-soft">{interactiveCore.body}</p>
        </Reveal>
      </div>

      <Reveal index={3} className="mt-14">
        <DepartmentSelector
          outcome={interactiveCore.outcome}
          departments={interactiveCore.departments}
        />
      </Reveal>
    </Section>
  );
}
