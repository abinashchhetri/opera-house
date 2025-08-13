import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { TeamMember } from "@/lib/types"

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: "ceo",
      name: "Rajesh Sharma",
      position: "Chief Executive Officer",
      bio: "With over 15 years of experience in the construction industry, Rajesh leads Opera Groups with a vision for excellence and innovation.",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "technical-director",
      name: "Priya Thapa",
      position: "Technical Director",
      bio: "Priya oversees all technical operations and ensures the highest quality standards in our UPVC and aluminum installations.",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "operations-manager",
      name: "Suresh Gurung",
      position: "Operations Manager",
      bio: "Suresh manages day-to-day operations and coordinates project execution to ensure timely delivery and client satisfaction.",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "quality-head",
      name: "Anita Poudel",
      position: "Quality Assurance Head",
      bio: "Anita leads our quality assurance team, implementing rigorous testing and inspection processes for all our products.",
      experience: "8+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Meet Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced team of professionals brings together decades of expertise in UPVC and aluminum solutions,
            ensuring exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="text-xs px-3 py-1">
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-secondary mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're always looking for talented individuals who share our passion for excellence and innovation. If
              you're interested in joining our team, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>• Competitive Compensation</span>
              <span>• Professional Development</span>
              <span>• Collaborative Environment</span>
              <span>• Growth Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
