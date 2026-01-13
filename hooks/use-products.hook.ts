import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";
import { REACT_QUERY_KEYS } from "@/lib/constants/react-query-keys.constants";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";

interface UseProductsOptions {
  page?: number;
  limit?: number;
  category?: string;
  enabled?: boolean;
}

export function useProducts(options: UseProductsOptions = {}) {
  const { page = 1, limit = 10, category, enabled = true } = options;

  return useQuery({
    queryKey: REACT_QUERY_KEYS.PRODUCTS.LIST(page, limit, category),
    queryFn: async () => {
      try {
        return await getProducts(page, limit, category);
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : ALERT_MESSAGES.PRODUCTS.FETCH_ERROR
        );
      }
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}
