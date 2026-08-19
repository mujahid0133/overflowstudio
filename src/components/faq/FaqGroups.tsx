import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { groups } from "@/content/faq";

export function FaqGroups() {
  return (
    <Section>
      <Accordion groups={groups} />
    </Section>
  );
}
