import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../assets/astro/server.BCYojIfz.js';
import { $ as $$BaseLayout, a as $$Header, b as $$LazyImage, c as $$Footer } from '../../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$GetInTouch } from '../../assets/GetInTouch.C3UR0PGv.js';
import { $ as $$PageHeader } from '../../assets/PageHeader.UyS5UG37.js';
import { d as getPostBySlug, c as getFeaturedImageUrl, b as getCategories, f as formatDate } from '../../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/blog");
  }
  const post = await getPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const pageTitle = post.title?.rendered || "Post";
  const metaDescription = post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "";
  const postContent = post.content?.rendered || "";
  const featuredImage = getFeaturedImageUrl(post, "large") || "/images/news/default-post.jpg";
  const categories = getCategories(post);
  const categoryName = categories[0]?.name || "News";
  const formattedDate = formatDate(post.date, "en-US");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} <section class="singlepost"> <div class="container"> <article class="singlepost__article"> <a class="button button--back" href="/blog"> <span>Back to blog</span> </a> <h2>${pageTitle}</h2> <div class="singlepost__media"> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": featuredImage, "alt": pageTitle, "width": 1600, "height": 450, "class": "singlepost__image" })} <span class="singlepost__category">${categoryName}</span> </div> <div class="singlepost__meta"> <time class="singlepost__date"${addAttribute(post.date, "datetime")}> ${formattedDate} </time> </div> <div class="singlepost__content wordpress-content">${unescapeHTML(postContent)}</div> </article> </div> </section> ${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
