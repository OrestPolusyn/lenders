export const GET = async () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      message: 'SSR is working!',
      timestamp: new Date().toISOString(),
      env: {
        hasWordPressUrl: !!import.meta.env.PUBLIC_WORDPRESS_URL,
        hasWordPressApiUrl: !!import.meta.env.PUBLIC_WORDPRESS_API_URL,
        wordpressUrl: import.meta.env.PUBLIC_WORDPRESS_URL || 'NOT_SET',
        isProd: import.meta.env.PROD,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
