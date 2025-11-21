const WORDPRESS_URL = "https://wp.leanders.markupers.com.ua";
const WORDPRESS_API_URL = "https://wp.leanders.markupers.com.ua/wp-json/wp/v2";
function buildQueryString(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== void 0 && value !== null) {
      if (Array.isArray(value)) {
        query.append(key, value.join(","));
      } else {
        query.append(key, String(value));
      }
    }
  });
  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
}
async function fetchWordPress(endpoint, params = {}) {
  const queryString = buildQueryString(params);
  const url = `${WORDPRESS_API_URL}${endpoint}${queryString}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      const error = await response.json();
      console.error(`WordPress API Error: ${error.message}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from WordPress: ${error}`);
    return null;
  }
}
async function getAllPosts(params = {}) {
  const defaultParams = {
    per_page: 10,
    _embed: true,
    ...params
  };
  const posts = await fetchWordPress("/posts", defaultParams);
  return posts || [];
}
async function getPostBySlug(slug) {
  const posts = await fetchWordPress("/posts", { slug, _embed: true });
  return posts && posts.length > 0 ? posts[0] : null;
}
async function getPageBySlug(slug) {
  const pages = await fetchWordPress("/pages", { slug, _embed: true });
  return pages && pages.length > 0 ? pages[0] : null;
}
function getFeaturedImageUrl(post, size = "full") {
  if (!post._embedded?.["wp:featuredmedia"]?.[0]) {
    return null;
  }
  const media = post._embedded["wp:featuredmedia"][0];
  if (size !== "full" && media.media_details?.sizes?.[size]) {
    return media.media_details.sizes[size].source_url;
  }
  return media.source_url;
}
function getCategories(post) {
  if (!post._embedded?.["wp:term"]?.[0]) {
    return [];
  }
  return post._embedded["wp:term"][0].filter(
    (term) => term.taxonomy === "category"
  );
}
function formatDate(dateString, locale = "uk-UA") {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
async function getMenuByLocation(location = "primary") {
  const CUSTOM_API_URL = WORDPRESS_URL + "/wp-json/lenders/v1";
  const url = `${CUSTOM_API_URL}/menu/${location}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      console.error(`Menu API Error: ${response.statusText}`);
      return [];
    }
    const menu = await response.json();
    return menu || [];
  } catch (error) {
    console.error(`Failed to fetch menu: ${error}`);
    return [];
  }
}

export { getAllPosts as a, getCategories as b, getFeaturedImageUrl as c, getPostBySlug as d, getMenuByLocation as e, formatDate as f, getPageBySlug as g };
