"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolios } from "@/hooks/use-portfolios.hook";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";
import { COMPANY_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data, isLoading, error } = usePortfolios({ page: 1, limit: 50 });

  // Flatten all images from all portfolios into a single array
  const portfolioImages = useMemo(() => {
    if (!data?.data) return [];
    const allImages: string[] = [];
    data.data.forEach((portfolio) => {
      if (portfolio.images && portfolio.images.length > 0) {
        portfolio.images.forEach((image) => {
          if (image && !allImages.includes(image)) {
            allImages.push(image);
          }
        });
      }
    });
    return allImages;
  }, [data]);

  const errorMessage =
    error instanceof Error
      ? error.message
      : ALERT_MESSAGES.PORTFOLIOS.FETCH_ERROR;

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-3 lg:py-5 bg-muted/30">
      <div className="container mx-auto px-4">
       

        {/* Loading State */}
        {isLoading ? (
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="break-inside-avoid mb-4">
                <Skeleton className="w-full h-64 rounded-lg" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{errorMessage}</p>
          </div>
        ) : portfolioImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {ALERT_MESSAGES.PORTFOLIOS.NO_PORTFOLIOS}
            </p>
          </div>
        ) : (
          /* Pinterest-style Masonry Layout */
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {portfolioImages.map((imageUrl, index) => (
              <div
                key={`${imageUrl}-${index}`}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => handleImageClick(imageUrl)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={imageUrl}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      // Hide broken images
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/20 text-white hover:bg-background/40 h-10 w-10"
                onClick={handleCloseModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Portfolio preview"
                className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
