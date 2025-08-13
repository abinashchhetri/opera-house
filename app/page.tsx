import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutPreviewSection } from "@/components/sections/about-preview-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section"
import { ContactPreviewSection } from "@/components/sections/contact-preview-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <PortfolioPreviewSection />
      <ContactPreviewSection />
    </div>
  )
}
