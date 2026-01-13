import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSection } from "@/components/sections/products/product-detail-section";
import { RelatedProductsSection } from "@/components/sections/products/related-products-section";
import { COMPANY_INFO } from "@/lib/constants";
import type { Product } from "@/lib/types";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Server-side function to fetch product
async function fetchProduct(id: string) {
  try {
    // Use absolute URL for server-side requests
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_API_URL?.startsWith("http")
        ? process.env.NEXT_PUBLIC_API_URL
        : `http://localhost:${process.env.PORT || 3000}`;

    const response = await fetch(`${baseUrl}/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Server-side function to fetch related products
async function fetchRelatedProducts(category: string, excludeId: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_API_URL?.startsWith("http")
        ? process.env.NEXT_PUBLIC_API_URL
        : `http://localhost:${process.env.PORT || 3000}`;

    const response = await fetch(
      `${baseUrl}/api/products?page=1&limit=10&category=${encodeURIComponent(category)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      return [];
    }

    return data.data.filter((p: Product) => p.id !== excludeId).slice(0, 3);
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const productData = await fetchProduct(id);

  if (!productData) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${productData.name} - ${COMPANY_INFO.name}`,
    description: productData.description,
    keywords: `${productData.name}, ${productData.category || "product"}, UPVC, aluminum, steel, ${COMPANY_INFO.name}, Pokhara, Nepal`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Fetch the product
  const productData = await fetchProduct(id);

  if (!productData) {
    notFound();
  }

  const product: Product = {
    id: productData.id,
    name: productData.name,
    category: productData.category,
    categoryName: productData.categoryName,
    description: productData.description,
    price: productData.price,
    features: productData.features,
    specifications: productData.specifications,
    images: productData.images || [],
    imageUrl: productData.imageUrl,
    createdAt: productData.createdAt,
    updatedAt: productData.updatedAt,
  };

  // Fetch related products (same category, excluding current product)
  let relatedProducts: Product[] = [];
  if (product.category) {
    relatedProducts = await fetchRelatedProducts(product.category, product.id);
  }

  return (
    <div className="flex flex-col">
      <ProductDetailSection product={product} />
      {relatedProducts.length > 0 && (
        <RelatedProductsSection products={relatedProducts} />
      )}
    </div>
  );
}
