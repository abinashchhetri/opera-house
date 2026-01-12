# Services API Documentation

## Overview

This API provides endpoints for managing services in the Opera House application. It uses MongoDB for data storage and Cloudinary for image uploads.

## Setup

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/opera-house
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/opera-house

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### 2. MongoDB Setup

- **Local MongoDB**: Install MongoDB locally or use Docker
- **MongoDB Atlas**: Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### 3. Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your Cloud Name, API Key, and API Secret from the dashboard
3. Create an upload preset:
   - Go to Settings > Upload
   - Create a new upload preset
   - Set signing mode to "Unsigned" (for client-side uploads)
   - Save the preset name

## API Endpoints

### POST `/api/services`

Create a new service.

**Request Body:**

```json
{
  "title": "UPVC Sliding Windows",
  "description": "Energy-efficient sliding windows with superior insulation.",
  "features": ["Energy Efficient", "Weather Resistant", "Low Maintenance"],
  "imageUrl": "https://res.cloudinary.com/your-cloud/image/upload/v123/service.jpg"
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Service created successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "title": "UPVC Sliding Windows",
    "description": "Energy-efficient sliding windows...",
    "features": ["Energy Efficient", "Weather Resistant"],
    "imageUrl": "https://res.cloudinary.com/...",
    "createdAt": "2024-01-12T10:00:00.000Z",
    "updatedAt": "2024-01-12T10:00:00.000Z"
  }
}
```

**Error Response (400):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "path": ["title"],
      "message": "Title is required"
    }
  ]
}
```

### GET `/api/services`

Get all services with pagination.

**Query Parameters:**

- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Example:**

```
GET /api/services?page=1&limit=10
```

**Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "title": "UPVC Sliding Windows",
      "description": "...",
      "features": [...],
      "imageUrl": "...",
      "createdAt": "2024-01-12T10:00:00.000Z",
      "updatedAt": "2024-01-12T10:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

## Client-Side Usage

### Using the API Client

```typescript
import { createService, getServices } from "@/lib/api/services";

// Create a service
const result = await createService({
  title: "UPVC Sliding Windows",
  description: "Energy-efficient sliding windows...",
  features: ["Energy Efficient", "Weather Resistant"],
  imageUrl: "https://res.cloudinary.com/...",
});

if (result.success) {
  console.log("Service created:", result.data);
} else {
  console.error("Error:", result.message);
}

// Get services
const services = await getServices(1, 10);
console.log(services.data);
```

### Using Cloudinary Upload Button

```tsx
import { CloudinaryUploadButton } from "@/components/cloudinary/cloudinary-upload-button";

function ServiceForm() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CloudinaryUploadButton
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      folder="opera-house/services"
      onUploadSuccess={(url) => setImageUrl(url)}
      onUploadError={(error) => console.error(error)}
    />
  );
}
```

## Project Structure

```
lib/
  ├── db/
  │   └── mongodb.ts          # MongoDB connection utility
  ├── cloudinary/
  │   ├── config.ts            # Cloudinary configuration
  │   └── upload-widget.ts     # Client-side upload widget hook
  ├── validations/
  │   └── service-validation.ts # Zod validation schemas
  └── api/
      └── services.ts         # Client-side API functions

models/
  └── Service.ts              # Service database model

app/
  └── api/
      └── services/
          └── route.ts        # API route handlers

components/
  └── cloudinary/
      └── cloudinary-upload-button.tsx # Upload button component
```

## Validation Rules

- **title**: Required, 1-200 characters
- **description**: Required, 1-2000 characters
- **features**: Required, 1-20 items, each non-empty
- **imageUrl**: Optional, must be valid URL if provided

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error message",
  "errors": [] // Only for validation errors
}
```

## Notes

- The API uses connection pooling for MongoDB to improve performance
- Cloudinary uploads are handled client-side using the upload widget
- All timestamps are automatically managed by MongoDB
- Services are indexed by title and createdAt for better query performance
