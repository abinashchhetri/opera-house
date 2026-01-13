/**
 * Client-side API functions for services
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export interface CreateServicePayload {
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
}

export type UpdateServicePayload = CreateServicePayload;

export interface ServiceResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    title: string;
    description: string;
    features: string[];
    imageUrl?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
  errors?: Array<{
    path: string[];
    message: string;
  }>;
}

export interface GetServicesResponse {
  success: boolean;
  data: Array<{
    id: string;
    title: string;
    description: string;
    features: string[];
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
 * Create a new service
 */
export async function createService(
  payload: CreateServicePayload
): Promise<ServiceResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
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
        message: data.message || "Failed to create service",
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
 * Get all services with pagination
 */
export async function getServices(
  page: number = 1,
  limit: number = 10
): Promise<GetServicesResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/services?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch services");
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Network error");
  }
}

/**
 * Get a single service by ID
 */
export async function getServiceById(id: string): Promise<ServiceResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to fetch service",
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
 * Update an existing service
 */
export async function updateService(
  id: string,
  payload: UpdateServicePayload
): Promise<ServiceResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
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
        message: data.message || "Failed to update service",
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
 * Delete a service by ID
 */
export async function deleteService(id: string): Promise<ServiceResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to delete service",
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
