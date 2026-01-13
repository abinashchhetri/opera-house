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
} as const;
