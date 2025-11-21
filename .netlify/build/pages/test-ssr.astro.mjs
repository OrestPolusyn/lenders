import { d as createComponent, l as renderHead, r as renderTemplate } from '../assets/astro/server.BcVv-EhL.js';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$TestSsr = createComponent(($$result, $$props, $$slots) => {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const wordpressUrl = "https://wp.leanders.markupers.com.ua";
  return renderTemplate`<html lang="en" data-astro-cid-5s55nkue> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SSR Test</title>${renderHead()}</head> <body data-astro-cid-5s55nkue> <div class="status" data-astro-cid-5s55nkue> <div class="success" data-astro-cid-5s55nkue>✅ SSR is Working!</div> <div class="info" data-astro-cid-5s55nkue> <strong data-astro-cid-5s55nkue>Timestamp:</strong> <code data-astro-cid-5s55nkue>${timestamp}</code> </div> <div class="info" data-astro-cid-5s55nkue> <strong data-astro-cid-5s55nkue>WordPress URL Set:</strong> <code data-astro-cid-5s55nkue>${"YES" }</code> </div> <div class="info" data-astro-cid-5s55nkue> <strong data-astro-cid-5s55nkue>WordPress URL:</strong> <code data-astro-cid-5s55nkue>${wordpressUrl}</code> </div> <div class="info" data-astro-cid-5s55nkue> <strong data-astro-cid-5s55nkue>Production Mode:</strong> <code data-astro-cid-5s55nkue>${"YES" }</code> </div> <div class="info" style="margin-top: 1rem;" data-astro-cid-5s55nkue> <a href="/" style="color: #3b82f6; text-decoration: none;" data-astro-cid-5s55nkue>← Back to Home</a> </div> </div> </body></html>`;
}, "/Users/macair/Desktop/lenders/src/pages/test-ssr.astro", void 0);
const $$file = "/Users/macair/Desktop/lenders/src/pages/test-ssr.astro";
const $$url = "/test-ssr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestSsr,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
