import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { beforeAfterMedia } from "@/lib/media";
import { beforeAfterSlides } from "@/lib/site";

export function BeforeAfterSection() {
  return (
    <section className="px-5 pt-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Unsere Arbeit spricht für sich"
          title="Vorher und nachher in einem direkten Vergleich"
          description="Ein direkter visueller Vergleich ausgewählter Arbeiten aus Reinigung, Räumung und Hauswartung."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {beforeAfterSlides.map((slide) => {
            const media = beforeAfterMedia[slide.id];

            return (
              <BeforeAfterSlider
                key={slide.id}
                title={slide.title}
                description={slide.description}
                beforeImageSrc={media?.beforeSrc}
                afterImageSrc={media?.afterSrc}
                beforeAlt={media?.beforeAlt || `${slide.title} vorher`}
                afterAlt={media?.afterAlt || `${slide.title} nachher`}
              />
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
