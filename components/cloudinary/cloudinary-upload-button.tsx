"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, Check, AlertCircle } from "lucide-react";
import { useCloudinaryWidget } from "@/lib/cloudinary/upload-widget";
import { useToast } from "@/hooks/use-toast";

interface CloudinaryUploadButtonProps {
  cloudName: string;
  uploadPreset: string;
  folder?: string;
  onUploadSuccess: (url: string) => void;
  onUploadError?: (error: Error) => void;
  disabled?: boolean;
  className?: string;
}

export function CloudinaryUploadButton({
  cloudName,
  uploadPreset,
  folder,
  onUploadSuccess,
  onUploadError,
  disabled = false,
  className,
}: CloudinaryUploadButtonProps) {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  const { openWidget, isScriptLoaded } = useCloudinaryWidget({
    cloudName,
    uploadPreset,
    folder,
    onSuccess: (url) => {
      setIsUploading(false);
      setUploadSuccess(true);
      onUploadSuccess(url);
      toast({
        title: "Upload Successful",
        description: "Image uploaded successfully",
      });
      // Reset success state after 2 seconds
      setTimeout(() => setUploadSuccess(false), 2000);
    },
    onError: (error) => {
      setIsUploading(false);
      let errorMessage = error.message || "Failed to upload image";

      // Provide more helpful error messages
      if (
        errorMessage.includes("preset") ||
        errorMessage.includes("Upload preset not found")
      ) {
        errorMessage =
          "Upload preset not found. Please check your Cloudinary upload preset in .env.local. See CLOUDINARY-SETUP.md for instructions.";
      }

      if (
        errorMessage.includes("whitelisted") ||
        errorMessage.includes("unsigned uploads")
      ) {
        errorMessage =
          "Upload preset must be whitelisted. Go to Cloudinary Dashboard → Settings → Security and enable 'Allow unsigned uploads'. See FIX-UPLOAD-PRESET.md for details.";
      }

      toast({
        title: "Upload Error",
        description: errorMessage,
        variant: "destructive",
      });
      onUploadError?.(error);
    },
  });

  useEffect(() => {
    if (isScriptLoaded && cloudName && uploadPreset) {
      setIsWidgetReady(true);
    } else if (!cloudName || !uploadPreset) {
      console.warn("Cloudinary configuration missing:", {
        cloudName,
        uploadPreset,
      });
    }
  }, [isScriptLoaded, cloudName, uploadPreset]);

  const handleClick = () => {
    if (!isWidgetReady) {
      toast({
        title: "Not Ready",
        description: "Cloudinary widget is still loading. Please wait...",
        variant: "destructive",
      });
      return;
    }

    if (!cloudName || !uploadPreset) {
      toast({
        title: "Configuration Error",
        description:
          "Cloudinary configuration is missing. Please check your environment variables.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadSuccess(false);
    openWidget();
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={disabled || isUploading || !isWidgetReady}
      className={className}
      variant="outline"
    >
      {!isWidgetReady ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : isUploading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Opening...
        </>
      ) : uploadSuccess ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Uploaded
        </>
      ) : !cloudName || !uploadPreset ? (
        <>
          <AlertCircle className="mr-2 h-4 w-4" />
          Config Missing
        </>
      ) : (
        <>
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </>
      )}
    </Button>
  );
}
