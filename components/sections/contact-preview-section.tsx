import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function ContactPreviewSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="text-sm px-4 py-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Ready to Start Your Project?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life with
            premium UPVC and aluminum solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardHeader className="pb-3">
                  <Phone className="h-8 w-8 mb-2" />
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-primary-foreground/90">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Mon-Fri 9AM-6PM</p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardHeader className="pb-3">
                  <Mail className="h-8 w-8 mb-2" />
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-primary-foreground/90">{COMPANY_INFO.email}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Quick Response</p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardHeader className="pb-3">
                  <MapPin className="h-8 w-8 mb-2" />
                  <CardTitle className="text-lg">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-primary-foreground/90">{COMPANY_INFO.address}</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">{COMPANY_INFO.location}</p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardHeader className="pb-3">
                  <Clock className="h-8 w-8 mb-2" />
                  <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-primary-foreground/90">Mon-Fri: 9AM-6PM</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Sat: 9AM-4PM</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-foreground/10 p-8 rounded-lg border border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Ready to transform your space with premium UPVC and aluminum solutions? Our experts are standing by to
                provide you with a detailed, no-obligation quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-primary-foreground/90">Free on-site consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-primary-foreground/90">Detailed project assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-primary-foreground/90">Transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-primary-foreground/90">Professional recommendations</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="flex-1 text-lg px-8 py-6">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
