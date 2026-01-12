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

  useEffect(() => {
    // Check if script is already loaded
    if (window.cloudinary) {
      setIsScriptLoaded(true);
      return;
    }

    // Load Cloudinary widget script
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const openWidget = useCallback(() => {
    if (!isScriptLoaded || !window.cloudinary) {
      console.error("Cloudinary widget not loaded");
      return;
    }

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ["local", "camera", "url"],
        multiple: false,
        maxFiles: 1,
        folder: folder || "opera-house/services",
      },
      (error, result) => {
        if (error) {
          console.error("Upload error:", error);
          onError?.(error);
          return;
        }

        if (result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          onSuccess?.(imageUrl);
        }
      }
    );

    widget.open();
  }, [cloudName, uploadPreset, folder, onSuccess, onError, isScriptLoaded]);

  return { openWidget, isScriptLoaded };
}
