import Link from "next/link";

import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 rounded-[2.4rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-10 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:px-10 sm:py-14">
        <div className="inline-flex rounded-full border border-[rgba(26,79,189,0.16)] bg-[rgba(126,182,255,0.15)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
          404
        </div>
        <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
          Diese Seite wurde nicht gefunden
        </h1>
        <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
          Möglicherweise wurde der Link geändert oder die gewünschte Seite ist
          nicht mehr verfügbar.
        </p>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/">Zur Startseite</LinkButton>
          <LinkButton href="/dienstleistungen" variant="secondary">
            Zu den Dienstleistungen
          </LinkButton>
        </div>
        <Link href="/kontakt" className="text-sm font-semibold text-[var(--primary)]">
          Kontakt aufnehmen
        </Link>
      </div>
    </main>
  );
}
