import {
  getAllPosts,
  getCategories,
  getFeaturedImageUrl,
} from '@/lib/wordpress'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1')
  const perPage = parseInt(url.searchParams.get('per_page') || '6')

  try {
    const posts = await getAllPosts({
      page,
      per_page: perPage,
      _embed: true,
    })

    const formattedPosts = posts.map(post => {
      const categories = getCategories(post)
      const featuredImage = getFeaturedImageUrl(post, 'medium')

      return {
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
        date: post.date,
        slug: post.slug,
        image: featuredImage || '/images/news/default-post.jpg',
        category: categories[0]?.name || 'Uncategorized',
      }
    })

    return new Response(
      JSON.stringify({
        posts: formattedPosts,
        hasMore: posts.length === perPage,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching posts:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch posts',
        posts: [],
        hasMore: false,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
