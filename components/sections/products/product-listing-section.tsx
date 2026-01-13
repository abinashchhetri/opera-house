"use client";

import { useProducts } from "@/hooks/use-products.hook";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export function ProductListingSection() {
  const { data, isLoading, error } = useProducts({ page: 1, limit: 100 });

  const products = data?.data || [];
  const errorMessage =
    error instanceof Error
      ? error.message
      : ALERT_MESSAGES.PRODUCTS.FETCH_ERROR;

  if (isLoading) {
    return (
      <section id="products" className="py-5 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center border border-[#E0E0E0] shadow-[0_4px_12px_rgba(0,0,0,0.05),0_-4px_12px_rgba(0,0,0,0.05)] bg-white p-4 sm:p-6 rounded-[20px] min-h-[387px] gap-4"
              >
                <Skeleton className="w-full h-48 sm:h-52 rounded-[13px]" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-24 h-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-5 bg-muted/30">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="products" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Products</AlertTitle>
            <AlertDescription>
              {ALERT_MESSAGES.PRODUCTS.NO_PRODUCTS}
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex flex-col items-center border border-[#E0E0E0] hover:border-[#2989d8] shadow-[0_4px_12px_rgba(0,0,0,0.05),0_-4px_12px_rgba(0,0,0,0.05)] bg-white p-4 sm:p-6 rounded-[20px] transition-all duration-300 cursor-pointer min-w-[280px] w-full h-auto min-h-[387px] gap-4 sm:min-h-[387px] flex-1"
              id={`product-card-${product.id}`}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-52 rounded-[13px] overflow-hidden relative">
                {product.imageUrl || (product.images && product.images[0]) ? (
                  <img
                    src={product.imageUrl || product.images[0]}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center">
                    <div className="text-[#343a40] text-sm">No Image</div>
                  </div>
                )}
              </div>
              {/* Title */}
              <h6 className="text-[#0D1B2A] hover:underline font-bold text-lg sm:text-xl md:text-[22px] truncate line-clamp-1 w-full text-left border-b border-[#2989d8] py-2 sm:py-3 hover:text-[#1e5799] transition-colors">
                {product.name}
              </h6>
              {/* Description */}
              <p className="text-[#4B5563] text-sm sm:text-base line-clamp-2 truncate text-wrap w-full text-left">
                {product.description}
              </p>
              {/* Link */}
              <div className="group w-full flex items-center justify-start text-sm sm:text-base relative">
                <span className="relative text-[#2989d8]">
                  Learn More
                  {/* Hover underline animation directly under the text */}
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#2989d8] w-0 group-hover:w-full transition-all duration-300 sm:block hidden"></span>
                </span>
                <svg
                  className="ml-2 w-5 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 text-[#2989d8]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
