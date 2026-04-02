"use client";

import { useState } from "react";

import { ActionButton } from "@/components/ui/button";
import {
  initialOfferValues,
  validateOfferPayload,
  validateOfferStep,
  type OfferFormValues,
} from "@/lib/forms";
import { wizardOptions } from "@/lib/site";
import { cn } from "@/lib/utils";

const stepContent = [
  {
    title: "Welche Dienstleistung wird benötigt?",
    description:
      "Wählen Sie die Leistung, die Ihrem Auftrag aktuell am nächsten kommt.",
  },
  {
    title: "Um welchen Gebäudetyp handelt es sich?",
    description: "So lässt sich der Aufwand besser einordnen.",
  },
  {
    title: "Wie gross ist die Fläche ungefähr?",
    description:
      "Eine grobe Einordnung reicht. Genaues wird bei Bedarf nachgefragt.",
  },
  {
    title: "Wann soll das Projekt umgesetzt werden?",
    description: "Damit Termine und Verfügbarkeit besser abgestimmt werden können.",
  },
  {
    title: "Ist eine Besichtigung vor Ort möglich?",
    description: "Gerade bei grösseren oder kombinierten Aufträgen ist das hilfreich.",
  },
  {
    title: "Kontaktdaten eingeben",
    description:
      "SwissPro meldet sich mit einer Offerte oder mit Rückfragen zum Auftrag.",
  },
] as const;

type Option = {
  value: string;
  label: string;
  description?: string;
};

function OptionCard({
  option,
  selected,
  onClick,
}: {
  option: Option;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group rounded-[1.6rem] border bg-white p-4 text-left transition-all duration-200 sm:p-5",
        selected
          ? "border-[var(--primary)] shadow-[0_20px_45px_rgba(26,79,189,0.16)]"
          : "border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_14px_36px_rgba(12,41,98,0.08)]",
      )}
    >
      <div
        className={cn(
          "rounded-[1.3rem] px-4 py-5",
          selected
            ? "bg-[linear-gradient(145deg,rgba(14,34,81,0.96),rgba(26,79,189,0.88))] text-white"
            : "bg-[linear-gradient(145deg,rgba(245,248,253,0.92),rgba(227,237,250,0.92))] text-[var(--foreground)]",
        )}
      >
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          Bildkarte
        </div>
        <div className="mt-3 text-lg font-semibold">{option.label}</div>
      </div>
      {option.description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {option.description}
        </p>
      ) : null}
    </button>
  );
}

function StepError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="rounded-2xl border border-[rgba(210,58,85,0.18)] bg-[rgba(210,58,85,0.08)] px-4 py-3 text-sm text-[#b3263d]">
      {message}
    </p>
  );
}

export function OfferteWizard() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<OfferFormValues>(initialOfferValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const progress = (step / stepContent.length) * 100;
  const activeStep = stepContent[step - 1];

  function updateValue<Key extends keyof OfferFormValues>(
    key: Key,
    value: OfferFormValues[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function goNext() {
    const nextErrors = validateOfferStep(step, values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStep((current) => Math.min(current + 1, stepContent.length));
  }

  function goBack() {
    setSubmitError(null);
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateOfferPayload(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/offerte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error ||
            "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(126,182,255,0.18)] text-[var(--primary)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.03em] text-[var(--foreground)]">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Ihre Offerte-Anfrage wurde an SwissPro Allround Service GmbH
          übermittelt. Falls Rückfragen nötig sind, meldet sich das Team direkt
          über die angegebene E-Mail-Adresse oder Telefonnummer.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:p-8"
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Schritt {step} von {stepContent.length}
            </div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
              {activeStep.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {activeStep.description}
            </p>
          </div>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-[rgba(126,182,255,0.16)]">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent))] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {step === 1 ? (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {wizardOptions.services.map((option) => (
                <OptionCard
                  key={option.value}
                  option={option}
                  selected={values.service === option.value}
                  onClick={() => updateValue("service", option.value)}
                />
              ))}
            </div>
            <StepError message={errors.service} />
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {wizardOptions.propertyTypes.map((option) => (
                <OptionCard
                  key={option.value}
                  option={option}
                  selected={values.propertyType === option.value}
                  onClick={() => updateValue("propertyType", option.value)}
                />
              ))}
            </div>
            <StepError message={errors.propertyType} />
          </>
        ) : null}

        {step === 3 ? (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {wizardOptions.sizes.map((option) => (
                <OptionCard
                  key={option.value}
                  option={option}
                  selected={values.size === option.value}
                  onClick={() => updateValue("size", option.value)}
                />
              ))}
            </div>
            <StepError message={errors.size} />
          </>
        ) : null}

        {step === 4 ? (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {wizardOptions.timelines.map((option) => (
                <OptionCard
                  key={option.value}
                  option={option}
                  selected={values.timeline === option.value}
                  onClick={() => updateValue("timeline", option.value)}
                />
              ))}
            </div>
            <StepError message={errors.timeline} />
          </>
        ) : null}

        {step === 5 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              {wizardOptions.siteVisit.map((option) => (
                <OptionCard
                  key={option.value}
                  option={option}
                  selected={values.siteVisit === option.value}
                  onClick={() => updateValue("siteVisit", option.value)}
                />
              ))}
            </div>
            <StepError message={errors.siteVisit} />
          </>
        ) : null}

        {step === 6 ? (
          <>
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="label">
                  Vorname
                </label>
                <input
                  id="firstName"
                  className="field"
                  aria-invalid={Boolean(errors.firstName)}
                  value={values.firstName}
                  onChange={(event) => updateValue("firstName", event.target.value)}
                />
                <p className="error-text">{errors.firstName}</p>
              </div>
              <div>
                <label htmlFor="lastName" className="label">
                  Nachname
                </label>
                <input
                  id="lastName"
                  className="field"
                  aria-invalid={Boolean(errors.lastName)}
                  value={values.lastName}
                  onChange={(event) => updateValue("lastName", event.target.value)}
                />
                <p className="error-text">{errors.lastName}</p>
              </div>
              <div>
                <label htmlFor="email" className="label">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="field"
                  aria-invalid={Boolean(errors.email)}
                  value={values.email}
                  onChange={(event) => updateValue("email", event.target.value)}
                />
                <p className="error-text">{errors.email}</p>
              </div>
              <div>
                <label htmlFor="phone" className="label">
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="field"
                  aria-invalid={Boolean(errors.phone)}
                  value={values.phone}
                  onChange={(event) => updateValue("phone", event.target.value)}
                />
                <p className="error-text">{errors.phone}</p>
              </div>
              <div>
                <label htmlFor="postalCode" className="label">
                  PLZ
                </label>
                <input
                  id="postalCode"
                  className="field"
                  aria-invalid={Boolean(errors.postalCode)}
                  value={values.postalCode}
                  onChange={(event) => updateValue("postalCode", event.target.value)}
                />
                <p className="error-text">{errors.postalCode}</p>
              </div>
              <div>
                <label htmlFor="address" className="label">
                  Adresse
                </label>
                <input
                  id="address"
                  className="field"
                  aria-invalid={Boolean(errors.address)}
                  value={values.address}
                  onChange={(event) => updateValue("address", event.target.value)}
                />
                <p className="error-text">{errors.address}</p>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="label">
                Beschreiben Sie Ihren Auftrag kurz
              </label>
              <textarea
                id="description"
                rows={6}
                className="field resize-y"
                aria-invalid={Boolean(errors.description)}
                value={values.description}
                onChange={(event) => updateValue("description", event.target.value)}
              />
              <p className="error-text">{errors.description}</p>
            </div>

            <label className="flex items-start gap-3 rounded-[1.4rem] border border-[var(--border)] bg-[rgba(245,248,253,0.78)] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[var(--border)]"
                checked={values.privacyAccepted}
                onChange={(event) =>
                  updateValue("privacyAccepted", event.target.checked)
                }
              />
              <span>
                Ich akzeptiere die Datenschutzbestimmungen und bin damit
                einverstanden, dass meine Angaben zur Bearbeitung der Anfrage
                verwendet werden.
                <span className="error-text block">
                  {errors.privacyAccepted}
                </span>
              </span>
            </label>
          </>
        ) : null}
      </div>

      <div className="mt-8 space-y-4">
        {submitError ? (
          <p className="rounded-2xl border border-[rgba(210,58,85,0.18)] bg-[rgba(210,58,85,0.08)] px-4 py-3 text-sm text-[#b3263d]">
            {submitError}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <ActionButton
            type="button"
            variant="secondary"
            onClick={goBack}
            disabled={step === 1 || isSubmitting}
          >
            Zurück
          </ActionButton>

          {step < stepContent.length ? (
            <ActionButton type="button" onClick={goNext}>
              Weiter
            </ActionButton>
          ) : (
            <ActionButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Offerte anfordern"}
            </ActionButton>
          )}
        </div>
      </div>
    </form>
  );
}
