import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://superpestcontrol.in'
  const currentDate = new Date()
  
  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const, // Home page gets daily updates for fast indexing
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Increased priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const, // Services page gets daily updates
      priority: 0.95, // High priority for main services
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Increased priority
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Increased priority
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const, // More frequent updates
      priority: 0.8, // Increased priority
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Service pages
  const servicePages = [
    'termites-control-mumbai',
    'cockroach-control-mumbai',
    'rodents-control-mumbai',
    'bed-bug-control-mumbai',
    'ant-control-mumbai',
    'mosquitoes-control-mumbai',
    'spider-control-mumbai',
    'lizard-control-mumbai',
    'fly-control-mumbai',
    'bees-control-mumbai',
    'wood-borer-control-mumbai',
    'ticks-control-mumbai',
    'silverfish-control-mumbai',
    'commercial-pest-control-mumbai',
    'residential-pest-control-mumbai',
    'commercial-fumigation-mumbai',
    'flying-insect-management-mumbai',
  ].map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const, // More frequent for service pages
    priority: 0.85, // Higher priority for service pages
  }))

  // City-wide service pages
  const cityServicePages = [
    'pest-control-mumbai',
    'pest-control-pune', 
    'pest-control-navi-mumbai',
    'pest-control-pcmc',
  ].map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const, // Daily updates for city pages
    priority: 0.92, // Very high priority for city service pages
  }))

  // Location pages - Mumbai Areas
  const mumbaiLocations = [
    // South Mumbai
    'pest-control-in-colaba',
    'pest-control-in-fort',
    'pest-control-in-worli',
    'pest-control-in-lower-parel',
    'pest-control-in-parel',
    
    // Central Mumbai
    'pest-control-in-dadar',
    'pest-control-in-matunga',
    'pest-control-in-mahim',
    'pest-control-in-shivaji-park',
    'pest-control-in-byculla',
    'pest-control-in-sion',
    'pest-control-in-wadala',
    'pest-control-in-dharavi',
    'pest-control-in-bandra',
    'pest-control-in-khar',
    'pest-control-in-santacruz',
    'pest-control-in-bandra-kurla-complex',
    
    // Western Suburbs
    'pest-control-in-andheri',
    'pest-control-in-andheri-west',
    'pest-control-in-juhu',
    'pest-control-in-vile-parle',
    'pest-control-in-jogeshwari',
    'pest-control-in-goregaon',
    'pest-control-in-malad',
    'pest-control-in-kandivali',
    'pest-control-in-borivali',
    'pest-control-in-dahisar',
    'pest-control-in-versova',
    'pest-control-in-lokhandwala',
    'pest-control-in-oshiwara',
    
    // Eastern Suburbs
    'pest-control-in-chembur',
    'pest-control-in-ghatkopar',
    'pest-control-in-kurla',
    'pest-control-in-powai',
    'pest-control-in-vikhroli',
    'pest-control-in-kanjurmarg',
    'pest-control-in-bhandup',
    'pest-control-in-mulund',
    'pest-control-in-nahur',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const, // More frequent for Mumbai location pages
    priority: 0.75, // Higher priority for Mumbai locations
  }))

  // Navi Mumbai locations
  const naviMumbaiLocations = [
    'pest-control-in-vashi',
    'pest-control-in-nerul',
    'pest-control-in-cbd-belapur',
    'pest-control-in-airoli',
    'pest-control-in-ghansoli',
    'pest-control-in-kopar-khairane',
    'pest-control-in-turbhe',
    'pest-control-in-rabale',
    'pest-control-in-juinagar',
    'pest-control-in-sanpada',
    'pest-control-in-seawoods',
    'pest-control-in-kharghar',
    'pest-control-in-kamothe',
    'pest-control-in-kalamboli',
    'pest-control-in-panvel',
    'pest-control-in-urse',
    'pest-control-in-new-panvel',
    'pest-control-in-dronagiri',
    'pest-control-in-ulwe',
    'pest-control-in-taloja',
    'pest-control-in-mahape',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Thane region locations
  const thaneLocations = [
    'pest-control-in-thane',
    'pest-control-in-kalyan',
    'pest-control-in-dombivli',
    'pest-control-in-ulhasnagar',
    'pest-control-in-ambarnath',
    'pest-control-in-badlapur',
    'pest-control-in-karjat',
    'pest-control-in-mumbra',
    'pest-control-in-bhiwandi',
    'pest-control-in-diva',
    'pest-control-in-ghodbunder-road',
    'pest-control-in-manor',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Extended Mumbai region
  const extendedLocations = [
    'pest-control-in-vasai',
    'pest-control-in-mira-road',
    'pest-control-in-bhayander',
    'pest-control-in-boisar',
    'pest-control-in-virar',
    'pest-control-in-nalasopara',
    'pest-control-in-naigaon',
    'pest-control-in-mira-bhayandar',
    'pest-control-in-digha',
    'pest-control-in-darave',
    'pest-control-in-shirvane',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Pune region locations
  const puneLocations = [
    'pest-control-in-pune',
    'pest-control-in-hinjewadi',
    'pest-control-in-baner',
    'pest-control-in-aundh',
    'pest-control-in-wakad',
    'pest-control-in-hadapsar',
    'pest-control-in-viman-nagar',
    'pest-control-in-bavdhan',
    'pest-control-in-kharadi',
    'pest-control-in-ambegaon',
    'pest-control-in-fatima-nagar',
    'pest-control-in-karve-nagar',
    'pest-control-in-keshav-nagar',
    'pest-control-in-koregaon-park',
    'pest-control-in-kothrud',
    'pest-control-in-lohegaon',
    'pest-control-in-mundhwa',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Maharashtra cities locations
  const maharashtraLocations = [
    'pest-control-in-aurangabad',
    'pest-control-in-nashik',
    'pest-control-in-ahmednagar',
    'pest-control-in-solapur',
    'pest-control-in-kolhapur',
    'pest-control-in-sangli',
    'pest-control-in-satara',
    'pest-control-in-alibag',
  ].map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all pages
  return [
    ...corePages,
    ...servicePages,
    ...cityServicePages,
    ...mumbaiLocations,
    ...naviMumbaiLocations,
    ...thaneLocations,
    ...extendedLocations,
    ...puneLocations,
    ...maharashtraLocations,
  ]
}
