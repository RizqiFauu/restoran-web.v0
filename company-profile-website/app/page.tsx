import { HeroSection } from "@/components/home/hero-section"
import { SnapshotSection } from "@/components/home/snapshot-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ClientLogos } from "@/components/home/client-logos"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SnapshotSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ClientLogos />
      <CtaSection />
    </>
  )
}
