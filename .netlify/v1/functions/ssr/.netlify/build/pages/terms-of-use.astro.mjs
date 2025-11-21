import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.BcVv-EhL.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.roKyh5FE.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.Dowm11mF.js';
import { $ as $$PageHeader } from '../assets/PageHeader.BzBG6oGs.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$TermsOfUse = createComponent(async ($$result, $$props, $$slots) => {
  const termsPage = await getPageBySlug("terms-of-use");
  const pageTitle = termsPage?.title?.rendered || "Terms of Use";
  const metaTitle = termsPage?.title?.rendered || "The Lenders | Terms of Use";
  const metaDescription = termsPage?.excerpt?.rendered || "Review The Lenders Terms of Use to understand the conditions, limitations, and legal notices that govern your access to our website and mortgage services.";
  const pageContent = termsPage?.content?.rendered || "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription, "data-astro-cid-4nfplkdb": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4nfplkdb": true })}${maybeRenderHead()}<main class="main" data-astro-cid-4nfplkdb>${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle, "data-astro-cid-4nfplkdb": true })}<section class="terms-policy" style="padding-block: clamp(3rem, 4vw, 5rem); background-color: var(--color-white);" data-astro-cid-4nfplkdb><div class="container" style="max-width: 920px;" data-astro-cid-4nfplkdb><div class="wordpress-content" data-astro-cid-4nfplkdb>${unescapeHTML(pageContent)}</div></div></section>${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "data-astro-cid-4nfplkdb": true })}</main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4nfplkdb": true })}` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/terms-of-use.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/terms-of-use.astro";
const $$url = "/terms-of-use";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfUse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
