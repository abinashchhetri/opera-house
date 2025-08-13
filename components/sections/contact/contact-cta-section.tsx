import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, MessageSquare, Calendar } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function ContactCTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="text-sm px-4 py-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Ready to Get Started?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Your Dream Project Awaits</h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Don't wait any longer to transform your space. Contact Opera Groups And Company today and take the first
            step towards premium UPVC and aluminum solutions that will enhance your property for years to come.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Call Now</h3>
              <p className="text-primary-foreground/80 text-sm">Immediate assistance</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href={`tel:${COMPANY_INFO.phone}`}>Call</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-primary-foreground/80 text-sm">Detailed inquiries</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href={`mailto:${COMPANY_INFO.email}`}>Email</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Send Message</h3>
              <p className="text-primary-foreground/80 text-sm">Quick contact form</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="#contact-form">Message</Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Visit Office</h3>
              <p className="text-primary-foreground/80 text-sm">Showroom available</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="#location">Directions</Link>
              </Button>
            </div>
          </div>

          <div className="pt-8 space-y-6">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="#contact-form" className="flex items-center gap-2">
                Get Your Free Quote Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <div className="text-primary-foreground/70 text-sm space-y-2">
              <p>✓ Free consultation and quote • ✓ Professional installation • ✓ Comprehensive warranty</p>
              <p>✓ 24-hour response time • ✓ Competitive pricing • ✓ Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
