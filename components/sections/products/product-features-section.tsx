import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Wrench, Award, Leaf, Clock } from "lucide-react"

export function ProductFeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Superior Quality",
      description: "Premium materials and rigorous quality control ensure long-lasting durability and performance.",
      benefits: ["10+ year warranty", "Weather resistant", "Tested materials"],
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description:
        "Advanced insulation properties help reduce energy costs and maintain comfortable indoor temperatures.",
      benefits: ["Thermal insulation", "Sound dampening", "UV protection"],
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Low-maintenance designs that require minimal upkeep while maintaining optimal performance.",
      benefits: ["Self-cleaning surfaces", "Corrosion resistant", "Simple operation"],
    },
    {
      icon: Award,
      title: "Professional Installation",
      description: "Expert installation by certified technicians ensures perfect fit and optimal performance.",
      benefits: ["Certified installers", "Quality guarantee", "Post-installation support"],
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Environmentally conscious materials and processes that contribute to sustainable construction.",
      benefits: ["Recyclable materials", "Energy savings", "Reduced carbon footprint"],
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Efficient manufacturing and logistics ensure timely delivery and installation of your products.",
      benefits: ["Fast turnaround", "Scheduled installation", "Project timeline adherence"],
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Product Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Why Choose Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our products are designed with advanced features and benefits that deliver exceptional value, performance,
            and satisfaction for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed text-center">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
