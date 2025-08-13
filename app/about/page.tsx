import type { Metadata } from "next"
import { HeroAboutSection } from "@/components/sections/about/hero-about-section"
import { CompanyHistorySection } from "@/components/sections/about/company-history-section"
import { MissionVisionSection } from "@/components/sections/about/mission-vision-section"
import { TeamSection } from "@/components/sections/about/team-section"
import { ProcessSection } from "@/components/sections/about/process-section"
import { AchievementsSection } from "@/components/sections/about/achievements-section"
import { COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: `About Us - ${COMPANY_INFO.name}`,
  description: `Learn about ${COMPANY_INFO.name}, a leading provider of UPVC and aluminum solutions in Pokhara, Nepal. Discover our history, team, and commitment to excellence.`,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroAboutSection />
      <CompanyHistorySection />
      <MissionVisionSection />
      <ProcessSection />
      <TeamSection />
      <AchievementsSection />
    </div>
  )
}
