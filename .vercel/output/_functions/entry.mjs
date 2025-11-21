import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './assets/_@astrojs-ssr-adapter.DylosE33.js';
import { manifest } from './manifest_D_qzTaMx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/accessibility.astro.mjs');
const _page4 = () => import('./pages/api/posts.json.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/calculator.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/faq.astro.mjs');
const _page9 = () => import('./pages/glossary.astro.mjs');
const _page10 = () => import('./pages/legal-disclaimer.astro.mjs');
const _page11 = () => import('./pages/licensing.astro.mjs');
const _page12 = () => import('./pages/loan-programs.astro.mjs');
const _page13 = () => import('./pages/post/_slug_.astro.mjs');
const _page14 = () => import('./pages/privacy-policy.astro.mjs');
const _page15 = () => import('./pages/terms-of-use.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/accessibility.astro", _page3],
    ["src/pages/api/posts.json.ts", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/calculator.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/faq.astro", _page8],
    ["src/pages/glossary.astro", _page9],
    ["src/pages/legal-disclaimer.astro", _page10],
    ["src/pages/licensing.astro", _page11],
    ["src/pages/loan-programs.astro", _page12],
    ["src/pages/post/[slug].astro", _page13],
    ["src/pages/privacy-policy.astro", _page14],
    ["src/pages/terms-of-use.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d3c78450-4c38-4359-9e23-15a6e83e40a0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
