"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

export function BeforeAfterSlider({
  title,
  description,
  beforeImageSrc,
  afterImageSrc,
  beforeAlt,
  afterAlt,
}: {
  title: string;
  description: string;
  beforeImageSrc?: string;
  afterImageSrc?: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [value, setValue] = useState(50);
  const [beforeFailed, setBeforeFailed] = useState(false);
  const [afterFailed, setAfterFailed] = useState(false);
  const [dragging, setDragging] = useState(false);
  const id = useId();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const showBeforeImage = Boolean(beforeImageSrc) && !beforeFailed;
  const showAfterImage = Boolean(afterImageSrc) && !afterFailed;

  function updateFromClientX(clientX: number) {
    const node = sliderRef.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const nextValue = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, nextValue)));
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_20px_55px_rgba(12,41,98,0.08)]">
        <div
          ref={sliderRef}
          className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(160deg,rgba(14,34,81,0.92),rgba(26,79,189,0.9))] touch-none select-none"
          onPointerDown={(event) => {
            setDragging(true);
            updateFromClientX(event.clientX);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!dragging) {
              return;
            }

            updateFromClientX(event.clientX);
          }}
          onPointerUp={(event) => {
            setDragging(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={(event) => {
            setDragging(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
        >
          <div className="absolute inset-0">
            {showAfterImage ? (
              <Image
                src={afterImageSrc!}
                alt={afterAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                onError={() => setAfterFailed(true)}
              />
            ) : null}
            {!showAfterImage ? (
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(14,34,81,0.92),rgba(26,79,189,0.9))]" />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,38,0.08),rgba(8,17,38,0.28))]" />
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            {showBeforeImage ? (
              <Image
                src={beforeImageSrc!}
                alt={beforeAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                onError={() => setBeforeFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(241,245,252,0.98),rgba(197,219,248,0.92))]" />
            )}
            {!showBeforeImage ? (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),transparent_36%)]" />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(8,17,38,0.06))]" />
            )}
          </div>

          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Vorher
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-white/14 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white ring-1 ring-white/25">
            Nachher
          </div>

          <div
            className="absolute inset-y-0 w-px bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]"
            style={{ left: `${value}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[var(--primary)] shadow-[0_10px_24px_rgba(26,79,189,0.35)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 6l-4 6 4 6" />
                <path d="M16 6l4 6-4 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 px-1">
          <label htmlFor={id} className="sr-only">
            Vorher-Nachher-Vergleich einstellen
          </label>
          <input
            id={id}
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            className="h-2 w-full cursor-ew-resize accent-[var(--primary)]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
      </div>
    </div>
  );
}
