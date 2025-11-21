import type {
  WPCategory,
  WPErrorResponse,
  WPFaqItem,
  WPLoanProgram,
  WPMedia,
  WPPage,
  WPPost,
  WPQueryParams,
  WPTag,
} from '@/types/wordpress'

// WordPress Configuration
const WORDPRESS_URL =
  import.meta.env.PUBLIC_WORDPRESS_URL || 'http://localhost:8000'
const WORDPRESS_API_URL =
  import.meta.env.PUBLIC_WORDPRESS_API_URL || `${WORDPRESS_URL}/wp-json/wp/v2`

// Перевірка наявності WordPress URL в production
if (import.meta.env.PROD && !import.meta.env.PUBLIC_WORDPRESS_URL) {
  console.error('⚠️ PUBLIC_WORDPRESS_URL is not set in environment variables!')
  console.error(
    'Please add it in Vercel Dashboard → Settings → Environment Variables'
  )
}

/**
 * Будує query string з параметрів
 */
function buildQueryString(params: WPQueryParams = {}): string {
  const query = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        query.append(key, value.join(','))
      } else {
        query.append(key, String(value))
      }
    }
  })

  const queryString = query.toString()
  return queryString ? `?${queryString}` : ''
}

/**
 * Загальна функція для запитів до WordPress REST API
 */
async function fetchWordPress<T>(
  endpoint: string,
  params: WPQueryParams = {}
): Promise<T | null> {
  const queryString = buildQueryString(params)
  const url = `${WORDPRESS_API_URL}${endpoint}${queryString}`

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error: WPErrorResponse = await response.json()
      console.error(`WordPress API Error: ${error.message}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Failed to fetch from WordPress: ${error}`)
    return null
  }
}

// ==================== POSTS ====================

/**
 * Отримати всі пости
 */
export async function getAllPosts(
  params: WPQueryParams = {}
): Promise<WPPost[]> {
  const defaultParams: WPQueryParams = {
    per_page: 10,
    _embed: true,
    ...params,
  }
  const posts = await fetchWordPress<WPPost[]>('/posts', defaultParams)
  return posts || []
}

/**
 * Отримати пост за slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWordPress<WPPost[]>('/posts', { slug, _embed: true })
  return posts && posts.length > 0 ? posts[0] : null
}

/**
 * Отримати пост за ID
 */
export async function getPostById(id: number): Promise<WPPost | null> {
  return await fetchWordPress<WPPost>(`/posts/${id}`, { _embed: true })
}

/**
 * Отримати всі ID постів для static paths
 */
export async function getAllPostIds(): Promise<number[]> {
  const posts = await fetchWordPress<WPPost[]>('/posts', {
    per_page: 100,
    _fields: 'id',
  })
  return posts ? posts.map(post => post.id) : []
}

// ==================== PAGES ====================

/**
 * Отримати всі сторінки
 */
export async function getAllPages(
  params: WPQueryParams = {}
): Promise<WPPage[]> {
  const defaultParams: WPQueryParams = {
    per_page: 100,
    _embed: true,
    ...params,
  }
  const pages = await fetchWordPress<WPPage[]>('/pages', defaultParams)
  return pages || []
}

/**
 * Отримати сторінку за slug
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchWordPress<WPPage[]>('/pages', { slug, _embed: true })
  return pages && pages.length > 0 ? pages[0] : null
}

/**
 * Отримати сторінку за ID
 */
export async function getPageById(id: number): Promise<WPPage | null> {
  return await fetchWordPress<WPPage>(`/pages/${id}`, { _embed: true })
}

// ==================== MEDIA ====================

/**
 * Отримати медіа за ID
 */
export async function getMediaById(id: number): Promise<WPMedia | null> {
  return await fetchWordPress<WPMedia>(`/media/${id}`)
}

// ==================== CATEGORIES ====================

/**
 * Отримати всі категорії
 */
export async function getAllCategories(
  params: WPQueryParams = {}
): Promise<WPCategory[]> {
  const categories = await fetchWordPress<WPCategory[]>('/categories', params)
  return categories || []
}

/**
 * Отримати категорію за slug
 */
export async function getCategoryBySlug(
  slug: string
): Promise<WPCategory | null> {
  const categories = await fetchWordPress<WPCategory[]>('/categories', { slug })
  return categories && categories.length > 0 ? categories[0] : null
}

// ==================== TAGS ====================

/**
 * Отримати всі теги
 */
export async function getAllTags(params: WPQueryParams = {}): Promise<WPTag[]> {
  const tags = await fetchWordPress<WPTag[]>('/tags', params)
  return tags || []
}

/**
 * Отримати тег за slug
 */
export async function getTagBySlug(slug: string): Promise<WPTag | null> {
  const tags = await fetchWordPress<WPTag[]>('/tags', { slug })
  return tags && tags.length > 0 ? tags[0] : null
}

// ==================== CUSTOM POST TYPES ====================

/**
 * Отримати всі FAQ елементи
 * Налаштуйте endpoint відповідно до вашого WordPress
 */
export async function getAllFaqItems(
  params: WPQueryParams = {}
): Promise<WPFaqItem[]> {
  const defaultParams: WPQueryParams = {
    per_page: 100,
    order: 'asc',
    ...params,
  }
  const faqItems = await fetchWordPress<WPFaqItem[]>('/faq', defaultParams)
  return faqItems || []
}

/**
 * Отримати FAQ елемент за ID
 */
export async function getFaqById(id: number): Promise<WPFaqItem | null> {
  return await fetchWordPress<WPFaqItem>(`/faq/${id}`)
}

/**
 * Отримати програму кредитування за ID
 */
export async function getLoanProgramById(
  id: number
): Promise<WPLoanProgram | null> {
  return await fetchWordPress<WPLoanProgram>(`/loan-programs/${id}`, {
    _embed: true,
  })
}

// ==================== HELPER FUNCTIONS ====================

/**
 * Видалити HTML теги з тексту
 */
export function getPlainText(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Отримати URL головного зображення
 */
export function getFeaturedImageUrl(
  post: WPPost | WPPage | WPLoanProgram,
  size: string = 'full'
): string | null {
  if (!post._embedded?.['wp:featuredmedia']?.[0]) {
    return null
  }

  const media = post._embedded['wp:featuredmedia'][0]

  if (size !== 'full' && media.media_details?.sizes?.[size]) {
    return media.media_details.sizes[size].source_url
  }

  return media.source_url
}

/**
 * Отримати ім'я автора
 */
export function getAuthorName(post: WPPost | WPPage): string {
  if (!post._embedded?.author?.[0]) {
    return 'Unknown'
  }
  return post._embedded.author[0].name
}

/**
 * Отримати категорії поста
 */
export function getCategories(post: WPPost): WPCategory[] {
  if (!post._embedded?.['wp:term']?.[0]) {
    return []
  }
  return post._embedded['wp:term'][0].filter(
    term => term.taxonomy === 'category'
  ) as WPCategory[]
}

/**
 * Отримати теги поста
 */
export function getTags(post: WPPost): WPTag[] {
  if (!post._embedded?.['wp:term']?.[1]) {
    return []
  }
  return post._embedded['wp:term'][1].filter(
    term => term.taxonomy === 'post_tag'
  ) as WPTag[]
}

/**
 * Форматувати дату
 */
export function formatDate(
  dateString: string,
  locale: string = 'uk-UA'
): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ==================== MENUS ====================

export interface WPMenuItem {
  id: number
  title: string
  url: string
  target: string
  classes: string
  parent: number
  children: WPMenuItem[]
}

/**
 * Отримати меню за location
 */
export async function getMenuByLocation(
  location: string = 'primary'
): Promise<WPMenuItem[]> {
  const CUSTOM_API_URL = WORDPRESS_URL + '/wp-json/lenders/v1'
  const url = `${CUSTOM_API_URL}/menu/${location}`

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error(`Menu API Error: ${response.statusText}`)
      return []
    }

    const menu = await response.json()
    return menu || []
  } catch (error) {
    console.error(`Failed to fetch menu: ${error}`)
    return []
  }
}
