import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Super Pest Control Mumbai',
    default: "Pest Control in Mumbai | 24/7 Service | #1 Pest Control Services Mumbai",
  },
  description: "Professional Pest Control in Mumbai ✅ Termite Control ✅ Cockroach ✅ Rodent ✅ Bed Bug Control ⚡ Same Day Service 🛡️ 5 Year Warranty 📞 +91-80979-41077 💯 Licensed & Certified Pest Control Services in Mumbai",
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
  manifest: '/manifest.json',
  keywords: "pest control mumbai, best pest control in mumbai, professional pest control services mumbai, termite control mumbai, cockroach control mumbai, rodent control mumbai, bed bug control mumbai, ant control mumbai, mosquito control mumbai, spider control mumbai, lizard control mumbai, pest management mumbai, fumigation services mumbai, eco friendly pest control mumbai, licensed pest control mumbai, emergency pest control mumbai 24/7, residential pest control mumbai, commercial pest control mumbai, affordable pest control mumbai, pest control near me mumbai, pest control services south mumbai, pest control western suburbs mumbai, pest control central mumbai, pest control navi mumbai, thane pest control, pest exterminator mumbai, pest inspection mumbai free, pest prevention mumbai, flying insect control mumbai, silverfish control mumbai, wood borer control mumbai, tick control mumbai, bee control mumbai, fly control mumbai, commercial fumigation mumbai, pest control cost mumbai, pest control price mumbai, home pest control mumbai, office pest control mumbai, restaurant pest control mumbai, warehouse pest control mumbai, mumbai pest control company, super pest control mumbai contact number, quick pest control mumbai, instant pest control mumbai, mumbai best pest control service, mumbai professional pest control, mumbai licensed pest control, mumbai certified pest control, mumbai eco-friendly pest control, mumbai safe pest control, mumbai family safe pest control, mumbai pet safe pest control, mumbai organic pest control, mumbai chemical free pest control, mumbai herbal pest control",
  authors: [{ name: "Super Pest Control Mumbai" }],
  creator: "Super Pest Control Mumbai",
  publisher: "Super Pest Control Mumbai",
  category: "Local Business",
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
    title: "Pest Control in Mumbai | Professional Pest Control Services | Super Pest Control",
    description: "Best Pest Control in Mumbai ⚡ 24/7 Service 🛡️ 5 Year Warranty 📞 +91-80979-41077 ✅ Licensed Pest Control Services in Mumbai | Termite, Cockroach, Rodent Control",
    url: "https://superpestcontrol.in",
    siteName: "Super Pest Control Mumbai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Super Pest Control Mumbai - Best Pest Control Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control in Mumbai | 24/7 Professional Pest Control Services",
    description: "Best Pest Control in Mumbai ⚡ Same Day Service 🛡️ 5 Year Warranty 📞 +91-80979-41077 ✅ Licensed & Certified Pest Control Services",
    images: ["/android-chrome-512x512.png"],
    creator: "@superpestmumbai",
    site: "@superpestmumbai",
  },
  verification: {
    google: "m7hqzhyfnSeyxn5ICqNLiUiFf67yiB59QYmI3oJ1a98",
    yandex: "pest-control-mumbai-yandex",
  },
  alternates: {
    canonical: "https://superpestcontrol.in",
    languages: {
      'x-default': 'https://superpestcontrol.in',
      'en-IN': 'https://superpestcontrol.in',
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    "rating": "4.9",
    "price": "₹1500-₹5000",
    "availability": "24/7",
    "service-area": "Mumbai, Navi Mumbai, Thane",
    "established": "2014",
    "license": "Government Licensed",
    "certification": "ISO Certified",
    "warranty": "Up to 5 Years",
    "experience": "10+ Years",
    "customers": "500+ Happy Customers",
    "emergency": "24/7 Emergency Service",
    "eco-friendly": "Yes",
    "family-safe": "Yes",
    "pet-safe": "Yes",
    "inspection": "Free",
    "consultation": "Free",
    "estimate": "Free",
    "contact": "+91-80979-41077",
    "email": "superpestcontrol8858@gmail.com",
    "website": "superpestcontrol.in",
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
        <meta name="google-site-verification" content="m7hqzhyfnSeyxn5ICqNLiUiFf67yiB59QYmI3oJ1a98" />
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
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://superpestcontrol.in/#business",
                  "name": "Super Pest Control Mumbai",
                  "description": "🏆 Best Pest Control In Mumbai - Professional pest control services including termite control, cockroach treatment, rodent control, bed bug control, and all pest management solutions. Licensed, certified, and eco-friendly.",
                  "url": "https://superpestcontrol.in",
                  "telephone": ["+91-80979-41077", "+91-80979-41076"],
                  "email": "superpestcontrol8858@gmail.com",
                  "logo": "https://superpestcontrol.in/android-chrome-512x512.png",
                  "image": [
                    "https://superpestcontrol.in/android-chrome-512x512.png",
                    "https://superpestcontrol.in/android-chrome-192x192.png"
                  ],
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
                      "name": "Mumbai",
                      "alternateName": ["Bombay"]
                    },
                    {
                      "@type": "City", 
                      "name": "South Mumbai",
                      "alternateName": ["SoBo"]
                    },
                    {
                      "@type": "City",
                      "name": "Central Mumbai",
                      "alternateName": ["Central Line"]
                    },
                    {
                      "@type": "City",
                      "name": "Western Suburbs",
                      "alternateName": ["Western Line"]
                    },
                    {
                      "@type": "City",
                      "name": "Navi Mumbai",
                      "alternateName": ["New Mumbai"]
                    },
                    {
                      "@type": "City",
                      "name": "Thane"
                    }
                  ],
                  "openingHours": "Mo-Su 00:00-23:59",
                  "priceRange": "₹₹",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "UPI", "Digital Wallet"],
                  "sameAs": [
                    "https://www.facebook.com/superpestcontrolmumbai",
                    "https://www.instagram.com/superpestcontrolmumbai",
                    "https://twitter.com/superpestmumbai",
                    "https://www.linkedin.com/company/super-pest-control-mumbai",
                    "https://www.youtube.com/channel/superpestcontrolmumbai",
                    "https://in.pinterest.com/superpestcontrolmumbai",
                    "https://superpestcontrol.in"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Pest Control Services Mumbai",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Termite Control Mumbai",
                          "description": "Professional anti-termite treatment with 5-year warranty",
                          "provider": "Super Pest Control Mumbai",
                          "areaServed": "Mumbai"
                        },
                        "price": "₹2500",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Cockroach Control Mumbai",
                          "description": "Effective cockroach elimination using gel baiting and spray treatment",
                          "provider": "Super Pest Control Mumbai",
                          "areaServed": "Mumbai"
                        },
                        "price": "₹1500",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Rodent Control Mumbai",
                          "description": "Complete rat and mouse control with professional rat-proofing",
                          "provider": "Super Pest Control Mumbai",
                          "areaServed": "Mumbai"
                        },
                        "price": "₹2000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Bed Bug Control Mumbai",
                          "description": "Advanced bed bug treatment for homes and hotels",
                          "provider": "Super Pest Control Mumbai",
                          "areaServed": "Mumbai"
                        },
                        "price": "₹3000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Commercial Pest Control Mumbai",
                          "description": "Professional pest control for offices, restaurants, and commercial spaces",
                          "provider": "Super Pest Control Mumbai",
                          "areaServed": "Mumbai"
                        },
                        "price": "₹5000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock"
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "500",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Rajesh Kumar"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                      "reviewBody": "Excellent termite control service! Professional team and effective treatment. Highly recommended for pest control in Mumbai."
                    },
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Priya Sharma"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                      "reviewBody": "Best pest control service in Mumbai. Quick response, eco-friendly solutions, and professional staff. Very satisfied!"
                    }
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Super Pest Control Mumbai Team"
                  },
                  "foundingDate": "2014",
                  "employee": [
                    {
                      "@type": "Person",
                      "name": "Certified Pest Control Technician",
                      "jobTitle": "Senior Pest Control Expert"
                    }
                  ],
                  "award": [
                    "Best Pest Control Service Mumbai 2024",
                    "Customer Choice Award",
                    "Excellence in Service Award"
                  ],
                  "accreditation": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Government License",
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Government of Maharashtra"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential", 
                      "credentialCategory": "ISO Certification",
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "International Organization for Standardization"
                      }
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://superpestcontrol.in/#website",
                  "url": "https://superpestcontrol.in",
                  "name": "Super Pest Control Mumbai",
                  "description": "Best Pest Control In Mumbai - Professional pest control services with 10+ years experience",
                  "inLanguage": "en-IN",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": "https://superpestcontrol.in/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://superpestcontrol.in/#organization",
                  "name": "Super Pest Control Mumbai",
                  "url": "https://superpestcontrol.in",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://superpestcontrol.in/android-chrome-512x512.png",
                    "width": 512,
                    "height": 512
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-80979-41077",
                      "contactType": "customer service",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Hindi", "Marathi"]
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-80979-41076",
                      "contactType": "emergency",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Hindi", "Marathi"]
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                  }
                }
              ]
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
