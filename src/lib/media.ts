import type { ServiceSlug } from "@/lib/site";

export const siteMedia = {
  logo: {
    src: "/images/logo/log.png",
    alt: "SwissPro Allround Service GmbH Logo",
  },
  hero: {
    src: "/images/hero/hero-main.jpg",
    alt: "SwissPro Allround Service im Einsatz in Winterthur",
  },
  about: {
    src: "/images/about/about-main.jpg",
    alt: "SwissPro Team-, Objekt- oder Einsatzfoto",
  },
  servicesOverview: {
    src: "/images/pages/dienstleistungen-hero.jpg",
    alt: "SwissPro Dienstleistungen im Überblick",
  },
  galleryHero: {
    src: "/images/pages/galerie-hero.jpg",
    alt: "SwissPro Galerie Hero-Bild",
  },
} as const;

export const serviceMedia: Record<
  ServiceSlug,
  {
    cardSrc: string;
    detailSrc: string;
    alt: string;
  }
> = {
  "gebaeudereinigung-winterthur": {
    cardSrc: "/images/services/gebaeudereinigung-winterthur/card.jpg",
    detailSrc: "/images/services/gebaeudereinigung-winterthur/detail.jpg",
    alt: "Gebaeudereinigung in Winterthur",
  },
  "umzug-transport-winterthur": {
    cardSrc: "/images/services/umzug-transport-winterthur/card.jpg",
    detailSrc: "/images/services/umzug-transport-winterthur/detail.jpg",
    alt: "Umzug und Transport in Winterthur",
  },
  "raeumung-entsorgung-winterthur": {
    cardSrc: "/images/services/raeumung-entsorgung-winterthur/card.jpg",
    detailSrc: "/images/services/raeumung-entsorgung-winterthur/detail.jpg",
    alt: "Raeumung und Entsorgung in Winterthur",
  },
  "renovation-abbruch-winterthur": {
    cardSrc: "/images/services/renovation-abbruch-winterthur/card.jpg",
    detailSrc: "/images/services/renovation-abbruch-winterthur/detail.jpg",
    alt: "Renovation und Abbruch in Winterthur",
  },
  "gartenpflege-winterthur": {
    cardSrc: "/images/services/gartenpflege-winterthur/card.jpg",
    detailSrc: "/images/services/gartenpflege-winterthur/detail.jpg",
    alt: "Hauswartung in Winterthur",
  },
};

export const galleryMedia: Record<
  string,
  {
    src: string;
    alt: string;
  }
> = {
  "gal-1": {
    src: "/images/gallery/gal-1.jpg",
    alt: "Endreinigung Projektfoto",
  },
  "gal-2": {
    src: "/images/gallery/gal-2.jpg",
    alt: "Wohnungsumzug Projektfoto",
  },
  "gal-3": {
    src: "/images/gallery/gal-3.jpg",
    alt: "Rueckbau Projektfoto",
  },
  "gal-4": {
    src: "/images/gallery/gal-4.jpg",
    alt: "Hauswartung Projektfoto",
  },
  "gal-5": {
    src: "/images/gallery/gal-5.jpg",
    alt: "Raeumung Projektfoto",
  },
  "gal-6": {
    src: "/images/gallery/gal-6.jpg",
    alt: "Spezialreinigung Projektfoto",
  },
  "gal-7": {
    src: "/images/gallery/gal-7.jpg",
    alt: "Transport Projektfoto",
  },
  "gal-8": {
    src: "/images/gallery/gal-8.jpg",
    alt: "Saisonpflege Projektfoto",
  },
};

export const beforeAfterMedia: Record<
  string,
  {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
  }
> = {
  "before-after-1": {
    beforeSrc: "/images/before-after/01-before.jpg",
    afterSrc: "/images/before-after/01-after.jpg",
    beforeAlt: "Vorher Bild Wohnungsreinigung nach Auszug",
    afterAlt: "Nachher Bild Wohnungsreinigung nach Auszug",
  },
  "before-after-2": {
    beforeSrc: "/images/before-after/02-before.jpg",
    afterSrc: "/images/before-after/02-after.jpg",
    beforeAlt: "Vorher Bild Raeumung mit Vorbereitung",
    afterAlt: "Nachher Bild Raeumung mit Vorbereitung",
  },
  "before-after-3": {
    beforeSrc: "/images/before-after/03-before.jpg",
    afterSrc: "/images/before-after/03-after.jpg",
    beforeAlt: "Vorher Bild Hauswartung",
    afterAlt: "Nachher Bild Hauswartung",
  },
};
