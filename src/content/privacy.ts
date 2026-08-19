/**
 * /privacy copy. Standard draft legal boilerplate for a small consultancy —
 * not lawyer-reviewed (see the draft banner rendered at the top of the
 * page). Only describes things actually true of the site today: no
 * analytics or tracking cookies are wired up (checked src/app/layout.tsx —
 * fonts are loaded via next/font, which self-hosts at build time and makes
 * no runtime requests to Google), and the only data collected is whatever
 * a visitor submits through the contact form.
 */

export const updated = "Last updated: not yet published";

export const sections = [
  {
    heading: "Who we are",
    body: "Overflow Studio (\"Overflow,\" \"we,\" \"us\") operates this website. This policy explains what information the site collects and how it's used.",
  },
  {
    heading: "Information we collect",
    body: "The only information this site collects is what you choose to submit through the contact form: what you're trying to get done, what's slowing it down, what success looks like, your email address and, optionally, your company name. We don't collect this information any other way.",
  },
  {
    heading: "How we use it",
    body: "Information submitted through the contact form is used only to evaluate and respond to your inquiry. It isn't sold, rented or shared with third parties for marketing purposes.",
  },
  {
    heading: "Cookies and tracking",
    body: "This site does not currently use analytics, tracking cookies or advertising trackers. The typefaces used on this site are self-hosted at build time rather than loaded from a third-party server at runtime, so no font-related requests are sent to Google or any other provider. If that changes — for example, if we add analytics in the future — this policy will be updated first.",
  },
  {
    heading: "Data retention",
    body: "We retain contact form submissions only as long as needed to respond to your inquiry and for a reasonable period afterward for our own records, unless you ask us to delete it sooner.",
  },
  {
    heading: "Your rights",
    body: "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it, by contacting us using the details in the footer of this site.",
  },
  {
    heading: "Changes to this policy",
    body: "If how we handle information changes in a meaningful way, we'll update this page.",
  },
];
