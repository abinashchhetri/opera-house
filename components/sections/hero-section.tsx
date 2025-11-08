import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/images/banner/Banner.jpg)',
        }}
      />
      {/* Gradient Overlay with reduced opacity to show image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/80 z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32 z-20">
        <div className="max-w-7xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight">{COMPANY_INFO.name}</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary-foreground/90">{COMPANY_INFO.tagline}</p>
          <p className="text-base sm:text-lg md:text-xl max-w-5xl mx-auto text-primary-foreground/80 leading-relaxed px-2">
            Leading provider of premium UPVC and aluminum solutions in Pokhara, Nepal. We deliver excellence in sliding
            doors, casement windows, partitions, and comprehensive fabrication services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8">
            <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent w-full sm:w-auto"
            >
              <Link href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call Now
              </Link>
            </Button>
          </div>
          <div className="pt-4 sm:pt-6 md:pt-8 text-xs sm:text-sm text-primary-foreground/70 px-2">
            <p>Serving Pokhara since {COMPANY_INFO.establishedYear} • Premium Quality • Professional Installation</p>
          </div>
        </div>
      </div>

     
    </section>
  )
}
