# ✅ Static Build + Webhook Solution

## 🎯 Рішення проблеми SSR

**Проблема:** SSR adapter не працює ні на Vercel, ні на Netlify через bundling issues.

**Рішення:** Static build + WordPress webhook для auto-rebuild при змінах.

---

## ✅ Переваги Static Build:

```
✅ Надійно працює на всіх платформах
✅ Максимальна швидкість (CDN)
✅ Безкоштовно (unlimited traffic)
✅ Простіше налаштувати
✅ Немає серверних помилок
✅ SEO-friendly
```

**Auto-rebuild:** WordPress викликає webhook → Netlify rebuild → fresh content!

---

## 🚀 Netlify Deployment (Static)

### **Крок 1: Deploy на Netlify**

```
1. Go to: https://app.netlify.com/
2. Add new site → Import from GitHub
3. Repository: OrestPolusyn/lenders
4. Branch: main
5. Build command: npm run build
6. Publish directory: dist
7. Click "Deploy site"
```

**NO environment variables needed для static build!**

---

### **Крок 2: Отримай Netlify Build Hook**

```
1. Site configuration → Build & deploy
2. Build hooks section
3. Click "Add build hook"
4. Name: "WordPress Content Update"
5. Branch to build: main
6. Click "Save"
```

**Скопіюй URL!** Виглядає так:

```
https://api.netlify.com/build_hooks/YOUR_HOOK_ID
```

---

### **Крок 3: Додай Webhook в WordPress**

```
1. Go to WordPress Admin: https://wp.leanders.markupers.com.ua/wp-admin

2. Plugins → Add New Plugin

3. Search: "WP Webhooks"

4. Install & Activate: "WP Webhooks - Automation for WordPress"

5. Settings → WP Webhooks → Send Data

6. Add Webhook:
   - Webhook URL: [твій Netlify build hook URL]
   - Trigger: "Post Updated" або "Page Updated"
   - Save
```

**Альтернатива - простий plugin:**

```php
// Додай в functions.php WordPress theme

add_action('save_post', 'trigger_netlify_rebuild', 10, 3);

function trigger_netlify_rebuild($post_id, $post, $update) {
    // Only trigger on published posts/pages
    if ($post->post_status !== 'publish') {
        return;
    }

    // Your Netlify build hook URL
    $webhook_url = 'https://api.netlify.com/build_hooks/YOUR_HOOK_ID';

    // Trigger rebuild
    wp_remote_post($webhook_url, array(
        'timeout' => 1,
        'blocking' => false,
    ));
}
```

---

## 📋 Як це працює:

```
1. Ти змінюєш контент в WordPress
   └─ Save/Publish post

2. WordPress викликає webhook
   └─ POST https://api.netlify.com/build_hooks/...

3. Netlify автоматично запускає rebuild
   └─ npm run build (fetch fresh WordPress data)

4. Netlify publish новий build
   └─ Site updated with fresh content! ✅

⏱️ Час: 2-3 хвилини від зміни до live
```

---

## 🎯 Переваги цього підходу:

### **vs SSR:**

```
✅ Працює стабільно (no module errors)
✅ Швидше (static CDN)
✅ Безкоштовно (no function limits)
✅ Простіше debug
```

### **vs Manual rebuild:**

```
✅ Автоматичне оновлення
✅ Не треба нічого вручну робити
✅ Одразу після Save в WordPress
```

---

## ⚙️ Налаштування часу rebuild:

**Якщо хочеш затримку (щоб не rebuild при кожній зміні):**

```php
// В WordPress functions.php

// Rebuild тільки раз на 5 хвилин
function trigger_netlify_rebuild_debounced() {
    $last_trigger = get_transient('netlify_last_trigger');

    if ($last_trigger) {
        return; // Skip if triggered recently
    }

    $webhook_url = 'https://api.netlify.com/build_hooks/YOUR_HOOK_ID';
    wp_remote_post($webhook_url, array('timeout' => 1, 'blocking' => false));

    // Set transient for 5 minutes
    set_transient('netlify_last_trigger', true, 5 * MINUTE_IN_SECONDS);
}

add_action('save_post', 'trigger_netlify_rebuild_debounced');
```

---

## 📊 Netlify Build Minutes:

**Free tier:** 300 build minutes/month

**Typical build:** 2-3 minutes

**Можна зробити:** ~100 updates/month безкоштовно

**Достатньо?** Так! Більшість сайтів оновлюються < 100 разів на місяць.

---

## ✅ Deployment Checklist:

- [ ] Site deployed на Netlify
- [ ] Build hook створений
- [ ] Webhook додан в WordPress
- [ ] Test: зміни content в WordPress
- [ ] Wait 2-3 min
- [ ] Check live site - content updated! ✅

---

## 🆘 Troubleshooting:

### Rebuild не trigger:

1. **Check webhook URL** - правильний?
2. **Check WordPress plugin** - активований?
3. **Check Netlify logs** - build triggered?

### Build fails:

1. **Check Netlify build logs**
2. **Check WordPress API** доступний?
   ```bash
   curl https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home
   ```

---

## 🎉 Success!

**З цим setup:**

- ✅ Site швидкий (static CDN)
- ✅ Auto-updates при змінах WordPress
- ✅ Надійно працює (no SSR errors)
- ✅ Безкоштовно (Netlify free tier)

**Best of both worlds!** 🚀
