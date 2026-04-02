import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { googleReviews, googleReviewSummary } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-1 text-[#f4b400]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 2.75l2.86 5.79 6.39.93-4.62 4.5 1.09 6.36L12 17.34 6.28 20.33l1.09-6.36-4.62-4.5 6.39-.93L12 2.75z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  meta,
  time,
  text,
}: {
  name: string;
  meta: string;
  time: string;
  text: string;
}) {
  return (
    <article className="flex min-h-[15.5rem] w-[19.5rem] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 text-white shadow-[0_20px_55px_rgba(4,10,24,0.18)] backdrop-blur-xl sm:w-[21.5rem]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Stars />
          <div className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/72">
            Google
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-base font-semibold tracking-[0.01em] text-white">
            {name}
          </h3>
          <p className="text-sm text-white/62">{meta}</p>
          <p className="text-sm text-white/62">{time}</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/82">{text}</p>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto w-full max-w-[92rem]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(147,188,255,0.16)] bg-[linear-gradient(145deg,rgba(7,14,30,0.98),rgba(10,28,67,0.97))] shadow-[0_28px_80px_rgba(8,17,38,0.18)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-10">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Google-Rezensionen
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Was Kundinnen und Kunden über SwissPro sagen
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                  Echte Rückmeldungen aus veröffentlichten Google-Rezensionen.
                  Klar, sichtbar und direkt auf der Startseite.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-6">
              <div>
                <div className="font-display text-6xl leading-none sm:text-7xl">
                  {googleReviewSummary.rating.toFixed(1)}
                </div>
                <div className="mt-3">
                  <Stars />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Basierend auf {googleReviewSummary.count} veröffentlichten
                  Google-Rezensionen.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <div className="rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  {googleReviewSummary.label}
                </div>
                <LinkButton
                  href={siteConfig.googleMapsUrl}
                  className="bg-white text-[var(--foreground)] shadow-none hover:bg-white/92"
                >
                  Alle bei Google ansehen
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/8 py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(7,14,30,0.98),rgba(7,14,30,0))] sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(10,28,67,0.97),rgba(10,28,67,0))] sm:w-24" />

            <div className="animate-review-marquee flex w-max will-change-transform">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex shrink-0 gap-5 pr-5"
                  aria-hidden={groupIndex === 1}
                >
                  {googleReviews.map((review) => (
                    <ReviewCard
                      key={`${groupIndex}-${review.name}-${review.time}`}
                      name={review.name}
                      meta={review.meta}
                      time={review.time}
                      text={review.text}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
