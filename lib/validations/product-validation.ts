import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(200, "Name cannot exceed 200 characters")
    .trim(),
  category: z.string().trim().optional().or(z.literal("")),
  description: z
    .string()
    .min(1, "Description is required")
    .max(2000, "Description cannot exceed 2000 characters")
    .trim(),
  price: z.string().trim().optional().or(z.literal("")),
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required")
    .max(20, "Cannot exceed 20 features"),
  specifications: z
    .record(z.string(), z.string().optional())
    .optional()
    .default({}),
  images: z.array(z.string().url("Invalid image URL")).optional().default([]),
  imageUrl: z.string().url("Invalid image URL").optional().or(z.literal("")),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
