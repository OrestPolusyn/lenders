import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, l as renderScript, r as renderTemplate, k as renderComponent } from '../assets/astro/server.BCYojIfz.js';
import 'clsx';
import { s as styles } from '../assets/calculator.f86f163d.47Jp1WNg.js';
import { B as BUSINESS_INFO, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.C3UR0PGv.js';
import { $ as $$PageHeader } from '../assets/PageHeader.UyS5UG37.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Calculator$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator$1;
  const { data = {} } = Astro2.props;
  const calculatorData = {
    title: data.calculator_title || "Mortgage & Loan Payment Calculator",
    description: data.calculator_description || "Compare different mortgage programs, estimate your monthly payment, and see how much goes toward principal versus interest over the life of the loan.",
    disclaimerTitle: data.calculator_disclaimer_title || "Disclaimer",
    disclaimerText: data.calculator_disclaimer_text || "Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.",
    buttonCalculate: data.calculator_button_calculate || "Update calculation",
    buttonSend: data.calculator_button_send || "Send my results",
    monthlyPaymentLabel: data.calculator_monthly_payment_label || "Estimated monthly payment",
    snapshotTitle: data.calculator_snapshot_title || "Loan snapshot",
    lifetimeTitle: data.calculator_lifetime_title || "Lifetime cost overview",
    legendPrincipal: data.calculator_legend_principal || "Principal",
    legendInterest: data.calculator_legend_interest || "Interest"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.calculator, "class")} aria-labelledby="loan-calculator-heading"> <div class="container"> <div${addAttribute(styles.calculatorInner, "class")}> <div${addAttribute(styles.calculatorHeader, "class")}> <h2 id="loan-calculator-heading">${calculatorData.title}</h2> <p> ${calculatorData.description} </p> </div> <div${addAttribute(styles.calculatorLayout, "class")}> <form${addAttribute(styles.calculatorForm, "class")} data-calculator-form${addAttribute(BUSINESS_INFO.email, "data-target-email")}> <div${addAttribute(styles.formRow, "class")}> <label for="program">Loan program</label> <select id="program" name="program" data-program> <option value="refinance-purchase">Refinance &amp; Purchase</option> <option value="primary-home" selected>Primary Home</option> <option value="secondary-home">Secondary Home</option> <option value="investment-property">Investment Property</option> <option value="conventional">Conventional</option> <option value="fha">FHA</option> <option value="va">VA</option> <option value="jumbo">Jumbo Prime</option> <option value="reverse-mortgage">Reverse Mortgage</option> </select> </div> <div${addAttribute(styles.formGrid, "class")}> <div${addAttribute(styles.formRow, "class")}> <label for="homePrice">Loan amount</label> <div${addAttribute(styles.inputWithPrefix, "class")}> <span>$</span> <input id="homePrice" name="homePrice" type="number" min="0" step="1000" value="400000" data-home-price> </div> </div> <div${addAttribute(styles.formRow, "class")}> <label for="downPayment">Down payment</label> <div${addAttribute(styles.dualInput, "class")}> <div${addAttribute(styles.inputWithPrefix, "class")}> <span>$</span> <input id="downPayment" name="downPayment" type="number" min="0" step="1000" value="80000" data-down-payment> </div> <div${addAttribute(styles.inputWithSuffix, "class")}> <input id="downPaymentPercent" name="downPaymentPercent" type="number" min="0" max="100" step="0.1" value="20" data-down-payment-percent> <span>%</span> </div> </div> </div> <div${addAttribute(styles.formRow, "class")}> <label for="rate">Interest rate (APR)</label> <div${addAttribute(styles.inputWithSuffix, "class")}> <input id="rate" name="rate" type="number" min="0" max="30" step="0.01" value="6.5" data-rate> <span>%</span> </div> </div> <div${addAttribute(styles.formRow, "class")}> <label for="term">Loan term</label> <select id="term" name="term" data-term> <option value="30" selected>30 years</option> <option value="25">25 years</option> <option value="20">20 years</option> <option value="15">15 years</option> <option value="10">10 years</option> </select> </div> </div> <div${addAttribute(styles.formRow, "class")}> <label for="taxes">Estimated taxes &amp; insurance</label> <div${addAttribute(styles.inputWithPrefix, "class")}> <span>$</span> <input id="taxes" name="taxes" type="number" min="0" step="10" value="350" data-taxes> </div> <p${addAttribute(styles.fieldHint, "class")}>
Optional: monthly estimate for property taxes, insurance, HOA, or
              other costs.
</p> </div> <div${addAttribute(styles.formRow, "class")}> <label>Your details</label> <div${addAttribute(styles.formGridSmall, "class")}> <div${addAttribute(styles.formRowInner, "class")}> <input type="text" name="fullName" placeholder="Full name" autocomplete="name" data-name> </div> <div${addAttribute(styles.formRowInner, "class")}> <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" data-phone> </div> <div${addAttribute(styles.formRowInner, "class")}> <input type="email" name="email" placeholder="Email address" autocomplete="email" data-email> </div> </div> </div> <div${addAttribute(styles.formActions, "class")}> <button type="button" class="button" data-calc-submit> <span>${calculatorData.buttonCalculate}</span> </button> <button type="button"${addAttribute(`button button--reverse ${styles.sendButton}`, "class")} data-send-results> <span>${calculatorData.buttonSend}</span> </button> </div> </form> <div${addAttribute(styles.calculatorResults, "class")} data-calculator-results> <div${addAttribute(styles.resultsTop, "class")}> <div${addAttribute(styles.donutWrapper, "class")}> <div${addAttribute(styles.donutLabel, "class")}> <span${addAttribute(styles.donutAmount, "class")} data-monthly-payment>
$0
</span> <span${addAttribute(styles.donutCaption, "class")}> ${calculatorData.monthlyPaymentLabel} </span> </div> <svg${addAttribute(styles.donut, "class")} viewBox="0 0 120 120" aria-hidden="true"> <circle${addAttribute(styles.donutTrack, "class")} cx="60" cy="60" r="44"></circle> <circle${addAttribute(styles.donutSlicePrincipal, "class")} cx="60" cy="60" r="44" data-donut-principal></circle> <circle${addAttribute(styles.donutSliceInterest, "class")} cx="60" cy="60" r="44" data-donut-interest></circle> </svg> <div${addAttribute(styles.legend, "class")}> <div${addAttribute(styles.legendItem, "class")}> <span${addAttribute(`${styles.legendDot} ${styles.legendDotPrincipal}`, "class")}></span> <span>${calculatorData.legendPrincipal}</span> <strong data-legend-principal>$0</strong> </div> <div${addAttribute(styles.legendItem, "class")}> <span${addAttribute(`${styles.legendDot} ${styles.legendDotInterest}`, "class")}></span> <span>${calculatorData.legendInterest}</span> <strong data-legend-interest>$0</strong> </div> </div> </div> <div${addAttribute(styles.resultsSummary, "class")}> <h3>${calculatorData.snapshotTitle}</h3> <dl> <div> <dt>Loan amount</dt> <dd data-summary-loan-amount>$0</dd> </div> <div> <dt>Down payment</dt> <dd data-summary-down-payment>$0 (0%)</dd> </div> <div> <dt>Principal &amp; interest</dt> <dd data-summary-principal-interest>$0</dd> </div> <div> <dt>Taxes &amp; insurance (est.)</dt> <dd data-summary-taxes>$0</dd> </div> <div> <dt>Total monthly payment</dt> <dd data-summary-monthly-total>$0</dd> </div> </dl> </div> </div> <div${addAttribute(styles.resultsDetails, "class")}> <h3>${calculatorData.lifetimeTitle}</h3> <div${addAttribute(styles.resultsDetailsGrid, "class")}> <div> <p${addAttribute(styles.resultsLabel, "class")}>Total paid over the term</p> <p${addAttribute(styles.resultsValue, "class")} data-total-paid>$0</p> </div> <div> <p${addAttribute(styles.resultsLabel, "class")}>Total principal</p> <p${addAttribute(styles.resultsValue, "class")} data-total-principal>$0</p> </div> <div> <p${addAttribute(styles.resultsLabel, "class")}>Total interest</p> <p${addAttribute(styles.resultsValue, "class")} data-total-interest>$0</p> </div> </div> </div> </div> <div${addAttribute(styles.disclaimer, "class")}> <h3>${calculatorData.disclaimerTitle}</h3> <p>${unescapeHTML(calculatorData.disclaimerText)}</p> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Calculator/Calculator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/Calculator/Calculator.astro", void 0);

const $$Calculator = createComponent(async ($$result, $$props, $$slots) => {
  const calculatorPage = await getPageBySlug("calculator");
  const acf = calculatorPage?.acf || {};
  const pageTitle = calculatorPage?.title?.rendered || "Calculator";
  const metaTitle = calculatorPage?.title?.rendered || "The Lenders - Calculator";
  const metaDescription = calculatorPage?.excerpt?.rendered || "Calculate your mortgage payments with our interactive calculator. Compare different loan programs and see your monthly payment breakdown.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": pageTitle })} ${renderComponent($$result2, "CalculatorBlock", $$Calculator$1, { "data": acf })} ${acf.calculator_cta_enabled !== false && renderTemplate`${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "data": acf })}`} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/calculator.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/calculator.astro";
const $$url = "/calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
