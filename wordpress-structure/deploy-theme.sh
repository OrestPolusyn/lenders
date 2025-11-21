#!/bin/bash

# WordPress Theme Deployment Script
# This script creates a ZIP archive of the theme ready for upload

echo "🚀 Creating WordPress Theme Package..."

# Theme name
THEME_NAME="lenders-theme"
THEME_DIR="$THEME_NAME"

# Create temp directory
rm -rf "$THEME_DIR" 2>/dev/null
mkdir -p "$THEME_DIR"

echo "📦 Copying files..."

# Copy files
cp style.css "$THEME_DIR/"
cp functions.php "$THEME_DIR/"
cp -r includes/ "$THEME_DIR/"

# Create screenshot (placeholder)
echo "🖼️  Creating screenshot..."
# You can replace this with actual screenshot.png file

echo "🗜️  Creating ZIP archive..."
zip -r "${THEME_NAME}.zip" "$THEME_DIR"

# Cleanup
rm -rf "$THEME_DIR"

echo "✅ Done! Upload ${THEME_NAME}.zip to WordPress"
echo ""
echo "📍 Upload location: wp-content/themes/"
echo "🌐 Then activate in: WordPress Admin → Appearance → Themes"
echo ""
echo "📋 Don't forget:"
echo "   1. Install ACF PRO plugin"
echo "   2. Create required pages"
echo "   3. Fill ACF fields"
echo "   4. Create Primary Menu"
echo "   5. Save Permalinks"
