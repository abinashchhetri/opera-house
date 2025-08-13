import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Users, Star, CheckCircle, Trophy } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized as one of the top UPVC and aluminum solution providers in the Pokhara region.",
    },
    {
      icon: Shield,
      title: "Quality Certifications",
      description: "Certified for quality management systems and adherence to international standards.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Maintained 98% customer satisfaction rate with over 500 completed projects.",
    },
    {
      icon: Star,
      title: "Premium Partnerships",
      description: "Authorized dealer for leading international UPVC and aluminum manufacturers.",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "98%", label: "Customer Satisfaction", icon: Star },
    { number: "9+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Team Members", icon: Users },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Achievements
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Excellence Recognized</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality and customer satisfaction has earned us recognition and trust throughout the
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-lg text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">Commitment to Excellence</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            These achievements reflect our unwavering commitment to delivering exceptional UPVC and aluminum solutions.
            We continue to raise the bar for quality, innovation, and customer service in everything we do.
          </p>
        </div>
      </div>
    </section>
  )
}
