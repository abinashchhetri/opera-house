import { z } from "zod";

export const createPortfolioSchema = z.object({
  images: z.array(z.string()).optional().default([]),
});

export type CreatePortfolioInput = z.infer<typeof createPortfolioSchema>;
