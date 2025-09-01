"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { COMPANY_INFO } from "@/lib/constants";

interface ProductDetailSectionProps {
  product: Product;
}

export function ProductDetailSection({ product }: ProductDetailSectionProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const productImages = [
    product?.images[0],
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  const benefits = [
    "Premium quality materials",
    "Professional installation",
    "Comprehensive warranty",
    "Custom sizing available",
    "Energy efficient design",
    "Low maintenance required",
  ];

  const applications = [
    "Residential homes",
    "Commercial buildings",
    "Industrial facilities",
    "Educational institutions",
    "Healthcare facilities",
    "Hospitality venues",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products#${product.category.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="secondary"
                  className="bg-background/90 text-foreground"
                >
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-sm px-3 py-1 border-primary text-primary"
              >
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {product.price && (
                <div className="text-2xl font-bold text-primary">
                  {product.price}
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Specifications
                </h3>
                <Card className="border-2 border-primary/10">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                          >
                            <span className="font-medium text-sm text-muted-foreground">
                              {key}
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Why Choose This Product?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="flex-1 text-lg py-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 text-lg py-6"
              >
                <Link
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Quality Guaranteed
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Free Delivery</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Quick Installation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="warranty">Warranty</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Product Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our {product.name.toLowerCase()} is designed and
                    manufactured using the highest quality materials and
                    cutting-edge technology. This product represents the perfect
                    balance between aesthetic appeal, functionality, and
                    durability, making it an ideal choice for both residential
                    and commercial applications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Key Advantages
                      </h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Ideal For
                      </h4>
                      <ul className="space-y-2">
                        {applications.slice(0, 4).map((application, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {product.specifications ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="space-y-2">
                            <h4 className="font-medium text-foreground">
                              {key}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      Detailed specifications available upon request.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Installation & Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        Installation Process
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">
                              1
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">
                              Site Assessment
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Professional measurement and evaluation
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">
                              2
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">
                              Custom Fabrication
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Precise manufacturing to specifications
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">
                              3
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">
                              Professional Installation
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Expert installation by certified technicians
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        Service Includes
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Free on-site consultation
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Precise measurements
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Professional installation
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Post-installation support
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-8">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Warranty & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        Warranty Coverage
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">
                            Product Warranty
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {product.specifications?.Warranty || "Standard"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">
                            Installation Warranty
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            2 Years
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm text-muted-foreground">
                            Support Period
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            Lifetime
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        What's Covered
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Manufacturing defects
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Material quality issues
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Installation workmanship
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          Hardware malfunctions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Warranty terms and conditions
                      apply. Normal wear and tear, improper maintenance, and
                      damage from external factors are not covered. Contact us
                      for complete warranty details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/20 text-white hover:bg-background/40"
              onClick={() => setIsImageModalOpen(false)}
            >
              ✕
            </Button>
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
