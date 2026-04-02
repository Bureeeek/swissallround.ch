import { ServiceDetailPage } from "@/components/shared/service-detail-page";
import { serviceMetadata, servicesBySlug } from "@/lib/site";

const service = servicesBySlug["gartenpflege-winterthur"];

export const metadata = serviceMetadata(service);

export default function GardenCarePage() {
  return <ServiceDetailPage service={service} />;
}
