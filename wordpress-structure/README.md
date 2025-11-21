# WordPress Модульна Структура для Lenders Project

## 📂 Структура файлів:

```
includes/
├── acf/
│   ├── loader.php              ← Завантажує всі ACF
│   ├── pages/
│   │   ├── home.php
│   │   ├── about.php
│   │   └── contact.php
│   ├── post-types/
│   │   ├── faq.php
│   │   └── loan-programs.php
│   └── global/
│       └── theme-options.php
├── custom-post-types.php
└── rest-api-config.php
```

## 🚀 Як використовувати:

### 1. Скопіюйте структуру в тему WordPress

### 2. Оновіть functions.php

### 3. Активуйте тему

## 💡 Переваги:

- ✅ Кожна сторінка = окремий файл
- ✅ Легко знайти потрібний код
- ✅ Можна редагувати незалежно
- ✅ Масштабується до будь-якої кількості сторінок
- ✅ Git-friendly
