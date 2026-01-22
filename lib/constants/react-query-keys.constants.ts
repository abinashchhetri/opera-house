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
  PRODUCTS: {
    ALL: ["products"] as const,
    LIST: (page: number, limit: number, category?: string) =>
      category
        ? (["products", "list", page, limit, category] as const)
        : (["products", "list", page, limit] as const),
    BY_ID: (id: string) => ["products", "detail", id] as const,
  },
  PORTFOLIOS: {
    ALL: ["portfolios"] as const,
    LIST: (page: number, limit: number, category?: string) =>
      category
        ? (["portfolios", "list", page, limit, category] as const)
        : (["portfolios", "list", page, limit] as const),
    BY_ID: (id: string) => ["portfolios", "detail", id] as const,
  },
} as const;
