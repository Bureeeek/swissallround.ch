import { ServiceDetailPage } from "@/components/shared/service-detail-page";
import { serviceMetadata, servicesBySlug } from "@/lib/site";

const service = servicesBySlug["umzug-transport-winterthur"];

export const metadata = serviceMetadata(service);

export default function MovingTransportPage() {
  return <ServiceDetailPage service={service} />;
}
