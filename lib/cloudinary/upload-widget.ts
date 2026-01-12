"use client";

import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        config: {
          cloudName: string;
          uploadPreset: string;
          sources?: string[];
          multiple?: boolean;
          maxFiles?: number;
          folder?: string;
        },
        callback: (error: Error | null, result: any) => void
      ) => {
        open: () => void;
        close: () => void;
      };
    };
  }
}

interface UseCloudinaryWidgetOptions {
  cloudName: string;
  uploadPreset: string;
  folder?: string;
  onSuccess?: (url: string) => void;
  onError?: (error: Error) => void;
}

export function useCloudinaryWidget({
  cloudName,
  uploadPreset,
  folder,
  onSuccess,
  onError,
}: UseCloudinaryWidgetOptions) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (window.cloudinary) {
      setIsScriptLoaded(true);
      setScriptError(null);
      return;
    }

    // Reset error state when attempting to load
    setScriptError(null);

    // Load Cloudinary widget script
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      setScriptError(null);
    };

    script.onerror = () => {
      const error = new Error(
        "Failed to load Cloudinary script. Please check your internet connection and try again."
      );
      setScriptError(error);
      setIsScriptLoaded(false);
      onError?.(error);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [onError]);

  const openWidget = useCallback(() => {
    if (!isScriptLoaded) {
      console.error("Cloudinary script not loaded yet. Please wait...");
      onError?.(
        new Error("Cloudinary script is still loading. Please try again.")
      );
      return;
    }

    if (!window.cloudinary) {
      console.error("Cloudinary widget not available");
      onError?.(new Error("Cloudinary widget is not available"));
      return;
    }

    if (!cloudName || !uploadPreset) {
      console.error("Missing Cloudinary configuration", {
        cloudName,
        uploadPreset,
      });
      onError?.(new Error("Cloudinary configuration is missing"));
      return;
    }

    try {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          sources: ["local", "camera", "url"],
          multiple: false,
          maxFiles: 1,
          folder: folder || "opera-house/services",
        } as any, // Using 'as any' to allow additional Cloudinary config options
        (error, result) => {
          if (error) {
            console.error("Upload error:", error);

            // Provide more helpful error messages
            let errorMessage = "Failed to upload image";
            if (typeof error === "object" && error !== null) {
              const errorObj = error as { message?: string; status?: number };
              if (errorObj.message) {
                errorMessage = errorObj.message;

                // Specific error for missing upload preset
                if (
                  errorObj.message.includes("preset") ||
                  errorObj.message.includes("Upload preset not found")
                ) {
                  errorMessage =
                    "Upload preset not found. Please check your Cloudinary upload preset configuration in .env.local and ensure the preset exists in your Cloudinary dashboard.";
                }

                // Specific error for unsigned uploads whitelisting
                if (
                  errorObj.message.includes("whitelisted") ||
                  errorObj.message.includes("unsigned uploads")
                ) {
                  errorMessage =
                    "Upload preset must be whitelisted for unsigned uploads. Go to Cloudinary Dashboard → Settings → Security and enable 'Allow unsigned uploads'. See FIX-UPLOAD-PRESET.md for details.";
                }
              }
            } else if (typeof error === "string") {
              errorMessage = error;
              if (
                errorMessage.includes("whitelisted") ||
                errorMessage.includes("unsigned uploads")
              ) {
                errorMessage =
                  "Upload preset must be whitelisted for unsigned uploads. Go to Cloudinary Dashboard → Settings → Security and enable 'Allow unsigned uploads'. See FIX-UPLOAD-PRESET.md for details.";
              }
            }

            onError?.(new Error(errorMessage));
            return;
          }

          if (result) {
            console.log("Cloudinary widget event:", result.event, result);

            // Handle different events
            if (result.event === "success") {
              const imageUrl = result.info?.secure_url || result.info?.url;
              if (imageUrl) {
                onSuccess?.(imageUrl);
              } else {
                onError?.(new Error("Image URL not found in upload result"));
              }
            } else if (result.event === "close") {
              // Widget was closed without uploading
              console.log("Widget closed without upload");
            } else if (result.event === "abort") {
              // Upload was aborted
              console.log("Upload aborted");
            } else if (result.event === "queues-start") {
              // Upload started
              console.log("Upload started");
            } else if (result.event === "queues-end") {
              // Upload ended
              console.log("Upload ended");
            }
          }
        }
      );

      // Open widget with a small delay to ensure DOM is ready
      setTimeout(() => {
        widget.open();
      }, 100);
    } catch (error) {
      console.error("Error creating Cloudinary widget:", error);
      onError?.(
        error instanceof Error
          ? error
          : new Error("Failed to create upload widget")
      );
    }
  }, [cloudName, uploadPreset, folder, onSuccess, onError, isScriptLoaded]);

  return { openWidget, isScriptLoaded, scriptError };
}
