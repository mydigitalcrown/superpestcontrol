import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 1, // Standard crawl delay - compatible with all crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        // Google ignores crawl-delay, so we'll remove it for cleaner robots.txt
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        // Google ignores crawl-delay, so we'll remove it for cleaner robots.txt
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        // Google ignores crawl-delay, so we'll remove it for cleaner robots.txt
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://superpestcontrol.in/sitemap.xml',
    host: 'https://superpestcontrol.in',
  }
}
