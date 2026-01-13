"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CloudinaryUploadButton } from "@/components/cloudinary/cloudinary-upload-button";
import {
  createService,
  updateService,
  getServiceById,
} from "@/lib/api/services";
import { Loader2, Image as ImageIcon, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title cannot exceed 200 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(2000, "Description cannot exceed 2000 characters"),
  features: z.string().min(1, "At least one feature is required"),
  imageUrl: z.string().url("Invalid image URL").optional().or(z.literal("")),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

interface AddServiceFormProps {
  serviceId?: string;
  onSuccess?: () => void;
}

export function AddServiceForm({ serviceId, onSuccess }: AddServiceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(!!serviceId);
  const [imageUrl, setImageUrl] = useState<string>("");
  const isEditMode = !!serviceId;

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      features: "",
      imageUrl: "",
    },
  });

  // Load service data when editing
  useEffect(() => {
    if (serviceId) {
      const loadService = async () => {
        try {
          setIsLoading(true);
          const response = await getServiceById(serviceId);
          if (response.success && response.data) {
            const service = response.data;
            form.reset({
              title: service.title,
              description: service.description,
              features: service.features.join(", "),
              imageUrl: service.imageUrl || "",
            });
            setImageUrl(service.imageUrl || "");
          } else {
            toast({
              title: "Error",
              description: response.message || "Failed to load service",
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
      loadService();
    }
  }, [serviceId, form, toast]);

  const onSubmit = async (data: ServiceFormValues) => {
    setIsSubmitting(true);

    try {
      // Parse features from comma-separated string
      const features = data.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      const payload = {
        title: data.title,
        description: data.description,
        features,
        imageUrl: imageUrl || undefined,
      };

      const result = isEditMode
        ? await updateService(serviceId!, payload)
        : await createService(payload);

      if (result.success && result.data) {
        toast({
          title: "Success",
          description: isEditMode
            ? "Service updated successfully"
            : "Service created successfully",
        });
        if (!isEditMode) {
          form.reset();
          setImageUrl("");
        }
        onSuccess?.();
      } else {
        toast({
          title: "Error",
          description:
            result.message ||
            (isEditMode
              ? "Failed to update service"
              : "Failed to create service"),
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
    setImageUrl(url);
    form.setValue("imageUrl", url);
  };

  const handleRemoveImage = () => {
    setImageUrl("");
    form.setValue("imageUrl", "");
  };

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

  // Debug: Log environment variables (remove in production)
  useEffect(() => {
    if (!cloudName || !uploadPreset) {
      console.warn("⚠️ Cloudinary environment variables missing:", {
        cloudName: cloudName || "NOT SET",
        uploadPreset: uploadPreset || "NOT SET",
        allEnvVars: {
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET:
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        },
      });
    } else {
      console.log("✅ Cloudinary configuration loaded:", {
        cloudName,
        uploadPreset: uploadPreset.substring(0, 10) + "...",
      });
    }
  }, [cloudName, uploadPreset]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., UPVC Sliding Windows" {...field} />
              </FormControl>
              <FormDescription>
                Enter a clear and descriptive title for the service
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the service in detail..."
                  className="min-h-24"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a detailed description of the service
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Features */}
        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Energy Efficient, Weather Resistant, Low Maintenance (comma-separated)"
                  className="min-h-20"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter features separated by commas (e.g., Feature 1, Feature 2,
                Feature 3)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Service Image</label>
          <div className="space-y-4">
            {imageUrl ? (
              <div className="relative">
                <div className="relative w-full h-48 rounded-md overflow-hidden border">
                  <img
                    src={imageUrl}
                    alt="Service preview"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded-md">
                <div className="text-center space-y-2">
                  <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    No image uploaded
                  </p>
                </div>
              </div>
            )}
            <CloudinaryUploadButton
              cloudName={cloudName}
              uploadPreset={uploadPreset}
              folder="opera-house/services"
              onUploadSuccess={handleImageUpload}
              onUploadError={(error) => {
                toast({
                  title: "Upload Error",
                  description: error.message,
                  variant: "destructive",
                });
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Upload an image for the service (optional)
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          {!isEditMode && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                setImageUrl("");
              }}
              disabled={isSubmitting}
            >
              Reset
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting || isLoading}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditMode ? "Updating..." : "Creating..."}
              </>
            ) : isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : isEditMode ? (
              "Update Service"
            ) : (
              "Create Service"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
