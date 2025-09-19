import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pest Control In Mumbai | #1 Professional Pest Control Services | Super Pest Control",
  description: "Best Pest Control In Mumbai ✓ 24/7 Service ✓ Licensed Experts ✓ Eco-Friendly Solutions ✓ Termite, Cockroach, Rodent Control ✓ Free Inspection ✓ Call +91-98765-43210",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  keywords: "pest control in mumbai, pest control mumbai, best pest control mumbai, professional pest control services mumbai, termite control mumbai, cockroach control mumbai, rodent control mumbai, mosquito control mumbai, pest management mumbai, fumigation services mumbai, eco friendly pest control mumbai, licensed pest control mumbai, emergency pest control mumbai, residential pest control mumbai, commercial pest control mumbai, affordable pest control mumbai, pest control near me mumbai, pest control services south mumbai, pest control western suburbs mumbai, pest control central mumbai, pest control navi mumbai, pest exterminator mumbai, pest inspection mumbai, pest prevention mumbai",
  authors: [{ name: "Super Pest Control Mumbai" }],
  creator: "Super Pest Control Mumbai",
  publisher: "Super Pest Control Mumbai",
  category: "Business",
  classification: "Pest Control Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Pest Control In Mumbai | #1 Professional Pest Control Services",
    description: "Best Pest Control In Mumbai ✓ 24/7 Service ✓ Licensed Experts ✓ Eco-Friendly Solutions ✓ Free Inspection ✓ Call +91-98765-43210",
    url: "https://superpestcontrol.vercel.app",
    siteName: "Super Pest Control Mumbai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control In Mumbai - Super Pest Control Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control In Mumbai | #1 Professional Pest Control Services",
    description: "Best Pest Control In Mumbai ✓ 24/7 Service ✓ Licensed Experts ✓ Eco-Friendly Solutions ✓ Free Inspection",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://superpestcontrol.vercel.app",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Super Pest Control Mumbai",
              "description": "Best Pest Control In Mumbai - Professional pest control services including termite control, cockroach treatment, rodent control, and mosquito control.",
              "url": "https://superpestcontrol.vercel.app",
              "telephone": "+91-98765-43210",
              "email": "info@superpestcontrolmumbai.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mumbai",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Mumbai"
                },
                {
                  "@type": "City", 
                  "name": "South Mumbai"
                },
                {
                  "@type": "City",
                  "name": "Central Mumbai"
                },
                {
                  "@type": "City",
                  "name": "Western Suburbs"
                },
                {
                  "@type": "City",
                  "name": "Navi Mumbai"
                }
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/superpestcontrolmumbai",
                "https://www.instagram.com/superpestcontrolmumbai",
                "https://twitter.com/superpestmumbai"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pest Control Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Termite Control in Mumbai",
                      "description": "Professional termite control and treatment services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cockroach Control in Mumbai",
                      "description": "Effective cockroach elimination and prevention"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rodent Control in Mumbai",
                      "description": "Complete rodent control and prevention solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mosquito Control in Mumbai",
                      "description": "Professional mosquito control services"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
