import type { Metadata } from "next"
import { HeroProductsSection } from "@/components/sections/products/hero-products-section"
import { ProductCategoriesSection } from "@/components/sections/products/product-categories-section"
import { ProductListingSection } from "@/components/sections/products/product-listing-section"
import { ProductFeaturesSection } from "@/components/sections/products/product-features-section"
import { ProductCTASection } from "@/components/sections/products/product-cta-section"
import { COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Products & Services - ${COMPANY_INFO.name}`,
  description: `Explore our comprehensive range of UPVC and aluminum products including sliding doors, casement windows, partitions, and custom fabrication services in Pokhara, Nepal.`,
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <HeroProductsSection />
      <ProductCategoriesSection />
      <ProductListingSection />
      <ProductFeaturesSection />
      <ProductCTASection />
    </div>
  )
}
