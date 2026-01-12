"use client";

import { useState, useEffect } from "react";
import { getServices } from "@/lib/api/services";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Image as ImageIcon } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServicesList() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getServices(1, 50);
      if (response.success) {
        setServices(response.data);
      } else {
        setError("Failed to fetch services");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (services.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>No Services</AlertTitle>
        <AlertDescription>
          You haven't created any services yet. Click "Add Service" to get
          started.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.id}>
          <CardContent className="p-6">
            <div className="flex gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                {service.imageUrl ? (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-32 h-32 bg-muted rounded-md flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                {service.createdAt && (
                  <p className="text-xs text-muted-foreground">
                    Created: {new Date(service.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
