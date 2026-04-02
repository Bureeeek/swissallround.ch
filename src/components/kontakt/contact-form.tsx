"use client";

import { useState } from "react";

import { ActionButton } from "@/components/ui/button";
import {
  initialContactValues,
  validateContactPayload,
  type ContactFormValues,
} from "@/lib/forms";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialContactValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  function updateValue<Key extends keyof ContactFormValues>(
    key: Key,
    value: ContactFormValues[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactPayload(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          result.error ||
            "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
        return;
      }

      setStatus("success");
      setMessage(
        result.message ||
          "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
      );
      setValues(initialContactValues);
    } catch {
      setStatus("error");
      setMessage(
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:p-6"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="label">
            Name
          </label>
          <input
            id="contact-name"
            className="field"
            aria-invalid={Boolean(errors.name)}
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
          />
          <p className="error-text">{errors.name}</p>
        </div>
        <div>
          <label htmlFor="contact-email" className="label">
            E-Mail
          </label>
          <input
            id="contact-email"
            type="email"
            className="field"
            aria-invalid={Boolean(errors.email)}
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
          />
          <p className="error-text">{errors.email}</p>
        </div>
        <div>
          <label htmlFor="contact-phone" className="label">
            Telefon
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="field"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="label">
            Nachricht
          </label>
          <textarea
            id="contact-message"
            rows={6}
            className="field resize-y"
            aria-invalid={Boolean(errors.message)}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
          />
          <p className="error-text">{errors.message}</p>
        </div>
      </div>

      {status !== "idle" ? (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "border border-[rgba(26,79,189,0.12)] bg-[rgba(126,182,255,0.14)] text-[var(--primary)]"
              : "border border-[rgba(210,58,85,0.18)] bg-[rgba(210,58,85,0.08)] text-[#b3263d]"
          }`}
        >
          {message}
        </p>
      ) : null}

      <div className="mt-6">
        <ActionButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </ActionButton>
      </div>
    </form>
  );
}
