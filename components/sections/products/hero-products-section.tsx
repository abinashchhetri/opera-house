import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Layers, Shield, Award } from "lucide-react"

export function HeroProductsSection() {
  const highlights = [
    {
      icon: Layers,
      title: "Premium Materials",
      description: "High-quality UPVC and aluminum",
    },
    {
      icon: Shield,
      title: "Guaranteed Quality",
      description: "Comprehensive warranty coverage",
    },
    {
      icon: Award,
      title: "Expert Installation",
      description: "Professional certified technicians",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Products
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary leading-tight">
            Premium UPVC & Aluminum Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of high-quality doors, windows, partitions, and custom fabrication services
            designed to enhance your space with durability and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Get Custom Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Link href="#products" className="flex items-center gap-2">
                Browse Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
