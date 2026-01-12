import mongoose, { Schema, Document, Model } from "mongoose";

export interface IService extends Document {
  title: string;
  description: string;
  features: string[];
  image?: string;
  imageUrl?: string; // Cloudinary URL
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema<IService> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Service title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Service description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    features: {
      type: [String],
      required: [true, "Service features are required"],
      validate: {
        validator: (features: string[]) => features.length > 0,
        message: "At least one feature is required",
      },
    },
    image: {
      type: String,
      trim: true,
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
ServiceSchema.index({ title: 1 });
ServiceSchema.index({ createdAt: -1 });

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);

export default Service;
