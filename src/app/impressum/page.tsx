import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Impressum",
  description:
    "Impressum der SwissPro Allround Service GmbH mit Kontaktdaten und Standort in Winterthur.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <main className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="prose-swiss mx-auto max-w-4xl rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:px-10 sm:py-12">
        <h1>Impressum</h1>
        <p>
          Dieses Impressum gilt für die Website der SwissPro Allround Service
          GmbH.
        </p>

        <h2>Unternehmen</h2>
        <p>
          {siteConfig.legalName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
          <br />
          {siteConfig.address.country}
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: {siteConfig.email}
          <br />
          Telefon: {siteConfig.phones.join(" / ")}
        </p>

        <h2>Inhalt der Website</h2>
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Änderungen an
          Dienstleistungen, Einsatzgebieten oder Verfügbarkeiten bleiben
          vorbehalten.
        </p>

        <h2>Haftung</h2>
        <p>
          Trotz sorgfältiger Kontrolle wird keine Haftung für externe Inhalte
          übernommen. Für verlinkte Seiten sind ausschliesslich deren Betreiber
          verantwortlich.
        </p>
      </div>
    </main>
  );
}
