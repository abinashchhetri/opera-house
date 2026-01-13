/**
 * React Query Keys Constants
 * All query keys should be defined here for consistency and type safety
 */

export const REACT_QUERY_KEYS = {
  SERVICES: {
    ALL: ["services"] as const,
    LIST: (page: number, limit: number) =>
      ["services", "list", page, limit] as const,
    BY_ID: (id: string) => ["services", "detail", id] as const,
  },
} as const;
