import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise der SwissPro Allround Service GmbH für Website, Kontaktformular und Offerte-Anfragen.",
  path: "/datenschutz",
});

export default function PrivacyPage() {
  return (
    <main className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="prose-swiss mx-auto max-w-4xl rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_55px_rgba(12,41,98,0.08)] sm:px-10 sm:py-12">
        <h1>Datenschutz</h1>
        <p>
          Diese Datenschutzerklärung beschreibt, wie personenbezogene Daten auf
          der Website der {siteConfig.legalName} verarbeitet werden.
        </p>

        <h2>Verantwortliche Stelle</h2>
        <p>
          {siteConfig.legalName}
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.city}
          <br />
          E-Mail: {siteConfig.email}
        </p>

        <h2>Welche Daten verarbeitet werden</h2>
        <p>
          Beim Besuch dieser Website können technisch notwendige Verbindungs- und
          Serverdaten anfallen. Wenn Sie das Kontaktformular oder den
          Offerte-Konfigurator nutzen, werden die von Ihnen eingegebenen
          Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.
        </p>

        <h2>Zweck der Verarbeitung</h2>
        <ul>
          <li>Bearbeitung von Kontaktanfragen</li>
          <li>Erstellung und Nachverfolgung von Offerten</li>
          <li>Technischer Betrieb und Sicherheit der Website</li>
        </ul>

        <h2>Formulare und E-Mail-Versand</h2>
        <p>
          Angaben aus Formularen werden serverseitig verarbeitet und an die
          offizielle Empfangsadresse von SwissPro weitergeleitet. Ohne
          funktionsfähige Mail-Konfiguration wird keine irreführende
          Erfolgsmeldung angezeigt.
        </p>

        <h2>Cookies und Browser-Speicher</h2>
        <p>
          Aktuell verwendet diese Website nur technisch notwendige
          Browser-Speicherfunktionen, beispielsweise zum Ausblenden des
          Datenschutzhinweises. Analyse- oder Marketing-Tools sind nicht aktiv.
        </p>

        <h2>Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange aufbewahrt, wie dies für die
          Bearbeitung der Anfrage, gesetzliche Pflichten oder berechtigte
          betriebliche Interessen erforderlich ist.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie können Auskunft über gespeicherte Daten verlangen sowie Berichtigung
          oder Löschung beantragen, soweit keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>Änderungen</h2>
        <p>
          Diese Datenschutzerklärung kann angepasst werden, wenn sich Website,
          eingesetzte Dienste oder rechtliche Anforderungen ändern.
        </p>
      </div>
    </main>
  );
}
