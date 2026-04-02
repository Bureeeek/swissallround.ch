import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

export function ServicesPreviewSection() {
  return (
    <section className="px-5 pt-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Was wir für Sie tun"
          description="SwissPro deckt Leistungen ab, die im Alltag oft zusammenhängen: reinigen, transportieren, räumen, vorbereiten und pflegen."
        />
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
