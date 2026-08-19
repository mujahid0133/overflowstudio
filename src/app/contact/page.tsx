import type { Metadata } from "next";
import { Hero } from "@/components/contact/Hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to move. You don't need to know whether Overflow is the right answer yet.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Overflow Studio",
    description: "Tell us what you're trying to move.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <Hero />;
}
