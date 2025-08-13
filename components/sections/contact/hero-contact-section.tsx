import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function HeroContactSection() {
  const quickContacts = [
    {
      icon: Phone,
      title: "Call Us",
      value: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone}`,
      description: "Immediate assistance",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
      description: "Quick response",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: COMPANY_INFO.address,
      href: "#location",
      description: "Our office location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM",
      href: "#hours",
      description: "Sat: 9AM-4PM",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary leading-tight">
            Let's Start Your Project Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Ready to transform your space with premium UPVC and aluminum solutions? Get in touch with our expert team
            for personalized consultation and competitive quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#contact-form">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Link href={`tel:${COMPANY_INFO.phone}`}>Call Now</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {quickContacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              className="group bg-background/80 backdrop-blur-sm p-6 rounded-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{contact.title}</h3>
                  <p className="text-sm font-medium text-foreground">{contact.value}</p>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
