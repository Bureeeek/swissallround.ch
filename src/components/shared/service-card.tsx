import { LinkButton } from "@/components/ui/button";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { serviceMedia } from "@/lib/media";
import type { ServiceDetail } from "@/lib/site";

export function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <article className="min-w-[17rem] snap-start transition-transform duration-200 hover:scale-[1.02]">
      <PlaceholderMedia
        title={service.shortName}
        hint={service.teaser}
        alt={serviceMedia[service.slug].alt}
        className="h-full min-h-[27rem]"
        tone="dark"
        imageSrc={serviceMedia[service.slug].cardSrc}
      >
        <LinkButton href={service.path} className="mt-6 w-fit">
          Mehr dazu
        </LinkButton>
      </PlaceholderMedia>
    </article>
  );
}
