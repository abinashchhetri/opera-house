/**
 * Alert Messages Constants
 * All success, error, and info messages should be defined here
 */

export const ALERT_MESSAGES = {
  SERVICES: {
    FETCH_SUCCESS: "Services loaded successfully",
    FETCH_ERROR: "Failed to load services",
    CREATE_SUCCESS: "Service created successfully",
    CREATE_ERROR: "Failed to create service",
    UPDATE_SUCCESS: "Service updated successfully",
    UPDATE_ERROR: "Failed to update service",
    DELETE_SUCCESS: "Service deleted successfully",
    DELETE_ERROR: "Failed to delete service",
    NOT_FOUND: "Service not found",
    NO_SERVICES: "No services available",
  },
  PRODUCTS: {
    FETCH_SUCCESS: "Products loaded successfully",
    FETCH_ERROR: "Failed to load products",
    CREATE_SUCCESS: "Product created successfully",
    CREATE_ERROR: "Failed to create product",
    UPDATE_SUCCESS: "Product updated successfully",
    UPDATE_ERROR: "Failed to update product",
    DELETE_SUCCESS: "Product deleted successfully",
    DELETE_ERROR: "Failed to delete product",
    NOT_FOUND: "Product not found",
    NO_PRODUCTS: "No products available",
  },
  PORTFOLIOS: {
    FETCH_SUCCESS: "Portfolios loaded successfully",
    FETCH_ERROR: "Failed to load portfolios",
    CREATE_SUCCESS: "Portfolio created successfully",
    CREATE_ERROR: "Failed to create portfolio",
    UPDATE_SUCCESS: "Portfolio updated successfully",
    UPDATE_ERROR: "Failed to update portfolio",
    DELETE_SUCCESS: "Portfolio deleted successfully",
    DELETE_ERROR: "Failed to delete portfolio",
    NOT_FOUND: "Portfolio not found",
    NO_PORTFOLIOS: "No portfolios available",
  },
} as const;
