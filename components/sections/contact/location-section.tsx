import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Navigation, Car, Bus } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function LocationSection() {
  const directions = [
    {
      icon: Car,
      method: "By Car",
      description: "Free parking available on-site. Easy access from main roads.",
      time: "5 min from city center",
    },
    {
      icon: Bus,
      method: "By Public Transport",
      description: "Regular bus services available. Walking distance from bus stop.",
      time: "Multiple routes available",
    },
    {
      icon: Navigation,
      method: "GPS Navigation",
      description: "Use GPS coordinates for precise location finding.",
      time: "Exact location",
    },
  ]

  const landmarks = ["Near Mahendra Pool", "Close to Pokhara Airport", "5 minutes from Lakeside", "Main highway access"]

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Location
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Visit Our Office</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Pokhara, our office is easily accessible and equipped with a showroom displaying our
            latest products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg text-primary">{COMPANY_INFO.name}</p>
                  <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                  <p className="text-muted-foreground">{COMPANY_INFO.location}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Nearby Landmarks:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {directions.map((direction, index) => (
                <Card key={index} className="border hover:border-primary/20 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <direction.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{direction.method}</h4>
                        <p className="text-sm text-muted-foreground">{direction.description}</p>
                        <p className="text-xs text-primary font-medium">{direction.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-primary/10 overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Click to view in Google Maps</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Showroom & Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Visit our showroom to see product samples and discuss your requirements with our experts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
