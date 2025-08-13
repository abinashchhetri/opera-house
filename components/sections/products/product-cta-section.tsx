import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, ArrowRight, Calculator, FileText, Users } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function ProductCTASection() {
  const ctaOptions = [
    {
      icon: Calculator,
      title: "Get Custom Quote",
      description: "Receive a detailed quote tailored to your specific requirements and budget.",
      action: "Request Quote",
      href: "/contact",
      primary: true,
    },
    {
      icon: FileText,
      title: "Download Catalog",
      description: "Access our complete product catalog with specifications and pricing information.",
      action: "Download PDF",
      href: "/contact?inquiry=catalog",
      primary: false,
    },
    {
      icon: Users,
      title: "Schedule Consultation",
      description: "Book a free consultation with our experts to discuss your project needs.",
      action: "Book Meeting",
      href: "/contact?inquiry=consultation",
      primary: false,
    },
  ]

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90" />
      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="text-sm px-4 py-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Ready to Get Started?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Transform Your Space Today</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Take the next step towards enhancing your property with our premium UPVC and aluminum solutions. Our team is
            ready to help you choose the perfect products for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => (
            <Card
              key={index}
              className={`text-center border-2 transition-all duration-300 ${
                option.primary
                  ? "bg-primary-foreground text-primary border-primary-foreground hover:shadow-lg"
                  : "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              }`}
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    option.primary ? "bg-primary/10" : "bg-primary-foreground/20"
                  }`}
                >
                  <option.icon className={`h-8 w-8 ${option.primary ? "text-primary" : "text-primary-foreground"}`} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    option.primary ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  {option.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${
                    option.primary ? "text-primary/80" : "text-primary-foreground/80"
                  }`}
                >
                  {option.description}
                </p>
                <Button
                  asChild
                  variant={option.primary ? "default" : "outline"}
                  className={`w-full ${
                    option.primary
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  }`}
                >
                  <Link href={option.href} className="flex items-center justify-center gap-2">
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: {COMPANY_INFO.phone}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email: {COMPANY_INFO.email}
              </Link>
            </Button>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Free consultation • Competitive pricing • Professional installation • Comprehensive warranty
          </p>
        </div>
      </div>
    </section>
  )
}
