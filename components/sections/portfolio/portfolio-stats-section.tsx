import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Home, Factory, Heart } from "lucide-react"

export function PortfolioStatsSection() {
  const stats = [
    {
      icon: Building,
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered across all sectors",
    },
    {
      icon: Home,
      number: "60+",
      label: "Residential Projects",
      description: "Homes and residential complexes",
    },
    {
      icon: Factory,
      number: "40+",
      label: "Commercial Projects",
      description: "Offices, hotels, and retail spaces",
    },
    {
      icon: Heart,
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on project completion surveys",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Portfolio Statistics</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to excellence and the trust our clients place in our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
