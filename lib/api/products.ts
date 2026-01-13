/**
 * Client-side API functions for products
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export interface CreateProductPayload {
  name: string;
  category?: string;
  description: string;
  price?: string;
  features: string[];
  specifications?: Record<string, string>;
  images?: string[];
  imageUrl?: string;
}

export type UpdateProductPayload = CreateProductPayload;

export interface ProductResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    category?: string;
    categoryName?: string;
    description: string;
    price?: string;
    features: string[];
    specifications?: Record<string, string>;
    images: string[];
    imageUrl?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
  errors?: Array<{
    path: string[];
    message: string;
  }>;
}

export interface GetProductsResponse {
  success: boolean;
  data: Array<{
    id: string;
    name: string;
    category?: string;
    categoryName?: string;
    description: string;
    price?: string;
    features: string[];
    specifications?: Record<string, string>;
    images: string[];
    imageUrl?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  }>;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Create a new product
 */
export async function createProduct(
  payload: CreateProductPayload
): Promise<ProductResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to create product",
        errors: data.errors,
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}

/**
 * Get all products with pagination
 */
export async function getProducts(
  page: number = 1,
  limit: number = 10,
  category?: string
): Promise<GetProductsResponse> {
  try {
    // Handle relative URLs (when API_BASE_URL starts with /)
    const baseUrl = API_BASE_URL.startsWith("/")
      ? `${window.location.origin}${API_BASE_URL}`
      : API_BASE_URL;
    const url = new URL(`${baseUrl}/products`);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());
    if (category) {
      url.searchParams.set("category", category);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch products");
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Network error");
  }
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<ProductResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch product",
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}

/**
 * Update an existing product
 */
export async function updateProduct(
  id: string,
  payload: UpdateProductPayload
): Promise<ProductResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to update product",
        errors: data.errors,
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}

/**
 * Delete a product by ID
 */
export async function deleteProduct(id: string): Promise<ProductResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to delete product",
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}
