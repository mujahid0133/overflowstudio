import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { departmentDetail, interactiveCore } from "@/content/plug-in-departments";

/**
 * The four one-line department descriptions from spec section 12. Deliberately
 * short — the spec explicitly bans expanding these into tech-stack lists or
 * generic service menus.
 */
export function DepartmentDetail() {
  return (
    <Section className="bg-paper-dim">
      <Reveal>
        <Eyebrow>{departmentDetail.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {departmentDetail.headline}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-4 md:gap-8">
        {interactiveCore.departments.map((dept, i) => (
          <Reveal key={dept.id} index={i}>
            <p className="font-display text-xl font-medium text-ink">{dept.label}</p>
            <p className="mt-3 text-base text-ink-soft">{dept.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
