import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category?: string; // Service ID reference (optional)
  description: string;
  price?: string;
  features: string[];
  specifications?: Record<string, string>;
  images: string[];
  imageUrl?: string; // Cloudinary URL (primary image)
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [200, "Name cannot exceed 200 characters"],
    },
    category: {
      type: String,
      trim: true,
      ref: "Service",
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: String,
      trim: true,
    },
    features: {
      type: [String],
      required: [true, "Product features are required"],
      validate: {
        validator: (features: string[]) => features.length > 0,
        message: "At least one feature is required",
      },
    },
    specifications: {
      type: Schema.Types.Mixed,
      default: {},
    },
    images: {
      type: [String],
      default: [],
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
ProductSchema.index({ name: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ createdAt: -1 });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
