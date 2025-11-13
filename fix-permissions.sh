#!/bin/bash

# Скрипт для зміни прав доступу на файли dist
echo "Fixing permissions for dist directory..."

# Встановлюємо права 755 на всі директорії
find dist -type d -exec chmod 755 {} \;

# Встановлюємо права 755 на всі файли
find dist -type f -exec chmod 755 {} \;

# Для HTML, CSS, JS файлів можна залишити 644
# Але якщо потрібно 755 на всі файли:
find dist -type f -exec chmod 755 {} \;

echo "Permissions fixed successfully!"
