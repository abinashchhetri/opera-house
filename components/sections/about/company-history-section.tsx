import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export function CompanyHistorySection() {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Opera Groups And Company was established in Pokhara with a vision to provide premium UPVC and aluminum solutions.",
      icon: MapPin,
    },
    {
      year: "2017",
      title: "Team Expansion",
      description:
        "Expanded our team with certified technicians and established partnerships with international suppliers.",
      icon: Users,
    },
    {
      year: "2019",
      title: "Major Projects",
      description:
        "Completed our first major commercial projects, establishing our reputation in the construction industry.",
      icon: Award,
    },
    {
      year: "2021",
      title: "Technology Upgrade",
      description:
        "Invested in modern fabrication equipment and advanced installation techniques for superior quality.",
      icon: Calendar,
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as one of the leading UPVC and aluminum solution providers in the Pokhara region.",
      icon: Award,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Company History</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a trusted name in UPVC and aluminum solutions, our journey reflects our
            commitment to excellence and continuous growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <Card className="flex-1 border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <Badge variant="outline" className="w-fit text-primary border-primary">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-semibold text-primary">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
