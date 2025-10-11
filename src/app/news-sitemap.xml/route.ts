import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://superpestcontrol.in'
  const currentDate = new Date().toISOString()
  
  // High-priority pages for news-style indexing
  const newsItems = [
    { url: `${baseUrl}/pest-control-mumbai`, priority: '1.0' },
    { url: `${baseUrl}/termites-control-mumbai`, priority: '0.9' },
    { url: `${baseUrl}/cockroach-control-mumbai`, priority: '0.9' },
    { url: `${baseUrl}/bed-bug-control-mumbai`, priority: '0.9' },
    { url: `${baseUrl}/pest-control-pune`, priority: '0.85' },
    { url: `${baseUrl}/pest-control-navi-mumbai`, priority: '0.85' },
    { url: `${baseUrl}/pest-control-in-andheri`, priority: '0.8' },
    { url: `${baseUrl}/pest-control-in-borivali`, priority: '0.8' },
    { url: `${baseUrl}/pest-control-in-thane`, priority: '0.8' },
    { url: `${baseUrl}/pest-control-in-powai`, priority: '0.8' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate'
    }
  })
}
