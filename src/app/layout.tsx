import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import "./globals.css";

import { CookieNotice } from "@/components/layout/cookie-notice";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LocalBusinessSchema } from "@/components/shared/local-business-schema";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.legalName,
    url: siteConfig.url,
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: siteConfig.legalName,
  category: "local business",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        <LocalBusinessSchema />
        <SiteHeader />
        <div className="flex min-h-[calc(100vh-5rem)] flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <CookieNotice />
      </body>
    </html>
  );
}
