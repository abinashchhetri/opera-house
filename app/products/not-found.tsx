import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search, Package } from "lucide-react";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2 border-primary/10">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">
                Product Not Found
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're sorry, but the product you're looking for could not be
                found. It may have been removed, renamed, or the URL might be
                incorrect.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  What you can do:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        Browse our products
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Explore our complete catalog
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        Contact us
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Get help finding what you need
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/products" className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    Browse Products
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
