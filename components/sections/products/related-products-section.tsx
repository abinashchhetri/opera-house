import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Product } from "@/lib/types";

interface RelatedProductsSectionProps {
  products: Product[];
}

export function RelatedProductsSection({
  products,
}: RelatedProductsSectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Related Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore more products in this category that might interest you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground"
                  >
                    {product.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {product.price && (
                    <div className="text-lg font-bold text-primary">
                      {product.price}
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground text-sm">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground line-clamp-1">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link
                      href={`/products/${product.id}`}
                      className="flex items-center justify-center gap-2"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6"
          >
            <Link href="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
