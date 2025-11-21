import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.BCYojIfz.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$LegalDisclaimer = createComponent(async ($$result, $$props, $$slots) => {
  const legalPage = await getPageBySlug("legal-disclaimer");
  const pageTitle = legalPage?.title?.rendered || "Legal Disclaimer";
  const metaTitle = legalPage?.title?.rendered || "Legal Disclaimer - The Lenders";
  const metaDescription = legalPage?.excerpt?.rendered || "Important legal information and disclaimers regarding The Lenders mortgage and home loan services.";
  const pageContent = legalPage?.content?.rendered || "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription, "data-astro-cid-6pj7j5l3": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-6pj7j5l3": true })} ${maybeRenderHead()}<main class="main" data-astro-cid-6pj7j5l3> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle, "data-astro-cid-6pj7j5l3": true })} <section class="terms-policy wordpress-content-privacy-policy" style="padding-block: clamp(3rem, 4vw, 5rem); background-color: var(--color-white); color: var(--color-blue-500);" data-astro-cid-6pj7j5l3>  <div class="container wordpress-content" style="max-width: 920px;" data-astro-cid-6pj7j5l3> <div data-astro-cid-6pj7j5l3>${unescapeHTML(pageContent)}</div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-6pj7j5l3": true })} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/legal-disclaimer.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/legal-disclaimer.astro";
const $$url = "/legal-disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalDisclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
