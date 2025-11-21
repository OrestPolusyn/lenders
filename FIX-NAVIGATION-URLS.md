# 🔧 Fix: Navigation & WordPress URLs

## ⚠️ Проблеми виявлені:

```
1. ❌ Menu links → https://wp.leanders.markupers.com.ua/
2. ❌ Some links → http://localhost:4321/
3. ❌ WordPress зміни не відображаються (static build)
```

---

## ✅ Виправлення зроблено:

### **1. Header.astro - Menu URLs**

**Файл:** `/Users/macair/Desktop/lenders/src/components/Header/Header.astro`

**Що зроблено:**

```typescript
// Додано функцію replace WordPress URLs:
function convertMenuToNavLinks(menuItems: WPMenuItem[]): NavLink[] {
  return menuItems.map(item => {
    let url = item.url

    // Remove WordPress domain and keep only path
    url = url.replace('https://wp.leanders.markupers.com.ua', '')
    url = url.replace('http://wp.leanders.markupers.com.ua', '')
    url = url.replace('https://leanders.markupers.com.ua', '')

    // Ensure leading slash
    if (!url.startsWith('/')) {
      url = '/' + url
    }

    return {
      title: item.title,
      href: url,
      children: item.children
        ? convertMenuToNavLinks(item.children)
        : undefined,
    }
  })
}
```

**Результат:**

```
WordPress Menu URL: https://wp.leanders.markupers.com.ua/about/
                    ↓
Site Menu URL:      /about/
```

---

### **2. localhost URLs**

**Проблема в HTML:**

```html
<a href="http://localhost:4321/contact">Get a Quote Now</a>
```

**Потрібно знайти де це:**

- GetInTouch component
- Або інші компоненти з hardcoded URLs

**Виправлення - використовуй relative URLs:**

```astro
<!-- ❌ НЕ робити: -->
<a href="http://localhost:4321/contact">Contact</a>
<a href={`${Astro.site}contact`}>Contact</a>

<!-- ✅ Правильно: -->
<a href="/contact">Contact</a>
```

---

## 🔍 Знайти всі hardcoded URLs:

```bash
# Search for absolute URLs:
grep -r "localhost:4321" src/
grep -r "wp.leanders" src/
grep -r "https://" src/components/ | grep href
```

---

## 📋 Файли що потрібно перевірити:

### **1. GetInTouch component:**

```bash
# Знайти:
find src/components -name "*GetInTouch*"

# Перевірити чи є hardcoded URLs
```

**Виправити на:**

```astro
<a href="/contact" class="button">Get a Quote Now</a>
```

### **2. Інші кнопки/посилання:**

```
src/components/Hero/
src/components/CTA/
src/components/Footer/
```

---

## 🔧 WordPress Settings (Додатково)

**Якщо хочеш щоб WordPress генерував правильні URLs:**

### **Option A: WordPress Site URL (не рекомендовано)**

```
WordPress Admin → Settings → General
Site Address (URL): https://leanders.markupers.com.ua
```

⚠️ **Але це зламає WordPress admin!**  
WordPress має бути на субдомені.

### **Option B: Menu URLs manually (рекомендовано)**

```
WordPress Admin → Appearance → Menus
→ Edit each menu item
→ Change URL:
   From: https://wp.leanders.markupers.com.ua/about/
   To: /about/
```

✅ **Але краще використовувати Astro replace (вже зроблено)**

---

## ✅ Що зробити ЗАРАЗ:

### **Крок 1: Знайти hardcoded localhost**

```bash
cd /Users/macair/Desktop/lenders
grep -r "localhost:4321" src/components/ --include="*.astro"
```

### **Крок 2: Замінити на relative URLs**

Для кожного знайденого файлу:

```astro
<!-- Change: -->
href="http://localhost:4321/contact"

<!-- To: -->
href="/contact"
```

### **Крок 3: Rebuild**

```bash
npm run build:production
```

### **Крок 4: Upload**

```
Upload dist/ → Fornex cPanel
```

### **Крок 5: Test**

```
1. https://leanders.markupers.com.ua
2. Click menu items → перевір чи ведуть на правильні сторінки
3. Check all buttons → no localhost URLs
```

---

## 🧪 Test Checklist:

```
☐ Menu "Home" → /
☐ Menu "About" → /about
☐ Menu "Loan Programs" → /loan-programs
☐ Menu "Calculator" → /calculator
☐ Menu "Contact" → /contact
☐ "Get a Quote" button → /contact (not localhost!)
☐ Footer links → relative URLs
☐ No links to wp.leanders subdomain
☐ All links work correctly
```

---

## 🚀 Final Build Commands:

```bash
# 1. Search & replace hardcoded URLs (if any):
grep -r "localhost:4321" src/

# 2. Rebuild:
npm run build:production

# 3. Test preview:
npm run preview
# Open: http://localhost:4321
# Check menu & buttons

# 4. Upload to Fornex:
# cPanel → File Manager → Upload dist/*

# 5. Test production:
# https://leanders.markupers.com.ua
# ✅ All URLs work!
```

---

## 📝 Summary:

**Виправлення:**

1. ✅ Header.astro - replace WordPress URLs
2. ⏳ Знайти & замінити localhost URLs
3. ⏳ Rebuild & upload

**Час:** 5-10 хвилин

**Після цього:**

- ✅ Menu працює з правильними URLs
- ✅ Кнопки ведуть на правильні сторінки
- ✅ No WordPress subdomain URLs
- ✅ No localhost URLs

---

**Ready to fix! 🚀**
