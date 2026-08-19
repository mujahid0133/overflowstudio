/**
 * /contact copy. Spec section 18 — starting a conversation should feel easy
 * and low pressure, not like entering a sales funnel. Copy is verbatim from
 * the spec where given.
 */

export const hero = {
  eyebrow: "Contact",
  headline: "Tell us what you're trying to move.",
  body: "You don't need to know whether Overflow is the right answer yet. Give us the context and we'll tell you honestly.",
};

export const form = {
  fields: {
    goal: { label: "What are you trying to get done?", name: "goal" },
    blocker: { label: "What's currently slowing it down?", name: "blocker" },
    success: { label: "What does success look like?", name: "success" },
    email: { label: "Your email", name: "email" },
    company: { label: "Company", name: "company", optional: true },
  },
  submit: "Start the conversation",
};

export const confirmation = {
  headline: "Got it.",
  body: "We'll review the context and come back with a straightforward answer on whether Overflow makes sense.",
};
