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
  const showLogo = !logoFailed;

  return (
    <Link
      href="/"
      aria-label="SwissPro Allround Service GmbH Startseite"
      className={cn("group flex min-w-0 items-center", className)}
    >
      {showLogo ? (
        <div
          className={cn(
            "relative shrink-0",
            compact
              ? "h-7 w-[8.85rem]"
              : "h-8 w-[10.9rem] sm:h-9 sm:w-[12.5rem]",
          )}
        >
          <Image
            src={siteMedia.logo.src}
            alt={siteMedia.logo.alt}
            fill
            priority={inverse}
            sizes={compact ? "142px" : "(max-width: 640px) 156px, 176px"}
            className={cn(
              "origin-left object-contain object-left scale-[1.08]",
              inverse &&
                "brightness-0 invert drop-shadow-[0_8px_24px_rgba(0,0,0,0.32)]",
            )}
            onError={() => setLogoFailed(true)}
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center gap-3",
            inverse ? "text-white" : "text-[var(--foreground)]",
          )}
        >
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full text-sm font-black tracking-[0.16em]",
              inverse ? "bg-white/12 text-white" : "bg-[var(--primary)] text-white",
            )}
          >
            SP
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            SwissPro
          </span>
        </div>
      )}
    </Link>
  );
}
