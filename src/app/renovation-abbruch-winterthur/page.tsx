import { ServiceDetailPage } from "@/components/shared/service-detail-page";
import { serviceMetadata, servicesBySlug } from "@/lib/site";

const service = servicesBySlug["renovation-abbruch-winterthur"];

export const metadata = serviceMetadata(service);

export default function RenovationDemolitionPage() {
  return <ServiceDetailPage service={service} />;
}
