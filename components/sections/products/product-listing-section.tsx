import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, CheckCircle, Info } from "lucide-react"
import { PRODUCTS } from "@/lib/constants"

export function ProductListingSection() {
  const upvcProducts = PRODUCTS.filter((product) => product.category === "upvc")
  const aluminumProducts = PRODUCTS.filter((product) => product.category === "aluminum")
  const steelProducts = PRODUCTS.filter((product) => product.category === "steel")

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground capitalize">
            {product.category}
          </Badge>
        </div>
        {product.price && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-background/90 text-foreground border-primary">
              {product.price}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
            >
              <Link href={`/contact?product=${product.id}`} className="flex items-center justify-center gap-2">
                Get Quote
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href={`#${product.id}-specs`} className="flex items-center gap-2">
                <Info className="h-3 w-3" />
                Specs
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Product Catalog
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">Our Product Range</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive collection of UPVC, aluminum, and steel products, each crafted with precision and
            designed for lasting performance.
          </p>
        </div>

        <Tabs defaultValue="upvc" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="upvc" className="text-lg py-3">
              UPVC Solutions ({upvcProducts.length})
            </TabsTrigger>
            <TabsTrigger value="aluminum" className="text-lg py-3">
              Aluminum Works ({aluminumProducts.length})
            </TabsTrigger>
            <TabsTrigger value="steel" className="text-lg py-3">
              Steel Fabrication ({steelProducts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upvc" className="space-y-8">
            <div id="upvc" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upvcProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="aluminum" className="space-y-8">
            <div id="aluminum" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aluminumProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="steel" className="space-y-8">
            <div id="steel" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steelProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
