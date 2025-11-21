# 🚀 Netlify Deployment Guide

## ✅ Ready to Deploy!

Your Astro project is configured for Netlify with SSR.

---

## 📋 Quick Deploy Steps

### 1️⃣ Sign Up / Login to Netlify

```
Go to: https://app.netlify.com/
→ Sign up with GitHub (recommended)
→ Authorize Netlify
```

---

### 2️⃣ Create New Site

```
1. Click "Add new site" → "Import an existing project"
2. Choose "Deploy with GitHub"
3. Select repository: OrestPolusyn/lenders
4. Branch: main
```

---

### 3️⃣ Configure Build Settings

**Netlify should auto-detect settings, but verify:**

```
Base directory: (leave empty)
Build command: npm run build
Publish directory: dist
```

---

### 4️⃣ Add Environment Variables

**CRITICAL: Add these before deploying!**

```
Site configuration → Environment variables → Add variables

Name: PUBLIC_WORDPRESS_URL
Value: https://wp.leanders.markupers.com.ua

Name: PUBLIC_WORDPRESS_API_URL
Value: https://wp.leanders.markupers.com.ua/wp-json/wp/v2
```

---

### 5️⃣ Deploy!

```
Click "Deploy site"
Wait 2-3 minutes
Your site will be live at: https://random-name.netlify.app
```

---

## 🔧 Post-Deploy

### Change Site Name

```
Site settings → General → Site details → Change site name
→ Choose: lenders-markupers (or similar)
→ Site URL: https://lenders-markupers.netlify.app
```

### Custom Domain (Optional)

```
Domain management → Add custom domain
→ leanders.markupers.com.ua
→ Follow DNS setup instructions
```

---

## ✅ Verify Deployment

**Test these URLs after deploy:**

1. **Home page:** `https://your-site.netlify.app/`
2. **SSR Test:** `https://your-site.netlify.app/test-ssr`
3. **API Test:** `https://your-site.netlify.app/api/test.json`

**Expected results:**

- ✅ Home page loads with WordPress data
- ✅ `/test-ssr` shows "SSR is Working!"
- ✅ Environment variables show as SET

---

## 🆘 Troubleshooting

### If deployment fails:

1. **Check build logs** in Netlify dashboard
2. **Verify environment variables** are set
3. **Check WordPress API** is accessible:
   ```bash
   curl https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home
   ```

### If site shows 500 error:

1. Go to **Functions** tab in Netlify
2. Check **Function logs**
3. Look for WordPress connection errors

---

## 📊 What's Different from Vercel

✅ Netlify often has better SSR support
✅ Simpler configuration
✅ Better function logs
✅ Automatic \_redirects handling

---

## 🎉 Success Checklist

- [ ] Netlify account created
- [ ] Site connected to GitHub
- [ ] Environment variables added
- [ ] Site deployed successfully
- [ ] Home page loads
- [ ] WordPress data displays
- [ ] Test endpoints work

---

**Need help? Check Netlify docs: https://docs.netlify.com/**
