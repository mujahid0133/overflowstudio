/**
 * Homepage copy — the whole argument, in order, in one place.
 *
 * The homepage is not a stack of marketing sections; it is a single
 * argument, and each block below is one step in it (build spec §04). The
 * wording here is the approved wording — components should render it, not
 * paraphrase it, and should not invent extra labels, steps or numbers to
 * make a composition feel more finished.
 *
 * Claim discipline (build spec §43, CLAUDE.md): the only numeric proof that
 * exists is in `proof` — eight weeks of planned work compressed into three,
 * and eight to ten founder hours recovered per week. Both are stated as
 * things that happened, never as things that will happen. No clients, no
 * logos, no testimonials, no additional metrics until real ones exist —
 * see docs/CONTENT-TODO.md.
 */

/** Where "activate" always goes. One destination, so the CTA never dilutes. */
const activateHref = "/contact";

export const hero = {
  eyebrow: "Plug-in Departments for important work",
  headline: "Your team doesn't always need another hire.",
  subhead: "Sometimes it needs the capacity to get important work shipped now.",
  body: "Overflow activates the product execution capacity you need — from product design through development — without requiring you to build the entire department first.",
  primaryCta: { label: "Activate product capacity", href: activateHref },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  supportingLine: "Product design + development",
  /**
   * Labels for the hero's capacity system. `gap` is the empty slot the
   * Overflow module moves into — the site's recurring visual sentence
   * (build spec §48), stated here for the first time.
   */
  system: {
    label: "Organizational capacity",
    internal: { label: "Internal team", note: "At capacity" },
    gap: { label: "Capacity gap", note: "Nothing to execute with" },
    pending: { label: "Important work", note: "Ready to move" },
    module: { label: "Overflow", note: "Product execution" },
    resolved: "System complete — work moves",
  },
};

export const problem = {
  index: "01",
  kicker: "The problem",
  headline: "The work is ready. Your team just isn't big enough for it yet.",
  body: [
    "Companies rarely struggle because they don't know what needs to happen.",
    "More often, the problem is capacity. An important product initiative appears. The internal team is already occupied. Hiring takes time. Founders get pulled into execution.",
    "And the work waits.",
  ],
  statement:
    "The gap between what a company needs to do and what its current organization can execute is an organizational capacity problem.",
  diagram: {
    need: { label: "What needs to happen", note: "The initiative" },
    capacity: { label: "What the team can handle", note: "Current organization" },
    gap: { label: "Capacity gap", note: "Where the work stalls" },
  },
};

export const oldWay = {
  index: "02",
  kicker: "The old way",
  headline: "The default response to a capacity gap? Build a bigger organization.",
  paths: [
    {
      label: "Hire for it",
      steps: ["Need", "Recruit", "Interview", "Hire", "Onboard", "Organize", "Finally execute"],
    },
    {
      label: "Outsource it",
      steps: ["Brief", "Handoff", "Coordination", "Rework", "Delivery"],
    },
  ],
  reconcile: "Neither is inherently wrong. They simply aren't always the right answer.",
  statement: "If the need is temporary, why should the organizational overhead be permanent?",
};

export const model = {
  index: "03",
  kicker: "The model",
  headline: "Meet the Plug-in Department.",
  subhead:
    "A department you can activate when you need the capacity — without building it from scratch first.",
  body: "Overflow provides execution departments around defined outcomes. You keep the strategy, ownership and direction. We provide the specialized capacity required to move the work from decision to delivery.",
  equation: [
    { operator: null, label: "Your company", note: "Strategy · Ownership · Direction" },
    { operator: "−", label: "Capacity gap", note: "What can't be executed yet" },
    { operator: "+", label: "Overflow department", note: "Activated execution capacity" },
    { operator: "=", label: "Work shipped", note: "The outcome exists" },
  ],
};

export const modular = {
  index: "04",
  kicker: "Modular capacity",
  headline: "Don't keep stacking. Swap in what you need.",
  body: [
    "Traditional organizations often respond to every new requirement by adding another permanent layer: another hire, another team, another manager, another process. Over time, the organization becomes heavier than the work requires.",
    "Overflow works differently. Plug in the capacity required for the job. Use it. Ship the work. Then keep it, replace it, or remove it as the need changes.",
  ],
  core: "Core company",
  coreNote: "Unchanged",
  slotLabel: "One slot",
  slotNote:
    "The organization doesn't get permanently heavier. The same slot is re-occupied when the work changes.",
  /**
   * Two configurations of the same slot, to show the slot is a slot. The
   * second is explicitly labelled as illustrative — Product is the only
   * department that exists today (build spec §23).
   */
  configurations: [
    { label: "Product", state: "Active today" },
    { label: "Another department", state: "The slot, later" },
  ],
  states: ["Add capacity", "Use capacity", "Swap or remove"],
};

export const whatOverflowIs = {
  index: "05",
  kicker: "What Overflow is",
  headline: ["Not people.", "Not projects.", "A department."],
  body: [
    "Overflow is not a pool of developers waiting for tickets. And it isn't an agency waiting for a specification.",
    "We activate a coordinated execution function around a defined outcome. That function can include the product thinking, design, engineering, coordination and delivery required to get the work shipped.",
  ],
  fragmentsLabel: "Fragmented",
  fragments: ["Designer", "Developer", "PM", "QA"],
  assembled: "Product department",
  statement: ["You don't buy the people.", "You activate the capacity."],
};

export const product = {
  index: "06",
  kicker: "The first department",
  headline: "The first department: Product.",
  subhead: "Product design + development, activated around an outcome.",
  body: "Your product doesn't need another disconnected specialist. It needs the capacity to move. Overflow's Product Department brings the product execution function required to take an important initiative from direction through design, development and shipment.",
  stagesLabel: "Stages of execution — not a service list",
  stages: ["Direction", "Product", "Design", "Build", "Test", "Ship"],
  capabilities: {
    headline: "The Product Department can assemble what the outcome requires.",
    /**
     * Deliberately NOT a service menu. Product/Design/Engineering are the
     * constant spine; the rest activate only when an outcome needs them —
     * which is why AI, infrastructure and analytics appear here as
     * conditional capabilities and nowhere else on the site as offers
     * (build spec §14).
     */
    coreLabel: "Always",
    core: ["Product", "Design", "Engineering"],
    conditionalLabel: "Activated when the outcome requires it",
    conditional: ["AI", "Research", "Infrastructure", "QA", "Analytics"],
    statement: "The outcome determines the team. Not the other way around.",
  },
};

export const ownership = {
  index: "07",
  kicker: "Ownership",
  headline: "You keep the company. We take the execution.",
  yours: {
    label: "Yours",
    items: [
      "Product vision",
      "Strategy",
      "Business decisions",
      "Priorities",
      "IP",
      "Ownership",
      "Final authority",
    ],
  },
  ours: {
    label: "Overflow",
    items: [
      "Product execution",
      "Design",
      "Development",
      "Coordination",
      "Delivery",
      "Technical implementation",
      "Day-to-day execution decisions",
    ],
  },
  statement: ["You don't hand over the product.", "You give the work the capacity it needs."],
  boundaryLabel: "Direction ↓  ·  Execution ↑",
};

export const howItWorks = {
  index: "08",
  kicker: "How it works",
  headline: "From capacity gap to shipped product.",
  steps: [
    {
      index: "01",
      title: "Define the outcome",
      body: "We establish what needs to exist, why it matters and what “shipped” means.",
    },
    {
      index: "02",
      title: "Activate the department",
      body: "We assemble the product execution capacity the outcome actually requires.",
    },
    {
      index: "03",
      title: "Execute",
      body: "Product, design and engineering move together instead of waiting on separate functions.",
    },
    {
      index: "04",
      title: "Ship",
      body: "The work is tested, delivered and moved into the client's organization.",
    },
    {
      index: "05",
      title: "Continue, transfer or release",
      body: "The department stays involved, hands over, or steps away depending on what the company needs next.",
    },
  ],
};

export const whyNotHiring = {
  index: "09",
  kicker: "Why not hiring",
  headline: "Hiring isn't wrong. Waiting is sometimes the problem.",
  body: "Permanent teams are valuable. But permanent capacity isn't always the immediate requirement. Sometimes the company needs execution now while its long-term organization is still taking shape. Overflow exists for that gap.",
  comparison: [
    {
      label: "Build internally",
      steps: ["Recruit", "Interview", "Hire", "Onboard", "Organize", "Execute"],
    },
    {
      label: "Activate Overflow",
      steps: ["Define", "Activate", "Execute", "Ship"],
    },
  ],
  statement: "Hiring should not determine when important work can begin.",
};

export const whyNotAgency = {
  index: "10",
  kicker: "Why not an agency",
  headline: "And no — we're not an agency with a new name.",
  body: "An agency typically starts with a specification. Overflow starts with an outcome and a missing piece of execution capacity.",
  questions: [
    { label: "An agency asks", quote: "What would you like us to build?" },
    {
      label: "Overflow asks",
      quote: "What important outcome needs to happen — and what execution capacity is missing?",
    },
  ],
  models: [
    { label: "Agency model", steps: ["Project", "Handoff", "Delivery"] },
    { label: "Overflow model", steps: ["Outcome", "Department", "Execution", "Shipment"] },
  ],
};

export const proof = {
  index: "11",
  kicker: "Proof",
  headline: "The model only matters if it moves the work.",
  /**
   * The only two numbers on this site. Both describe work already
   * delivered. Do not add a third without a verifiable source, and do not
   * restate either as a forward-looking promise (build spec §43).
   */
  metrics: [
    {
      kind: "compression" as const,
      from: "8 weeks",
      to: "3 weeks",
      body: "One engagement compressed eight weeks of planned work into three.",
    },
    {
      kind: "count" as const,
      value: "8–10",
      unit: "hours",
      body: "Founder time recovered every week.",
    },
  ],
  disclaimer: "These are early proof points, not promises.",
};

export const whoItsFor = {
  index: "12",
  kicker: "Fit",
  headline: "For companies with something important to ship.",
  intro: "Overflow is built for companies that:",
  fit: [
    "Already know what they need to build",
    "Have an internal team",
    "Have an important initiative ahead",
    "Don't currently have enough execution capacity",
    "Don't want hiring to delay the work",
    "Want to keep strategic control",
    "Want the work actually shipped",
  ],
  notFitLabel: "Not a fit if:",
  notFit: [
    "You only want cheap developers",
    "You need unlimited scope",
    "You don't have a defined outcome",
    "You want to outsource strategic ownership",
    "You are simply looking for additional headcount",
  ],
};

export const mentalState = {
  index: "13",
  kicker: "The outcome",
  headline: "The best outcome? “It's off my plate.”",
  before: {
    label: "Before",
    items: ["Important initiative", "Limited capacity", "Hiring delay", "Founder pulled in"],
  },
  after: {
    label: "After",
    items: ["Clear outcome", "Activated capacity", "Execution moving", "Founder bandwidth returned"],
  },
};

export const philosophy = {
  index: "14",
  kicker: "Operating philosophy",
  headline: "Capacity should be as flexible as the work.",
  body: "Companies change. Priorities change. Demand changes. The capabilities required today may not be the capabilities required next year. The organization should not have to become permanently heavier every time the work changes.",
  principles: [
    "Activate what you need.",
    "Own what matters.",
    "Ship what matters.",
    "Change when the work changes.",
  ],
};

export const future = {
  index: "15",
  kicker: "What's next",
  headline: "Product is only the beginning.",
  body: "Today, Overflow is focused on one thing: product execution. Over time, the same Plug-in Department model can extend into other specialized functions.",
  currentLabel: "Today",
  current: { label: "Product", state: "Active" },
  /**
   * Explicitly not a roadmap and not a service list — no dates, no
   * commitments. Rendered as visibly secondary to Product (build spec §23).
   */
  potential: ["AI", "Data", "Infrastructure", "Security"],
  potentialLabel: "Potential future departments",
  disclaimer:
    "These are not current services and not launch commitments. One department first — master it, prove it, then expand.",
};

export const bigIdea = {
  statement:
    "You shouldn't have to build the entire department before you can get the work done.",
  resolution: "That's what Overflow is for.",
};

export const finalCta = {
  headline: "What needs to ship?",
  subhead:
    "Tell us the outcome your team needs to move. We'll determine what execution capacity it requires.",
  primaryCta: { label: "Activate product capacity", href: activateHref },
  secondaryCta: { label: "Talk to Overflow", href: activateHref },
  supportingLine: "Product design + development",
};
