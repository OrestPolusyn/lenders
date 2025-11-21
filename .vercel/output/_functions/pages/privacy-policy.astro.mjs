import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.BCYojIfz.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.C3UR0PGv.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const privacyPage = await getPageBySlug("privacy-policy");
  const pageTitle = privacyPage?.title?.rendered || "Privacy Policy";
  const metaTitle = privacyPage?.title?.rendered || "The Lenders | Privacy Policy";
  const metaDescription = privacyPage?.excerpt?.rendered || "Review The Lenders Privacy Policy to understand how we collect, use, share, and protect your personal information when you use our website and online mortgage services.";
  const pageContent = privacyPage?.content?.rendered || "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription, "data-astro-cid-3llnt6j6": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-3llnt6j6": true })}${maybeRenderHead()}<main class="main" data-astro-cid-3llnt6j6>${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle, "data-astro-cid-3llnt6j6": true })}<section class="terms-policy" style="padding-block: clamp(3rem, 4vw, 5rem); background-color: var(--color-white);" data-astro-cid-3llnt6j6><div class="container" style="max-width: 920px;" data-astro-cid-3llnt6j6><div class="wordpress-content wordpress-content-privacy-policy" data-astro-cid-3llnt6j6>${unescapeHTML(pageContent)}</div></div></section>${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "data-astro-cid-3llnt6j6": true })}</main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-3llnt6j6": true })}` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
