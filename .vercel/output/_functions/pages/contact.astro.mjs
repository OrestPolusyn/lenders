import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, k as renderComponent } from '../assets/astro/server.BCYojIfz.js';
import 'clsx';
import { s as styles } from '../assets/contact.163c854c.CBmuMkW6.js';
import { B as BUSINESS_INFO, d as BUSINESS_HOURS, $ as $$BaseLayout, a as $$Header, c as $$Footer } from '../assets/BaseLayout.xKOn_9-D.js';
import { g as getPageBySlug } from '../assets/wordpress.xvbuhDZq.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$Contact$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const { data = {} } = Astro2.props;
  const contactData = {
    slogan: data.contact_slogan || "get in touch",
    title: data.contact_title || "Apply Now & Get Started",
    subtitle: data.contact_subtitle || "Take the first step towards your dream home. Fill out the form below and our team will reach out to you within 24 hours.",
    formTitle: data.contact_form_title || "Contact Information",
    formSubtitle: data.contact_form_subtitle || "Fill out the form and we'll be in touch soon.",
    formButton: data.contact_form_button || "Submit Application",
    formNote: data.contact_form_note || "Text us to schedule an appointment.",
    phone: data.contact_phone || BUSINESS_INFO.phone,
    phoneFormatted: data.contact_phone_formatted || BUSINESS_INFO.phoneFormatted,
    email: data.contact_email || BUSINESS_INFO.email,
    addressStreet: data.contact_address_street || BUSINESS_INFO.address.street,
    addressCity: data.contact_address_city || BUSINESS_INFO.address.city,
    addressState: data.contact_address_state || BUSINESS_INFO.address.state,
    addressZip: data.contact_address_zip || BUSINESS_INFO.address.zip,
    addressFull: data.contact_address_full || BUSINESS_INFO.address.full,
    hoursWeekdays: data.contact_hours_weekdays || BUSINESS_HOURS.weekdays,
    hoursTime: data.contact_hours_time || BUSINESS_HOURS.hours,
    cardPhoneTitle: data.contact_card_phone_title || "Call Us",
    cardEmailTitle: data.contact_card_email_title || "Email Us",
    cardEmailSubtitle: data.contact_card_email_subtitle || "We'll respond within 24 hours",
    cardVisitTitle: data.contact_card_visit_title || "Visit Us",
    mapsUrl: data.contact_maps_url || BUSINESS_INFO.mapsUrl
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.contact, "class")}> <div class="container"> <div${addAttribute(styles.contactHeader, "class")}> <p class="slogan slogan--double slogan--reverse">${contactData.slogan}</p> <h2>${contactData.title}</h2> <p${addAttribute(styles.contactSubtitle, "class")}> ${contactData.subtitle} </p> </div> <div${addAttribute(styles.contactContent, "class")}> <!-- Left side - Form --> <div${addAttribute(styles.contactForm, "class")}> <div${addAttribute(styles.formHeader, "class")}> <h3>${contactData.formTitle}</h3> <p>${contactData.formSubtitle}</p> </div> <form data-contact-form> <div${addAttribute(styles.formGroup, "class")}> <label for="fullName">Full Name *</label> <input type="text" id="fullName" name="fullName" placeholder="John Doe" required> </div> <div${addAttribute(styles.formGroup, "class")}> <label for="email">Email Address *</label> <input type="email" id="email" name="email" placeholder="john@example.com" required> </div> <div${addAttribute(styles.formGroup, "class")}> <label for="phone">Phone Number *</label> <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required> </div> <div${addAttribute(styles.formGroup, "class")}> <label for="message">Message</label> <textarea id="message" name="message" placeholder="Tell us about your loan needs"${addAttribute(4, "rows")}></textarea> </div> <button type="submit"${addAttribute(styles.submitButton, "class")}> ${contactData.formButton} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.293 3.293L16 9L10.293 14.707L8.879 13.293L12.172 10L4 10L4 8L12.172 8L8.879 4.707L10.293 3.293Z" fill="currentColor"></path> </svg> </button> <p${addAttribute(styles.formNote, "class")}> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM9 6H7V4H9V6Z" fill="currentColor"></path> </svg> ${contactData.formNote} </p> </form> <div data-toast${addAttribute(styles.toast, "class")} style="display: none;"></div> </div> <!-- Right side - Contact Info & Map --> <div${addAttribute(styles.contactInfo, "class")}> <div${addAttribute(styles.mapContainer, "class")}> <a${addAttribute(styles.mapPlaceholder, "class")}${addAttribute(contactData.mapsUrl, "href")} target="_blank" rel="noopener noreferrer"> <svg${addAttribute(styles.mapIcon, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#00d3f2"></path> </svg> <div${addAttribute(styles.buildingInfo, "class")}> <p>${contactData.addressFull}</p> <div${addAttribute(styles.rating, "class")}> <span>★★★★★</span> </div> </div> </a> </div> <div${addAttribute(styles.contactCards, "class")}> <div${addAttribute(styles.contactCard, "class")}> <div${addAttribute(styles.contactCardIcon, "class")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"></path> </svg> </div> <div${addAttribute(styles.contactCardContent, "class")}> <p>${contactData.cardPhoneTitle}</p> <p>${contactData.hoursWeekdays}, ${contactData.hoursTime}</p> <a${addAttribute(`tel:${contactData.phone}`, "href")}>${contactData.phoneFormatted}</a> </div> </div> <div${addAttribute(styles.contactCard, "class")}> <div${addAttribute(styles.contactCardIcon, "class")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"></path> </svg> </div> <div${addAttribute(styles.contactCardContent, "class")}> <p>${contactData.cardEmailTitle}</p> <p>${contactData.cardEmailSubtitle}</p> <a${addAttribute(`mailto:${contactData.email}`, "href")}> ${contactData.email} </a> </div> </div> <div${addAttribute(styles.contactCard, "class")}> <div${addAttribute(styles.contactCardIcon, "class")}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"></path> </svg> </div> <div${addAttribute(styles.contactCardContent, "class")}> <p>${contactData.cardVisitTitle}</p> <p>${contactData.addressStreet}</p> <p> ${contactData.addressCity}, ${contactData.addressState} ${contactData.addressZip} </p> </div> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/macair/Desktop/lenders/src/components/Contact/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macair/Desktop/lenders/src/components/Contact/Contact.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contactPage = await getPageBySlug("contact");
  const acf = contactPage?.acf || {};
  contactPage?.title?.rendered || "Contact Us";
  const metaTitle = contactPage?.title?.rendered || "Contact Us - The Lenders";
  const metaDescription = contactPage?.excerpt?.rendered || "Contact The Lenders for mortgage rates and home loan solutions. Expert guidance for your home financing needs.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metaTitle, "description": metaDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="main"> ${renderComponent($$result2, "ContactComponent", $$Contact$1, { "data": acf })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/macair/Desktop/lenders/src/pages/contact.astro", void 0);

const $$file = "/Users/macair/Desktop/lenders/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
