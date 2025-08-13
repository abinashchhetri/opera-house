import { Badge } from "@/components/ui/badge"
import { COMPANY_INFO } from "@/lib/constants"

export function HeroAboutSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary leading-tight">
            Building Excellence Since {COMPANY_INFO.establishedYear}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {COMPANY_INFO.name} has been transforming spaces across Pokhara with premium UPVC and aluminum solutions,
            combining traditional craftsmanship with modern innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {new Date().getFullYear() - COMPANY_INFO.establishedYear}+
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
