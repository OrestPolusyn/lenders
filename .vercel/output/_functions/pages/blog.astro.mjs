import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, k as renderComponent, r as renderTemplate } from '../assets/astro/server.BCYojIfz.js';
import { b as $$LazyImage, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { s as styles } from '../assets/blog.7968dd4f.BbsJqvNe.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.C3UR0PGv.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { a as getAllPosts, b as getCategories, c as getFeaturedImageUrl } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Blog$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog$1;
  const { initialPosts, hasMore = true } = Astro2.props;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.blog, "class")}> <div class="container"> <h2>Recent Articles</h2> <ul${addAttribute(styles.blogList, "class")} id="blog-list"${addAttribute(styles.newsItem, "data-news-item-class")}${addAttribute(styles.newsItemImage, "data-news-image-class")}${addAttribute(styles.newsItemCategory, "data-news-category-class")}${addAttribute(styles.newsItemContent, "data-news-content-class")}${addAttribute(styles.newsItemDate, "data-news-date-class")}${addAttribute(styles.newsItemButton, "data-news-button-class")}> ${initialPosts.map((post) => renderTemplate`<li${addAttribute(styles.newsItem, "class")}> <article> <div${addAttribute(styles.newsItemImage, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": post.image, "alt": post.title, "width": 300, "height": 200, "loading": "lazy" })} <span${addAttribute(styles.newsItemCategory, "class")}>${post.category}</span> </div> <div${addAttribute(styles.newsItemContent, "class")}> <time${addAttribute(styles.newsItemDate, "class")}>${formatDate(post.date)}</time> <h3>${post.title}</h3> <p>${post.description}</p> <a${addAttribute(styles.newsItemButton, "class")}${addAttribute(`/post/${post.slug}`, "href")}>
Read More
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> </article> </li>`)} </ul> ${hasMore && renderTemplate`<button class="button" id="load-more-btn" data-page="1"> <span>Load more</span> </button>`} </div> </section> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Blog/Blog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/Blog/Blog.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const initialPosts = await getAllPosts({
    per_page: 6,
    _embed: true
  });
  const posts = initialPosts.map((post) => {
    const categories = getCategories(post);
    const featuredImage = getFeaturedImageUrl(post, "medium");
    return {
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
      date: post.date,
      slug: post.slug,
      image: featuredImage || "/images/news/default-post.jpg",
      category: categories[0]?.name || "Uncategorized"
    };
  });
  const hasMorePosts = initialPosts.length >= 6;
  const pageTitle = "Blog";
  const metaTitle = "The Lenders - Blog | Mortgage Tips & Home Buying Guides";
  const metaDescription = "Read expert mortgage tips, home buying guides, and financial advice from The Lenders. Stay informed about the latest trends in home financing.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} ${renderComponent($$result2, "BlogSection", $$Blog$1, { "initialPosts": posts, "hasMore": hasMorePosts })} ${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/blog.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
