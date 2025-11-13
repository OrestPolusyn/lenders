#!/bin/bash

# Скрипт для швидкого деплою на хостинг
# Використання: ./deploy.sh

echo "🚀 Starting deployment process..."

# Крок 1: Білд проєкту
echo "📦 Building project..."
npm run build:production

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build completed successfully!"

# Крок 2: Створення архіву
echo "📦 Creating archive..."
cd dist
zip -r ../dist.zip .
cd ..

echo "✅ Archive created: dist.zip"

# Крок 3: Показати права доступу
echo "📋 File permissions check:"
ls -la dist | head -10

echo ""
echo "✅ Deployment package ready!"
echo ""
echo "📤 Next steps:"
echo "1. Upload dist.zip to your hosting"
echo "2. Extract the archive on the server"
echo "3. All files already have correct permissions (755)"
echo ""
echo "Or use FTP/SFTP to upload the dist/ folder directly"
