import Link from "next/link";

import { SiteBrand } from "@/components/layout/site-brand";
import { navigationItems, services, siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(18,48,84,0.08)] bg-[rgba(255,255,255,0.94)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <SiteBrand compact />
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            SwissPro kombiniert Reinigung, Umzug, Räumung, Renovation und
            Gartenpflege für Eigentümer, Verwaltungen, Unternehmen und
            Privathaushalte in Winterthur, Zürich und der Ostschweiz.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Navigation
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Leistungen
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.path}
                  className="transition hover:text-[var(--primary)]"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Kontakt
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--primary)]">
                {siteConfig.email}
              </a>
            </p>
            {siteConfig.phones.map((phone) => (
              <p key={phone}>
                <a href={formatPhoneHref(phone)} className="transition hover:text-[var(--primary)]">
                  {phone}
                </a>
              </p>
            ))}
            <p>
              <a
                href={siteConfig.googleMapsUrl}
                className="transition hover:text-[var(--primary)]"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(18,48,84,0.08)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-[var(--muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 SwissPro Allround Service GmbH</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className="transition hover:text-[var(--primary)]">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition hover:text-[var(--primary)]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
