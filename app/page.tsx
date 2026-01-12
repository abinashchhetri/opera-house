import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutPreviewSection } from "@/components/sections/about-preview-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section"
import { ContactPreviewSection } from "@/components/sections/contact-preview-section"
import { COMPANY_INFO } from "@/lib/constants"


export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
  description: COMPANY_INFO.description,
  keywords: "UPVC, aluminum, windows, doors, partitions, Pokhara, Nepal, construction",
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

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
