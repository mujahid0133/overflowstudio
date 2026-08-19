/**
 * /outcomes copy. Spec section 13 — sell the result, not the methodology.
 * The outcome library is deliberately qualitative (spec allows these five
 * verbatim, non-numeric); the before/after timeline is framed around relief,
 * not just speed, per the section's own note.
 */

export const hero = {
  eyebrow: "Outcomes",
  headline: "The work moved. The company moved with it.",
  body: "The measure of an engagement isn't how much activity happened. It's what changed afterward.",
};

export const outcomeLibrary = {
  eyebrow: "The outcome library",
  headline: "What actually changes.",
  items: [
    { label: "Speed", body: "Work shipped sooner." },
    { label: "Founder capacity", body: "Less execution management." },
    { label: "Team leverage", body: "Existing people stay focused." },
    { label: "Hiring independence", body: "The roadmap doesn't stop while hiring happens." },
    { label: "Execution ownership", body: "Someone is actually accountable for moving the initiative." },
  ],
};

export const beforeAfter = {
  eyebrow: "Before / after",
  headline: "What the founder stops carrying.",
  body: "Not just a faster timeline — a different relationship to the work.",
  before: {
    label: "Before",
    items: [
      { title: "Founder" },
      { title: "Managing execution" },
      { title: "Waiting" },
      { title: "Hiring" },
    ],
  },
  after: {
    label: "After",
    items: [
      { title: "Founder" },
      { title: "Direction" },
      { title: "Overflow" },
      { title: "Execution" },
      { title: "Outcome" },
    ],
  },
};
