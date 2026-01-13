"use client";

import { ServiceCard } from "@/components/sections/services/service-card";
import { useServices } from "@/hooks/use-services.hook";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function ServicesGrid() {
  const { data, isLoading, error } = useServices({ page: 1, limit: 100 });

  const services = data?.data || [];
  const errorMessage =
    error instanceof Error
      ? error.message
      : ALERT_MESSAGES.SERVICES.FETCH_ERROR;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col items-center border border-[#E0E0E0] shadow-[0_4px_12px_rgba(0,0,0,0.05),0_-4px_12px_rgba(0,0,0,0.05)] bg-white p-4 sm:p-6 rounded-[20px] min-h-[387px] gap-4"
          >
            <Skeleton className="w-full h-48 sm:h-52 rounded-[13px]" />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{errorMessage}</AlertDescription>
      </Alert>
    );
  }

  if (services.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>No Services</AlertTitle>
        <AlertDescription>
          {ALERT_MESSAGES.SERVICES.NO_SERVICES}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(
        (service: {
          id: string;
          title: string;
          description: string;
          imageUrl?: string;
        }) => (
          <ServiceCard
            key={service.id}
            image={service.imageUrl || ""}
            title={service.title}
            subTitle={service.description}
            slug={`/products#${service.id}`}
          />
        )
      )}
    </div>
  );
}
