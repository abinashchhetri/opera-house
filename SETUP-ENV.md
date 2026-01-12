# Environment Variables Setup Guide

## Quick Setup

1. **Copy the example file:**

   ```bash
   cp env.example.txt .env.local
   ```

2. **Fill in your actual values** in `.env.local`

3. **Restart your development server** after making changes

## Required Variables

### MongoDB

**For Local MongoDB:**

```env
MONGODB_URI=mongodb://localhost:27017/opera-house
```

**For MongoDB Atlas:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace username, password, and cluster name:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/opera-house?retryWrites=true&w=majority
```

### Cloudinary

1. **Sign up at [Cloudinary](https://cloudinary.com)**

2. **Get your credentials:**
   - Go to Dashboard: https://console.cloudinary.com/settings/api-keys
   - Copy:
     - Cloud Name
     - API Key
     - API Secret

3. **Create an Upload Preset:**
   - Go to Settings > Upload
   - Click "Add upload preset"
   - Set:
     - **Preset name**: `opera-house-services` (or your choice)
     - **Signing mode**: `Unsigned` (important for client-side uploads)
     - **Folder**: `opera-house/services` (optional)
   - Click "Save"

4. **Add to .env.local:**

```env
# Server-side (private)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Client-side (public - exposed to browser)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=opera-house-services
```

## Complete .env.local Example

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/opera-house

# Cloudinary Server-side
CLOUDINARY_CLOUD_NAME=mycloud
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz

# Cloudinary Client-side
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=mycloud
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=opera-house-services

# Next.js
NODE_ENV=development
```

## Verification

After setting up, verify your configuration:

1. **Check MongoDB connection:**
   - Start your MongoDB server (if local)
   - Or verify Atlas cluster is running
   - Try accessing `/api/services` endpoint

2. **Check Cloudinary:**
   - Verify credentials are correct
   - Test upload widget in the application

## Security Notes

- ✅ `.env.local` is automatically gitignored
- ✅ Never commit `.env.local` to version control
- ✅ `NEXT_PUBLIC_*` variables are exposed to the browser
- ✅ Keep `CLOUDINARY_API_SECRET` private (server-side only)
- ✅ Use unsigned upload presets for client-side uploads

## Troubleshooting

### MongoDB Connection Error

- Check if MongoDB is running (local)
- Verify connection string format
- Check network/firewall settings (Atlas)

### Cloudinary Upload Fails

- Verify upload preset is set to "Unsigned"
- Check `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` matches your cloud name
- Verify `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` matches preset name exactly

### Environment Variables Not Loading

- Restart your Next.js dev server
- Check file is named `.env.local` (not `.env`)
- Verify no typos in variable names
- Check for extra spaces or quotes
