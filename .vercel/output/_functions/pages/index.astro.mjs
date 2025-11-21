import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent, u as unescapeHTML, o as defineScriptVars } from '../assets/astro/server.BCYojIfz.js';
import { b as $$LazyImage, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { $ as $$GetInTouch } from '../assets/GetInTouch.C3UR0PGv.js';
import 'clsx';
import { s as styles, a as styles$1, b as styles$2, c as styles$3, d as styles$4, e as styles$5, f as styles$6, g as styles$7, h as styles$8, i as sliderStyles } from '../assets/index.95d291e9.CpsTmGr7.js';
import { $ as $$LoansGrid } from '../assets/LoansGrid.CvNfIjtQ.js';
import { a as getAllPosts, g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://leanders.markupers.com.ua");
const $$ProgressLines = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProgressLines;
  const { items } = Astro2.props;
  const defaultItems = [
    {
      title: "Fast Same-Day Loan Approvals",
      percent: 90,
      label: "Up to 90%"
    },
    {
      title: "Lowest Interest Rates Available",
      percent: 95,
      label: "95% Satisfaction"
    },
    {
      title: "Flexible & Affordable Payment Options",
      percent: 90,
      label: "90% Customer Preference"
    }
  ];
  const progressItems = items && items.length > 0 ? items : defaultItems;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(styles.progressLines, "class")}> ${progressItems.map((item) => renderTemplate`<li> <p>${item.title}</p> <span${addAttribute(styles.progressLine, "class")} data-progress${addAttribute(`--percent: ${item.percent}%`, "style")}> <span>${item.label}</span> </span> </li>`)} </ul> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/ProgressLines/ProgressLines.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/ProgressLines/ProgressLines.astro", void 0);

const aboutImage = new Proxy({"src":"/assets/about-men.crsv354Z.jpg","width":570,"height":597,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/about-men.jpg";
							}
							
							return target[name];
						}
					});

const calculateImage = new Proxy({"src":"/assets/calculate.DWfPCnhC.jpg","width":270,"height":186,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/calculate.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://leanders.markupers.com.ua");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { data = {} } = Astro2.props;
  const aboutData = {
    slogan: data.about_slogan || "Welcome to The Lenders",
    title: data.about_title || "our loans will fill yourdreams come true",
    description: data.about_description || "We provide simple, transparent, and stress-free mortgage solutions tailored to your financial goals. Choose from Conventional, FHA, VA, Jumbo, First-Time Buyer loans \u2014 with expert support at every step.",
    years: data.about_years || 25,
    buttonText: data.about_button_text || "Explore Loans",
    buttonUrl: data.about_button_url || "/loans",
    progressLines: data.about_progress_lines || []
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$1.aboutSection, "class")}> <div class="container"> <div${addAttribute(`${styles$1.aboutSectionWrapper} wrapper`, "class")}> <div${addAttribute(styles$1.aboutSectionImages, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "class": styles$1.aboutSectionImageFirst, "src": aboutImage.src, "alt": "About", "width": aboutImage.width, "height": aboutImage.height, "loading": "lazy" })} ${renderComponent($$result, "LazyImage", $$LazyImage, { "class": styles$1.aboutSectionImageSecond, "src": calculateImage.src, "alt": "About", "width": calculateImage.width, "height": calculateImage.height, "loading": "lazy" })} <div${addAttribute(styles$1.aboutSectionInfo, "class")}> <span${addAttribute(styles$1.aboutSectionExperience, "class")}>
years of <br>
experience
</span> <span${addAttribute(styles$1.aboutSectionExperienceNumber, "class")}${addAttribute(aboutData.years, "data-value")}>
0
</span> </div> </div> <div${addAttribute(styles$1.aboutSectionContent, "class")}> <div class="slogan slogan--reverse"> <span>${aboutData.slogan}</span> </div> <h2>${aboutData.title}</h2> <div> <p>${unescapeHTML(aboutData.description)}</p> </div> ${renderComponent($$result, "ProgressLines", $$ProgressLines, { "items": aboutData.progressLines })} </div> </div> <a class="button"${addAttribute(aboutData.buttonUrl, "href")}> <span>${aboutData.buttonText}</span> </a> </div> </section> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/AboutSection/AboutSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/AboutSection/AboutSection.astro", void 0);

const $$MortgageCalculator = createComponent(($$result, $$props, $$slots) => {
  const defaultPrice = 4e5;
  const defaultDownPayment = 20;
  const defaultRate = 6.5;
  const defaultTerm = 30;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$2.mortgageCalculator, "class")} data-mortgage-calculator> <form${addAttribute(styles$2.mortgageCalculatorForm, "class")} onsubmit="event.preventDefault()"> <div${addAttribute(styles$2.mortgageCalculatorGrid, "class")}> <label${addAttribute(styles$2.mortgageCalculatorField, "class")}> <span>Home price</span> <div${addAttribute(styles$2.mortgageCalculatorValueRow, "class")}> <span${addAttribute(styles$2.mortgageCalculatorValueLabel, "class")} data-display-price>
$${defaultPrice.toLocaleString("en-US")} </span> </div> <input type="range" name="price" min="50000" max="1500000" step="5000"${addAttribute(defaultPrice, "value")}> </label> <label${addAttribute(styles$2.mortgageCalculatorField, "class")}> <span>Down payment</span> <div${addAttribute(styles$2.mortgageCalculatorValueRow, "class")}> <span${addAttribute(styles$2.mortgageCalculatorValueLabel, "class")} data-display-down> ${defaultDownPayment}%
</span> </div> <input type="range" name="downPayment" min="0" max="50" step="1"${addAttribute(defaultDownPayment, "value")}> </label> <label${addAttribute(styles$2.mortgageCalculatorField, "class")}> <span>Interest rate</span> <div${addAttribute(styles$2.mortgageCalculatorValueRow, "class")}> <span${addAttribute(styles$2.mortgageCalculatorValueLabel, "class")} data-display-rate> ${defaultRate}%
</span> </div> <input type="range" name="rate" min="1" max="15" step="0.1"${addAttribute(defaultRate, "value")}> </label> <label${addAttribute(styles$2.mortgageCalculatorField, "class")}> <span>Loan term</span> <div${addAttribute(styles$2.mortgageCalculatorValueRow, "class")}> <span${addAttribute(styles$2.mortgageCalculatorValueLabel, "class")} data-display-term> ${defaultTerm} years
</span> </div> <input type="range" name="term" min="10" max="30" step="5"${addAttribute(defaultTerm, "value")}> </label> </div> <div${addAttribute(styles$2.mortgageCalculatorResults, "class")}> <div> <span${addAttribute(styles$2.mortgageCalculatorResultsLabel, "class")}>Estimated monthly payment</span> <div${addAttribute(styles$2.mortgageCalculatorPayment, "class")} data-mortgage-payment>
$0
</div> </div> <div${addAttribute(styles$2.mortgageCalculatorMeta, "class")}> <span>loan amount</span> <span data-mortgage-loan-amount>$0 </span> </div> </div> </form> <a href="https://1665272.my1003app.com/134607/register" class="button"> <span>Apply Now</span> </a> </div> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/MortgageCalculator/MortgageCalculator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/MortgageCalculator/MortgageCalculator.astro", void 0);

const $$Astro$6 = createAstro("https://leanders.markupers.com.ua");
const $$Calculator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Calculator;
  const { data = {} } = Astro2.props;
  const calculatorData = {
    slogan: data.calculator_slogan || "calculate your loan",
    title: data.calculator_title || "Mortgage Programs Tailored for Every Dream",
    description: data.calculator_description || "Use our calculator to estimate your monthly payments and explore our flexible mortgage programs designed to match your unique needs.",
    programsTitle: data.calculator_programs_title || "Top Programs",
    buttonText: data.calculator_button_text || "view all programs"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$3.homeCalculator, "class")}> <div class="container"> <div${addAttribute(styles$3.homeCalculatorContent, "class")}> <div class="slogan slogan--double"> <span>${calculatorData.slogan}</span> </div> <h2>${calculatorData.title}</h2> <p>${calculatorData.description}</p> </div> <div${addAttribute(styles$3.homeCalculatorWrapper, "class")}> ${renderComponent($$result, "MortgageCalculator", $$MortgageCalculator, {})} <div${addAttribute(styles$3.homeLoanPrograms, "class")}> <h3>${calculatorData.programsTitle}</h3> ${renderComponent($$result, "LoansGrid", $$LoansGrid, { "numberOfItems": 4, "linkToLoanPrograms": true })} <a href="/loan-programs" class="button"> <span>${calculatorData.buttonText}</span> </a> </div> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Home/Calculator/Calculator.astro", void 0);

const $$Astro$5 = createAstro("https://leanders.markupers.com.ua");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data = {} } = Astro2.props;
  const heroData = {
    slogan: data.hero_slogan || "Leading the way in Home Loans",
    title: data.hero_title || "THE AMERICAN DREAM",
    subtitle: data.hero_subtitle || "We Build Dreams, Nurture Families, and Change Lives-One Mortgage at a Time",
    button1Text: data.hero_button_1_text || "Get Pre-Approved",
    button1Url: data.hero_button_1_url || "https://1665272.my1003app.com/134607/register",
    button2Text: data.hero_button_2_text || "Explore Loan Options",
    button2Url: data.hero_button_2_url || "/loan-programs"
  };
  return renderTemplate`${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Home/Hero/Hero.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section${addAttribute(`${styles$4.hero} hero-section`, "class")}> <div class="container"> <div${addAttribute(styles$4.heroWrapper, "class")}> <div${addAttribute(styles$4.heroContent, "class")}> <p class="slogan">${heroData.slogan}</p> <h1>${heroData.title}</h1> <p> <span>The Lenders - </span> ${heroData.subtitle} </p> <div${addAttribute(styles$4.heroActions, "class")}> <a class="button"${addAttribute(heroData.button1Url.startsWith("http") ? "_blank" : "_self", "target")}${addAttribute(heroData.button1Url, "href")}> <span>${heroData.button1Text}</span> </a> <a class="button button--reverse"${addAttribute(heroData.button2Url, "href")}> <span>${heroData.button2Text}</span> </a> </div> </div> <div${addAttribute(styles$4.heroAnimation, "class")}> ${renderComponent($$result, "lottie-player", "lottie-player", { "src": "/data/lenders.json", "background": "transparent", "speed": "0.7", "autoplay": true })} </div> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Home/Hero/Hero.astro", void 0);

const newsData = [
	{
		id: 1,
		title: "New Loan Products Available",
		description: "We are excited to announce the launch of our new flexible loan products designed to meet diverse financial needs.",
		date: "2024-03-15",
		category: "Product Launch",
		image: "/images/news/news-1.jpg",
		"image-second": "/images/news/news-2.jpg",
		"image-third": "/images/news/news-3.jpg"
	},
	{
		id: 2,
		title: "Lower Interest Rates This Quarter",
		description: "Great news! We've reduced our interest rates to help you save more on your loans this quarter.",
		date: "2024-03-10",
		category: "Announcement",
		image: "/images/news/news-2.jpg"
	},
	{
		id: 3,
		title: "Customer Success Stories",
		description: "Read inspiring stories from our customers who achieved their financial goals with our lending solutions.",
		date: "2024-03-05",
		category: "Success Stories",
		image: "/images/news/news-3.jpg"
	}
];

const $$Astro$4 = createAstro("https://leanders.markupers.com.ua");
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$News;
  const { data = {} } = Astro2.props;
  const newsContentData = {
    slogan: data.news_slogan || "Smart mortgage tips and rate trends.",
    title: data.news_title || "news & insights",
    buttonText: data.news_button_text || "View All News"
  };
  let news = [];
  try {
    const wpPosts = await getAllPosts({ per_page: 3, _embed: true });
    if (wpPosts && wpPosts.length > 0) {
      news = wpPosts.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        date: post.date,
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/placeholder.jpg",
        slug: post.slug
      }));
    }
  } catch (error) {
    console.log("\u{1F4F0} Using static news data (WordPress unavailable)");
  }
  if (news.length === 0) {
    news = newsData;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$5.news, "class")}> <div class="container"> <div${addAttribute(styles$5.newsContent, "class")}> <div${addAttribute(styles$5.newsHeader, "class")}> <p class="slogan slogan--double"> ${newsContentData.slogan} </p> <h2>${newsContentData.title}</h2> </div> <div${addAttribute(styles$5.newsSliderWrapper, "class")}> <div${addAttribute(styles$5.newsSlider, "class")}> ${news.map((item) => renderTemplate`<article${addAttribute(styles$5.newsItem, "class")}> <div${addAttribute(styles$5.newsItemImage, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": item.image, "alt": item.title, "width": 400, "height": 250, "loading": "lazy" })} <span${addAttribute(styles$5.newsItemCategory, "class")}>${item.category}</span> </div> <div${addAttribute(styles$5.newsItemContent, "class")}> <time${addAttribute(styles$5.newsItemDate, "class")}> ${formatDate(item.date)} </time> <h3>${item.title}</h3> <p>${item.description}</p> <a${addAttribute(styles$5.newsItemButton, "class")}${addAttribute(item.slug ? `/post/${item.slug}` : `/post/${item.id}`, "href")}>
Read More
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> </article>`)} </div> </div> <a href="/blog" class="button"> <span>${newsContentData.buttonText}</span> </a> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Home/News/News.astro", void 0);

const philosophyImage = new Proxy({"src":"/assets/philosophy-women.BsZX-NzZ.jpg","width":495,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/philosophy-women.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://leanders.markupers.com.ua");
const $$Philosophy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Philosophy;
  const { data = {} } = Astro2.props;
  const philosophyData = {
    quote: data.philosophy_quote || '"We believe everyone deserves a chance to be approved."',
    slogan: data.philosophy_slogan || "Mortgage Lending, Elevated.",
    title: data.philosophy_title || "Why Choose The Lenders",
    description: data.philosophy_description || "At The Lenders, we believe every borrower deserves clarity, trust, and a personalized lending experience. Our team combines industry expertise with premium customer care to help you make informed decisions at every stage of the mortgage process.",
    values: data.philosophy_values || [
      { title: "Transparency", description: "no hidden fees, no surprises" },
      {
        title: "Flexibility",
        description: "loan options designed around your lifestyle"
      },
      {
        title: "Guidance",
        description: "expert support from application to closing"
      },
      {
        title: "Efficiency",
        description: "faster approvals and streamlined processing"
      }
    ],
    buttonText: data.philosophy_button_text || "Read Our Story",
    buttonUrl: data.philosophy_button_url || "/about"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$6.homePhilosophy, "class")}> <div class="container"> <div${addAttribute(`${styles$6.homePhilosophyWrapper} wrapper`, "class")}> <div${addAttribute(styles$6.homePhilosophyImages, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "class": styles$6.homePhilosophyImage, "src": philosophyImage.src, "alt": "Philosophy", "width": 495, "height": 500, "loading": "lazy" })} <div${addAttribute(styles$6.homePhilosophyInfo, "class")}> <p>${philosophyData.quote}</p> </div> </div> <div${addAttribute(styles$6.homePhilosophyContent, "class")}> <div class="slogan slogan--reverse"> <span>${philosophyData.slogan}</span> </div> <h2>${philosophyData.title}</h2> <p>${unescapeHTML(philosophyData.description)}</p> <ul${addAttribute(styles$6.homePhilosophyList, "class")}> ${philosophyData.values.map((value) => renderTemplate`<li${addAttribute(styles$6.homePhilosophyListItem, "class")}> <h3>${value.title}</h3> <p>${value.description}</p> </li>`)} </ul> </div> </div> <a class="button"${addAttribute(philosophyData.buttonUrl, "href")}> <span>${philosophyData.buttonText}</span> </a> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Home/Philosophy/Philosophy.astro", void 0);

const processImageFirst = new Proxy({"src":"/assets/process-first.Bywc1UcD.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/process-first.png";
							}
							
							return target[name];
						}
					});

const processImageFourth = new Proxy({"src":"/assets/process-fourth.DEfUroOG.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/process-fourth.png";
							}
							
							return target[name];
						}
					});

const processImageSecond = new Proxy({"src":"/assets/process-second.OJD3W4ci.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/process-second.png";
							}
							
							return target[name];
						}
					});

const processImageThird = new Proxy({"src":"/assets/process-third.wbnxaIAV.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/process-third.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://leanders.markupers.com.ua");
const $$Process = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Process;
  const { data = {} } = Astro2.props;
  const processImages = [
    processImageFirst,
    processImageSecond,
    processImageThird,
    processImageFourth
  ];
  const processData = {
    slogan: data.process_slogan || "how it works",
    title: data.process_title || "Our Working Process",
    description: data.process_description || "",
    steps: data.process_steps || [
      {
        step_number: 1,
        step_title: "Application Submission",
        step_description: "Start your mortgage journey with a quick, secure online form."
      },
      {
        step_number: 2,
        step_title: "Review & Verification",
        step_description: "Our team analyzes your financial profile and helps you choose the best loan."
      },
      {
        step_number: 3,
        step_title: "Loan Clearance",
        step_description: "We guide you through final steps and ensure full approval."
      },
      {
        step_number: 4,
        step_title: "Closing Day",
        step_description: "Sign your documents and move confidently into your new home."
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$7.process, "class")}> <div class="container"> <div${addAttribute(styles$7.processContent, "class")}> <div${addAttribute(styles$7.processHeader, "class")}> <p class="slogan slogan--double">${processData.slogan}</p> <h2>${processData.title}</h2> ${processData.description && renderTemplate`<p>${processData.description}</p>`} </div> <ul${addAttribute(styles$7.processList, "class")}> ${processData.steps.map((step, index) => renderTemplate`<li${addAttribute(styles$7.processItem, "class")}> <div${addAttribute(styles$7.processItemIcons, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": processImages[index]?.src || processImageFirst.src, "alt": step.step_title, "width": 130, "height": 130, "loading": "lazy" })} <span${addAttribute(styles$7.processStepNumber, "class")}>step</span> <svg${addAttribute(styles$7.processItemIconsArrow, "class")} viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z"></path> </svg> <svg${addAttribute(styles$7.processItemIconsCircle, "class")} width="136" height="32" viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z"></path> </svg> </div> <h3>${step.step_title}</h3> <p>${step.step_description}</p> </li>`)} </ul> </div> </div> </section>`;
}, "/Users/macair/Desktop/lenders/src/components/Home/Process/Process.astro", void 0);

const avatar1 = new Proxy({"src":"/assets/avatar-1.p4sGfTID.jpg","width":64,"height":64,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/avatar-1.jpg";
							}
							
							return target[name];
						}
					});

const avatar2 = new Proxy({"src":"/assets/avatar-2.CNlrWIqg.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/avatar-2.png";
							}
							
							return target[name];
						}
					});

const avatar3 = new Proxy({"src":"/assets/avatar-3.xO7-sIKE.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/avatar-3.png";
							}
							
							return target[name];
						}
					});

const reviewsImage = new Proxy({"src":"/assets/happy-customers.DdwYeBf1.jpg","width":1252,"height":1487,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/happy-customers.jpg";
							}
							
							return target[name];
						}
					});

const secondReviewsImage = new Proxy({"src":"/assets/total-funded.uivQ41W6.jpg","width":285,"height":304,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macair/Desktop/lenders/public/images/home/total-funded.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://leanders.markupers.com.ua");
const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Reviews;
  const { data = {} } = Astro2.props;
  const defaultReviews = [
    {
      id: 1,
      text: "Working with this team made our dream home a reality. The entire process was smooth, transparent, and faster than we expected. They found us the perfect loan program with an incredible rate!",
      author: "Sarah Johnson",
      role: "First-Time Homebuyer",
      rating: 5
    },
    {
      id: 2,
      text: "The mortgage process can be overwhelming, but this team guided us every step of the way. Their expertise and personalized approach made all the difference. Highly recommend!",
      author: "Michael Chen",
      role: "Real Estate Investor",
      rating: 5
    },
    {
      id: 3,
      text: "As a self-employed professional, I thought getting a mortgage would be impossible. This team found creative solutions and got us approved with great terms. Truly exceptional service!",
      author: "Emily Rodriguez",
      role: "Small Business Owner",
      rating: 5
    }
  ];
  const reviews = data.reviews_list ? data.reviews_list.map((r, i) => ({
    id: i + 1,
    text: r.review_text,
    author: r.reviewer_name,
    role: r.reviewer_position,
    rating: r.review_rating
  })) : defaultReviews;
  const reviewsData = {
    slogan: data.reviews_slogan || "our reviews",
    title: data.reviews_title || "What Our Clients Say",
    description: data.reviews_description || "Don't just take our word for it. Hear from homeowners who trusted us with their mortgage journey."
  };
  const avatars = [avatar1, avatar2, avatar3];
  return renderTemplate(_a || (_a = __template(["", "<section", '> <div class="container"> <div', '> <div class="slogan slogan--double slogan--reverse"> <span>', "</span> </div> <h2>", "</h2> <p>", "</p> </div> <div", "> <div", "> <div", " data-reviews-slider> <div", '>"</div> <div', " data-stars> ", " </div> <p", " data-text> ", " </p> <div", "> <p", " data-name> ", " </p> <p", " data-role> ", " </p> </div> <div", "> <div", "> ", " </div> <p", ">\nJoin 8,500+ happy homeowners\n</p> </div> <div", "> <div", " data-dots> ", " </div> <div", "> <button", ' data-prev aria-label="Previous slide"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> <button', ' data-next aria-label="Next slide"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> </div> </div> <div', "> <div", "> ", " </div> <div", "> <span>8.5K</span> <p>Happy Customers</p> </div> <div", "> <span>$95K</span> <p>Daily Payments</p> </div> <div", "> <span>99%</span> <p>We Approve Loans</p> </div> <div", "> ", " </div> </div> </div> </div> </section> <script>(function(){", "\n  const slider = document.querySelector('[data-reviews-slider]')\n  const textEl = document.querySelector('[data-text]')\n  const nameEl = document.querySelector('[data-name]')\n  const roleEl = document.querySelector('[data-role]')\n  const dotsContainer = document.querySelector('[data-dots]')\n  const prevBtn = document.querySelector('[data-prev]')\n  const nextBtn = document.querySelector('[data-next]')\n\n  let currentSlide = 0\n\n  function updateSlide() {\n    const review = reviews[currentSlide]\n    if (textEl) textEl.textContent = review.text\n    if (nameEl) nameEl.textContent = review.author\n    if (roleEl) roleEl.textContent = review.role\n\n    // Update dots\n    const dots = dotsContainer?.querySelectorAll('button')\n    dots?.forEach((dot, index) => {\n      if (index === currentSlide) {\n        dot.classList.add('ReviewsSlider_reviewsSliderDotActive__9vwwY')\n      } else {\n        dot.classList.remove('ReviewsSlider_reviewsSliderDotActive__9vwwY')\n      }\n    })\n  }\n\n  function nextSlide() {\n    currentSlide = (currentSlide + 1) % reviews.length\n    updateSlide()\n  }\n\n  function prevSlide() {\n    currentSlide = (currentSlide - 1 + reviews.length) % reviews.length\n    updateSlide()\n  }\n\n  function goToSlide(index) {\n    currentSlide = index\n    updateSlide()\n  }\n\n  // Event listeners\n  prevBtn?.addEventListener('click', prevSlide)\n  nextBtn?.addEventListener('click', nextSlide)\n\n  const dots = dotsContainer?.querySelectorAll('button')\n  dots?.forEach((dot, index) => {\n    dot.addEventListener('click', () => goToSlide(index))\n  })\n})();<\/script>"])), maybeRenderHead(), addAttribute(styles$8.homeReviews, "class"), addAttribute(styles$8.homeReviewsContent, "class"), reviewsData.slogan, reviewsData.title, reviewsData.description, addAttribute(`${styles$8.homeReviewsWrapper} wrapper`, "class"), addAttribute(sliderStyles.reviewsSlider, "class"), addAttribute(sliderStyles.reviewsSliderCard, "class"), addAttribute(sliderStyles.reviewsSliderQuote, "class"), addAttribute(sliderStyles.reviewsSliderStars, "class"), Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(i, "key")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#00d3f2"></path> </svg>`), addAttribute(sliderStyles.reviewsSliderText, "class"), reviews[0].text, addAttribute(sliderStyles.reviewsSliderAuthor, "class"), addAttribute(sliderStyles.reviewsSliderName, "class"), reviews[0].author, addAttribute(sliderStyles.reviewsSliderRole, "class"), reviews[0].role, addAttribute(sliderStyles.reviewsSliderSocial, "class"), addAttribute(sliderStyles.reviewsSliderAvatars, "class"), avatars.map((avatar, index) => renderTemplate`<div${addAttribute(index, "key")}${addAttribute(sliderStyles.reviewsSliderAvatar, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": avatar.src, "alt": `Customer ${index + 1}`, "width": 40, "height": 40, "loading": "lazy" })} </div>`), addAttribute(sliderStyles.reviewsSliderSocialText, "class"), addAttribute(sliderStyles.reviewsSliderNavigation, "class"), addAttribute(sliderStyles.reviewsSliderDots, "class"), reviews.map((_, index) => renderTemplate`<button${addAttribute(index, "key")}${addAttribute(`${sliderStyles.reviewsSliderDot} ${index === 0 ? sliderStyles.reviewsSliderDotActive : ""}`, "class")}${addAttribute(index, "data-slide")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")}></button>`), addAttribute(sliderStyles.reviewsSliderArrows, "class"), addAttribute(sliderStyles.reviewsSliderArrow, "class"), addAttribute(sliderStyles.reviewsSliderArrow, "class"), addAttribute(styles$8.homeReviewsGrid, "class"), addAttribute(styles$8.homeReviewsImage, "class"), renderComponent($$result, "LazyImage", $$LazyImage, { "src": reviewsImage.src, "alt": "Business consultation", "width": 400, "height": 600, "loading": "lazy" }), addAttribute(styles$8.homeReviewsStatCard, "class"), addAttribute(styles$8.homeReviewsStatCard, "class"), addAttribute(styles$8.homeReviewsStatCard, "class"), addAttribute(styles$8.homeReviewsImageBottom, "class"), renderComponent($$result, "LazyImage", $$LazyImage, { "src": secondReviewsImage.src, "alt": "Team meeting", "width": 400, "height": 300, "loading": "lazy" }), defineScriptVars({ reviews }));
}, "/Users/macair/Desktop/lenders/src/components/Home/Reviews/Reviews.astro", void 0);

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let homeData = {};
  try {
    const homePage = await getPageBySlug("home");
    if (homePage && homePage.acf) {
      homeData = homePage.acf;
      console.log("\u2705 Loaded Home page data from WordPress");
    }
  } catch (error) {
    console.error("\u274C Failed to load Home page from WordPress:", error);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "The Lenders - Best Mortgage Rates & Home Loans", "description": "Find the best mortgage rates and home loan solutions with The Lenders. Expert guidance for your home financing needs." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "Hero", $$Hero, { "data": homeData })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { "data": homeData })} ${renderComponent($$result2, "Calculator", $$Calculator, { "data": homeData })} ${renderComponent($$result2, "Philosophy", $$Philosophy, { "data": homeData })} ${renderComponent($$result2, "Process", $$Process, { "data": homeData })} ${renderComponent($$result2, "Reviews", $$Reviews, { "data": homeData })} ${renderComponent($$result2, "News", $$News, { "data": homeData })} ${renderComponent($$result2, "GetInTouch", $$GetInTouch, { "homePage": true, "data": homeData })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/index.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
