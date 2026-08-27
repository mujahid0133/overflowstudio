import { Hero } from "@/components/home/Hero";
import { CapacityProblem } from "@/components/home/CapacityProblem";
import { OldWay } from "@/components/home/OldWay";
import { PlugInModel } from "@/components/home/PlugInModel";
import { ModularCapacity } from "@/components/home/ModularCapacity";
import { WhatOverflowIs } from "@/components/home/WhatOverflowIs";
import { ProductDepartment } from "@/components/home/ProductDepartment";
import { Ownership } from "@/components/home/Ownership";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyNotHiring } from "@/components/home/WhyNotHiring";
import { WhyNotAgency } from "@/components/home/WhyNotAgency";
import { Proof } from "@/components/home/Proof";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { MentalState } from "@/components/home/MentalState";
import { Philosophy } from "@/components/home/Philosophy";
import { FutureVision } from "@/components/home/FutureVision";
import { BigIdea } from "@/components/home/BigIdea";
import { FinalCta } from "@/components/home/FinalCta";

/**
 * The homepage is one continuous argument, and the order below IS the
 * argument (build spec §04). Each section answers the question the previous
 * one leaves in the visitor's mind:
 *
 *   Hero              what is this company                        §05
 *   CapacityProblem   why does it exist                           §08
 *   OldWay            what do companies do today                  §09
 *   PlugInModel       what is the alternative                     §10
 *   ModularCapacity   why "plug-in" and not "more"                §11
 *   WhatOverflowIs    so what am I actually activating            §12
 *   ProductDepartment what does that contain today                §13/§14
 *   Ownership         what do I give up                           §15
 *   HowItWorks        how does it actually run                    §16
 *   WhyNotHiring      why not just hire                           §17
 *   WhyNotAgency      why not just use an agency                  §18
 *   Proof             has this actually worked                    §19
 *   WhoItsFor         is this for me                              §20
 *   MentalState       what does it feel like afterwards           §21
 *   Philosophy        what do these people believe                §22
 *   FutureVision      where is this going                         §23
 *   BigIdea           the conclusion                              §24
 *   FinalCta          the ask                                     §25
 *
 * Do not reorder these for visual variety, and do not insert a section that
 * doesn't answer the next question. A testimonial/founder-evidence beat is
 * deliberately absent: it requires real, approved material and must never
 * be faked — see docs/CONTENT-TODO.md.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <CapacityProblem />
      <OldWay />
      <PlugInModel />
      <ModularCapacity />
      <WhatOverflowIs />
      <ProductDepartment />
      <Ownership />
      <HowItWorks />
      <WhyNotHiring />
      <WhyNotAgency />
      <Proof />
      <WhoItsFor />
      <MentalState />
      <Philosophy />
      <FutureVision />
      <BigIdea />
      <FinalCta />
    </>
  );
}
