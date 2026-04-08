"use client";

import Image from "next/image";
import { useState } from "react";

import { LinkButton } from "@/components/ui/button";
import { siteMedia } from "@/lib/media";

export function HeroSection() {
  const [heroImageFailed, setHeroImageFailed] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#0a1327,#102d68)]">
      {!heroImageFailed ? (
        <Image
          src={siteMedia.hero.src}
          alt={siteMedia.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={() => setHeroImageFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0.34),rgba(6,12,24,0.2)_24%,rgba(6,12,24,0.56)_66%,rgba(6,12,24,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:160px_160px] opacity-20" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[92rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-6xl space-y-6">
          <div className="space-y-3">
            <p className="text-base font-medium text-white/86 sm:text-lg">
              SwissPro Allround Service GmbH
            </p>
            <h1 className="font-display max-w-6xl text-[clamp(4.5rem,11vw,9.6rem)] uppercase leading-[0.88] tracking-[-0.05em] text-white drop-shadow-[0_10px_32px_rgba(0,0,0,0.28)]">
              Ihr
              <br />
              zuverlässiger
              <br />
              Allround-
              <br />
              Partner
            </h1>
          </div>
          <p className="max-w-3xl text-base leading-8 text-white/84 sm:text-lg">
            Professionell. Termingerecht. Aus einer Hand. Reinigung, Umzug,
            Räumung, Renovation und Hauswartung für Winterthur, Zürich und die
            Ostschweiz.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/offerte"
              className="font-display min-w-[12rem] !bg-[rgba(26,79,189,0.92)] !text-white shadow-[0_20px_40px_rgba(8,17,38,0.26)] hover:!bg-[rgba(26,79,189,1)]"
            >
              Offerte anfragen
            </LinkButton>
            <LinkButton
              href="/dienstleistungen"
              className="font-display min-w-[12rem] !bg-white/12 !text-white ring-1 ring-white/24 backdrop-blur hover:!bg-white/18"
            >
              Unsere Leistungen
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
