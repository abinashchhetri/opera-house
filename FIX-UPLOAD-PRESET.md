# Fix: "Upload preset must be whitelisted for unsigned uploads"

## What This Error Means

This error occurs when your Cloudinary upload preset is set to "Unsigned" mode, but it hasn't been **whitelisted** (enabled) for unsigned uploads in your Cloudinary account settings.

## Quick Fix (2 Steps)

### Step 1: Enable Unsigned Uploads in Account Settings

1. **Go to Cloudinary Settings:**
   - Visit: https://console.cloudinary.com/settings/security
   - Or: Dashboard → Settings → Security

2. **Enable Unsigned Uploads:**
   - Look for **"Allow unsigned uploads"** section
   - **Enable** the toggle/checkbox
   - This allows your account to accept unsigned uploads

3. **Save the settings**

### Step 2: Verify Your Upload Preset

1. **Go to Upload Settings:**
   - Visit: https://console.cloudinary.com/settings/upload

2. **Find Your Preset:**
   - Locate your upload preset (e.g., `opera-house-services`)
   - Click on it to edit

3. **Verify Settings:**
   - **Signing mode**: Should be set to **"Unsigned"**
   - Make sure the preset is **saved** and **active**

4. **If you need to create a new preset:**
   - Click "Add upload preset"
   - Set **Signing mode** to **"Unsigned"**
   - **Enable** "Allow unsigned uploads" (if shown)
   - Save the preset

## Alternative: Use Signed Uploads (Server-side)

If you prefer to keep unsigned uploads disabled for security, you can upload images server-side instead:

1. Keep upload preset as **"Signed"**
2. Upload images through your API endpoint
3. Use Cloudinary server-side SDK

But for client-side uploads (current setup), you need unsigned uploads enabled.

## Verify It's Working

After enabling unsigned uploads:

1. **Restart your dev server** (if needed)
2. Try uploading an image again
3. The error should be gone

## Security Note

- Unsigned uploads are convenient for client-side uploads
- They're safe when combined with upload presets that have restrictions
- You can limit file types, sizes, and folders in the preset settings

## Still Having Issues?

1. **Check Cloudinary Dashboard:**
   - Settings → Security → Verify "Allow unsigned uploads" is ON
   - Settings → Upload → Verify preset exists and is "Unsigned"

2. **Check Your .env.local:**

   ```env
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
   ```

   - Make sure the name matches exactly

3. **Restart Dev Server:**
   - Environment variables load at startup
   - Stop and restart: `npm run dev`
