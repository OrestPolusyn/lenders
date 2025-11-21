import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server.BCYojIfz.js';
import 'clsx';

const loanList = [
  {
    title: "Refinance & Purchase Loans",
    icon: "refinance-purchase"
  },
  {
    title: "Primary Home Loans",
    icon: "primary-home"
  },
  {
    title: "Secondary Home Loans",
    icon: "secondary-home"
  },
  {
    title: "Investment Property Loans",
    icon: "investment-property"
  },
  {
    title: "Self-Employed Home Loans",
    icon: "self-employed"
  },
  {
    title: "First-Time Homebuyer Programs",
    icon: "first-time"
  },
  {
    title: "Conventional Loans",
    icon: "conventional"
  },
  {
    title: "FHA Loans",
    icon: "fha"
  },
  {
    title: "VA Loans",
    icon: "va"
  },
  {
    title: "Jumbo Prime Loans",
    icon: "jumbo"
  },
  {
    title: "Reverse Mortgage Loans",
    icon: "reverse-mortgage"
  }
];

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$LoansGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoansGrid;
  const { numberOfItems, linkToLoanPrograms = false, loanPrograms } = Astro2.props;
  const loans = loanPrograms && loanPrograms.length > 0 ? loanPrograms.map((program) => ({
    title: program.title,
    icon: program.slug
  })) : loanList;
  const itemsToShow = numberOfItems || loans.length;
  return renderTemplate`${maybeRenderHead()}<ul class="loanGrid"> ${loans.map((loan, index) => {
    if (index < itemsToShow) {
      const href = linkToLoanPrograms ? `/loan-programs?loan=${loan.icon}` : void 0;
      return renderTemplate`<li> <a${addAttribute(`loanGridItem loanGridItem--${loan.icon}`, "class")}${addAttribute(loan.icon, "data-loan")}${addAttribute(href, "href")}> <p>${loan.title}</p> <div class="button"> <span>Read more</span> </div> </a> </li>`;
    }
  })} </ul>`;
}, "/Users/macair/Desktop/lenders/src/components/LoansGrid/LoansGrid.astro", void 0);

export { $$LoansGrid as $, loanList as l };
