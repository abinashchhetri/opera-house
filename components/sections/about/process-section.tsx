import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, PenTool, Wrench, CheckCircle, Users, Award } from "lucide-react"

export function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      icon: Search,
      title: "Consultation & Assessment",
      description:
        "We begin with a thorough consultation to understand your needs and conduct a detailed site assessment.",
      details: ["Free on-site consultation", "Detailed measurements", "Requirement analysis", "Budget discussion"],
    },
    {
      step: "02",
      icon: PenTool,
      title: "Design & Planning",
      description:
        "Our team creates detailed designs and plans tailored to your specific requirements and preferences.",
      details: ["Custom design creation", "Material selection", "Technical specifications", "Timeline planning"],
    },
    {
      step: "03",
      icon: Wrench,
      title: "Manufacturing & Preparation",
      description: "We manufacture your UPVC and aluminum products using premium materials and precision techniques.",
      details: [
        "Quality material sourcing",
        "Precision manufacturing",
        "Quality control checks",
        "Pre-installation prep",
      ],
    },
    {
      step: "04",
      icon: Users,
      title: "Professional Installation",
      description:
        "Our certified technicians ensure perfect installation with minimal disruption to your daily routine.",
      details: ["Expert installation team", "Minimal disruption", "Safety protocols", "Clean work environment"],
    },
    {
      step: "05",
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Comprehensive quality checks ensure everything meets our high standards and your expectations.",
      details: ["Thorough inspection", "Functionality testing", "Quality verification", "Client walkthrough"],
    },
    {
      step: "06",
      icon: Award,
      title: "Handover & Support",
      description: "We provide complete handover with warranty coverage and ongoing maintenance support.",
      details: ["Project handover", "Warranty documentation", "Maintenance guidelines", "Ongoing support"],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures every project is completed to the highest standards, from initial
            consultation to final handover and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="outline" className="text-xs font-bold text-primary border-primary">
                      {step.step}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
