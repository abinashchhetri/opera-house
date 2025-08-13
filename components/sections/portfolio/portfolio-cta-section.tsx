import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function PortfolioCTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="text-sm px-4 py-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Ready to Start?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
            Let's Create Your Next Success Story
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Inspired by our portfolio? Let's discuss how we can bring the same level of excellence and craftsmanship to
            your project. Our team is ready to transform your vision into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Call Us Today</h3>
              <p className="text-primary-foreground/80">Get immediate assistance and expert consultation</p>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Email Your Requirements</h3>
              <p className="text-primary-foreground/80">Send us your project details for a detailed quote</p>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href={`mailto:${COMPANY_INFO.email}`}>Send Email</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Schedule Consultation</h3>
              <p className="text-primary-foreground/80">Book a free on-site consultation with our experts</p>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact?inquiry=consultation">Book Now</Link>
              </Button>
            </div>
          </div>

          <div className="pt-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="pt-4 text-primary-foreground/70 text-sm">
            <p>Free consultation • Competitive pricing • Professional installation • Comprehensive warranty</p>
          </div>
        </div>
      </div>
    </section>
  )
}
