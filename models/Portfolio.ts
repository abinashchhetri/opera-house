import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPortfolio extends Document {
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Delete existing model if it exists to force recompilation with new schema
if (mongoose.models.Portfolio) {
  delete mongoose.models.Portfolio;
  delete (mongoose as any).modelSchemas.Portfolio;
}

const PortfolioSchema: Schema<IPortfolio> = new Schema(
  {
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    strict: true, // Only save fields defined in schema - ignore extra fields
  }
);

// Create index for better query performance
PortfolioSchema.index({ createdAt: -1 });

// Create model - force new compilation
const Portfolio: Model<IPortfolio> = mongoose.model<IPortfolio>(
  "Portfolio",
  PortfolioSchema
);

export default Portfolio;
