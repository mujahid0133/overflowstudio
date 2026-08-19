import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

// Spec section 19 — on-brand, not a generic "Oops! Page not found."
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section invert className="flex min-h-[70vh] items-center pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-xl">
        <Eyebrow invert>404</Eyebrow>
        <h1 className="mt-6 font-display text-4xl leading-[1.08] font-medium text-balance text-paper-on-ink md:text-5xl">
          The work you&apos;re looking for isn&apos;t here.
        </h1>
        <p className="mt-6 text-lg text-paper-on-ink-soft">
          Let&apos;s get you back to something useful.
        </p>
        <div className="mt-10">
          <Button href="/" variant="primary">
            Back to Overflow
          </Button>
        </div>
      </div>
    </Section>
  );
}
