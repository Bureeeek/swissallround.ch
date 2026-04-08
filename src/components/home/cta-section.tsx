import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="mx-auto w-full max-w-7xl rounded-[2.5rem] border border-white/45 bg-[linear-gradient(150deg,rgba(8,17,38,0.98),rgba(13,37,88,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.22)] sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Kostenlose Offerte
            </div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              In wenigen Schritten zur passenden Anfrage
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Nutzen Sie den Offerte-Konfigurator, um Umfang, Objekt und Termin
              direkt zu erfassen. So kann SwissPro schneller einschätzen, welche
              Lösung für Ihr Projekt passt.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <LinkButton
              href="/offerte"
              className="bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
            >
              Offerte anfragen
            </LinkButton>
            <LinkButton
              href="/kontakt"
              className="border border-white/40 bg-transparent text-white shadow-none hover:bg-white/10"
            >
              Kontakt aufnehmen
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
