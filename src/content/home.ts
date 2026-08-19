/**
 * Homepage copy, centralized per spec section 22 (microcopy system) and
 * section 21 (never manufacture proof). Anything numeric that would need a
 * verified source (a specific week count, an hours-saved figure) is
 * deliberately written in qualitative terms until a real case study is
 * confirmed — see docs/CONTENT-TODO.md. Swap the `outcomeProof` and
 * `caseStudyTeaser` blocks for real figures the moment that exists.
 */

export const hero = {
  eyebrow: "Plug-in Departments",
  headline: "Keep important work moving while your team takes shape.",
  supporting:
    "Add the execution capacity needed to get an important initiative shipped, without waiting for the permanent team to be in place.",
  primaryCta: { label: "Talk to Overflow", href: "/contact" },
  secondaryCta: { label: "See how it works", href: "/how-it-works" },
  flow: [
    { label: "Your company", sublabel: "Vision · Roadmap · Priorities" },
    { label: "The gap", sublabel: "Execution capacity" },
    { label: "Overflow", sublabel: "Plugs into the gap" },
    { label: "Outcome", sublabel: "Execution → shipped" },
  ],
  // Presentational micro-labels for the hero's system-line visualization
  // (docs/creative-direction.md §11). These describe the diagram itself —
  // not business claims — so they're kept separate from `flow`'s content.
  system: {
    axisLabel: "Roadmap",
    stallLabels: ["Capacity", "Constraint", "Waiting"],
    pauseHeadline: "The work is ready.",
    pauseSubhead: "Execution capacity / missing",
  },
};

export const tension = {
  headline: "Your roadmap shouldn't have to wait for your hiring plan.",
  statements: [
    {
      title: "Important work is waiting.",
      body: "The initiative is clear. The capacity isn't.",
    },
    {
      title: "Hiring is underway.",
      body: "The work shouldn't have to wait for it.",
    },
    {
      title: "The team is overloaded.",
      body: "The founder starts filling the execution gap.",
    },
    {
      title: "The company is moving.",
      body: "But not at the pace the roadmap demands.",
    },
  ],
};

export const categoryCreation = {
  headline: "What if you could add the department before you had to build it?",
  body: "A Plug-in Department gives a company the execution capacity required around a defined outcome while its internal organization continues to take shape.",
  flow: [
    { label: "Your company", sublabel: "Vision · Strategy · Roadmap" },
    { label: "Overflow", sublabel: "Execution capacity" },
    { label: "Defined outcome", sublabel: null },
    { label: "Shipped", sublabel: null },
  ],
};

export const oldVsNew = {
  headline: "Hiring is a long-term organizational decision. It doesn't have to block an immediate outcome.",
  old: {
    label: "Old way",
    steps: ["Need capacity", "Open roles", "Source", "Interview", "Hire", "Onboard", "Manage", "Execute"],
  },
  new: {
    label: "New way",
    steps: ["Define outcome", "Plug in capacity", "Execute", "Ship"],
  },
};

export const outcomeProof = {
  headline: "What changes when the work starts moving.",
  proofs: [
    {
      label: "Speed",
      body: "Work shipped sooner — without a hiring cycle sitting in front of it.",
    },
    {
      label: "Founder capacity",
      body: "Execution time returns to growth, customers and company building.",
    },
    {
      label: "No added management layer",
      body: "The work moves without first building another internal execution layer.",
    },
  ],
};

export const control = {
  headline: "You keep the direction. We take responsibility for the execution.",
  yours: {
    label: "Your team",
    items: ["Vision", "Strategy", "Priorities", "Product direction", "Final decisions"],
  },
  ours: {
    label: "Overflow",
    items: ["Execution", "Coordination", "Delivery", "Defined outcomes", "Momentum"],
  },
};

export const howItWorksTeaser = {
  headline: "One continuous system, not four separate hires.",
  steps: [
    { index: "01", title: "Define", body: "Outcome, scope, constraints and success criteria." },
    { index: "02", title: "Plug in", body: "The required execution capacity joins the initiative." },
    { index: "03", title: "Execute", body: "Overflow owns the agreed execution." },
    { index: "04", title: "Ship", body: "The outcome reaches completion." },
  ],
  cta: { label: "See the full process", href: "/how-it-works" },
};

export const whoItsFor = {
  headline: "Built for companies whose work is moving faster than their hiring.",
  scenarios: [
    {
      title: "Roadmap ahead of team",
      body: "You know what needs to happen, but the people to execute it aren't there yet.",
    },
    {
      title: "Team at capacity",
      body: "Your existing team is busy with priorities that can't move.",
    },
    {
      title: "Permanent team in progress",
      body: "You're building internally, but don't want today's work waiting for tomorrow's hires.",
    },
  ],
};

export const selectivity = {
  headline: "We aren't the right fit for every company.",
  body: "Overflow works best when the outcome is important, the direction is clear and the company wants execution ownership without giving up strategic control.",
  good: ["Defined outcome", "Clear internal direction", "Execution bottleneck", "Need for immediate progress"],
  poor: ["Unclear ownership", "Outsourcing strategic decisions", "Handing over the entire company", "Work with no defined outcome"],
};

export const caseStudyTeaser = {
  headline: "The first Plug-in Department engagement.",
  body: "What changed wasn't the roadmap. It was the execution capacity around it. Full write-up publishing once the engagement wraps.",
  cta: { label: "Read the case study", href: "/case-studies" },
};

export const finalCta = {
  headline: "What shouldn't still be waiting?",
  body: "Tell us what you're trying to move. We'll tell you whether a Plug-in Department makes sense.",
  cta: { label: "Talk to Overflow", href: "/contact" },
};
