import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../assets/astro/server.BCYojIfz.js';
import { $ as $$BaseLayout, a as $$Header, b as $$LazyImage, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
export { renderers } from '../renderers.mjs';

const errorImage = new Proxy({"src":"/assets/404-error.DnHAZi4-.png","width":786,"height":558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/404-error.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "The Lenders - 404 Not Found", "description": "Sorry, this page could not be found." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> <section> <div class="container"> <div class="error404Wrapper"> <div class="error404ImageWrap"> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "class": "error404Image", "src": errorImage.src, "alt": "404 error", "width": errorImage.width, "height": errorImage.height, "loading": "lazy" })} </div> <h1>404 error</h1> <p>Page not found</p> <a class="button" href="/"> <span>Back To Home</span> </a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/404.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
