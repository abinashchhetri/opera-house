import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

export function PortfolioPreviewSection() {
  const featuredProjects = [
    {
      id: "residential-complex",
      title: "Modern Residential Complex",
      category: "UPVC Windows & Doors",
      location: "Pokhara-12",
      completedDate: "2024",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete UPVC window and door installation for 24-unit residential complex.",
    },
    {
      id: "office-building",
      title: "Corporate Office Building",
      category: "Aluminum Partitions",
      location: "Pokhara-8",
      completedDate: "2024",
      image: "/placeholder.svg?height=300&width=400",
      description: "Aluminum partition systems and sliding doors for multi-story office complex.",
    },
    {
      id: "hotel-project",
      title: "Luxury Hotel Project",
      category: "Mixed Solutions",
      location: "Pokhara-6",
      completedDate: "2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Comprehensive UPVC and aluminum solutions for 5-star hotel property.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Recent Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest completed projects showcasing the quality and craftsmanship that defines Opera Groups And
            Company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-2 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Completed {project.completedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
