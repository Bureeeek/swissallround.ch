"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function PlaceholderMedia({
  title,
  hint,
  alt,
  className,
  tone = "blue",
  align = "end",
  imageSrc,
  priority = false,
  children,
}: {
  title: string;
  hint?: string;
  alt: string;
  className?: string;
  tone?: "blue" | "light" | "dark";
  align?: "start" | "end";
  imageSrc?: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  const toneClasses =
    tone === "light"
      ? "from-white via-[rgba(231,239,250,0.92)] to-[rgba(199,219,248,0.88)]"
      : tone === "dark"
        ? "from-[rgba(8,17,38,0.95)] via-[rgba(19,45,102,0.96)] to-[rgba(14,34,81,0.95)]"
        : "from-[rgba(14,34,81,0.96)] via-[rgba(26,79,189,0.9)] to-[rgba(126,182,255,0.82)]";
  const hasImage = Boolean(imageSrc) && !failed;

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] shadow-[0_25px_70px_rgba(12,41,98,0.18)]",
        className,
      )}
    >
      {hasImage ? (
        <>
          <Image
            src={imageSrc!}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,38,0.14),rgba(8,17,38,0.46)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_28%)]" />
        </>
      ) : (
        <>
          <div className={cn("absolute inset-0 bg-gradient-to-br", toneClasses)} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_45%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:auto,auto,28px_28px,28px_28px] opacity-80" />
        </>
      )}
      <div
        className={cn(
          "relative flex h-full min-h-[18rem] flex-col justify-end p-6 text-white",
          align === "start" && "justify-start pt-24",
        )}
      >
        <div className="max-w-sm">
          <h3 className="mb-3 text-xl font-semibold uppercase tracking-[0.06em] text-white sm:text-2xl">
            {title}
          </h3>
          {hint ? (
            <p className="max-w-sm text-sm leading-6 text-white/80">{hint}</p>
          ) : null}
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </div>
  );
}
