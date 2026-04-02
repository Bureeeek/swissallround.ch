import { AboutSection } from "@/components/home/about-section";
import { BeforeAfterSection } from "@/components/home/before-after-section";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ServicesPreviewSection } from "@/components/home/services-preview-section";

export default function HomePage() {
  return (
    <main className="pb-4">
      <HeroSection />
      <ServicesPreviewSection />
      <AboutSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <CtaSection />
    </main>
  );
}
