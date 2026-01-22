"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CloudinaryUploadButton } from "@/components/cloudinary/cloudinary-upload-button";
import {
  createPortfolio,
  updatePortfolio,
  getPortfolioById,
} from "@/lib/api/portfolios";
import { Loader2, Image as ImageIcon, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";

interface AddPortfolioFormProps {
  portfolioId?: string;
  onSuccess?: () => void;
}

export function AddPortfolioForm({
  portfolioId,
  onSuccess,
}: AddPortfolioFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(!!portfolioId);
  const [images, setImages] = useState<string[]>([]);
  const isEditMode = !!portfolioId;

  // Load portfolio data for edit mode
  useEffect(() => {
    if (portfolioId) {
      const loadPortfolio = async () => {
        try {
          setIsLoading(true);
          const response = await getPortfolioById(portfolioId);
          if (response.success && response.data) {
            const portfolio = response.data;
            setImages(portfolio.images || []);
          } else {
            toast({
              title: "Error",
              description: response.message || "Failed to load portfolio",
              variant: "destructive",
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description:
              error instanceof Error
                ? error.message
                : "An unexpected error occurred",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };
      loadPortfolio();
    }
  }, [portfolioId, toast]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Only send images (can be empty array)
      const payload = {
        images: images || [],
      };

      const response = isEditMode
        ? await updatePortfolio(portfolioId, payload)
        : await createPortfolio(payload);

      if (response.success) {
        toast({
          title: isEditMode ? "Portfolio Updated" : "Portfolio Created",
          description: isEditMode
            ? ALERT_MESSAGES.PORTFOLIOS.UPDATE_SUCCESS
            : ALERT_MESSAGES.PORTFOLIOS.CREATE_SUCCESS,
        });
        onSuccess?.();
      } else {
        toast({
          title: "Error",
          description:
            response.message ||
            (isEditMode
              ? ALERT_MESSAGES.PORTFOLIOS.UPDATE_ERROR
              : ALERT_MESSAGES.PORTFOLIOS.CREATE_ERROR),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setImages((prev) => [...prev, url]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Images - Multiple Upload */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Upload Images</label>
          <p className="text-sm text-muted-foreground mt-1">
            Upload multiple images for your portfolio (at least 1 required)
          </p>
        </div>

        {/* Image Upload Button */}
        <div className="flex items-center gap-2">
          <CloudinaryUploadButton
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""}
            uploadPreset={
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
            }
            onUploadSuccess={handleImageUpload}
            folder="opera-house/portfolios"
          />
          <span className="text-sm text-muted-foreground">
            {images.length} image{images.length !== 1 ? "s" : ""} uploaded
          </span>
        </div>

        {/* Uploaded Images Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className="relative group border rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-32">
                  <img
                    src={imageUrl}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {images.length === 0 && (
          <div className="flex items-center justify-center w-full h-64 border-2 border-dashed rounded-md">
            <div className="text-center space-y-2">
              <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No images uploaded yet. Click the upload button to add images.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={() => onSuccess?.()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditMode ? "Update Portfolio" : "Create Portfolio"}
        </Button>
      </div>
    </div>
  );
}
