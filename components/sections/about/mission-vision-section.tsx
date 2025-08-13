import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Shield } from "lucide-react"

export function MissionVisionSection() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, using only premium materials and proven techniques.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our clients' satisfaction and success are at the heart of everything we do.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously adopt new technologies and methods to deliver better solutions.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Honest communication and transparent pricing build lasting relationships.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Purpose
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Mission & Vision</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-2 border-primary/20 bg-background">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional UPVC and aluminum solutions that enhance the beauty, functionality, and value of
                our clients' properties while maintaining the highest standards of quality, service, and craftsmanship.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 bg-background">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-bold text-secondary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted and innovative provider of UPVC and aluminum solutions in Nepal, setting industry
                standards for quality, sustainability, and customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide our decisions, shape our culture, and define how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
