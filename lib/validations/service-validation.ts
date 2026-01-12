import { z } from "zod";

export const createServiceSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title cannot exceed 200 characters")
    .trim(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(2000, "Description cannot exceed 2000 characters")
    .trim(),
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required")
    .max(20, "Cannot exceed 20 features"),
  imageUrl: z.string().url("Invalid image URL").optional().or(z.literal("")),
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
