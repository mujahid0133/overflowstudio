import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Navigation } from "@/components/nav/Navigation";
import { Footer } from "@/components/footer/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

/*
  Two families only, per build spec §29 and docs/creative-direction.md §6: a
  contemporary grotesk that holds up at display scale, and a restrained mono
  reserved for technical labels, section numbers and status text. Geist is
  named in the spec as an acceptable choice, and pairing it with its own mono
  keeps the page on one type system — and on one font family download.
*/
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Overflow Studio — Plug-in Departments for important work",
    template: "%s — Overflow Studio",
  },
  description:
    "Overflow activates the product execution capacity you need — from product design through development — without requiring you to build the entire department first.",
  openGraph: {
    siteName: "Overflow Studio",
    type: "website",
    locale: "en_US",
    title: "Overflow Studio — Plug-in Departments for important work",
    description:
      "Overflow activates the product execution capacity you need — from product design through development — without requiring you to build the entire department first.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overflow Studio — Plug-in Departments for important work",
    description:
      "Overflow activates the product execution capacity you need — from product design through development — without requiring you to build the entire department first.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
