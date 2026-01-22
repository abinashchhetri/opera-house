import { useQuery } from "@tanstack/react-query";
import { getPortfolios } from "@/lib/api/portfolios";
import { REACT_QUERY_KEYS } from "@/lib/constants/react-query-keys.constants";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";

interface UsePortfoliosOptions {
  page?: number;
  limit?: number;
  category?: string;
  enabled?: boolean;
}

export function usePortfolios(options: UsePortfoliosOptions = {}) {
  const { page = 1, limit = 10, category, enabled = true } = options;

  return useQuery({
    queryKey: REACT_QUERY_KEYS.PORTFOLIOS.LIST(page, limit, category),
    queryFn: async () => {
      try {
        return await getPortfolios(page, limit, category);
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : ALERT_MESSAGES.PORTFOLIOS.FETCH_ERROR
        );
      }
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}
