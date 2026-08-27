/**
 * Case study data model + /case-studies page copy. Spec section 15 (index +
 * individual page structure) and section 26 (CMS/content architecture —
 * content must be separated from presentation, adding a case study later
 * shouldn't require rebuilding the site).
 *
 * There are ZERO published case studies right now — see docs/CONTENT-TODO.md.
 * This page's empty state says so plainly rather than showing fake cards.
 * Never invent a client, a metric or a founder quote to fill this array
 * (build spec §43). The homepage carries the only two verified figures, in
 * `src/content/home.ts` → `proof`; a real case study is what would justify
 * linking to this page from there.
 */

export type CaseStudy = {
  /** URL slug — /case-studies/[slug]. */
  slug: string;
  /** Card + page title. */
  title: string;
  /** One or two sentences for the index card: problem → outcome, no filler. */
  summary: string;
  /** Set true only once the client has signed off on what's published. */
  published: boolean;
  /** "named" once the client has approved being identified; otherwise anonymize per spec section 15's NDA treatment. */
  confidentiality: "named" | "anonymous";
  /** 01 — the company situation. */
  situation: string;
  /** 02 — the bottleneck. */
  bottleneck: string;
  /** 03 — why internal hiring wasn't the immediate answer. */
  whyNotHiring: string;
  /** 04 — what Overflow owned. */
  whatOverflowOwned: string;
  /** 05 — how execution changed. */
  howExecutionChanged: string;
  /** 06 — measured outcome. Qualitative is fine if there's no clean number — never estimate one. */
  measuredOutcome: string;
  /** 07 — founder perspective. Only use an actual, approved quote — omit the field/section entirely if none exists yet. */
  founderPerspective?: string;
  /** 08 — what this means for another company. */
  whatThisMeans: string;
};

// Add the first real case study here once it exists and is signed off.
// Shape (uncomment and fill in with real, approved content):
//
// {
//   slug: "friend-project-launch",
//   title: "Compressing eight weeks of roadmap into three",
//   summary: "An execution bottleneck removed without adding headcount.",
//   published: true,
//   confidentiality: "anonymous",
//   situation: "...",
//   bottleneck: "...",
//   whyNotHiring: "...",
//   whatOverflowOwned: "...",
//   howExecutionChanged: "...",
//   measuredOutcome: "...",
//   founderPerspective: "...", // omit entirely if no approved quote exists
//   whatThisMeans: "...",
// },

export const caseStudies: CaseStudy[] = [];

export const hero = {
  eyebrow: "Case studies",
  headline: "Proof, not a portfolio.",
  body: "Every engagement here is real — the problem, the outcome, the time it took and what it meant for the founder running it.",
};

export const emptyState = {
  eyebrow: "First engagement",
  headline: "The first Plug-in Department engagement is in progress.",
  body: "This page is reserved for real engagements only — no placeholder logos, no invented metrics. The first full write-up publishes once the engagement wraps and the client has signed off on what's shared.",
  cta: { label: "Talk to Overflow", href: "/contact" },
};

export const sectionLabels = {
  situation: "The company situation",
  bottleneck: "The bottleneck",
  whyNotHiring: "Why internal hiring wasn't the immediate answer",
  whatOverflowOwned: "What Overflow owned",
  howExecutionChanged: "How execution changed",
  measuredOutcome: "Measured outcome",
  founderPerspective: "Founder perspective",
  whatThisMeans: "What this means for another company",
} as const;
