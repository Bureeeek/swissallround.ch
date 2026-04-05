"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SiteBrand } from "@/components/layout/site-brand";
import { LinkButton } from "@/components/ui/button";
import { navigationItems } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.includes("#")) {
    return false;
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "inset-x-0 top-0 z-50",
          isHome
            ? "absolute bg-[linear-gradient(180deg,rgba(7,15,30,0.72),rgba(7,15,30,0.34)_62%,rgba(7,15,30,0))]"
            : "sticky border-b border-white/40 bg-[rgba(245,248,253,0.88)] backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <SiteBrand inverse={isHome} />

          <nav className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-display relative text-lg uppercase tracking-[0.04em] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
                  isHome
                    ? "!text-white hover:!text-white"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]",
                )}
              >
                {item.label}
                {isActive(pathname, item.href) ? (
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-0.5 w-full",
                      isHome ? "bg-white" : "bg-[var(--primary)]",
                    )}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <LinkButton
              href="/offerte"
              className={cn(
                "font-display min-w-[10rem] uppercase tracking-[0.06em]",
                isHome &&
                  "!bg-[rgba(26,79,189,0.88)] !text-white ring-1 ring-white/24 shadow-none backdrop-blur hover:!bg-[rgba(26,79,189,0.98)]",
              )}
            >
              Offerte
            </LinkButton>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setMobileOpen((current) => !current)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition lg:hidden",
              isHome
                ? "border-white/20 bg-white/10 text-white backdrop-blur"
                : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)]",
            )}
          >
            {mobileOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(6,16,39,0.55)] backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-4 rounded-[2rem] border border-white/35 bg-[rgba(8,17,38,0.96)] p-6 text-white shadow-[0_25px_70px_rgba(12,41,98,0.22)] backdrop-blur-xl transition-all duration-200",
            isHome ? "top-24" : "top-[5.4rem]",
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-display rounded-2xl px-4 py-3 text-lg uppercase tracking-[0.04em]",
                  isActive(pathname, item.href)
                    ? "bg-white/10 text-white"
                    : "text-white/82 hover:bg-white/6",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <LinkButton
              href="/offerte"
              className="w-full bg-white text-[var(--foreground)] shadow-none hover:bg-white/90"
            >
              Offerte anfragen
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
