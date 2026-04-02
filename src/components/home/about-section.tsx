import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteMedia } from "@/lib/media";
import { serviceHighlights } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="ueber-uns" className="px-5 pt-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Über SwissPro"
            title="Ein Ansprechpartner für Leistungen, die im Alltag zusammenfallen"
            description="SwissPro ist dann stark, wenn Reinigung, Umzug, Räumung, Rückbau oder Gartenunterhalt nicht isoliert betrachtet werden sollen."
          />
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              Viele Projekte scheitern nicht an der einzelnen Arbeit, sondern an
              den Übergängen dazwischen. Genau dort setzt SwissPro an: mit
              koordinierten Abläufen für Objekte, die vorbereitet, übergeben,
              gereinigt, geräumt oder gepflegt werden müssen.
            </p>
            <p>
              Statt mehrere Anbieter einzeln zu steuern, erhalten Kundinnen und
              Kunden eine klare Offerte, eine definierte Reihenfolge und eine
              Ansprechperson, die die Leistungen zusammenführt.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm font-medium text-[var(--foreground)] shadow-[0_20px_55px_rgba(12,41,98,0.08)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <PlaceholderMedia
          title="SwissPro im Einsatz"
          hint="Zuverlässige Einsätze für Privatkunden, Unternehmen und Verwaltungen."
          alt={siteMedia.about.alt}
          className="min-h-[30rem]"
          tone="light"
          align="start"
          imageSrc={siteMedia.about.src}
        />
      </Reveal>
    </section>
  );
}
