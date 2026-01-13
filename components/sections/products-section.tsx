"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/sections/products/product-card";

import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";
import { useProducts } from "@/hooks/use-products.hook";

export function ProductsSection() {
  const { data, isLoading, error } = useProducts({ page: 1, limit: 6 });

  const products = data?.data || [];
  const errorMessage =
    error instanceof Error
      ? error.message
      : ALERT_MESSAGES.PRODUCTS.FETCH_ERROR;

  return (
    <section className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Premium Products & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of high-quality UPVC and aluminum
            products designed to enhance your space with durability and style.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center border border-[#E0E0E0] shadow-lg bg-white p-4 sm:p-6 rounded-[20px] min-h-[387px] gap-4"
              >
                <Skeleton className="w-full h-48 sm:h-52 rounded-[13px]" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-24 h-4" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{errorMessage}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {ALERT_MESSAGES.PRODUCTS.NO_PRODUCTS}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map(
              (product: {
                id: string;
                name: string;
                description: string;
                imageUrl?: string;
                images?: string[];
              }) => (
                <ProductCard
                  key={product.id}
                  image={
                    product.imageUrl ||
                    (product.images && product.images[0]) ||
                    ""
                  }
                  title={product.name}
                  subTitle={product.description}
                  slug={`/products/${product.id}`}
                />
              )
            )}
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
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
