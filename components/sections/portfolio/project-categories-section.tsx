import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building, Home, Factory, GraduationCap, Heart } from "lucide-react"
import { PORTFOLIO_PROJECTS } from "@/lib/constants"

export function ProjectCategoriesSection() {
  const categories = [
    {
      id: "residential",
      title: "Residential",
      icon: Home,
      description: "Homes, apartments, and residential complexes with premium UPVC and aluminum solutions.",
      count: PORTFOLIO_PROJECTS.filter((p) => p.category === "Residential").length,
      color: "bg-blue-500",
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: Building,
      description: "Offices, retail spaces, and commercial buildings with professional-grade installations.",
      count: PORTFOLIO_PROJECTS.filter((p) => p.category === "Commercial").length,
      color: "bg-green-500",
    },
    {
      id: "industrial",
      title: "Industrial",
      icon: Factory,
      description: "Warehouses and industrial facilities with heavy-duty steel and aluminum solutions.",
      count: PORTFOLIO_PROJECTS.filter((p) => p.category === "Industrial").length,
      color: "bg-orange-500",
    },
    {
      id: "institutional",
      title: "Institutional",
      icon: GraduationCap,
      description: "Schools, hospitals, and public buildings with specialized requirements.",
      count: PORTFOLIO_PROJECTS.filter((p) => p.category === "Institutional").length,
      color: "bg-purple-500",
    },
    {
      id: "hospitality",
      title: "Hospitality",
      icon: Heart,
      description: "Hotels, resorts, and hospitality venues with aesthetic and functional solutions.",
      count: PORTFOLIO_PROJECTS.filter((p) => p.category === "Hospitality").length,
      color: "bg-pink-500",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Project Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Diverse Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our portfolio spans across multiple sectors, showcasing our versatility and expertise in delivering tailored
            solutions for every type of project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="outline" className="text-xs font-bold text-primary border-primary">
                      {category.count}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={`#${category.id}-projects`} className="flex items-center justify-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
