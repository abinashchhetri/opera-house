"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, Check } from "lucide-react";
import { useCloudinaryWidget } from "@/lib/cloudinary/upload-widget";

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
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const { openWidget } = useCloudinaryWidget({
    cloudName,
    uploadPreset,
    folder,
    onSuccess: (url) => {
      setIsUploading(false);
      setUploadSuccess(true);
      onUploadSuccess(url);
      // Reset success state after 2 seconds
      setTimeout(() => setUploadSuccess(false), 2000);
    },
    onError: (error) => {
      setIsUploading(false);
      onUploadError?.(error);
    },
  });

  const handleClick = () => {
    setIsUploading(true);
    setUploadSuccess(false);
    openWidget();
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={disabled || isUploading}
      className={className}
      variant="outline"
    >
      {isUploading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Uploading...
        </>
      ) : uploadSuccess ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Uploaded
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
