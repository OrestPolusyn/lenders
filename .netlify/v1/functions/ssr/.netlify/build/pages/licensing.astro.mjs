import { d as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../assets/astro/server.BcVv-EhL.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.roKyh5FE.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.Dowm11mF.js';
import { $ as $$PageHeader } from '../assets/PageHeader.BzBG6oGs.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Licensing = createComponent(async ($$result, $$props, $$slots) => {
  const licensingPage = await getPageBySlug("licensing-and-disclosures");
  const pageTitle = licensingPage?.title?.rendered || "Licensing and Disclosures";
  const metaTitle = licensingPage?.title?.rendered || "The Lenders | Licensing and Disclosures";
  const metaDescription = licensingPage?.excerpt?.rendered || "Review The Lenders licensing and disclosures to see our NMLS registration, state licenses, Equal Housing Lender statement, and other regulatory information.";
  const pageContent = licensingPage?.content?.rendered || "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription, "data-astro-cid-j24aikxp": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j24aikxp": true })}${maybeRenderHead()}<main class="main" data-astro-cid-j24aikxp>${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle, "data-astro-cid-j24aikxp": true })}<section class="terms-policy" style="padding-block: clamp(3rem, 4vw, 5rem); background-color: var(--color-white);" data-astro-cid-j24aikxp><div class="container" style="max-width: 920px;" data-astro-cid-j24aikxp><div class="wordpress-content" data-astro-cid-j24aikxp>${unescapeHTML(pageContent)}</div></div></section>${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "data-astro-cid-j24aikxp": true })}</main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j24aikxp": true })}` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/licensing.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/licensing.astro";
const $$url = "/licensing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Licensing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
