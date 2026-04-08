import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

export type ServiceSlug =
  | "gebaeudereinigung-winterthur"
  | "umzug-transport-winterthur"
  | "raeumung-entsorgung-winterthur"
  | "renovation-abbruch-winterthur"
  | "gartenpflege-winterthur";

export type ServiceDetail = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  path: `/${ServiceSlug}`;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  teaser: string;
  intro: string[];
  deliverables: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  process: string[];
  related: ServiceSlug[];
  galleryLabel: string;
};

export const siteConfig = {
  name: "SwissPro Allround Service",
  legalName: "SwissPro Allround Service GmbH",
  defaultTitle:
    "SwissPro Allround Service GmbH – Reinigung, Umzug & Renovation in Winterthur",
  defaultDescription:
    "Ihr zuverlässiger Partner für Gebäudereinigung, Umzug, Renovation und Hauswartung in Winterthur und der Ostschweiz. Jetzt kostenlose Offerte anfragen!",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.swisspro-as.ch",
  email: "info@swisspro-as.ch",
  phones: ["052 229 50 90", "079 879 21 31"],
  address: {
    street: "Fröschenweidstrasse 10",
    postalCode: "8404",
    city: "Winterthur",
    country: "Schweiz",
  },
  serviceArea: ["Winterthur", "Zürich", "Ostschweiz"],
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SwissPro%20Allround%20Service%20GmbH%20Winterthur",
} as const;

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Über Uns", href: "/#ueber-uns" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Galerie", href: "/galerie" },
  { label: "Offerte", href: "/offerte" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const services: ServiceDetail[] = [
  {
    slug: "gebaeudereinigung-winterthur",
    name: "Gebäudereinigung & Spezialreinigung",
    shortName: "Gebäudereinigung",
    path: "/gebaeudereinigung-winterthur",
    metaTitle: "Gebäudereinigung in Winterthur | SwissPro Allround Service GmbH",
    metaDescription:
      "Gebäudereinigung in Winterthur für Wohnungen, Büros und Spezialfälle. SwissPro übernimmt saubere, planbare Einsätze für Privat- und Geschäftskunden.",
    kicker: "Reinigung",
    teaser:
      "Saubere Räume, klare Abläufe und Reinigungsleistungen, die sich an Objekt, Nutzung und Terminplan orientieren.",
    intro: [
      "SwissPro übernimmt Gebäudereinigungen in Winterthur für Wohn- und Gewerbeflächen, Treppenhäuser, Endreinigungen nach Umzug sowie Einsätze nach Umbau oder Räumung.",
      "Der Vorteil liegt in der Kombination mit weiteren Leistungen: Wenn Reinigung, Transport, Entsorgung oder kleinere Renovationsarbeiten ineinandergreifen, bleibt die Koordination bei einer Ansprechperson.",
    ],
    deliverables: [
      "Unterhaltsreinigung für Wohn- und Gewerbeflächen",
      "Umzugs- und Abgabereinigung",
      "Fenster-, Glas- und Treppenhausreinigung",
      "Reinigung nach Räumung, Umbau oder Spezialarbeiten",
    ],
    benefits: [
      {
        title: "Planbare Sauberkeit",
        description:
          "Reinigungsumfang, Zeitpunkt und Erwartung werden vorab klar festgelegt.",
      },
      {
        title: "Weniger Schnittstellen",
        description:
          "Reinigung lässt sich direkt mit Räumung, Transport oder Renovation kombinieren.",
      },
      {
        title: "Geeignet für Privat und Gewerbe",
        description:
          "Wohnungen, Einfamilienhäuser, Büros und kleinere Gewerbeobjekte werden passend organisiert.",
      },
    ],
    process: [
      "Anfrage, Objektart und gewünschtes Resultat aufnehmen",
      "Umfang per Besichtigung oder Fotobasis klären",
      "Reinigung termin- und objektgerecht umsetzen",
    ],
    related: [
      "umzug-transport-winterthur",
      "raeumung-entsorgung-winterthur",
      "renovation-abbruch-winterthur",
    ],
    galleryLabel: "Reinigung",
  },
  {
    slug: "umzug-transport-winterthur",
    name: "Umzug & Transport",
    shortName: "Umzug & Transport",
    path: "/umzug-transport-winterthur",
    metaTitle: "Umzug & Transport in Winterthur | SwissPro Allround Service GmbH",
    metaDescription:
      "Umzug und Transport in Winterthur mit koordinierter Unterstützung für Privatpersonen, Familien und Unternehmen. SwissPro plant sauber und termingerecht.",
    kicker: "Umzug",
    teaser:
      "Strukturierte Umzüge und Transporte mit klaren Abläufen, damit Termine, Zufahrten und Übergaben sauber funktionieren.",
    intro: [
      "Ob Wohnungswechsel, interner Büroumzug oder Transport einzelner Möbelstücke: SwissPro plant Einsätze so, dass Zufahrten, Zeitfenster und Übergaben in Winterthur ohne unnötige Reibung funktionieren.",
      "Wenn zusätzlich eine Endreinigung, Räumung oder kleinere Rückbauarbeiten nötig sind, wird der Ablauf direkt mitgedacht. Das spart Abstimmung und verhindert Leerlauf zwischen mehreren Dienstleistern.",
    ],
    deliverables: [
      "Privat- und Firmenumzüge",
      "Möbel- und Einzeltransporte",
      "Demontage und einfache Montagearbeiten",
      "Kombinierte Umzugs-, Reinigungs- und Entsorgungsabläufe",
    ],
    benefits: [
      {
        title: "Ein Ansprechpartner",
        description:
          "Transport, Reinigung und Entsorgung lassen sich in einem Ablauf koordinieren.",
      },
      {
        title: "Terminsicherheit",
        description:
          "Zeitfenster für Übergabe, Bezug oder interne Verschiebungen werden mitgedacht.",
      },
      {
        title: "Passend für Privathaushalte und Betriebe",
        description:
          "Vom Wohnungswechsel bis zum Standortwechsel kleiner Teams.",
      },
    ],
    process: [
      "Umfang, Ladeorte und Wunschdatum besprechen",
      "Zugang, Volumen und Zusatzarbeiten klären",
      "Transport mit abgestimmter Reihenfolge umsetzen",
    ],
    related: [
      "gebaeudereinigung-winterthur",
      "raeumung-entsorgung-winterthur",
      "renovation-abbruch-winterthur",
    ],
    galleryLabel: "Umzug",
  },
  {
    slug: "raeumung-entsorgung-winterthur",
    name: "Räumung & Entsorgung",
    shortName: "Räumung & Entsorgung",
    path: "/raeumung-entsorgung-winterthur",
    metaTitle:
      "Räumung & Entsorgung in Winterthur | SwissPro Allround Service GmbH",
    metaDescription:
      "Räumung und Entsorgung in Winterthur für Wohnungen, Keller, Gewerberäume und Übergaben. SwissPro organisiert besenreine Abläufe mit sauberer Trennung.",
    kicker: "Räumung",
    teaser:
      "Besenreine Räumungen und geordnete Entsorgung, wenn Flächen frei, leer oder übergabebereit sein müssen.",
    intro: [
      "Bei einer Räumung zählt nicht nur Tempo, sondern vor allem Struktur. SwissPro organisiert Räumungen in Winterthur so, dass Möbel, Hausrat, Restmaterial und verwertbare Stoffe nachvollziehbar getrennt und abgeführt werden.",
      "Besonders sinnvoll ist das bei Wohnungsauflösungen, Nachlasssituationen, Keller- und Estrichräumungen oder Gewerbeflächen, die vor einer Reinigung, Renovation oder Rückgabe frei gemacht werden müssen.",
    ],
    deliverables: [
      "Wohnungs-, Keller- und Estrichräumungen",
      "Räumungen von Gewerbe- und Nebenflächen",
      "Trennung, Abtransport und fachgerechte Entsorgung",
      "Besenreine Übergabe als Vorbereitung für Folgeschritte",
    ],
    benefits: [
      {
        title: "Geordneter Ablauf",
        description:
          "Auch komplexere Räumungen bleiben nachvollziehbar, statt improvisiert zu laufen.",
      },
      {
        title: "Sinnvolle Kombinationen",
        description:
          "Nach der Räumung können Reinigung, Rückbau oder Hauswartung direkt anschliessen.",
      },
      {
        title: "Entlastung vor Übergaben",
        description:
          "Flächen werden so vorbereitet, dass Eigentümer, Verwaltungen oder Nachmieter übernehmen können.",
      },
    ],
    process: [
      "Bestand aufnehmen und Räumungsumfang definieren",
      "Zugang, Entsorgungswege und Termin festlegen",
      "Räumen, abführen und Fläche für den nächsten Schritt vorbereiten",
    ],
    related: [
      "gebaeudereinigung-winterthur",
      "renovation-abbruch-winterthur",
      "umzug-transport-winterthur",
    ],
    galleryLabel: "Räumung",
  },
  {
    slug: "renovation-abbruch-winterthur",
    name: "Renovation & Abbruch",
    shortName: "Renovation & Abbruch",
    path: "/renovation-abbruch-winterthur",
    metaTitle:
      "Renovation & Abbruch in Winterthur | SwissPro Allround Service GmbH",
    metaDescription:
      "Renovation und Abbruch in Winterthur mit sauber geplantem Rückbau, Koordination und Vorbereitung für den nächsten Ausbauschritt.",
    kicker: "Renovation",
    teaser:
      "Selektiver Rückbau und kleinere Renovationsarbeiten mit Fokus auf Vorbereitung, Ordnung und saubere Übergänge.",
    intro: [
      "SwissPro begleitet Renovations- und Abbrucharbeiten dort, wo Räume vorbereitet, Bauteile entfernt oder kleinere Eingriffe sauber koordiniert werden müssen.",
      "Gerade bei bewohnten oder laufend genutzten Objekten ist ein kontrollierter Ablauf entscheidend. Deshalb werden Schutz, Zugang, Materialabfuhr und Reinigung frühzeitig mitgedacht.",
    ],
    deliverables: [
      "Kleinere Renovationsarbeiten im Bestand",
      "Selektiver Abbruch und Rückbau",
      "Demontagen und Vorbereitung für Folgegewerke",
      "Abtransport, Entsorgung und Schlussreinigung nach Bedarf",
    ],
    benefits: [
      {
        title: "Saubere Vorbereitung",
        description:
          "Rückbau, Materialabfuhr und Nachreinigung greifen ineinander.",
      },
      {
        title: "Weniger Koordinationsaufwand",
        description:
          "Für kleinere bis mittlere Vorhaben bleibt der organisatorische Aufwand schlank.",
      },
      {
        title: "Geeignet für Umbauphasen",
        description:
          "Vorbereitende Arbeiten werden so getaktet, dass Folgegewerke schneller übernehmen können.",
      },
    ],
    process: [
      "Bauteile, Schutzbedarf und Zielzustand abstimmen",
      "Rückbau- oder Renovationsumfang sauber planen",
      "Arbeiten ausführen, Material abführen und Fläche übergabebereit machen",
    ],
    related: [
      "raeumung-entsorgung-winterthur",
      "gebaeudereinigung-winterthur",
      "gartenpflege-winterthur",
    ],
    galleryLabel: "Renovation",
  },
  {
    slug: "gartenpflege-winterthur",
    name: "Hauswartung",
    shortName: "Hauswartung",
    path: "/gartenpflege-winterthur",
    metaTitle: "Hauswartung in Winterthur | SwissPro Allround Service GmbH",
    metaDescription:
      "Hauswartung in Winterthur für regelmässigen Unterhalt, Betreuung von Liegenschaften und koordinierte Serviceeinsätze rund ums Objekt.",
    kicker: "Hauswartung",
    teaser:
      "Regelmässiger Objektunterhalt für Wohnhäuser, Mehrfamilienhäuser und kleinere Gewerbeliegenschaften mit klaren Abläufen und einer Ansprechperson.",
    intro: [
      "SwissPro übernimmt Hauswartung in Winterthur für regelmässigen Unterhalt, wiederkehrende Kontrollgänge und koordinierte Einsätze rund um Liegenschaften.",
      "Besonders sinnvoll ist das, wenn Reinigung, Räumung, kleinere Unterhaltsarbeiten oder die Betreuung gemeinsamer Bereiche zusammenspielen sollen. So bleiben Abläufe für Eigentümer und Verwaltungen übersichtlich.",
    ],
    deliverables: [
      "Regelmässige Hauswartung und Kontrollgänge",
      "Betreuung von Allgemeinflächen und Objektumfeld",
      "Kleinere Unterhalts- und Koordinationsarbeiten",
      "Kombinierbare Einsätze mit Reinigung, Räumung oder Renovation",
    ],
    benefits: [
      {
        title: "Gepflegter Gesamteindruck",
        description:
          "Liegenschaften wirken sauber, betreut und organisatorisch gut geführt.",
      },
      {
        title: "Weniger Abstimmung",
        description:
          "Wiederkehrende Aufgaben lassen sich über eine Stelle koordinieren.",
      },
      {
        title: "Praktisch für Verwaltungen und Eigentümer",
        description:
          "Wiederkehrende Arbeiten können mit anderen Services kombiniert werden.",
      },
    ],
    process: [
      "Betreuungsumfang und Rhythmus abstimmen",
      "Liegenschaft, Zugänge und Zuständigkeiten prüfen",
      "Hauswartung planbar und objektspezifisch durchführen",
    ],
    related: [
      "renovation-abbruch-winterthur",
      "gebaeudereinigung-winterthur",
      "raeumung-entsorgung-winterthur",
    ],
    galleryLabel: "Hauswartung",
  },
] as const;

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDetail>;

export const serviceHighlights = [
  "Standort Winterthur",
  "Einsätze in Zürich & Ostschweiz",
  "Koordinierte Allround-Lösungen",
  "Kostenlose Offerte statt Pauschalversprechen",
] as const;

export const galleryCategories = [
  "Alle",
  "Reinigung",
  "Umzug",
  "Räumung",
  "Renovation",
  "Hauswartung",
] as const;

export const galleryItems = [
  {
    id: "gal-1",
    category: "Reinigung",
    title: "Endreinigung nach Auszug",
    description: "Saubere Übergabe einer Wohnung in Winterthur.",
  },
  {
    id: "gal-2",
    category: "Umzug",
    title: "Wohnungsumzug mit Transport",
    description: "Geordneter Ablauf für Ein- und Auszug.",
  },
  {
    id: "gal-3",
    category: "Renovation",
    title: "Rückbau und Vorbereitung",
    description: "Selektive Arbeiten als Basis für den nächsten Ausbauschritt.",
  },
  {
    id: "gal-4",
    category: "Hauswartung",
    title: "Hauswartung bei Liegenschaften",
    description: "Regelmässiger Unterhalt rund um Gebäude und Umfeld.",
  },
  {
    id: "gal-5",
    category: "Räumung",
    title: "Räumung und Entsorgung",
    description: "Freimachen und Vorbereiten von Wohn- und Nebenflächen.",
  },
  {
    id: "gal-6",
    category: "Reinigung",
    title: "Spezialreinigung",
    description: "Gezielte Reinigung für besondere Anforderungen.",
  },
  {
    id: "gal-7",
    category: "Umzug",
    title: "Transportservice",
    description: "Koordinierter Möbel- und Materialtransport.",
  },
  {
    id: "gal-8",
    category: "Hauswartung",
    title: "Objektunterhalt im Aussenbereich",
    description: "Koordinierter Unterhalt passend zur Liegenschaft und Saison.",
  },
] as const;

export const beforeAfterSlides = [
  {
    id: "before-after-1",
    title: "Wohnungsreinigung nach Auszug",
    description: "Vorbereitung für eine saubere und termingerechte Übergabe.",
  },
  {
    id: "before-after-2",
    title: "Räumung mit anschliessender Vorbereitung",
    description: "Freigemachte Flächen als Basis für Reinigung oder Rückbau.",
  },
  {
    id: "before-after-3",
    title: "Hauswartung im Aussenbereich",
    description: "Gepflegte Flächen und betreute Objektumgebung für einen ordentlichen Gesamteindruck.",
  },
] as const;

export const wizardOptions = {
  services: [
    {
      value: "Gebäudereinigung & Spezialreinigung",
      label: "Reinigung",
      description: "Unterhalts-, End- oder Spezialreinigung",
    },
    {
      value: "Umzug & Transport",
      label: "Umzug",
      description: "Wohnungswechsel, Transporte oder Möbellogistik",
    },
    {
      value: "Räumung & Entsorgung",
      label: "Räumung",
      description: "Wohnungen, Keller, Estrich oder Gewerbeflächen",
    },
    {
      value: "Renovation & Abbruch",
      label: "Renovation",
      description: "Rückbau, Demontage oder vorbereitende Arbeiten",
    },
    {
      value: "Hauswartung",
      label: "Hauswartung",
      description: "Regelmässiger Unterhalt und Betreuung von Liegenschaften",
    },
    {
      value: "Anderes",
      label: "Anderes",
      description: "Auftrag kurz beschreiben, wir prüfen die passende Lösung",
    },
  ],
  propertyTypes: [
    {
      value: "Einfamilienhaus",
      label: "Einfamilienhaus",
      description: "Ganzes Haus mit Innen- und Aussenbereichen",
    },
    {
      value: "Wohnung",
      label: "Wohnung",
      description: "Studio bis Mehrzimmerwohnung",
    },
    {
      value: "Gewerbe",
      label: "Gewerbe",
      description: "Büro, Laden, Praxis oder kleinere Gewerbefläche",
    },
    {
      value: "Anderes",
      label: "Anderes",
      description: "Spezialobjekt oder gemischte Nutzung",
    },
  ],
  sizes: [
    { value: "< 50m²", label: "< 50m²" },
    { value: "50–100m²", label: "50–100m²" },
    { value: "100–200m²", label: "100–200m²" },
    { value: "> 200m²", label: "> 200m²" },
  ],
  timelines: [
    { value: "Sofort", label: "Sofort" },
    { value: "Innerhalb 30 Tagen", label: "Innerhalb 30 Tagen" },
    { value: "1–3 Monate", label: "1–3 Monate" },
    { value: "Noch offen", label: "Noch offen" },
  ],
  siteVisit: [
    { value: "Ja", label: "Ja" },
    { value: "Nein", label: "Nein" },
  ],
} as const;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.legalName,
      locale: "de_CH",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: siteConfig.legalName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function serviceMetadata(service: ServiceDetail) {
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
  });
}
