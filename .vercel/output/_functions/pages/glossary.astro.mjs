import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, n as Fragment, u as unescapeHTML } from '../assets/astro/server.BCYojIfz.js';
import { $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { s as styles } from '../assets/glossary.fe4f4346.RlQ6-gPi.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Glossary$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Glossary$1;
  const {
    terms = [],
    sectionTitle = "Mortgage terms explained",
    sectionSubtitle = "Please click on the letter below to skip to the definition of the word you are looking for."
  } = Astro2.props;
  const defaultTerms = [
    {
      id: 1,
      term: "Mortgage",
      letter: "M",
      definition: "A loan used to purchase real estate, where the property serves as collateral for the loan."
    },
    {
      id: 2,
      term: "APR",
      letter: "A",
      definition: "Annual Percentage Rate - An interest rate reflecting the cost of a mortgage as a yearly rate."
    },
    {
      id: 3,
      term: "Amortization",
      letter: "A",
      definition: "The process of paying off debt over time in equal installments."
    },
    {
      id: 4,
      term: "Closing",
      letter: "C",
      definition: "The meeting between the buyer, seller and lender where the property and funds legally change hands."
    },
    {
      id: 5,
      term: "Down Payment",
      letter: "D",
      definition: "Money paid to make up the difference between the purchase price and mortgage amount."
    }
  ];
  const glossaryTerms = terms.length > 0 ? terms : defaultTerms;
  const termsByLetter = {};
  glossaryTerms.forEach((term) => {
    const letter = term.letter.toUpperCase();
    if (!termsByLetter[letter]) {
      termsByLetter[letter] = [];
    }
    termsByLetter[letter].push(term);
  });
  const availableLetters = Object.keys(termsByLetter).sort();
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.glossary, "class")}> <div class="container"> <div${addAttribute(styles.glossaryContent, "class")}> <h2>${sectionTitle}</h2> <p>${sectionSubtitle}</p> </div> <div${addAttribute(styles.glossaryLetters, "class")}> ${allLetters.map((letter) => {
    const hasTerms = availableLetters.includes(letter);
    return hasTerms ? renderTemplate`<a${addAttribute(`#${letter}`, "href")}${addAttribute(styles.glossaryLetter, "class")}> ${letter} </a>` : renderTemplate`<span${addAttribute(styles.glossaryLetterDisabled, "class")}>${letter}</span>`;
  })} </div> <ul${addAttribute(styles.glossaryLettersList, "class")}> ${availableLetters.map((letter) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${termsByLetter[letter].map((term, index) => renderTemplate`<li${addAttribute(styles.glossaryLettersListItem, "class")}${addAttribute(index === 0 ? letter : void 0, "id")}> <strong>${term.term}</strong> <div>${unescapeHTML(term.definition)}</div> </li>`)}` })}`)} </ul> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Glossary/Glossary.astro", void 0);

const $$Glossary = createComponent(async ($$result, $$props, $$slots) => {
  const glossaryPage = await getPageBySlug("glossary");
  const pageTitle = glossaryPage?.title?.rendered || "Glossary of terms";
  const metaTitle = glossaryPage?.title?.rendered || "The Lenders - Glossary";
  const metaDescription = glossaryPage?.excerpt?.rendered || "Find the definitions of common mortgage and home loan terms with The Lenders Glossary. Learn about interest rates, loan types, and more to make informed decisions about your home financing.";
  const acf = glossaryPage?.acf || {};
  const sectionTitle = acf.glossary_section_title || "Mortgage terms explained";
  const sectionSubtitle = acf.glossary_section_subtitle || "Please click on the letter below to skip to the definition of the word you are looking for.";
  const glossaryTermsRaw = acf.glossary_terms || [];
  const glossaryTerms = glossaryTermsRaw.map((item, index) => ({
    id: index + 1,
    term: item.term || "",
    letter: item.letter?.toUpperCase() || "",
    definition: item.definition || ""
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} ${renderComponent($$result2, "GlossarySection", $$Glossary$1, { "terms": glossaryTerms, "sectionTitle": sectionTitle, "sectionSubtitle": sectionSubtitle })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/glossary.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/glossary.astro";
const $$url = "/glossary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Glossary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
