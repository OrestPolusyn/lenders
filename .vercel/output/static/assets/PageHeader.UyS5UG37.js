import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server.BCYojIfz.js';
import 'clsx';
import { s as styles } from './about.adc6535c.CCDvkN75.js';

const $$Astro = createAstro("https://leanders.markupers.com.ua");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.pageHeader, "class")}> <div class="container"> <div${addAttribute(styles.pageHeaderContent, "class")}> <h1>${title}</h1> <div${addAttribute(styles.pageHeaderLines, "class")}> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> </div> </div>`;
}, "/Users/macair/Desktop/lenders/src/components/PageHeader/PageHeader.astro", void 0);

export { $$PageHeader as $ };
