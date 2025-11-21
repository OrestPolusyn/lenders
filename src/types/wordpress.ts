// WordPress REST API Types

export interface WPPost {
  id: number
  date: string
  date_gmt: string
  modified: string
  modified_gmt: string
  slug: string
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: 'open' | 'closed'
  ping_status: 'open' | 'closed'
  sticky: boolean
  template: string
  format: string
  meta: Record<string, any>
  categories: number[]
  tags: number[]
  _embedded?: {
    author?: WPUser[]
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: WPTerm[][]
  }
}

export interface WPPage {
  id: number
  date: string
  slug: string
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  parent: number
  menu_order: number
  acf?: any // ACF поля (динамічна структура залежить від налаштувань)
  _embedded?: {
    author?: WPUser[]
    'wp:featuredmedia'?: WPMedia[]
  }
}

export interface WPMedia {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: {
    rendered: string
  }
  author: number
  caption: {
    rendered: string
  }
  alt_text: string
  media_type: 'image' | 'file' | 'video' | 'audio'
  mime_type: string
  media_details: {
    width?: number
    height?: number
    file?: string
    sizes?: {
      [key: string]: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
  }
  source_url: string
}

export interface WPUser {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: {
    [key: string]: string
  }
}

export interface WPTerm {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: 'category' | 'post_tag' | string
  parent: number
}

export interface WPCategory extends WPTerm {
  taxonomy: 'category'
}

export interface WPTag extends WPTerm {
  taxonomy: 'post_tag'
}

// Custom Post Types для вашого проекту
export interface WPFaqItem {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  acf?: {
    question?: string
    answer?: string
    category?: string
    order?: number
    featured?: boolean
  }
}

export interface WPLoanProgram {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_media: number
  acf?: {
    description?: string
    rate?: string
    terms?: string
    requirements?: string
    benefits?: string[]
    icon?: string
  }
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
  }
}

// Query параметри
export interface WPQueryParams {
  page?: number
  per_page?: number
  search?: string
  author?: number
  before?: string
  after?: string
  exclude?: number[]
  include?: number[]
  offset?: number
  order?: 'asc' | 'desc'
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title'
  slug?: string | string[]
  status?: string | string[]
  categories?: number[]
  tags?: number[]
  _embed?: boolean
}

// Error Response
export interface WPErrorResponse {
  code: string
  message: string
  data: {
    status: number
  }
}
