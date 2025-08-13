import type { Metadata } from "next"
import { HeroContactSection } from "@/components/sections/contact/hero-contact-section"
import { ContactFormSection } from "@/components/sections/contact/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact/contact-info-section"
import { LocationSection } from "@/components/sections/contact/location-section"
import { FAQSection } from "@/components/sections/contact/faq-section"
import { ContactCTASection } from "@/components/sections/contact/contact-cta-section"
import { COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Contact Us - ${COMPANY_INFO.name}`,
  description: `Get in touch with ${COMPANY_INFO.name} for premium UPVC and aluminum solutions in Pokhara, Nepal. Request a quote, schedule consultation, or visit our office.`,
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <HeroContactSection />
      <ContactFormSection />
      <ContactInfoSection />
      <LocationSection />
      <FAQSection />
      <ContactCTASection />
    </div>
  )
}
