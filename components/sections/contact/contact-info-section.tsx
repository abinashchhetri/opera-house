import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Globe, Users } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function ContactInfoSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: COMPANY_INFO.phone,
      secondary: "Available Mon-Fri 9AM-6PM",
      href: `tel:${COMPANY_INFO.phone}`,
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      primary: COMPANY_INFO.email,
      secondary: "We respond within 24 hours",
      href: `mailto:${COMPANY_INFO.email}`,
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      primary: COMPANY_INFO.address,
      secondary: COMPANY_INFO.location,
      href: "#location",
      action: "Get Directions",
    },
  ]

  const businessInfo = [
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency services available",
      ],
    },
    {
      icon: Users,
      title: "Our Team",
      details: [
        "Certified installation technicians",
        "Experienced project managers",
        "Dedicated customer support",
        "Quality assurance specialists",
      ],
    },
    {
      icon: Globe,
      title: "Service Areas",
      details: ["Pokhara Metropolitan City", "Kaski District", "Surrounding areas", "Custom projects nationwide"],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Contact Information
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multiple ways to reach us for your convenience. Choose the method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">{method.primary}</p>
                    <p className="text-sm text-muted-foreground">{method.secondary}</p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={method.href}>{method.action}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
