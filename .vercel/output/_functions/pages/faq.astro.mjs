import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as renderScript, u as unescapeHTML, r as renderTemplate } from '../assets/astro/server.BCYojIfz.js';
import { s as styles } from '../assets/faq.3f97fc9f.DmCkJKOy.js';
import { b as $$LazyImage, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.C3UR0PGv.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const faqImage = new Proxy({"src":"/assets/faq-bg.C_RTcCBg.jpg","width":540,"height":549,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/faq-bg.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Faq$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq$1;
  const {
    faqItems = [],
    sectionTitle = "Your top questions about home loans, answered"
  } = Astro2.props;
  const defaultFaqItems = [
    {
      id: 1,
      question: "What is a mortgage?",
      answer: "A mortgage is a loan used to buy a home. Once approved for a mortgage, you make monthly payments with interest until you pay off the loan. There are a variety of mortgage options, each with different benefits and features designed to fit your unique needs.",
      order: 1
    },
    {
      id: 2,
      question: "How much mortgage can I afford?",
      answer: "For many people, starting with 25% of their gross monthly income is a helpful way to estimate a manageable monthly payment. Our home affordability calculator can help you decide on a loan amount and monthly payment you'd be comfortable with. What you can afford may also be impacted by down payment amount, and how much you want to budget for other housing costs such as repairs and furniture.",
      order: 2
    },
    {
      id: 3,
      question: "What is a jumbo loan?",
      answer: "A jumbo loan (also known as a nonconforming loan) is a mortgage typically used to finance properties where the price exceeds the limits of a conventional conforming loan.",
      order: 3
    },
    {
      id: 4,
      question: "What is a VA mortgage loan?",
      answer: "Eligible veterans may qualify for the Veterans Affairs (VA) home loan program, designed to help veterans get favorable mortgage terms and a competitive interest rate when buying a home.",
      order: 4
    },
    {
      id: 5,
      question: "When is the best time to buy a home?",
      answer: "Choosing when to buy a home is a very personal decision that will depend on many factors.",
      order: 5
    }
  ];
  const faqs = faqItems.length > 0 ? faqItems : defaultFaqItems;
  const sortedFaqs = faqs.sort((a, b) => (a.order || 0) - (b.order || 0));
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.faq, "class")}> <div class="container"> <div${addAttribute(styles.faqContent, "class")}> <h2>${sectionTitle}</h2> </div> <div${addAttribute(`${styles.faqWrapper} wrapper`, "class")}> <div${addAttribute(styles.FaqImage, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": faqImage.src, "alt": "FAQ", "width": faqImage.width, "height": faqImage.height, "loading": "lazy" })} </div> <ul${addAttribute(styles.faqList, "class")}> ${sortedFaqs.map((faq, index) => renderTemplate`<li${addAttribute(styles.faqItem, "class")}> <details${addAttribute(index === 0, "open")}> <summary> <span>${faq.question}</span> </summary> <div> <div>${unescapeHTML(faq.answer)}</div> </div> </details> </li>`)} </ul> </div> </div> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Faq/Faq.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Faq/Faq.astro", void 0);

const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const faqPage = await getPageBySlug("faq");
  const pageTitle = faqPage?.title?.rendered || "FAQ";
  const metaTitle = faqPage?.title?.rendered || "The Lenders - FAQ";
  const metaDescription = faqPage?.excerpt?.rendered || "Have questions about mortgage rates or home loans? Contact The Lenders and speak with our experts to find the right financing solution for your new home.";
  const acf = faqPage?.acf || {};
  const sectionTitle = acf.faq_section_title || "Your top questions about home loans, answered";
  const faqItemsRaw = acf.faq_items || [];
  const faqItems = faqItemsRaw.map((item, index) => ({
    id: index + 1,
    question: item.question || "",
    answer: item.answer || "",
    category: item.category || "General",
    order: index + 1,
    // Use array index as order
    featured: item.featured || false
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} ${renderComponent($$result2, "FaqSection", $$Faq$1, { "faqItems": faqItems, "sectionTitle": sectionTitle })} ${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/faq.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Faq,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
