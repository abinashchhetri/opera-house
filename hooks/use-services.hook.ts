import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/lib/api/services";
import { REACT_QUERY_KEYS } from "@/lib/constants/react-query-keys.constants";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";

interface UseServicesOptions {
  page?: number;
  limit?: number;
  enabled?: boolean;
}

export function useServices(options: UseServicesOptions = {}) {
  const { page = 1, limit = 6, enabled = true } = options;

  return useQuery({
    queryKey: REACT_QUERY_KEYS.SERVICES.LIST(page, limit),
    queryFn: async () => {
      try {
        return await getServices(page, limit);
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : ALERT_MESSAGES.SERVICES.FETCH_ERROR
        );
      }
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}
