import type { Metadata } from "next"
import { HeroPortfolioSection } from "@/components/sections/portfolio/hero-portfolio-section"
import { ProjectCategoriesSection } from "@/components/sections/portfolio/project-categories-section"
import { FeaturedProjectsSection } from "@/components/sections/portfolio/featured-projects-section"
import { ProjectGallerySection } from "@/components/sections/portfolio/project-gallery-section"
import { TestimonialsSection } from "@/components/sections/portfolio/testimonials-section"
import { PortfolioStatsSection } from "@/components/sections/portfolio/portfolio-stats-section"
import { PortfolioCTASection } from "@/components/sections/portfolio/portfolio-cta-section"
import { COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Portfolio - ${COMPANY_INFO.name}`,
  description: `Explore our portfolio of completed UPVC and aluminum projects in Pokhara, Nepal. See our work in residential, commercial, and industrial installations.`,
}

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <HeroPortfolioSection />
      <PortfolioStatsSection />
      <ProjectCategoriesSection />
      <FeaturedProjectsSection />
      <ProjectGallerySection />
      <TestimonialsSection />
      <PortfolioCTASection />
    </div>
  )
}
