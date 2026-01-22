/**
 * Client-side API functions for portfolios
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export interface CreatePortfolioPayload {
  images: string[];
}

export type UpdatePortfolioPayload = CreatePortfolioPayload;

export interface PortfolioResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    images: string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };
  errors?: Array<{
    path: string[];
    message: string;
  }>;
}

export interface GetPortfoliosResponse {
  success: boolean;
  data: Array<{
    id: string;
    images: string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  }>;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Create a new portfolio
 */
export async function createPortfolio(
  payload: CreatePortfolioPayload
): Promise<PortfolioResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios`, {
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
        message: data.message || "Failed to create portfolio",
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
 * Get all portfolios with pagination
 */
export async function getPortfolios(
  page: number = 1,
  limit: number = 10,
  category?: string
): Promise<GetPortfoliosResponse> {
  try {
    // Handle relative URLs (when API_BASE_URL starts with /)
    const baseUrl = API_BASE_URL.startsWith("/")
      ? `${window.location.origin}${API_BASE_URL}`
      : API_BASE_URL;
    const url = new URL(`${baseUrl}/portfolios`);
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
      throw new Error(data.message || "Failed to fetch portfolios");
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Network error");
  }
}

/**
 * Get a single portfolio by ID
 */
export async function getPortfolioById(id: string): Promise<PortfolioResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch portfolio",
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
 * Update an existing portfolio
 */
export async function updatePortfolio(
  id: string,
  payload: UpdatePortfolioPayload
): Promise<PortfolioResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
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
        message: data.message || "Failed to update portfolio",
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
 * Delete a portfolio by ID
 */
export async function deletePortfolio(id: string): Promise<PortfolioResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to delete portfolio",
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
