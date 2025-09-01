import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductCategoriesSection() {
  const categories = [
    {
      id: "upvc",
      title: "UPVC Solutions",
      description:
        "Energy-efficient doors, windows, and partitions with superior insulation properties.",
      features: [
        "Energy Efficient",
        "Weather Resistant",
        "Low Maintenance",
        "Sound Insulation",
      ],
      image: "/placeholder.svg?height=300&width=400",
      productCount: "15+ Products",
    },
    {
      id: "aluminum",
      title: "Aluminum Works",
      description:
        "Lightweight, durable, and corrosion-resistant aluminum doors and windows.",
      features: [
        "Lightweight",
        "Corrosion Resistant",
        "Recyclable",
        "Cost Effective",
      ],
      image: "/placeholder.svg?height=300&width=400",
      productCount: "12+ Products",
    },
    {
      id: "steel",
      title: "Steel Fabrication",
      description:
        "Heavy-duty steel solutions for security doors and custom structural applications.",
      features: [
        "High Security",
        "Fire Resistant",
        "Custom Design",
        "Structural Strength",
      ],
      image: "/placeholder.svg?height=300&width=400",
      productCount: "8+ Products",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Product Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Choose Your Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our three main product categories, each designed to meet
            specific needs with premium quality materials and expert
            craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground"
                  >
                    {category.productCount}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link
                      href={`/products/${category.id}`}
                      className="flex items-center justify-center gap-2"
                    >
                      View Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
