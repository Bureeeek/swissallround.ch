import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-5 pt-8 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(14,34,81,0.96),rgba(26,79,189,0.94))] px-6 py-10 text-white shadow-[0_30px_80px_rgba(12,41,98,0.2)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {eyebrow}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>
          </div>
          {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {aside ? (
          <div className="flex h-full items-stretch justify-end">{aside}</div>
        ) : null}
      </div>
    </section>
  );
}
