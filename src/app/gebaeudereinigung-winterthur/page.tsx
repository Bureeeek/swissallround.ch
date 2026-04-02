import { ServiceDetailPage } from "@/components/shared/service-detail-page";
import { serviceMetadata, servicesBySlug } from "@/lib/site";

const service = servicesBySlug["gebaeudereinigung-winterthur"];

export const metadata = serviceMetadata(service);

export default function BuildingCleaningPage() {
  return <ServiceDetailPage service={service} />;
}
