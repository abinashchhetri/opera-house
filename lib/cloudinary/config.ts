import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

// Validate Cloudinary configuration
if (
  !cloudinaryConfig.cloud_name ||
  !cloudinaryConfig.api_key ||
  !cloudinaryConfig.api_secret
) {
  throw new Error(
    "Missing Cloudinary environment variables. Please check your .env.local file."
  );
}

// Configure Cloudinary
cloudinary.config(cloudinaryConfig);

export { cloudinary };
export default cloudinary;
