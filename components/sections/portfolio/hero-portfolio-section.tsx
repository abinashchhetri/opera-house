import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Eye, Award, Users } from "lucide-react"

export function HeroPortfolioSection() {
  const highlights = [
    {
      icon: Eye,
      title: "100+ Projects",
      description: "Successfully completed",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning installations",
    },
    {
      icon: Users,
      title: "Happy Clients",
      description: "98% satisfaction rate",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary leading-tight">
            Showcasing Excellence in Every Project
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Explore our diverse portfolio of completed UPVC and aluminum installations across residential, commercial,
            and industrial sectors in Pokhara and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
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
