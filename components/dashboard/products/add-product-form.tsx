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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CloudinaryUploadButton } from "@/components/cloudinary/cloudinary-upload-button";
import {
  createProduct,
  updateProduct,
  getProductById,
} from "@/lib/api/products";
import { getServices } from "@/lib/api/services";
import { Loader2, Image as ImageIcon, X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ALERT_MESSAGES } from "@/lib/constants/alert-messages.constants";

const productFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name cannot exceed 200 characters"),
  category: z.string().optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(2000, "Description cannot exceed 2000 characters"),
  price: z.string().optional(),
  features: z.string().min(1, "At least one feature is required"),
  imageUrl: z.string().url("Invalid image URL").optional().or(z.literal("")),
  images: z.string().optional(),
  specifications: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

interface AddProductFormProps {
  productId?: string;
  onSuccess?: () => void;
}

export function AddProductForm({ productId, onSuccess }: AddProductFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(!!productId);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [services, setServices] = useState<
    Array<{ id: string; title: string }>
  >([]);
  const [isLoadingServices, setIsLoadingServices] = useState(false);
  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");
  const [specifications, setSpecifications] = useState<Record<string, string>>(
    {}
  );
  const isEditMode = !!productId;

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      category: "none",
      description: "",
      price: "",
      features: "",
      imageUrl: "",
      images: "",
      specifications: "",
    },
  });

  // Load services for category dropdown
  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoadingServices(true);
        const response = await getServices(1, 100);
        if (response.success) {
          setServices(
            response.data.map((s) => ({
              id: s.id,
              title: s.title,
            }))
          );
        }
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setIsLoadingServices(false);
      }
    };
    loadServices();
  }, []);

  // Load product data when editing
  useEffect(() => {
    if (productId) {
      const loadProduct = async () => {
        try {
          setIsLoading(true);
          const response = await getProductById(productId);
          if (response.success && response.data) {
            const product = response.data;
            form.reset({
              name: product.name,
              category: product.category || "none",
              description: product.description,
              price: product.price || "",
              features: product.features.join(", "),
              imageUrl: product.imageUrl || "",
              images: product.images?.join(", ") || "",
              specifications: "",
            });
            setImageUrl(product.imageUrl || "");
            setImages(product.images || []);
            setSpecifications(product.specifications || {});
          } else {
            toast({
              title: "Error",
              description: response.message || "Failed to load product",
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
      loadProduct();
    }
  }, [productId, form, toast]);

  const onSubmit = async (values: ProductFormValues) => {
    try {
      setIsSubmitting(true);

      // Parse features from comma-separated string
      const featuresArray = values.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f.length > 0);

      // Parse images from comma-separated string
      const imagesArray = values.images
        ? values.images
            .split(",")
            .map((img) => img.trim())
            .filter((img) => img.length > 0)
        : [];

      const payload = {
        name: values.name,
        category:
          values.category && values.category !== "none"
            ? values.category
            : undefined,
        description: values.description,
        price: values.price || undefined,
        features: featuresArray,
        specifications:
          Object.keys(specifications).length > 0 ? specifications : undefined,
        images: imagesArray.length > 0 ? imagesArray : undefined,
        imageUrl: imageUrl || undefined,
      };

      let response;
      if (isEditMode && productId) {
        response = await updateProduct(productId, payload);
      } else {
        response = await createProduct(payload);
      }

      if (response.success) {
        toast({
          title: isEditMode ? "Product Updated" : "Product Created",
          description: isEditMode
            ? ALERT_MESSAGES.PRODUCTS.UPDATE_SUCCESS
            : ALERT_MESSAGES.PRODUCTS.CREATE_SUCCESS,
        });
        onSuccess?.();
      } else {
        toast({
          title: "Error",
          description:
            response.message ||
            (isEditMode
              ? ALERT_MESSAGES.PRODUCTS.UPDATE_ERROR
              : ALERT_MESSAGES.PRODUCTS.CREATE_ERROR),
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

  const handleAddImage = () => {
    const imageInput = form.watch("images");
    if (imageInput) {
      const newImages = imageInput
        .split(",")
        .map((img) => img.trim())
        .filter((img) => img.length > 0);
      setImages(newImages);
    }
  };

  const handleAddSpecification = () => {
    if (specKey.trim() && specValue.trim()) {
      setSpecifications((prev) => ({
        ...prev,
        [specKey.trim()]: specValue.trim(),
      }));
      setSpecKey("");
      setSpecValue("");
    }
  };

  const handleRemoveSpecification = (key: string) => {
    setSpecifications((prev) => {
      const newSpecs = { ...prev };
      delete newSpecs[key];
      return newSpecs;
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    const imagesString = images.filter((_, i) => i !== index).join(", ");
    form.setValue("images", imagesString);
  };

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
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., UPVC Sliding Window" {...field} />
              </FormControl>
              <FormDescription>
                Enter a clear and descriptive name for the product
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category (Service) */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category (Service)</FormLabel>
              <Select
                onValueChange={(value) => {
                  // Convert empty string to undefined
                  field.onChange(value === "none" ? undefined : value);
                }}
                value={field.value || "none"}
                disabled={isLoadingServices}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service category (optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Optionally link this product to a service category
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
                  placeholder="Describe the product in detail..."
                  className="min-h-24"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a detailed description of the product
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., $500 or Contact for pricing"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter the price or pricing information
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

        {/* Specifications */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Specifications</label>
          <div className="flex gap-2">
            <Input
              placeholder="Key (e.g., Material)"
              value={specKey}
              onChange={(e) => setSpecKey(e.target.value)}
              className="flex-1"
            />
            <Input
              placeholder="Value (e.g., UPVC)"
              value={specValue}
              onChange={(e) => setSpecValue(e.target.value)}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleAddSpecification}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          {Object.keys(specifications).length > 0 && (
            <div className="space-y-2 mt-2">
              {Object.entries(specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-2 border rounded-md"
                >
                  <span className="text-sm">
                    <strong>{key}:</strong> {value}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveSpecification(key)}
                    className="h-6 w-6"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Primary Image Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Primary Image</label>
          <div className="space-y-4">
            {imageUrl ? (
              <div className="relative">
                <div className="relative w-full h-48 rounded-md overflow-hidden border">
                  <img
                    src={imageUrl}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    setImageUrl("");
                    form.setValue("imageUrl", "");
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <CloudinaryUploadButton
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""}
                uploadPreset={
                  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
                }
                onUploadSuccess={handleImageUpload}
                folder="products"
              />
            )}
          </div>
        </div>

        {/* Additional Images */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Images</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter image URLs separated by commas"
                  className="min-h-20"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleAddImage();
                  }}
                />
              </FormControl>
              <FormDescription>
                Enter additional image URLs separated by commas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => handleRemoveImage(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditMode ? "Updating..." : "Creating..."}
              </>
            ) : isEditMode ? (
              "Update Product"
            ) : (
              "Create Product"
            )}
          </Button>
          {!isEditMode && (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                setImageUrl("");
                setImages([]);
                setSpecifications({});
              }}
            >
              Reset
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
