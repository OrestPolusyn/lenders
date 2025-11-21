# 🚀 SSR Server Mode - Динамічні дані

## ✅ Що змінено:

```
astro.config.mjs:
- output: 'static' → 'server'
- adapter: node (enabled)

Результат:
✅ Дані завжди актуальні з WordPress
✅ Немає потреби в rebuild
✅ WordPress зміни → instant на сайті
```

---

## ⚠️ ВАЖЛИВО: Fornex cPanel обмеження

**Fornex cPanel НЕ ПІДТРИМУЄ Node.js SSR servers!**

### **Чому?**

- cPanel = Apache/PHP only
- Node.js SSR потребує власний Node.js процес
- Fornex cPanel не дозволяє запускати Node.js apps

### **Що потрібно для SSR:**

- VPS або Dedicated server
- Або hosting з Node.js (Vercel, Netlify, Railway, Render)

---

## 🎯 Варіанти для тебе:

### **Option 1: Fornex VPS (Платний, але SSR працює)**

```
Fornex має VPS плани:
- VPS START: ~$3-5/міс
- Full root access
- Node.js можна встановити
- SSR буде працювати

Setup:
1. Замовити Fornex VPS
2. Встановити Node.js
3. Deploy SSR app
4. WordPress залишається на subdomain
```

**Плюси:**

- ✅ Все на Fornex (один хостинг)
- ✅ Повний контроль
- ✅ SSR працює

**Мінуси:**

- ❌ Платний (~$3-5/міс)
- ❌ Потребує setup Linux server

---

### **Option 2: Безкоштовний SSR (Vercel/Netlify/Railway)**

```
Frontend SSR: Vercel/Netlify (безкоштовно)
Backend: WordPress на Fornex subdomain (як є)

Результат:
✅ Automatic deploys
✅ SSR працює
✅ Швидко (Global CDN)
✅ Безкоштовно
```

**Рекомендую:** Vercel або Railway

---

### **Option 3: Залишитись на Static + Auto-deploy script**

```
Залишити static build
Використовувати auto-deploy.sh

Workflow:
WordPress зміна → ./auto-deploy.sh → Upload (2-3 хв)
```

**Плюси:**

- ✅ Працює на Fornex cPanel
- ✅ Безкоштовно
- ✅ Швидше ніж manual

**Мінуси:**

- ❌ Не instant (2-3 хв на update)

---

## 📋 Детальні інструкції:

### **A. Local Test SSR (працює зараз)**

```bash
# Build SSR version:
npm run build

# Start Node.js server:
npm run preview
# або
node dist/server/entry.mjs

# Тест: http://localhost:4321
# Зміни в WordPress → Refresh → Нові дані! ✅
```

---

### **B. Deploy SSR на Vercel (безкоштовно, 15 хв)**

#### **1. Push to GitHub:**

```bash
cd /Users/macair/Desktop/lenders

git init
git add .
git commit -m "SSR mode enabled"

# Create repo на GitHub.com
git remote add origin https://github.com/YOUR-USERNAME/lenders.git
git push -u origin main
```

#### **2. Deploy на Vercel:**

```
1. Go to: https://vercel.com/signup
2. Sign up with GitHub
3. "New Project" → Import lenders repo
4. Framework: Astro
5. Build Command: npm run build
6. Output Directory: dist
7. Environment Variables:
   PUBLIC_WORDPRESS_URL=https://wp.leanders.markupers.com.ua
   PUBLIC_WORDPRESS_API_URL=https://wp.leanders.markupers.com.ua/wp-json/wp/v2
8. Deploy

Wait 2-3 min → Site live!
```

#### **3. Custom Domain:**

```
Vercel Dashboard:
1. Settings → Domains
2. Add: leanders.markupers.com.ua
3. Update DNS (Fornex domain panel):
   - Type: CNAME
   - Name: @
   - Value: cname.vercel-dns.com
4. Wait 5-10 min → Domain active!
```

#### **4. WordPress Webhook (optional):**

```
Vercel:
1. Settings → Git → Deploy Hooks
2. Create hook: "WordPress Update"
3. Copy URL

WordPress functions.php:
add_action('save_post', 'vercel_rebuild');
function vercel_rebuild() {
  wp_remote_post('YOUR_VERCEL_DEPLOY_HOOK_URL');
}

Result: WordPress save → Auto rebuild (1-2 хв)
```

---

### **C. Deploy SSR на Railway (безкоштовно, 15 хв)**

#### **1. Push to GitHub** (як вище)

#### **2. Deploy на Railway:**

```
1. Go to: https://railway.app/
2. Sign up with GitHub
3. "New Project" → Deploy from GitHub repo
4. Select: lenders
5. Environment Variables:
   PUBLIC_WORDPRESS_URL=https://wp.leanders.markupers.com.ua
   PUBLIC_WORDPRESS_API_URL=https://wp.leanders.markupers.com.ua/wp-json/wp/v2
6. Railway auto-detects Astro
7. Deploy

Wait 2-3 min → Site live!
```

#### **3. Custom Domain:**

```
Railway Dashboard:
1. Settings → Networking → Custom Domain
2. Add: leanders.markupers.com.ua
3. Update DNS (Fornex):
   - Copy CNAME value from Railway
   - Add to DNS
4. Done!
```

---

### **D. Deploy SSR на Fornex VPS**

**Якщо маєш VPS:**

```bash
# SSH to VPS:
ssh root@your-vps-ip

# Install Node.js:
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Install PM2:
npm install -g pm2

# Clone repo:
cd /var/www
git clone https://github.com/YOUR-USERNAME/lenders.git
cd lenders

# Install deps:
npm install

# Build:
npm run build

# Start with PM2:
pm2 start dist/server/entry.mjs --name lenders
pm2 save
pm2 startup

# Setup Nginx reverse proxy:
# (config nginx to proxy port 3000 → domain)

# Done!
```

---

## 📊 Порівняння:

| Варіант                         | Ціна          | SSR | Setup час | Складність |
| ------------------------------- | ------------- | --- | --------- | ---------- |
| **Fornex cPanel + Static**      | Безкоштовно   | ❌  | 0 хв      | Легко      |
| **Fornex cPanel + auto-deploy** | Безкоштовно   | ❌  | 5 хв      | Легко      |
| **Vercel SSR**                  | Безкоштовно\* | ✅  | 15 хв     | Легко      |
| **Railway SSR**                 | Безкоштовно\* | ✅  | 15 хв     | Легко      |
| **Fornex VPS SSR**              | ~$3-5/міс     | ✅  | 1-2 год   | Середньо   |

\*Безкоштовні tier limits: достатньо для більшості сайтів

---

## 💡 Моя рекомендація:

### **Найкращий варіант: Vercel або Railway SSR**

**Чому:**

- ✅ Безкоштовно
- ✅ SSR працює (instant updates!)
- ✅ Global CDN (швидко globally)
- ✅ Auto deploys
- ✅ Easy setup (15 хв)
- ✅ WordPress залишається на Fornex

**Workflow:**

```
WordPress (Fornex subdomain) → REST API
                                   ↓
Astro SSR (Vercel/Railway) → Fetch real-time → User sees fresh data
```

---

## 🧪 Test SSR зараз (локально):

```bash
# Build:
npm run build

# Start server:
node dist/server/entry.mjs

# Або:
npm run preview

# Test:
# 1. Open: http://localhost:4321
# 2. Зміни щось в WordPress
# 3. Refresh browser
# 4. Бачиш нові дані! ✅ (без rebuild!)
```

---

## 🔄 Повернутись до Static:

```bash
# Якщо хочеш повернутись:
# astro.config.mjs:
output: 'static'
# comment adapter

# Rebuild:
npm run build

# Upload dist/ як раніше
```

---

## 📝 Summary:

```
✅ SSR mode активовано
✅ Код готовий для динамічних даних
⚠️ Fornex cPanel НЕ підтримує SSR
✅ Vercel/Railway = найкращий варіант
✅ Local test працює: npm run preview
```

---

## 🎯 Наступні кроки:

**Вибери варіант:**

1. **Vercel/Railway SSR** (рекомендую)
   - Setup: 15 хв
   - Безкоштовно
   - Instant updates

2. **Fornex VPS SSR** (якщо хочеш все на Fornex)
   - Setup: 1-2 год
   - ~$3-5/міс
   - Повний контроль

3. **Static + auto-deploy.sh** (якщо хочеш залишитись на cPanel)
   - Setup: готово
   - Безкоштовно
   - 2-3 хв на update

**Я можу допомогти з будь-яким варіантом!**
