import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URL normalization - remove trailing slashes
  trailingSlash: false,
  // PageSpeed optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // HTML to Next.js redirects
  async redirects() {
    return [
      // Language redirects - redirect unsupported language routes to main pages
      {
        source: '/hi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mr', 
        destination: '/',
        permanent: true,
      },
      {
        source: '/hi/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/mr/:path*',
        destination: '/:path*', 
        permanent: true,
      },
      
      // Main pages
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/commercial.html',
        destination: '/commercial',
        permanent: true,
      },

      // Service pages
      {
        source: '/ant-control-mumbai.html',
        destination: '/ant-control-mumbai',
        permanent: true,
      },
      {
        source: '/bed-bug-control-mumbai.html',
        destination: '/bed-bug-control-mumbai',
        permanent: true,
      },
      {
        source: '/bees-control-mumbai.html',
        destination: '/bees-control-mumbai',
        permanent: true,
      },
      {
        source: '/cockroach-control-mumbai.html',
        destination: '/cockroach-control-mumbai',
        permanent: true,
      },
      {
        source: '/commercial-fumigation-mumbai.html',
        destination: '/commercial-fumigation-mumbai',
        permanent: true,
      },
      {
        source: '/commercial-pest-control-mumbai.html',
        destination: '/commercial-pest-control-mumbai',
        permanent: true,
      },
      {
        source: '/fly-control-mumbai.html',
        destination: '/fly-control-mumbai',
        permanent: true,
      },
      {
        source: '/flying-insect-management-mumbai.html',
        destination: '/flying-insect-management-mumbai',
        permanent: true,
      },
      {
        source: '/lizard-control-mumbai.html',
        destination: '/lizard-control-mumbai',
        permanent: true,
      },
      {
        source: '/mosquitoes-control-mumbai.html',
        destination: '/mosquitoes-control-mumbai',
        permanent: true,
      },
      {
        source: '/termites-control-mumbai.html',
        destination: '/termites-control-mumbai',
        permanent: true,
      },
      {
        source: '/rodents-control-mumbai.html',
        destination: '/rodents-control-mumbai',
        permanent: true,
      },
      {
        source: '/spider-control-mumbai.html',
        destination: '/spider-control-mumbai',
        permanent: true,
      },
      {
        source: '/wood-borer-control-mumbai.html',
        destination: '/wood-borer-control-mumbai',
        permanent: true,
      },
      {
        source: '/silverfish-control-mumbai.html',
        destination: '/silverfish-control-mumbai',
        permanent: true,
      },
      {
        source: '/residential-pest-control-mumbai.html',
        destination: '/residential-pest-control-mumbai',
        permanent: true,
      },

      // Location pages
      {
        source: '/pest-control-airoli.html',
        destination: '/pest-control-airoli',
        permanent: true,
      },
      {
        source: '/pest-control-aundh.html',
        destination: '/pest-control-aundh',
        permanent: true,
      },
      {
        source: '/pest-control-baner.html',
        destination: '/pest-control-baner',
        permanent: true,
      },
      {
        source: '/pest-control-belapur.html',
        destination: '/pest-control-belapur',
        permanent: true,
      },
      {
        source: '/pest-control-bhayander.html',
        destination: '/pest-control-bhayander',
        permanent: true,
      },
      {
        source: '/pest-control-boisar.html',
        destination: '/pest-control-in-boisar',
        permanent: true,
      },
      {
        source: '/pest-control-ghansoli.html',
        destination: '/pest-control-ghansoli',
        permanent: true,
      },
      {
        source: '/pest-control-hadapsar.html',
        destination: '/pest-control-hadapsar',
        permanent: true,
      },
      {
        source: '/pest-control-hinjewadi.html',
        destination: '/pest-control-hinjewadi',
        permanent: true,
      },
      {
        source: '/pest-control-in-ahmednagar.html',
        destination: '/pest-control-in-ahmednagar',
        permanent: true,
      },
      {
        source: '/pest-control-in-alibag.html',
        destination: '/pest-control-in-alibag',
        permanent: true,
      },
      {
        source: '/pest-control-in-ambarnath.html',
        destination: '/pest-control-in-ambarnath',
        permanent: true,
      },
      {
        source: '/pest-control-in-ambegaon.html',
        destination: '/pest-control-in-ambegaon',
        permanent: true,
      },
      {
        source: '/pest-control-in-andheri.html',
        destination: '/pest-control-in-andheri',
        permanent: true,
      },
      {
        source: '/pest-control-in-andheri-west.html',
        destination: '/pest-control-in-andheri-west',
        permanent: true,
      },
      {
        source: '/pest-control-in-aurangabad.html',
        destination: '/pest-control-in-aurangabad',
        permanent: true,
      },
      {
        source: '/pest-control-in-badlapur.html',
        destination: '/pest-control-in-badlapur',
        permanent: true,
      },
      {
        source: '/pest-control-in-bandra.html',
        destination: '/pest-control-in-bandra',
        permanent: true,
      },
      {
        source: '/pest-control-in-bandra-kurla-complex.html',
        destination: '/pest-control-in-bandra-kurla-complex',
        permanent: true,
      },
      {
        source: '/pest-control-in-bavdhan.html',
        destination: '/pest-control-in-bavdhan',
        permanent: true,
      },
      {
        source: '/pest-control-in-bhandup.html',
        destination: '/pest-control-in-bhandup',
        permanent: true,
      },
      {
        source: '/pest-control-in-bhiwandi.html',
        destination: '/pest-control-in-bhiwandi',
        permanent: true,
      },
      {
        source: '/pest-control-in-borivali.html',
        destination: '/pest-control-in-borivali',
        permanent: true,
      },
      {
        source: '/pest-control-in-byculla.html',
        destination: '/pest-control-in-byculla',
        permanent: true,
      },
      {
        source: '/pest-control-in-cbd-belapur.html',
        destination: '/pest-control-in-cbd-belapur',
        permanent: true,
      },
      {
        source: '/pest-control-in-chembur.html',
        destination: '/pest-control-in-chembur',
        permanent: true,
      },
      {
        source: '/pest-control-in-colaba.html',
        destination: '/pest-control-in-colaba',
        permanent: true,
      },
      {
        source: '/pest-control-in-dadar.html',
        destination: '/pest-control-in-dadar',
        permanent: true,
      },
      {
        source: '/pest-control-in-dahisar.html',
        destination: '/pest-control-in-dahisar',
        permanent: true,
      },
      {
        source: '/pest-control-in-darave.html',
        destination: '/pest-control-in-darave',
        permanent: true,
      },
      {
        source: '/pest-control-in-dharavi.html',
        destination: '/pest-control-in-dharavi',
        permanent: true,
      },
      {
        source: '/pest-control-in-digha.html',
        destination: '/pest-control-in-digha',
        permanent: true,
      },
      {
        source: '/pest-control-in-diva.html',
        destination: '/pest-control-in-diva',
        permanent: true,
      },
      {
        source: '/pest-control-in-dombivli.html',
        destination: '/pest-control-in-dombivli',
        permanent: true,
      },
      
      // Spelling variation redirects
      {
        source: '/pest-control-in-dombivali',
        destination: '/pest-control-in-dombivli',
        permanent: true,
      },
      {
        source: '/pest-control-in-dronagiri.html',
        destination: '/pest-control-in-dronagiri',
        permanent: true,
      },
      {
        source: '/pest-control-in-fort.html',
        destination: '/pest-control-in-fort',
        permanent: true,
      },
      {
        source: '/pest-control-in-ghatkopar.html',
        destination: '/pest-control-in-ghatkopar',
        permanent: true,
      },
      {
        source: '/pest-control-in-ghodbunder-road.html',
        destination: '/pest-control-in-ghodbunder-road',
        permanent: true,
      },
      {
        source: '/pest-control-in-goregaon.html',
        destination: '/pest-control-in-goregaon',
        permanent: true,
      },

      // Catch-all for any other .html files
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  // Standard Vercel deployment configuration
};

export default nextConfig;
