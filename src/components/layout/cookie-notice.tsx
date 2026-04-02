"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ActionButton } from "@/components/ui/button";

const STORAGE_KEY = "swisspro-cookie-notice-ack";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setVisible(stored !== "true");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-4xl rounded-[1.75rem] border border-white/45 bg-[rgba(8,17,38,0.9)] p-5 text-sm text-white shadow-[0_25px_70px_rgba(6,16,39,0.45)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Datenschutz-Hinweis
          </p>
          <p className="max-w-2xl text-sm leading-7 text-white/78">
            Diese Website verwendet aktuell nur technisch notwendige
            Browser-Speicherfunktionen für Navigation und Formularstatus. Es
            wird kein Analyse- oder Marketing-Tracking ohne zusätzliche
            Einwilligung aktiviert.
          </p>
          <Link
            href="/datenschutz"
            className="inline-flex text-sm font-semibold text-white underline underline-offset-4 transition hover:text-[var(--accent)]"
          >
            Datenschutzseite ansehen
          </Link>
        </div>
        <ActionButton
          type="button"
          variant="secondary"
          className="bg-white text-[var(--foreground)]"
          onClick={() => {
            window.localStorage.setItem(STORAGE_KEY, "true");
            setVisible(false);
          }}
        >
          Hinweis schliessen
        </ActionButton>
      </div>
    </div>
  );
}
