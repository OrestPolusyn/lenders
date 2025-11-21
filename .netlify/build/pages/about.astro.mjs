import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, i as renderComponent, r as renderTemplate, u as unescapeHTML, j as renderScript } from '../assets/astro/server.BcVv-EhL.js';
import { b as $$LazyImage, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.roKyh5FE.js';
import { s as styles, a as styles$1, b as styles$2, c as styles$3 } from '../assets/about.cb334633.-I61iFA4.js';
import 'clsx';
import { $ as $$GetInTouch } from '../assets/GetInTouch.Dowm11mF.js';
import { $ as $$PageHeader } from '../assets/PageHeader.BzBG6oGs.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://leanders.markupers.com.ua");
const $$Choose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Choose;
  const { data = {} } = Astro2.props;
  const chooseData = {
    slogan: data.about_choose_slogan || "our benefits",
    title: data.about_choose_title || "Why Choose Us",
    description: data.about_choose_description || "We're more than a mortgage company \u2014 we're your financial partner. With a focus on clarity, education, and speed, we help you make confident home-financing decisions.",
    benefits: data.about_choose_benefits || [
      { text: "lower rates", icon: "rates" },
      { text: "quick and easy", icon: "quick" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.choose, "class")}> <div class="container"> <div${addAttribute(styles.chooseWrapper, "class")}> <div${addAttribute(styles.chooseContent, "class")}> <span class="slogan slogan--double">${chooseData.slogan}</span> <h2>${chooseData.title}</h2> <p>${chooseData.description}</p> <ul${addAttribute(styles.chooseList, "class")}> ${chooseData.benefits.map((benefit) => renderTemplate`<li${addAttribute(`${styles.chooseItem} ${styles[`chooseItem${benefit.icon.charAt(0).toUpperCase() + benefit.icon.slice(1)}`]}`, "class")}> <span></span> <p>${benefit.text}</p> </li>`)} </ul> </div> <div${addAttribute(styles.chooseImage, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": "/images/why-choose-mens.jpg", "alt": "Our team members", "width": 340, "height": 510, "loading": "lazy" })} ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": "/images/calculate.jpg", "alt": "Our team members", "width": 340, "height": 510, "loading": "lazy" })} </div> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/About/Choose/Choose.astro", void 0);

const $$Astro$2 = createAstro("https://leanders.markupers.com.ua");
const $$History = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$History;
  const { data = {} } = Astro2.props;
  const historyData = {
    title: data.about_history_title || "About our company",
    content: data.about_history_content || `<p>The Leanders was founded with a simple mission: to make the mortgage process transparent, accessible, and stress-free for every client. What started as a small team of dedicated professionals has grown into one of the most trusted mortgage companies in the nation.</p>
    <p>We believe that everyone deserves a chance to own their dream home. That's why we've built our business on the principles of integrity, expertise, and personalized service. Our team works tirelessly to find the best mortgage solutions tailored to each client's unique situation.</p>
    <p>Over the years, we've helped thousands of families secure their homes, and we're proud to be a part of their journey. From first-time homebuyers to seasoned investors, we treat every client with the same level of care and attention.</p>`,
    image: data.about_history_image || "/images/history.jpg"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$1.history, "class")}> <div class="container"> <div${addAttribute(styles$1.historyWrapper, "class")}> <div${addAttribute(styles$1.historyContent, "class")}> <h2>${historyData.title}</h2> <div> <p>${unescapeHTML(historyData.content)}</p> </div> </div> <div${addAttribute(styles$1.historyImage, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": historyData.image, "alt": "Our team members", "width": 500, "height": 500, "loading": "lazy" })} </div> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/About/History/History.astro", void 0);

const $$Astro$1 = createAstro("https://leanders.markupers.com.ua");
const $$Values = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Values;
  const { data = {} } = Astro2.props;
  const defaultValues = [
    {
      title: "Trust & Integrity",
      icon: "trust",
      text: "We operate with complete transparency and honesty in every interaction."
    },
    {
      title: "Client-Focused",
      icon: "client",
      text: "Your financial goals are our priority. We tailor solutions to fit your unique needs."
    },
    {
      title: "Expert Guidance",
      icon: "expert",
      text: "Our team of experienced professionals provides expert advice every step of the way."
    },
    {
      title: "Excellence",
      icon: "excellence",
      text: "We strive for excellence in service, delivering the best mortgage solutions."
    },
    {
      title: "Innovation",
      icon: "innovation",
      text: "We leverage the latest technology to streamline your mortgage experience."
    },
    {
      title: "Community",
      icon: "community",
      text: "We're committed to helping families in our community achieve homeownership."
    }
  ];
  const valuesData = {
    slogan: data.about_values_slogan || "Our Values",
    title: data.about_values_title || "What Drives Us Forward",
    description: data.about_values_description || "Our core values guide everything we do, ensuring we provide the best service to our clients.",
    valueList: data.about_values_list && data.about_values_list.length > 0 ? data.about_values_list : defaultValues
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$2.values, "class")}> <div class="container"> <div${addAttribute(styles$2.valuesContent, "class")}> <div class="slogan slogan--double"> <span>${valuesData.slogan}</span> </div> <h2>${valuesData.title}</h2> <p>${valuesData.description}</p> </div> <ul${addAttribute(styles$2.valuesList, "class")}> ${valuesData.valueList.map((value) => renderTemplate`<li> <span${addAttribute(`${styles$2.valuesListItem} ${styles$2[`valuesListItem--${value.icon}`]}`, "class")}></span> <h3>${value.title}</h3> <p>${value.text}</p> </li>`)} </ul> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/About/Values/Values.astro", void 0);

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$NumbersSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NumbersSection;
  const { numbers } = Astro2.props;
  const defaultNumbers = [
    { value: "15k", label: "Years Experience" },
    { value: "2B", label: "Loans Funded" },
    { value: "10k", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" }
  ];
  const numberItems = numbers && numbers.length > 0 ? numbers : defaultNumbers;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$3.numbersSection, "class")}> <div class="container"> <ul${addAttribute(styles$3.numbersSectionList, "class")}> ${numberItems.map((item) => renderTemplate`<li${addAttribute(styles$3.numbersSectionItem, "class")}> <h3${addAttribute(styles$3.numbersSectionItemNumber, "class")}${addAttribute(item.value, "data-value")}> ${item.value} </h3> <p${addAttribute(styles$3.numbersSectionItemText, "class")}>${item.label}</p> </li>`)} </ul> </div> </section> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/NumbersSection/NumbersSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/NumbersSection/NumbersSection.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutPage = await getPageBySlug("about");
  const acf = aboutPage?.acf || {};
  const pageTitle = aboutPage?.title?.rendered || "About Us";
  const metaTitle = aboutPage?.title?.rendered || "The Lenders - About Us";
  const metaDescription = aboutPage?.excerpt?.rendered || "Learn about The Lenders - your trusted mortgage partner. Expert guidance for your home financing needs.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} ${renderComponent($$result2, "History", $$History, { "data": acf })} ${renderComponent($$result2, "NumbersSection", $$NumbersSection, { "numbers": acf.about_numbers })} ${renderComponent($$result2, "Choose", $$Choose, { "data": acf })} ${renderComponent($$result2, "Values", $$Values, { "data": acf })} ${acf.about_cta_enabled !== false && renderTemplate`${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "data": acf })}`} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/about.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
