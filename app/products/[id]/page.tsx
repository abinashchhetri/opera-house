import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSection } from "@/components/sections/products/product-detail-section";

import { PRODUCTS, COMPANY_INFO } from "@/lib/constants";
import { RelatedProductsSection } from "@/components/sections/products/related-products-section";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${COMPANY_INFO.name}`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, UPVC, aluminum, steel, ${COMPANY_INFO.name}, Pokhara, Nepal`,
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="flex flex-col">
      <ProductDetailSection product={product} />
      <RelatedProductsSection products={relatedProducts} />
    </div>
  );
}
