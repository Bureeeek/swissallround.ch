import { ServiceDetailPage } from "@/components/shared/service-detail-page";
import { serviceMetadata, servicesBySlug } from "@/lib/site";

const service = servicesBySlug["raeumung-entsorgung-winterthur"];

export const metadata = serviceMetadata(service);

export default function ClearanceDisposalPage() {
  return <ServiceDetailPage service={service} />;
}
