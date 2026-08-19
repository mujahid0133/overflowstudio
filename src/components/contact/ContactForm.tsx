"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { confirmation, form } from "@/content/contact";

const fieldClass =
  "w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-colors duration-(--duration-fast) focus:border-ink";

function Field({
  id,
  label,
  name,
  type,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type: "textarea" | "email" | "text";
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {!required && <span className="ml-1.5 text-ink-faint">(optional)</span>}
      </label>
      {type === "textarea" ? (
        <textarea id={id} name={name} required={required} rows={4} className={fieldClass} />
      ) : (
        <input id={id} name={name} type={type} required={required} className={fieldClass} />
      )}
    </div>
  );
}

/**
 * Client-only for now: submitting just reveals the confirmation state.
 * There's no backend to send this to yet.
 *
 * TODO(infra): wire this to a real submission endpoint (e.g. Resend,
 * Formspree, a DB) before launch — see docs/CONTENT-TODO.md.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const goalId = useId();
  const blockerId = useId();
  const successId = useId();
  const emailId = useId();
  const companyId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-line bg-paper-dim p-10 md:p-16"
      >
        <p className="font-display text-3xl font-medium text-ink md:text-4xl">
          {confirmation.headline}
        </p>
        <p className="mt-4 max-w-md text-lg text-ink-soft">{confirmation.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-8">
      <Field
        id={goalId}
        label={form.fields.goal.label}
        name={form.fields.goal.name}
        type="textarea"
        required
      />
      <Field
        id={blockerId}
        label={form.fields.blocker.label}
        name={form.fields.blocker.name}
        type="textarea"
        required
      />
      <Field
        id={successId}
        label={form.fields.success.label}
        name={form.fields.success.name}
        type="textarea"
        required
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Field
          id={emailId}
          label={form.fields.email.label}
          name={form.fields.email.name}
          type="email"
          required
        />
        <Field
          id={companyId}
          label={form.fields.company.label}
          name={form.fields.company.name}
          type="text"
        />
      </div>
      <div>
        <Button type="submit" variant="primary">
          {form.submit}
        </Button>
      </div>
    </form>
  );
}
