"use client";

import { useState } from "react";

import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { galleryMedia } from "@/lib/media";
import { galleryCategories, galleryItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof galleryCategories)[number]>("Alle");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "Alle"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const activeItem =
    filteredItems.find((item) => item.id === activeItemId) ||
    galleryItems.find((item) => item.id === activeItemId) ||
    null;

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              activeCategory === category
                ? "bg-[var(--primary)] text-white shadow-[0_16px_38px_rgba(26,79,189,0.22)]"
                : "border border-[var(--border)] bg-white text-[var(--muted)] hover:text-[var(--foreground)]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 xl:columns-3">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItemId(item.id)}
            className={cn(
              "mb-5 block w-full break-inside-avoid text-left",
              index % 3 === 0 ? "lg:pt-0" : "",
            )}
          >
            <PlaceholderMedia
              title={item.title}
              hint={item.description}
              alt={galleryMedia[item.id]?.alt || item.title}
              imageSrc={galleryMedia[item.id]?.src}
              className={cn(
                "min-h-[20rem]",
                index % 3 === 1 && "min-h-[24rem]",
                index % 3 === 2 && "min-h-[22rem]",
              )}
              tone={index % 2 === 0 ? "dark" : "blue"}
            >
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/88">
                {item.category}
              </span>
            </PlaceholderMedia>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 bg-[rgba(6,16,39,0.74)] p-4 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-5xl items-center">
            <div className="relative w-full rounded-[2rem] border border-white/16 bg-[var(--surface)] p-4 shadow-[0_30px_90px_rgba(6,16,39,0.35)] sm:p-6">
              <button
                type="button"
                onClick={() => setActiveItemId(null)}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)]"
                aria-label="Lightbox schliessen"
              >
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
              </button>
              <PlaceholderMedia
                title={activeItem.title}
                hint={activeItem.description}
                alt={galleryMedia[activeItem.id]?.alt || activeItem.title}
                imageSrc={galleryMedia[activeItem.id]?.src}
                className="min-h-[55svh]"
                tone="dark"
              >
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/88">
                  {activeItem.category}
                </div>
              </PlaceholderMedia>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
