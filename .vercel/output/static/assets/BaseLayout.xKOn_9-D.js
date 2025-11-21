import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent, n as Fragment$1, p as renderSlot, q as renderHead, u as unescapeHTML } from './astro/server.BCYojIfz.js';
import { s as styles$1, a as styles$2, b as styles$3 } from './about.3758c021.jzhtAwPS.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';
import { s as styles } from './about.6024b6aa.bS1n74ih.js';
import { e as getMenuByLocation } from './wordpress.xvbuhDZq.js';

const $$Astro$1 = createAstro("https://leanders.markupers.com.ua");
const $$LazyImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LazyImage;
  const {
    src,
    alt,
    width,
    height,
    class: className,
    loading = "lazy"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(loading, "loading")} decoding="async"${addAttribute([styles.lazyImage, className], "class:list")}> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/UI/LazyImage/LazyImage.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/UI/LazyImage/LazyImage.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(styles$1.footer, "class")}> <div${addAttribute(styles$1.footerTop, "class")}> <div class="container"> <div${addAttribute(styles$1.footerTopWrapper, "class")}> <!-- Company Info --> <div${addAttribute(styles$1.footerBrand, "class")}> <div${addAttribute(styles$1.footerLogo, "class")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": "/images/logo_white.svg", "alt": "The Lenders", "width": "240", "height": "70", "loading": "eager" })} </div> <div> <p${addAttribute(styles$1.footerDescription, "class")}>
Your trusted partner in home financing. We're committed to helping
              you achieve your dream of homeownership with competitive rates and
              exceptional service.
</p> <div${addAttribute(styles$1.footerSocial, "class")}> <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener"> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="https://x.com" aria-label="X" target="_blank" rel="noopener"> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener"> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path> </svg> </a> </div> </div> </div> <!-- Navigation Columns --> <div${addAttribute(styles$1.footerNav, "class")}> <div${addAttribute(styles$1.footerColumn, "class")}> <p>Company</p> <ul> <li><a href="/about">About Us</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <div${addAttribute(styles$1.footerColumn, "class")}> <p>Services</p> <ul> <li><a href="/loan-programs">Loan Programs</a></li> <li><a href="/calculator">Mortgage Calculator</a></li> </ul> </div> <div${addAttribute(styles$1.footerColumn, "class")}> <p>Resources</p> <ul> <li><a href="/blog">Blog</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/glossary">Glossary</a></li> </ul> </div> <div${addAttribute(styles$1.footerColumn, "class")}> <p>Legal</p> <ul> <li><a href="/privacy-policy">Privacy Policy</a></li> <li><a href="/terms-of-use">Terms of Use</a></li> <li><a href="/legal-disclaimer">Legal Disclaimer</a></li> <li><a href="/licensing">NMLS Licensing</a></li> <li><a href="/accessibility">Accessibility</a></li> </ul> </div> </div> </div> </div> <div${addAttribute(styles$1.footerBottom, "class")}> <div class="container"> <p${addAttribute(styles$1.footerCopyright, "class")}>
&copy; ${currentYear} The Lenders. All rights reserved.
</p> <p${addAttribute(styles$1.footerDisclaimer, "class")}>
The Lenders is a mortgage company. NMLS# XXXXXXX. Equal Housing
          Opportunity. Licensed in all 50 states. This is not a commitment to
          lend. All loans subject to underwriting approval.
</p> </div> </div> </div> </footer> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Footer/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/Footer/Footer.astro", void 0);

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Loan Programs", href: "/loan-programs" },
  { title: "Calculator", href: "/calculator" },
  { title: "About Us", href: "/about" },
  {
    title: "Resources",
    children: [
      { title: "Blog", href: "/blog" },
      { title: "License", href: "/licensing" },
      { title: "FAQ", href: "/faq" },
      { title: "Glossary", href: "/glossary" }
    ]
  },
  { title: "Contact Us", href: "/contact" }
];

function MobileMenu({ isOpen, onClose }) {
  const [openParent, setOpenParent] = useState(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      setOpenParent(null);
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${styles$2.backdrop} ${isOpen ? styles$2.backdropOpen : ""}`,
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${styles$2.mobileMenu} ${isOpen ? styles$2.mobileMenuOpen : ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: styles$2.mobileMenuHeader, children: /* @__PURE__ */ jsxs(
            "button",
            {
              className: styles$2.closeButton,
              onClick: onClose,
              "aria-label": "Close menu",
              children: [
                /* @__PURE__ */ jsx("span", {}),
                /* @__PURE__ */ jsx("span", {})
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: styles$2.mobileMenuNav, children: /* @__PURE__ */ jsx("ul", { className: styles$2.mobileMenuList, children: navLinks.map((link) => {
            const anyLink = link;
            const hasChildren = Array.isArray(anyLink.children) && anyLink.children.length > 0;
            if (hasChildren) {
              const isOpenParent = openParent === link.title;
              return /* @__PURE__ */ jsxs("li", { className: styles$2.mobileMenuListItem, children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `${styles$2.mobileMenuLink} ${isOpenParent ? styles$2.mobileMenuLinkOpen : ""}`,
                    onClick: () => setOpenParent(
                      (current) => current === link.title ? null : link.title
                    ),
                    children: [
                      /* @__PURE__ */ jsx("span", { children: link.title }),
                      /* @__PURE__ */ jsx("span", { className: styles$2.mobileMenuToggleIcon })
                    ]
                  }
                ),
                isOpenParent && /* @__PURE__ */ jsx("ul", { className: styles$2.mobileSubmenu, children: anyLink.children.map((child) => /* @__PURE__ */ jsx(
                  "li",
                  {
                    className: styles$2.mobileMenuListItem,
                    children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: child.href,
                        className: styles$2.mobileMenuLink,
                        onClick: onClose,
                        children: child.title
                      }
                    )
                  },
                  child.href ?? child.title
                )) })
              ] }, link.title);
            }
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: styles$2.mobileMenuListItem,
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    className: styles$2.mobileMenuLink,
                    onClick: onClose,
                    children: link.title
                  }
                )
              },
              link.href ?? link.title
            );
          }) }) })
        ]
      }
    )
  ] });
}

function MobileMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const handleClick = () => {
      setIsOpen((prev) => {
        const newState = !prev;
        mobileMenuBtn?.classList.toggle("active", newState);
        return newState;
      });
    };
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", handleClick);
    }
    return () => {
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);
  const handleClose = () => {
    setIsOpen(false);
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    mobileMenuBtn?.classList.remove("active");
  };
  return /* @__PURE__ */ jsx(MobileMenu, { isOpen, onClose: handleClose });
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const wordpressMenu = await getMenuByLocation("primary");
  function convertMenuToNavLinks(menuItems) {
    return menuItems.map((item) => {
      let url = item.url;
      if (url) {
        url = url.replace("https://wp.leanders.markupers.com.ua", "");
        url = url.replace("http://wp.leanders.markupers.com.ua", "");
        url = url.replace("https://leanders.markupers.com.ua", "");
        url = url.replace("http://leanders.markupers.com.ua", "");
        if (!url.startsWith("/")) {
          url = "/" + url;
        }
      }
      return {
        title: item.title,
        href: url,
        children: item.children && item.children.length > 0 ? convertMenuToNavLinks(item.children) : void 0
      };
    });
  }
  const menu = wordpressMenu.length > 0 ? convertMenuToNavLinks(wordpressMenu) : navLinks;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`${styles$3.header} header ${styles$3.headerVisible}`, "class")} id="header"> <nav${addAttribute(styles$3.headerNav, "class")}> <a${addAttribute(styles$3.headerLogo, "class")} href="/"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": "/images/logo.png", "alt": "The Lenders", "width": "240", "height": "70", "loading": "eager" })} </a> <ul${addAttribute(styles$3.headerList, "class")}> ${menu.map((link) => renderTemplate`<li${addAttribute(`${styles$3.headerListItem} ${link.children ? styles$3.headerListItemHasDropdown : ""}`, "class")}> ${link.children ? renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": async ($$result2) => renderTemplate` <a${addAttribute(styles$3.headerLink, "class")}${addAttribute(link.href ?? "#", "href")}> ${link.title} <span${addAttribute(styles$3.headerDropdownIcon, "class")}></span> </a> <ul${addAttribute(styles$3.headerDropdown, "class")}> ${link.children.map((child) => renderTemplate`<li${addAttribute(styles$3.headerDropdownItem, "class")}> <a${addAttribute(styles$3.headerDropdownLink, "class")}${addAttribute(child.href, "href")}> ${child.title} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute(styles$3.headerLink, "class")}${addAttribute(link.href, "href")}> ${link.title} </a>`} </li>`)} <li> <a${addAttribute(`${styles$3.headerLink} ${styles$3.applyNow} button`, "class")} target="_blank" href="https://1665272.my1003app.com/134607/register"> <span>Apply now</span> </a> </li> </ul> <button${addAttribute(styles$3.headerMenu, "class")} id="mobileMenuBtn" aria-label="Open mobile menu"> <span></span> <span></span> <span></span> </button> </nav> </header> <!-- Responsive menu React component (outside header for proper positioning) --> ${renderComponent($$result, "MobileMenuWrapper", MobileMenuWrapper, { "client:load": true, "client:media": "(max-width: 1180px)", "client:component-hydration": "load", "client:component-path": "/Users/macair/Desktop/lenders/src/components/MobileMenu/MobileMenuWrapper", "client:component-export": "default" })} ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Header/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/macair/Desktop/lenders/src/components/Header/Header.astro", void 0);

const BUSINESS_INFO = {
  name: "The Lenders",
  phone: "+12485341720",
  phoneFormatted: "(248) 534-1720",
  email: "info@thelenders.mortgage",
  address: {
    street: "2930 W. Hamlin Rd",
    city: "Rochester Hills",
    state: "Michigan",
    zip: "48309",
    full: "2930 W. Hamlin Rd Rochester Hills, Michigan 48309"
  },
  mapsUrl: "https://maps.app.goo.gl/SNtyFQi4PGPizbnw9"};
const SEO_CONFIG = {
  defaultTitle: "The Lenders - Best Mortgage Rates & Home Loans",
  defaultDescription: "Find the best mortgage rates and home loan solutions with The Lenders. Expert guidance for your home financing needs.",
  siteUrl: "https://thelenders.com",
  ogImage: "/og-image.jpg",
  twitterHandle: "@thelenders"
};
const BUSINESS_HOURS = {
  weekdays: "Monday - Friday",
  hours: "8AM - 5PM EST"
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = SEO_CONFIG.defaultTitle,
    description = SEO_CONFIG.defaultDescription,
    canonical = Astro2.url.pathname,
    ogImage = SEO_CONFIG.ogImage
  } = Astro2.props;
  const canonicalURL = new URL(canonical, SEO_CONFIG.siteUrl).href;
  const ogImageURL = new URL(ogImage, SEO_CONFIG.siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="page"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="generator"', '><link rel="canonical"', '><!-- Performance & Security --><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="theme-color" content="#0047AB"><meta name="format-detection" content="telephone=yes"><!-- Resource Hints --><link rel="dns-prefetch" href="https://images.unsplash.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432 --><link rel="preload" href="/fonts/VisbyRegular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/VisbySemibold.woff" as="font" type="font/woff" crossorigin><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', '</title><!-- Structured Data - Enhanced Schema.org for Mortgage Lender --><script type="application/ld+json">', '<\/script><!-- Organization Schema for better branding --><script type="application/ld+json">', "<\/script>", '</head> <body class="page__body"> <div class="site-container"> ', " </div> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), addAttribute(BUSINESS_INFO.name, "content"), addAttribute(SEO_CONFIG.twitterHandle, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), title, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    "@id": SEO_CONFIG.siteUrl,
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: SEO_CONFIG.siteUrl,
    logo: new URL("/images/logo-gradient.svg", SEO_CONFIG.siteUrl).href,
    image: ogImageURL,
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "MI"
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/thelenders",
      "https://www.linkedin.com/company/thelenders",
      "https://twitter.com/thelenders"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mortgage Loan Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "Conventional Loans",
            description: "Traditional home loans with competitive rates"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "FHA Loans",
            description: "Government-backed loans for first-time buyers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "VA Loans",
            description: "Zero down payment loans for veterans"
          }
        }
      ]
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    url: SEO_CONFIG.siteUrl,
    logo: new URL("/images/logo-gradient.svg", SEO_CONFIG.siteUrl).href,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phone,
      contactType: "Customer Service",
      availableLanguage: ["en"],
      areaServed: "US"
    }
  })), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ToastContainer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "react-toastify", "client:component-export": "ToastContainer" }));
}, "/Users/macair/Desktop/lenders/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, BUSINESS_INFO as B, $$Header as a, $$LazyImage as b, $$Footer as c, BUSINESS_HOURS as d };
