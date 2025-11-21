# The Lenders - Astro Static Site

Статичний сайт побудований на Astro з інтеграцією WordPress API.

## 🚀 Технології

- **Astro** - Static Site Generator
- **React** - UI компоненти
- **TypeScript** - Type safety
- **WordPress REST API** - Контент з WordPress

## 📦 Встановлення

```bash
npm install
```

## 🛠️ Розробка

```bash
npm run dev
```

Сайт буде доступний на `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

Статичні файли будуть у папці `dist/`

## 🌐 WordPress Integration

Сайт отримує контент з WordPress через REST API на етапі build.

### Environment Variables

Створи `.env` файл:

```env
PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### Як це працює:

1. **Build time**: Astro робить fetch з WordPress API
2. **Генерує** статичні HTML файли з контентом
3. **Deploy**: Завантажуєш `dist/` на будь-який хостинг

### Оновлення контенту:

Коли змінюєш контент в WordPress:

- Запусти `npm run build` локально
- Або налаштуй auto-rebuild через CI/CD

## 📁 Структура проекту

```
/
├── public/          # Статичні файли (images, fonts)
├── src/
│   ├── components/  # Astro компоненти
│   ├── layouts/     # Layout компоненти
│   ├── pages/       # Сторінки (роутинг)
│   ├── lib/         # WordPress API functions
│   └── types/       # TypeScript типи
└── dist/            # Build output (після npm run build)
```

## 🎨 ACF Fields

Сайт використовує ACF (Advanced Custom Fields) для structured data:

- **Home Page**: Hero, About, Process, Reviews
- **Posts**: Featured images, categories, content
- **Pages**: Custom fields для кожної сторінки

## 🚀 Deployment

### Static Hosting (Рекомендується)

Завантаж папку `dist/` на:

- **Netlify** - Drag & drop або Git integration
- **GitHub Pages**
- **Cloudflare Pages**
- **Any static hosting**

### Automatic Rebuilds (Optional)

Щоб сайт автоматично оновлювався при змінах WordPress - налаштуй webhook:

1. Hosting platform → Create build hook URL
2. WordPress → Add webhook plugin
3. Trigger rebuild при save post/page

## 📝 Notes

- Це **статичний сайт** - контент генерується на build
- Для оновлення контенту потрібен новий build
- Всі сторінки pre-rendered для максимальної швидкості
- WordPress використовується тільки як CMS (джерело даних)

## 🔧 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run clean        # Clear build cache
```

## 📄 License

Private project
