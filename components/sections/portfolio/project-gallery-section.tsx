"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Tag, Eye } from "lucide-react"
import { PORTFOLIO_PROJECTS } from "@/lib/constants"

export function ProjectGallerySection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional", "Hospitality"]

  const getFilteredProjects = (category: string) => {
    if (category === "All") return PORTFOLIO_PROJECTS
    return PORTFOLIO_PROJECTS.filter((project) => project.category === category)
  }

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {project.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setSelectedProject(project.id)}
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            View Gallery
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-primary" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3 text-primary" />
              <span>Completed {project.completedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-3 w-3 text-primary" />
              <span className="line-clamp-1">{project.services.join(", ")}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Project Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Complete Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse through our complete collection of projects, organized by category to help you find relevant examples
            for your needs.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm py-2">
                {category}
                {category !== "All" && <span className="ml-1 text-xs">({getFilteredProjects(category).length})</span>}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProjects(category).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Project Modal/Lightbox would go here */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {PORTFOLIO_PROJECTS.find((p) => p.id === selectedProject)?.title}
                  </h3>
                  <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                    ✕
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PORTFOLIO_PROJECTS.find((p) => p.id === selectedProject)?.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
