import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { LinkButton } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { siteMedia } from "@/lib/media";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Galerie und Projektbeispiele",
  description:
    "Galerie von SwissPro Allround Service GmbH mit Projektbildern aus Reinigung, Umzug, Räumung, Renovation und Gartenpflege.",
  path: "/galerie",
});

export default function GalleryPage() {
  return (
    <main className="pb-20">
      <section className="px-5 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Galerie
            </div>
            <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Einblicke in ausgewählte Arbeiten von SwissPro
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Eine Auswahl an Bildern aus Reinigung, Umzug, Räumung, Renovation
              und Gartenpflege. Über die Filter gelangen Sie direkt zum passenden
              Bereich.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/offerte">Offerte anfragen</LinkButton>
              <LinkButton href="/kontakt" variant="ghost">
                Kontakt aufnehmen
              </LinkButton>
            </div>
          </div>
          <PlaceholderMedia
            title="Galerie-Teaser"
            hint="Projektbilder aus unterschiedlichen Einsatzbereichen von SwissPro."
            alt={siteMedia.galleryHero.alt}
            imageSrc={siteMedia.galleryHero.src}
            className="min-h-[26rem]"
            tone="dark"
          />
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
