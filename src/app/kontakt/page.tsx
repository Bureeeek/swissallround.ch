import { ContactForm } from "@/components/kontakt/contact-form";
import { LinkButton } from "@/components/ui/button";
import { pageMetadata, siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontaktieren Sie SwissPro Allround Service GmbH in Winterthur für Reinigung, Umzug, Räumung, Renovation oder Hauswartung.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <main className="pb-20">
      <section className="px-5 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-14">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Kontakt
            </div>
            <h1 className="text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Direkt anfragen, Rückruf vereinbaren oder Besichtigung abstimmen
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Für allgemeine Anfragen, Rückfragen zur Offerte oder eine direkte
              Terminabstimmung erreichen Sie SwissPro telefonisch, per E-Mail
              oder über das Kontaktformular.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/offerte">Zur Offerte</LinkButton>
              <LinkButton href={`mailto:${siteConfig.email}`} variant="ghost">
                E-Mail senden
              </LinkButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/16 bg-white/8 p-6">
            <div className="space-y-3 text-sm leading-7 text-white/78">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p>{siteConfig.email}</p>
              {siteConfig.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <ContactForm />
          <div className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_55px_rgba(12,41,98,0.08)]">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                SwissPro Allround Service GmbH
              </h2>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              {siteConfig.phones.map((phone) => (
                <p key={phone} className="text-sm leading-7 text-[var(--muted)]">
                  <a href={formatPhoneHref(phone)}>{phone}</a>
                </p>
              ))}
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-[var(--border)]">
              <iframe
                title="Standort SwissPro Allround Service GmbH"
                src="https://www.google.com/maps?q=Fr%C3%B6schenweidstrasse%2010%2C%208404%20Winterthur&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
