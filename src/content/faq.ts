/**
 * /faq copy. Spec section 17 — remove objections without requiring a sales
 * conversation, grouped into the 7 categories the spec names. Security and
 * confidentiality answers describe actual process and contractual controls
 * only — no invented certifications (SOC 2, ISO, etc.), per the spec's
 * explicit instruction and docs/CONTENT-TODO.md.
 */

export const hero = {
  eyebrow: "FAQ",
  headline: "Questions worth answering before a call.",
  body: "If something below doesn't cover it, ask directly.",
};

export const groups = [
  {
    category: "Model",
    items: [
      {
        question: "Is this outsourcing?",
        answer:
          "Not in the way the word usually gets used. Outsourcing typically means handing a piece of work to an external vendor with limited context and limited accountability. A Plug-in Department works inside your roadmap, against an outcome you define, with Overflow taking responsibility for getting it shipped — not just staffing hours against a task list.",
      },
      {
        question: "What exactly is a Plug-in Department?",
        answer:
          "An execution unit built around a defined business outcome — the capacity needed to get that outcome shipped, assembled from Product, Design, Engineering and AI as the work requires, without you having to hire, source or manage it directly.",
      },
      {
        question: "What if we don't have a clearly defined outcome yet?",
        answer:
          "Overflow works best against a defined outcome. If the initiative isn't scoped yet, Discovery is where that gets defined together — but if what you need is help picking a direction rather than executing one, that's outside what a Plug-in Department is built for.",
      },
    ],
  },
  {
    category: "Engagement",
    items: [
      {
        question: "How long does an engagement run?",
        answer:
          "Engagements are scoped around a defined outcome rather than a fixed retainer length — long enough to actually ship the work, short enough that it doesn't quietly become a permanent headcount decision by default.",
      },
      {
        question: "What does an engagement actually include?",
        answer:
          "Discovery through Delivery — and, where it makes sense, a Transition stage that hands capability back to your internal team. The full breakdown of every stage is on the How It Works page.",
      },
    ],
  },
  {
    category: "Control",
    items: [
      {
        question: "Who owns product decisions?",
        answer:
          "The company. Vision, strategy and priorities stay yours throughout the engagement — Overflow doesn't set direction on your behalf.",
      },
      {
        question: "Who owns execution?",
        answer:
          "Overflow, within agreed boundaries. Once an outcome and its scope are defined, Overflow is accountable for getting that specific work done.",
      },
    ],
  },
  {
    category: "Teams",
    items: [
      {
        question: "Do you replace our team?",
        answer:
          "No. A Plug-in Department exists to move a specific outcome forward, not to replace the people already doing the company's core work. Where there's an existing team, Overflow works alongside it inside a scope both sides agree on.",
      },
      {
        question: "Can you work with our existing engineers?",
        answer:
          "Yes, when it makes sense for the outcome. How much overlap there is, what stays internal and what Overflow owns gets defined during Assembly, before execution starts.",
      },
    ],
  },
  {
    category: "Hiring",
    items: [
      {
        question: "What happens when we hire internally?",
        answer:
          "Overflow can transition, augment or continue, depending on the engagement. Some engagements are designed to hand off cleanly to a new hire; others continue as extra capacity alongside them. That gets discussed as your internal hiring firms up, not decided unilaterally by Overflow.",
      },
      {
        question: "Does using Overflow slow down our hiring plans?",
        answer:
          "No — the two run in parallel. A Plug-in Department exists so the roadmap doesn't have to wait for hiring, not so hiring stops.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        question: "Do you need access to our codebase?",
        answer:
          "Only as required by the actual engagement. Access is scoped to what the work requires, not blanket access to every system by default — what's needed gets defined during Assembly and revoked when the engagement ends or the scope changes.",
      },
      {
        question: "What security practices do you follow?",
        answer:
          "Overflow doesn't hold a formal certification like SOC 2 or ISO 27001 today. Access to client systems is scoped to what's needed for the engagement, granted individually and removed at the end of it, combined with the contractual confidentiality obligations described below.",
      },
    ],
  },
  {
    category: "Confidentiality",
    items: [
      {
        question: "How do you handle confidential work?",
        answer:
          "Every engagement operates under contractual confidentiality obligations agreed before any work — or access — starts. Case studies and public materials only use what a client has explicitly authorized for publication; anything else stays private.",
      },
      {
        question: "Can you keep our project anonymous in case studies?",
        answer:
          "Yes. Some engagements are described without naming the company, using only what's been approved for publication — see the case studies page for how that's handled.",
      },
    ],
  },
];
