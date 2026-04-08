import { LinkButton } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteMedia } from "@/lib/media";
import { pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Dienstleistungen in Winterthur",
  description:
    "SwissPro Allround Service GmbH bietet Gebäudereinigung, Umzug, Räumung, Renovation und Hauswartung in Winterthur, Zürich und der Ostschweiz.",
  path: "/dienstleistungen",
});

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] p-6 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Leistungen
            </div>
            <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Koordinierte Dienstleistungen für Objekte in und um Winterthur
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/78">
              SwissPro deckt Leistungen ab, die in der Praxis oft gemeinsam
              gebraucht werden: reinigen, umziehen, räumen, rückbauen und
              pflegen. Das reduziert Übergaben und spart Abstimmung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/offerte">Offerte anfragen</LinkButton>
              <LinkButton href="/kontakt" variant="ghost">
                Kontakt aufnehmen
              </LinkButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <PlaceholderMedia
              title="Dienstleistungen im Überblick"
              hint="Reinigung, Umzug, Räumung, Renovation und Hauswartung für private und gewerbliche Objekte."
              alt={siteMedia.servicesOverview.alt}
              imageSrc={siteMedia.servicesOverview.src}
              className="min-h-[26rem]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Leistungsportfolio"
            title="Alle Services mit eigener SEO-Zielseite"
            description="Jede Leistung erhält eine eigene Detailseite für saubere lokale Auffindbarkeit rund um Winterthur, Zürich und die Ostschweiz."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(12,41,98,0.08)] transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {service.kicker}
                </div>
                <h2 className="mt-4 mb-3 text-2xl font-semibold text-[var(--foreground)]">
                  {service.shortName}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {service.teaser}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LinkButton href={service.path}>Zur Detailseite</LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-3">
          {[
            {
              title: "Saubere Reihenfolge",
              text: "Gerade bei Umzug, Reinigung und Räumung zählt die richtige Abfolge mehr als laute Werbeversprechen.",
            },
            {
              title: "Regionale Nähe",
              text: "Winterthur als Standort ist wichtig für kurze Wege, schnellere Besichtigungen und eine realistische Terminplanung.",
            },
            {
              title: "Keine Fantasiepreise",
              text: "Statt Lockangeboten steht eine kostenlose, nachvollziehbare Offerte im Zentrum.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-[var(--border)] bg-[rgba(245,248,253,0.82)] p-6"
            >
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
