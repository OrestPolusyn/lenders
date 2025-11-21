#!/bin/bash

# 🚀 Auto Deploy Script for Fornex
# Usage: ./auto-deploy.sh

echo "🔄 Starting auto-deploy..."

# Step 1: Clean cache
echo "🧹 Cleaning cache..."
rm -rf .astro dist

# Step 2: Rebuild with production env
echo "🔨 Building with latest WordPress data..."
npm run build:production

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build successful!"

# Step 3: FTP Upload (потрібно встановити lftp)
echo "📤 Uploading to Fornex..."

# FTP credentials (змінити на свої!)
FTP_HOST="ftp.leanders.markupers.com.ua"
FTP_USER="your_ftp_username"
FTP_PASS="your_ftp_password"
REMOTE_DIR="/public_html"

# Check if lftp installed
if ! command -v lftp &> /dev/null; then
    echo "⚠️  lftp not installed"
    echo "Install with: brew install lftp"
    echo ""
    echo "📦 Build complete in dist/ folder"
    echo "Upload manually via cPanel File Manager"
    exit 0
fi

# Upload via FTP
lftp -c "
set ftp:ssl-allow no;
open -u $FTP_USER,$FTP_PASS $FTP_HOST;
lcd dist;
cd $REMOTE_DIR;
mirror --reverse --delete --verbose --parallel=3;
bye;
"

if [ $? -eq 0 ]; then
  echo "✅ Upload successful!"
  echo "🌐 Site updated: https://leanders.markupers.com.ua"
else
  echo "❌ Upload failed!"
  echo "Upload manually via cPanel"
fi

echo ""
echo "🎉 Done!"
