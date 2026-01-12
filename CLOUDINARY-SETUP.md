# Cloudinary Upload Preset Setup Guide

## Error: "Upload preset not found"

This error means your Cloudinary upload preset doesn't exist or isn't configured correctly.

## Quick Fix Steps

### 1. Create Upload Preset in Cloudinary

1. **Go to Cloudinary Dashboard:**
   - Visit: https://console.cloudinary.com/settings/upload
   - Or: Dashboard → Settings → Upload

2. **Create New Upload Preset:**
   - Click **"Add upload preset"** button
   - Fill in the details:
     - **Preset name**: `opera-house-services` (or any name you prefer)
     - **Signing mode**: Select **"Unsigned"** ⚠️ (IMPORTANT for client-side uploads)
     - **Folder**: `opera-house/services` (optional, for organization)
     - **Format**: Leave as default or select specific formats
   - **IMPORTANT**: After selecting "Unsigned", you MUST also:
     - Scroll down to find **"Allow unsigned uploads"** or **"Whitelist for unsigned uploads"** option
     - **Enable/Check this option** ✅
     - This is required for the preset to work with client-side uploads
   - Click **"Save"**

3. **Copy the Preset Name:**
   - Copy the exact preset name (case-sensitive)
   - Example: `opera-house-services`

### 2. Update Your .env.local File

Open your `.env.local` file and update:

```env
NEXT_PUBLIC_CLOUDINARY_UPLOUD_PRESET=opera-house-services
```

**Important:**

- Replace `opera-house-services` with your actual preset name
- The name must match exactly (case-sensitive)
- No spaces or special characters unless your preset has them

### 3. Restart Your Dev Server

After updating `.env.local`:

```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
```

## Verify Your Setup

### Check Environment Variables

1. Open browser console (F12)
2. Look for console logs when the page loads
3. You should see: `✅ Cloudinary configuration loaded`

### Test the Upload

1. Go to `/dashboard/services`
2. Click "Add Service"
3. Click "Upload Image"
4. The widget should open without errors

## Common Issues

### Issue: "Upload preset not found"

**Solution:**

- Verify preset name in Cloudinary dashboard
- Check `.env.local` has the correct preset name
- Restart dev server after changing `.env.local`

### Issue: "Invalid upload preset"

**Solution:**

- Ensure preset is set to **"Unsigned"** mode
- Check preset hasn't been deleted

### Issue: Widget doesn't open

**Solution:**

- Check browser console for errors
- Verify `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set
- Verify `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` is set

## Your Current Configuration

Based on your `remove.txt` file, you need to:

1. **Create a preset** in Cloudinary dashboard
2. **Update this line** in your `.env.local`:
   ```env
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_actual_preset_name
   ```
3. **Restart** your dev server

## Example .env.local Entry

```env
# Cloudinary Configuration (Client-side)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dnbodlxzt
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=opera-house-services
```

Replace `opera-house-services` with your actual preset name from Cloudinary.

## Need Help?

1. Check Cloudinary Dashboard → Settings → Upload
2. Verify preset exists and is set to "Unsigned"
3. Check browser console for detailed error messages
4. Ensure `.env.local` is in the project root (not in a subfolder)
