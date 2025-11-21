# 🔄 Static Build: Чому зміни не відображаються

## ⚠️ Проблема

```
1. Вношу зміни в WordPress Admin ✅
2. Клікаю "Update" ✅
3. Перевіряю сайт → старі дані ❌
4. Перевіряю API → старі дані? (залежить від cache)
```

---

## 🔍 Діагностика

### **Test 1: Перевір API безпосередньо**

```bash
# В браузері або curl:
https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home

# Шукай поле "modified":
"modified": "2025-11-21T14:42:45"

# Якщо час modified = зараз → API працює ✅
# Якщо час modified = старий → cache проблема ❌
```

**Мій тест показав:**

```json
{
  "id": 13,
  "modified": "2025-11-21T14:42:45",  ← Оновлено 8:42 AM
  "title": "Home"
}
```

✅ **API працює! Дані актуальні в WordPress.**

---

## 🎯 Причина: Static Build

### **Як працює Static Build:**

```
1. npm run build:production
   └─ Astro фетчить дані з WordPress ОДИН РАЗ
   └─ Генерує HTML з цими даними
   └─ Зберігає в dist/

2. Upload dist/ на сервер
   └─ Користувач бачить статичний HTML
   └─ НЕ робить запити до WordPress
   └─ Дані "заморожені" з часу build

3. Змінюєш щось в WordPress
   └─ WordPress оновлено ✅
   └─ API оновлено ✅
   └─ Але сайт показує старий HTML ❌

4. Щоб побачити зміни:
   └─ npm run build:production (rebuild)
   └─ Upload нових dist/ файлів
   └─ ТЕПЕР зміни видно ✅
```

---

## ✅ Рішення 1: Manual Rebuild (Поточний метод)

### **Workflow:**

```bash
# 1. Зміни в WordPress:
https://wp.leanders.markupers.com.ua/wp-admin
→ Edit page/post
→ Save

# 2. Rebuild Astro (локально):
cd /Users/macair/Desktop/lenders
npm run build:production

# 3. Upload на Fornex:
# Via cPanel File Manager або FTP
# Upload dist/* → public_html/

# 4. Clear browser cache:
Ctrl+Shift+R

# 5. Refresh site:
https://leanders.markupers.com.ua
→ Зміни видно! ✅
```

**Час:** 5-10 хвилин на кожне оновлення

---

## ✅ Рішення 2: WordPress Cache (Якщо API показує старі дані)

### **Якщо API не оновлюється:**

```
Проблема: WordPress кешує REST API responses

Fix:
1. WordPress Admin → Plugins
2. Деактивуй caching plugins:
   - WP Super Cache
   - W3 Total Cache
   - WP Rocket
   - etc.

3. Або clear cache:
   - Plugin settings → Clear All Cache

4. cPanel → PHP:
   - Select PHP Options → Restart PHP
   - Або switch PHP version → switch back
```

---

## ✅ Рішення 3: Permalinks Flush

```
WordPress Admin:
1. Settings → Permalinks
2. Don't change anything
3. Just click "Save Changes"
4. Test API again
```

---

## 🚀 Рішення 4: Automation (GitHub Actions)

### **Auto-rebuild on WordPress changes:**

**Setup:**

1. **GitHub Actions workflow:**

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy on WordPress Update

on:
  repository_dispatch:
    types: [wordpress-update]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install
        run: npm ci

      - name: Build
        env:
          PUBLIC_WORDPRESS_URL: https://wp.leanders.markupers.com.ua
          PUBLIC_WORDPRESS_API_URL: https://wp.leanders.markupers.com.ua/wp-json/wp/v2
        run: npm run build

      - name: Deploy to Fornex via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ftp.leanders.markupers.com.ua
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
```

2. **WordPress Webhook:**

```php
// WordPress functions.php
add_action('save_post', 'trigger_rebuild', 10, 3);

function trigger_rebuild($post_id, $post, $update) {
  // Skip revisions and autosaves
  if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
    return;
  }

  // Only for published posts/pages
  if ($post->post_status !== 'publish') {
    return;
  }

  // Trigger GitHub Action
  $url = 'https://api.github.com/repos/YOUR-USERNAME/lenders/dispatches';
  $token = 'YOUR_GITHUB_TOKEN'; // Personal Access Token

  wp_remote_post($url, array(
    'headers' => array(
      'Authorization' => 'token ' . $token,
      'Accept' => 'application/vnd.github.v3+json',
      'Content-Type' => 'application/json',
    ),
    'body' => json_encode(array(
      'event_type' => 'wordpress-update'
    ))
  ));
}
```

**Result:**

```
WordPress: Save post
  ↓ (webhook)
GitHub Actions: Auto build
  ↓ (FTP deploy)
Site updated automatically! 🎉
```

**Time:** 2-3 хвилини автоматично

---

## 🌐 Рішення 5: Netlify (Найкраще для Astro)

### **Чому Netlify кращий за Fornex для Astro:**

```
Fornex (Static):
❌ Manual rebuild потрібен
❌ Manual upload потрібен
❌ No auto-deploy
❌ Slow workflow

Netlify:
✅ Git push → auto deploy
✅ WordPress webhook → auto rebuild
✅ CDN included (fast globally)
✅ Free SSL
✅ Free tier (100GB bandwidth)
✅ 2-3 min auto-update
```

### **Setup Netlify:**

```bash
# 1. Push to GitHub:
cd /Users/macair/Desktop/lenders
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/lenders.git
git push -u origin main

# 2. Netlify:
https://app.netlify.com
→ New site from Git
→ Connect GitHub repo
→ Build settings:
   - Build command: npm run build
   - Publish directory: dist
→ Environment variables:
   PUBLIC_WORDPRESS_URL=https://wp.leanders.markupers.com.ua
   PUBLIC_WORDPRESS_API_URL=https://wp.leanders.markupers.com.ua/wp-json/wp/v2
→ Deploy

# 3. Custom domain:
Netlify → Domain settings
→ Add domain: leanders.markupers.com.ua
→ Update DNS (Netlify дасть instructions)

# 4. WordPress webhook:
Netlify → Build hooks → Create: "WordPress Update"
→ Copy URL: https://api.netlify.com/build_hooks/xxxxx

WordPress → Add to functions.php:
add_action('save_post', 'netlify_rebuild');
function netlify_rebuild() {
  wp_remote_post('https://api.netlify.com/build_hooks/xxxxx');
}
```

**Result:**

```
WordPress: Save → Netlify rebuild → Site updated in 2-3 min
Git push → Netlify deploy → Site updated in 2-3 min
```

---

## 📊 Порівняння рішень

| Метод                    | Час оновлення | Автоматично | Складність |
| ------------------------ | ------------- | ----------- | ---------- |
| **Manual Rebuild + FTP** | 5-10 хв       | ❌ Ні       | Легко      |
| **GitHub Actions + FTP** | 3-5 хв        | ✅ Так      | Середньо   |
| **Netlify**              | 2-3 хв        | ✅ Так      | Легко      |
| **Vercel**               | 2-3 хв        | ✅ Так      | Легко      |

---

## 🎯 Рекомендація

### **Для початку (Зараз):**

```
1. Manual rebuild workflow
2. Розумій що зміни потребують rebuild
3. Upload після кожного rebuild
```

### **Для production (Краще):**

```
1. Move Astro to Netlify/Vercel
2. WordPress залишається на Fornex (wp.leanders.markupers.com.ua)
3. Setup webhook
4. Automatic updates! 🎉
```

---

## 📋 Quick Checklist (Зараз)

```
☐ Вніс зміни в WordPress ✅
☐ Перевірив API - дані оновлені?
   curl https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home
☐ Якщо API старі дані → clear WordPress cache
☐ Якщо API нові дані → rebuild Astro потрібен:
   npm run build:production
☐ Upload dist/ на Fornex
☐ Clear browser cache (Ctrl+Shift+R)
☐ Refresh site
☐ Зміни видно! ✅
```

---

## 🆘 Debug Checklist

**Якщо API показує старі дані:**

```
☐ WordPress cache plugin → clear cache
☐ Server cache → restart PHP in cPanel
☐ Permalinks → save again
☐ Browser cache → Ctrl+Shift+R
```

**Якщо API показує нові дані, але сайт старі:**

```
☐ Це нормально для static build!
☐ Потрібен rebuild: npm run build:production
☐ Upload нових dist/ файлів
```

---

## 💡 Висновок

**Static Build = Snapshot:**

- Astro робить "фотографію" WordPress під час build
- Сайт показує цю "фотографію"
- Щоб оновити "фотографію" → rebuild

**Dynamic (SSR) = Live:**

- Кожен request → фетчить з WordPress
- Завжди актуальні дані
- Але потрібен Node.js server (Netlify/Vercel)

**Твій вибір:**

1. **Fornex + Manual rebuilds** (безкоштовно, але вручну)
2. **Netlify + Auto rebuilds** (безкоштовно, автоматично)

---

**Час на перехід до Netlify: 30-60 хв (одноразово)**  
**Потім: автоматичні оновлення назавжди! 🚀**
