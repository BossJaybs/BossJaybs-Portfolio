import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bossjaybs-portfolio.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },

    host: baseUrl,
    sitemap: baseUrl + '/sitemap.xml',
  }
}
