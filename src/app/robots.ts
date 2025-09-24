import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.5, // Reduced crawl delay for faster indexing
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.2, // Aggressive crawling for Google - faster indexing
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.2,
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.1,
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/.well-known/'],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 0.3,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 0.3,
      },
    ],
    sitemap: 'https://superpestcontrol.in/sitemap.xml',
    host: 'https://superpestcontrol.in',
  }
}
