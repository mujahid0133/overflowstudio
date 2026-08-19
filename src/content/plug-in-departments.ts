/**
 * /plug-in-departments copy. Spec section 12 — this page's job is to teach
 * the category: a Plug-in Department is an execution unit organized around
 * one defined outcome, not a menu of four unrelated agency services. Keep
 * department detail copy to the one-liners the spec gives verbatim — no
 * tech-stack lists, no service menus (spec explicitly forbids expanding
 * these).
 */

export const hero = {
  eyebrow: "Plug-in Departments",
  headline: "The execution capacity between “we need it” and “it’s shipped.”",
  body: "Plug-in Departments are execution units built around a defined business outcome.",
};

export const interactiveCore = {
  eyebrow: "How the departments work together",
  headline: "The outcome comes first. The department exists to serve it.",
  body: "Select a discipline to see what it's responsible for inside a single, shared outcome — not a separate engagement.",
  outcome: "Launch new product capability",
  departments: [
    {
      id: "product",
      label: "Product",
      contribution: "Define",
      detail: "Turn ambiguity into an executable product plan.",
    },
    {
      id: "design",
      label: "Design",
      contribution: "Design",
      detail: "Turn product direction into an experience people can actually use.",
    },
    {
      id: "engineering",
      label: "Engineering",
      contribution: "Build",
      detail: "Turn the defined outcome into working software.",
    },
    {
      id: "ai",
      label: "AI",
      contribution: "Automate / augment",
      detail: "Add intelligence, automation or agentic capability where it creates leverage.",
    },
  ],
};

export const departmentDetail = {
  eyebrow: "Department detail",
  headline: "Four disciplines. One outcome.",
};
