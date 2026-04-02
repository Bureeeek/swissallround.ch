import { OfferteWizard } from "@/components/offerte/offerte-wizard";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Offerte anfragen",
  description:
    "Kostenlose Offerte anfragen bei SwissPro Allround Service GmbH in Winterthur. Mehrstufiger Konfigurator für Reinigung, Umzug, Räumung, Renovation und Gartenpflege.",
  path: "/offerte",
});

export default function QuotePage() {
  return (
    <main className="pb-20">
      <section className="px-5 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-14">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Kostenlose Offerte
            </div>
            <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Auftrag strukturiert anfragen statt umständlich erklären
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Der Konfigurator sammelt die wichtigsten Angaben Schritt für
              Schritt. So kann SwissPro schneller einschätzen, ob Besichtigung,
              Rückfragen oder direkt eine Offerte sinnvoll sind.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/16 bg-white/8 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Direkter Kontakt
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/78">
              <p>{siteConfig.email}</p>
              {siteConfig.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
              <p>
                Gerne unterstützt SwissPro Sie bei einzelnen Einsätzen ebenso wie
                bei kombinierten Aufträgen.
              </p>
            </div>
            <div className="mt-5">
              <LinkButton href="/kontakt" variant="ghost">
                Alternativ Kontaktformular nutzen
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <OfferteWizard />
          <div className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-[rgba(245,248,253,0.82)] p-6">
            <SectionHeading
              eyebrow="Warum dieser Ablauf?"
              title="Nur die Angaben abfragen, die für eine sinnvolle Offerte nötig sind"
              description="Keine unnötigen Pflichtfelder, keine Fantasiepreise und keine irreführenden Sofortversprechen."
            />
            <div className="grid gap-4">
              {[
                "Dienstleistung, Objektart und Fläche bilden die Grundlage für die erste Einschätzung.",
                "Zeitfenster und Besichtigungsmöglichkeit helfen bei der Einsatzplanung.",
                "Kontaktdaten werden ausschliesslich zur Bearbeitung der Anfrage verwendet.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-white px-5 py-4 text-sm leading-7 text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
