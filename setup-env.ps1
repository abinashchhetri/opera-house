# PowerShell script to create .env.local from template
# Run this script: .\setup-env.ps1

$envTemplate = @"
# ============================================
# ENVIRONMENT VARIABLES SETUP
# ============================================
# Fill in your actual values below
# ============================================

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/opera-house
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/opera-house?retryWrites=true&w=majority

# Cloudinary Configuration (Server-side)
# Get from: https://console.cloudinary.com/settings/api-keys
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Cloudinary Configuration (Client-side)
# Create upload preset at: https://console.cloudinary.com/settings/upload
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# Next.js Configuration
NODE_ENV=development
"@

if (Test-Path .env.local) {
    Write-Host "⚠️  .env.local already exists!" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (y/N)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "❌ Cancelled. Existing .env.local preserved." -ForegroundColor Red
        exit
    }
}

$envTemplate | Out-File -FilePath .env.local -Encoding utf8
Write-Host "✅ Created .env.local file!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Open .env.local in your editor" -ForegroundColor White
Write-Host "   2. Fill in your MongoDB connection string" -ForegroundColor White
Write-Host "   3. Fill in your Cloudinary credentials" -ForegroundColor White
Write-Host "   4. Save the file" -ForegroundColor White
Write-Host "   5. Restart your Next.js dev server" -ForegroundColor White
Write-Host ""
Write-Host "📖 See SETUP-ENV.md for detailed instructions" -ForegroundColor Cyan
