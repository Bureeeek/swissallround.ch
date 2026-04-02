import Link from "next/link";

import { LinkButton } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceMedia } from "@/lib/media";
import { servicesBySlug, siteConfig, type ServiceDetail } from "@/lib/site";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <main className="pb-20">
      <section className="px-5 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:px-8 lg:px-12 lg:py-14">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {service.kicker}
            </div>
            <div className="mt-6 space-y-4">
              <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {service.shortName} in Winterthur
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-8 text-white/80 sm:text-lg">
                {service.teaser}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/offerte">Offerte anfragen</LinkButton>
              <LinkButton href="/kontakt" variant="ghost">
                Kontakt aufnehmen
              </LinkButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {siteConfig.serviceArea.map((region) => (
                <div
                  key={region}
                  className="rounded-2xl border border-white/14 bg-white/8 px-4 py-4 text-sm text-white/82"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Einsatzgebiet
                  </div>
                  <div className="mt-2 font-medium">{region}</div>
                </div>
              ))}
            </div>
          </div>

          <PlaceholderMedia
            title={service.shortName}
            hint={service.teaser}
            alt={serviceMedia[service.slug].alt}
            className="min-h-[26rem]"
            tone="blue"
            imageSrc={serviceMedia[service.slug].detailSrc}
          />
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Leistungsumfang"
              title={`Was SwissPro bei ${service.shortName.toLowerCase()} übernimmt`}
              description="Alle Leistungen werden objekt- und auftragsbezogen geplant. Die genaue Ausführung richtet sich nach Zugang, Fläche, Zustand und Termin."
            />
            <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_55px_rgba(12,41,98,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(126,182,255,0.18)] text-[var(--primary)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-[var(--foreground)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Ihr Vorteil"
            title={`Darum passt ${service.shortName} zu klaren Projektabläufen`}
            description="SwissPro ist besonders dann sinnvoll, wenn mehrere Arbeitsschritte zeitlich aufeinander abgestimmt werden müssen."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(12,41,98,0.08)]"
              >
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(12,41,98,0.08)] lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Ablauf"
              title="So wird die Umsetzung vorbereitet"
              description="Keine versteckten Standards, sondern ein nachvollziehbarer Ablauf von der Anfrage bis zur Durchführung."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.6rem] border border-[var(--border)] bg-[rgba(245,248,253,0.78)] p-5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Schritt {index + 1}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(150deg,rgba(8,17,38,0.97),rgba(13,37,88,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Nächster Schritt
            </div>
            <h2 className="text-balance text-3xl font-semibold uppercase leading-[1.06] tracking-[-0.03em] sm:text-4xl">
              Kostenlose Offerte für {service.shortName.toLowerCase()} anfragen
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/78">
              Beschreiben Sie Objekt, Umfang und Termin. SwissPro meldet sich mit
              einer passenden Offerte oder Rückfrage für die Besichtigung.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/offerte">Offerte anfragen</LinkButton>
              <LinkButton href="/kontakt" variant="ghost">
                Direkt Kontakt aufnehmen
              </LinkButton>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/14 bg-white/8 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Weitere Leistungen
            </div>
            <div className="mt-5 space-y-4">
              {service.related.map((slug) => {
                const relatedService = servicesBySlug[slug];

                return (
                  <Link
                    key={slug}
                    href={relatedService.path}
                    className="block rounded-[1.5rem] border border-white/12 bg-white/7 px-5 py-4 transition hover:border-white/25 hover:bg-white/10"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {relatedService.shortName}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">
                      {relatedService.teaser}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
