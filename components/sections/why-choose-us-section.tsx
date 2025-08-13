import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Award, Wrench, Users, Leaf } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium materials and rigorous quality control ensure long-lasting durability and performance.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and ensure all projects are completed within the agreed timeline.",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our skilled technicians bring years of experience and attention to detail to every project.",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Certified installation teams ensure perfect fitting and optimal performance of all products.",
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated customer service team provides ongoing support and maintenance assistance.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Energy-efficient products that reduce environmental impact and lower utility costs.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Your Trusted Partner in Quality
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With years of experience and a commitment to excellence, we deliver solutions that exceed expectations and
            stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 text-center"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
