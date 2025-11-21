export { renderers } from '../../renderers.mjs';

const GET = async () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      message: "SSR is working!",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      env: {
        hasWordPressUrl: true,
        hasWordPressApiUrl: true,
        wordpressUrl: "https://wp.leanders.markupers.com.ua",
        isProd: true
      }
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
