import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users, Calendar } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function AboutPreviewSection() {
  const stats = [
    {
      icon: Calendar,
      value: `${new Date().getFullYear() - COMPANY_INFO.establishedYear}+`,
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: "100+",
      label: "Projects Completed",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary leading-tight">
                Excellence in Every Detail
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since {COMPANY_INFO.establishedYear}, Opera Groups And Company has been at the forefront of UPVC and
                aluminum solutions in Pokhara, Nepal. We combine traditional craftsmanship with modern technology to
                deliver exceptional results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Premium quality materials sourced from trusted suppliers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Professional installation by certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Comprehensive warranty and after-sales support</span>
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-lg border shadow-sm">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-background p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Opera Groups?</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>✓ Local expertise with international quality standards</p>
                <p>✓ Competitive pricing with transparent quotations</p>
                <p>✓ Timely project completion and delivery</p>
                <p>✓ Comprehensive maintenance and support services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
