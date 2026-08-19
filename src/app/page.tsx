import { Hero } from "@/components/home/Hero";
import { Tension } from "@/components/home/Tension";
import { CategoryCreation } from "@/components/home/CategoryCreation";
import { OldVsNew } from "@/components/home/OldVsNew";
import { OutcomeProof } from "@/components/home/OutcomeProof";
import { Control } from "@/components/home/Control";
import { HowItWorksTeaser } from "@/components/home/HowItWorksTeaser";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { Selectivity } from "@/components/home/Selectivity";
import { CaseStudyTeaser } from "@/components/home/CaseStudyTeaser";
import { FinalCta } from "@/components/home/FinalCta";

// Founder Experience testimonial section (spec section 11, HOME SECTION 6)
// intentionally omitted — it requires real, approved conversation
// screenshots. Never fake it. Add it back once available; see
// docs/CONTENT-TODO.md.

export default function Home() {
  return (
    <>
      <Hero />
      <Tension />
      <CategoryCreation />
      <OldVsNew />
      <OutcomeProof />
      <Control />
      <HowItWorksTeaser />
      <WhoItsFor />
      <Selectivity />
      <CaseStudyTeaser />
      <FinalCta />
    </>
  );
}
