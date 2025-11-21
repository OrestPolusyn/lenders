# 🚀 Vercel Deployment - Покрокова інструкція

## ✅ Що вже готово:

```
✅ Code committed to Git
✅ GitHub repo: OrestPolusyn/lenders
✅ Branch: main (ready for Vercel)
✅ astro.config.mjs: Node adapter configured
✅ vercel.json: Created
✅ SSR mode: Enabled
```

---

## 📋 Крок 1: ✅ DONE! Code на GitHub

```
✅ GitHub: https://github.com/OrestPolusyn/lenders
✅ Branch: main
✅ Ready for Vercel!
```

**Skip цей крок - вже зроблено!**

---

## 📋 Крок 2: Deploy на Vercel

### **A. Create Vercel Account:**

```
1. Go to: https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Login complete! ✅
```

### **B. Import Project:**

```
1. Vercel Dashboard → "Add New..." → "Project"
2. Import Git Repository
3. Find "OrestPolusyn/lenders"
4. Click "Import"
```

### **C. Configure Project:**

```
Framework Preset: Astro (автоматично detect)

Build & Development Settings:
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

Root Directory: ./ (leave default)
```

### **D. Environment Variables (ВАЖЛИВО!):**

Click "Environment Variables" і додай:

```
Name: PUBLIC_WORDPRESS_URL
Value: https://wp.leanders.markupers.com.ua

Name: PUBLIC_WORDPRESS_API_URL
Value: https://wp.leanders.markupers.com.ua/wp-json/wp/v2

Name: NODE_VERSION
Value: 18
```

### **E. Deploy:**

```
1. Click "Deploy"
2. Wait 2-4 minutes ⏱️
3. Build complete! ✅
4. Your site: https://lenders-xxx.vercel.app
```

---

## 📋 Крок 3: Test Site

```
1. Click "Visit" button
2. Check site loads
3. Test navigation menu
4. WordPress зміни → Refresh → Should see instant updates! ✅
```

---

## 📋 Крок 4: Custom Domain

### **A. Add Domain в Vercel:**

```
1. Vercel Project → Settings → Domains
2. Click "Add"
3. Enter: leanders.markupers.com.ua
4. Click "Add"
```

### **B. Update DNS (Fornex):**

Vercel покаже DNS records. Додай в Fornex DNS:

**Option 1: CNAME (Рекомендую):**

```
Type: CNAME
Name: @ (або leanders)
Value: cname.vercel-dns.com
TTL: Auto
```

**Option 2: A Records:**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto

Type: A
Name: @
Value: 76.76.21.164
TTL: Auto
```

### **C. Wait for DNS:**

```
DNS propagation: 5-30 хвилин
Check: https://dnschecker.org/#CNAME/leanders.markupers.com.ua

When ready:
✅ Domain active on Vercel!
✅ Site: https://leanders.markupers.com.ua
```

---

## 📋 Крок 5: WordPress Webhook (Auto-rebuild)

### **A. Create Deploy Hook:**

```
1. Vercel Project → Settings → Git
2. Scroll to "Deploy Hooks"
3. Click "Create Hook"
4. Name: WordPress Update
5. Branch: orest_branch (або main)
6. Click "Create Hook"
7. Copy URL: https://api.vercel.com/v1/integrations/deploy/...
```

### **B. Add to WordPress:**

Upload цей код в WordPress:

```php
// File: wp-content/themes/lenders-theme/functions.php
// Додай в кінець файлу:

/**
 * Trigger Vercel rebuild on WordPress save
 */
add_action('save_post', 'vercel_rebuild', 10, 3);
add_action('acf/save_post', 'vercel_rebuild_acf', 20);

function vercel_rebuild($post_id, $post, $update) {
  // Skip revisions and autosaves
  if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
    return;
  }

  // Only for published posts/pages
  if ($post->post_status !== 'publish') {
    return;
  }

  trigger_vercel_deploy();
}

function vercel_rebuild_acf($post_id) {
  // Trigger on ACF field save
  trigger_vercel_deploy();
}

function trigger_vercel_deploy() {
  $webhook_url = 'YOUR_VERCEL_DEPLOY_HOOK_URL'; // ⬅️ Paste URL тут!

  wp_remote_post($webhook_url, array(
    'timeout' => 1,
    'blocking' => false,
  ));
}
```

### **C. Test Webhook:**

```
1. WordPress Admin → Edit Home page
2. Change Hero Slogan text
3. Click "Update"
4. Check Vercel → Deployments
5. New deployment started! ✅
6. Wait 1-2 min
7. Visit site → See new text! 🎉
```

---

## 🎯 Complete Workflow:

### **After Setup (автоматично):**

```
WordPress Admin:
1. Edit page/post
2. Click "Update"
   ↓ (webhook triggers Vercel)
3. Vercel rebuilds (1-2 min)
   ↓
4. Site updated with new data
5. Users see changes instantly! ✅

NO manual rebuild потрібен!
NO manual upload потрібен!
```

---

## 📊 Vercel Dashboard:

**Корисні секції:**

```
Deployments: Історія deploys
Settings → Domains: Додати custom domain
Settings → Environment Variables: Змінити env vars
Settings → Git: Deploy hooks
Analytics: Traffic stats (платний)
```

---

## 🔧 Troubleshooting:

### **Build Failed:**

```
1. Check Vercel build logs
2. Verify environment variables:
   - PUBLIC_WORDPRESS_URL
   - PUBLIC_WORDPRESS_API_URL
3. Check WordPress API accessible:
   curl https://wp.leanders.markupers.com.ua/wp-json/wp/v2/pages?slug=home
4. Redeploy: Deployments → ... → Redeploy
```

### **Site працює але дані старі:**

```
1. Vercel Dashboard → Deployments → Latest
2. Check deployment successful
3. Clear browser cache: Ctrl+Shift+R
4. Check WordPress API має нові дані
```

### **Domain не працює:**

```
1. Wait longer (DNS propagation до 24 год)
2. Check DNS: https://dnschecker.org/
3. Verify CNAME record правильний
4. Flush DNS:
   Mac: sudo dscacheutil -flushcache
```

### **Webhook не працює:**

```
1. Check webhook URL правильний в functions.php
2. Test manually:
   curl -X POST YOUR_WEBHOOK_URL
3. Check Vercel Deployments - чи з'явився new deploy?
4. WordPress error logs: wp-content/debug.log
```

---

## 💡 Tips & Tricks:

### **Preview Deployments:**

```
Кожен Git push → створює Preview deployment
URL: https://lenders-git-branch-xxx.vercel.app

Production deployment: тільки з main/orest_branch
```

### **Instant Rollback:**

```
Якщо щось зламалось:
1. Vercel → Deployments
2. Find working deployment
3. Click "..." → "Promote to Production"
4. Instant rollback! ✅
```

### **Environment Variables per Branch:**

```
Settings → Environment Variables:
- Production (main branch)
- Preview (інші branches)
- Development (local)

Можна мати різні WordPress URLs!
```

---

## 📝 Quick Reference:

### **URLs:**

```
Vercel Dashboard: https://vercel.com/dashboard
Project: https://vercel.com/bao-1987/lenders
Site: https://lenders-xxx.vercel.app (після deploy)
Custom: https://leanders.markupers.com.ua (після domain setup)
```

### **Commands:**

```bash
# Local development:
npm run dev

# Build locally:
npm run build

# Preview build:
npm run preview

# Deploy (automatic на Git push):
git push origin orest_branch
```

---

## ✅ Checklist:

```
☐ Step 1: Push to GitHub
   git push origin orest_branch

☐ Step 2: Vercel Account
   vercel.com/signup → Continue with GitHub

☐ Step 3: Import Project
   Import "BAO-1987/lenders"

☐ Step 4: Configure
   - Framework: Astro
   - Build: npm run build
   - Output: dist

☐ Step 5: Environment Variables
   - PUBLIC_WORDPRESS_URL
   - PUBLIC_WORDPRESS_API_URL
   - NODE_VERSION=18

☐ Step 6: Deploy
   Click "Deploy" → Wait 2-4 min

☐ Step 7: Test
   Visit site → Check works

☐ Step 8: Custom Domain (optional)
   Add leanders.markupers.com.ua
   Update DNS в Fornex

☐ Step 9: Webhook (optional)
   Create deploy hook
   Add to WordPress functions.php

☐ Step 10: Test end-to-end
   WordPress edit → Auto rebuild → Live! ✅
```

---

## 🎉 Result:

```
✅ Site deployed on Vercel
✅ SSR enabled (instant WordPress updates)
✅ Global CDN (fast loading)
✅ Auto-deploys on Git push
✅ Auto-rebuilds on WordPress changes (with webhook)
✅ Custom domain (optional)
✅ HTTPS enabled (automatic)
✅ Безкоштовно!
```

---

## 🆘 Need Help?

**Vercel Support:**

- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord
- Twitter: @vercel

**My recommendation:**

- Почни з Step 1-7 (basic deployment)
- Test що працює
- Потім додай custom domain (Step 8)
- Потім додай webhook (Step 9)

---

**Готовий! Почни з Step 1! 🚀**

**Estimated time: 15-20 хвилин total**
