import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.BcVv-EhL.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.roKyh5FE.js';
import { $ as $$PageHeader } from '../assets/PageHeader.BzBG6oGs.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Accessibility = createComponent(async ($$result, $$props, $$slots) => {
  const accessibilityPage = await getPageBySlug("accessibility");
  const pageTitle = accessibilityPage?.title?.rendered || "Accessibility Statement";
  const metaTitle = accessibilityPage?.title?.rendered || "Accessibility Statement - The Lenders";
  const metaDescription = accessibilityPage?.excerpt?.rendered || "The Lenders is committed to ensuring digital accessibility for people with disabilities.";
  const pageContent = accessibilityPage?.content?.rendered || "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription, "data-astro-cid-rrh4jrih": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-rrh4jrih": true })}${maybeRenderHead()}<main class="main" data-astro-cid-rrh4jrih>${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle, "data-astro-cid-rrh4jrih": true })}<section style="padding-block: clamp(3rem, 4vw, 5rem); background-color: var(--color-white); color: var(--color-blue-500);" data-astro-cid-rrh4jrih><div class="container" style="max-width: 920px;" data-astro-cid-rrh4jrih><div class="wordpress-content" data-astro-cid-rrh4jrih>${unescapeHTML(pageContent)}</div></div></section></main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-rrh4jrih": true })}` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/accessibility.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/accessibility.astro";
const $$url = "/accessibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accessibility,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
