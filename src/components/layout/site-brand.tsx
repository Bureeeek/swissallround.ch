"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteMedia } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SiteBrand({
  className,
  compact = false,
  inverse = false,
}: {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
}) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_rgba(26,79,189,0.14)] ring-1 ring-[rgba(18,48,84,0.08)]",
          compact ? "h-11 w-11" : "h-12 w-12",
          logoFailed && "bg-[var(--primary)] text-white",
        )}
      >
        {!logoFailed ? (
          <Image
            src={siteMedia.logo.src}
            alt={siteMedia.logo.alt}
            fill
            sizes="48px"
            className="object-cover"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="text-lg font-black tracking-[0.16em]">SP</span>
        )}
      </div>
      <div className="min-w-0">
        <div
          className={cn(
            "truncate text-sm font-semibold uppercase tracking-[0.22em]",
            inverse ? "text-white" : "text-[var(--primary)]",
          )}
        >
          SwissPro
        </div>
        <div
          className={cn(
            "truncate text-sm",
            inverse ? "text-white/78" : "text-[var(--muted)]",
          )}
        >
          Allround Service GmbH
        </div>
      </div>
    </Link>
  );
}
