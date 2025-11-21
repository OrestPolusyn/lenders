# ⚠️ NETLIFY "Page Not Found" - Швидке виправлення

## 🔍 Причина помилки:

**"Page not found" на Netlify = Environment Variables НЕ встановлені!**

---

## ✅ ВИПРАВЛЕННЯ (2 хвилини):

### **Крок 1: Додай Environment Variables**

```
1. Go to Netlify Dashboard
2. Select your site "lenders"
3. Site configuration → Environment variables
4. Click "Add a variable"

Додай ЦІ ДВІ змінні:

Variable 1:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key: PUBLIC_WORDPRESS_URL
Value: https://wp.leanders.markupers.com.ua
Scopes: ✅ All scopes (або Production)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Variable 2:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key: PUBLIC_WORDPRESS_API_URL
Value: https://wp.leanders.markupers.com.ua/wp-json/wp/v2
Scopes: ✅ All scopes (або Production)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. Click "Save"
```

---

### **Крок 2: Trigger Redeploy**

```
Deploys → Latest deployment → Trigger deploy → Deploy site

або

Site configuration → Build & deploy → Trigger deploy
```

---

### **Крок 3: Wait & Test**

```
Wait 2-3 minutes for deployment

Test URLs:
1. https://your-site.netlify.app/test-ssr
   → Should show "✅ SSR is Working!"
   → Should show "WordPress URL Set: YES"

2. https://your-site.netlify.app/
   → Should load home page with WordPress data
```

---

## 🎯 Швидка перевірка:

### **Перевір environment variables:**

```
Netlify Dashboard → Site configuration → Environment variables

Має бути:
✅ PUBLIC_WORDPRESS_URL
✅ PUBLIC_WORDPRESS_API_URL

Якщо немає - додай зараз!
```

---

## 📊 Альтернативна діагностика:

### **Якщо все ще не працює після додавання env vars:**

1. **Check Function Logs:**

   ```
   Netlify Dashboard → Functions → ssr
   → Click on function
   → Check logs for errors
   ```

2. **Check Build Logs:**

   ```
   Deploys → Latest → View full deploy logs
   → Look for errors or warnings
   ```

3. **Test WordPress API:**
   ```bash
   curl https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home
   # Should return JSON data
   ```

---

## 💡 Найчастіші помилки:

❌ **Environment variables не додані** → Додай їх!
❌ **Env vars додані, але не зроблено redeploy** → Trigger redeploy!
❌ **WordPress API недоступний** → Перевір CORS
❌ **Typo в назві змінної** → Має бути PUBLIC_WORDPRESS_URL (не WORDPRESS_URL)

---

## ✅ Success Checklist:

- [ ] Environment variables додані в Netlify
- [ ] Redeploy triggered
- [ ] `/test-ssr` показує "WordPress URL Set: YES"
- [ ] Home page loads
- [ ] WordPress data відображається

---

**🚨 Спочатку перевір env vars - це 99% випадків "Page not found"!**
