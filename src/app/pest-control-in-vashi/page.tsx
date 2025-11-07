'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PestControlInVashi() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Comprehensive Schema Markup for Maximum SEO, ASO & VSO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://superpestcontrol.in/pest-control-in-vashi#localbusiness",
                "name": "Super Pest Control - Vashi",
                "image": "https://superpestcontrol.in/images/pest-control-vashi-hero.jpg",
                "description": "Professional Pest Control Services in Vashi, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results.",
                "url": "https://superpestcontrol.in/pest-control-in-vashi",
                "telephone": "+91-8097941077",
                "email": "info@superpestcontrol.in",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vashi Service Area",
                  "addressLocality": "Vashi",
                  "addressRegion": "Navi Mumbai, Maharashtra",
                  "postalCode": "400703",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.0330,
                  "longitude": 73.0297
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "07:00",
                  "closes": "21:00"
                },
                "priceRange": "?500 - ?5000",
                "areaServed": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.0330,
                    "longitude": 73.0297
                  },
                  "geoRadius": "15000"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "847",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Pest Control Services in Vashi",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Termite Control in Vashi",
                        "description": "Professional anti-termite treatment with 5-year warranty"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cockroach Control in Vashi",
                        "description": "Complete cockroach elimination with gel baiting technique"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "Service",
                "@id": "https://superpestcontrol.in/pest-control-in-vashi#service",
                "name": "Pest Control Services in Vashi",
                "description": "Comprehensive pest control solutions including termite control, cockroach treatment, bed bug removal, rodent control, and more in Vashi, Navi Mumbai.",
                "provider": {
                  "@id": "https://superpestcontrol.in/pest-control-in-vashi#localbusiness"
                },
                "serviceType": "Pest Control",
                "areaServed": {
                  "@type": "City",
                  "name": "Vashi",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Maharashtra"
                  }
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Pest Control Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Termite Control",
                        "description": "Complete termite treatment with warranty"
                      },
                      "price": "?1500-?5000",
                      "priceCurrency": "INR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cockroach Control",
                        "description": "Professional cockroach extermination"
                      },
                      "price": "?800-?2000",
                      "priceCurrency": "INR"
                    }
                  ]
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://superpestcontrol.in/pest-control-in-vashi#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://superpestcontrol.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://superpestcontrol.in/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Pest Control in Vashi",
                    "item": "https://superpestcontrol.in/pest-control-in-vashi"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://superpestcontrol.in/pest-control-in-vashi#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the cost of pest control in Vashi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The cost of pest control in Vashi ranges from ?500 to ?5000 depending on the type of treatment, property size, and infestation level. We provide free inspection and customized quotes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does pest control treatment last in Vashi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our pest control treatments in Vashi typically last 6-12 months for general pests, while termite treatments come with a 5-year warranty. Regular maintenance ensures long-lasting protection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is pest control safe for children and pets in Vashi homes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we use child and pet-safe pest control methods in Vashi. Our eco-friendly treatments are WHO-approved and pose no harm to your family or pets when applied by our certified technicians."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide emergency pest control services in Vashi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we provide 24/7 emergency pest control services in Vashi. Call +91-8097941077 for immediate assistance with severe infestations."
                    }
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://superpestcontrol.in/#organization",
                "name": "Super Pest Control",
                "url": "https://superpestcontrol.in/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://superpestcontrol.in/images/logo.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8097941077",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                },
                "sameAs": [
                  "https://www.facebook.com/superpestcontrol",
                  "https://www.instagram.com/superpestcontrol",
                  "https://twitter.com/superpestcontrol"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://superpestcontrol.in/#website",
                "url": "https://superpestcontrol.in/",
                "name": "Super Pest Control",
                "description": "Professional Pest Control Services in Vashi, Navi Mumbai",
                "publisher": {
                  "@id": "https://superpestcontrol.in/#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://superpestcontrol.in/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Ultra Modern E10-Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Premium Logo - Mobile Responsive */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Vashi&apos;s #1 Choice</span>
              </div>
            </Link>
            
            {/* Modern E10-Style Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-50/70 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/about" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/commercial" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Commercial</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/residential" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Residential</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/contact" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button & CTA */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a href="tel:+918097941077" className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300" aria-label="Call Now">
                <span className="text-white text-lg">📞</span>
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-all duration-300"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Premium CTA Group - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+918097941077" className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 bg-gray-100/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 border border-gray-200/50 hover:border-blue-200/50">
                <span className="text-green-500 text-base">📞</span>
                <span>+91 80979-41077</span>
              </a>
              <Link href="/contact" className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 transform group">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Menu */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-4 space-y-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">About Us</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">Services</Link>
            <Link href="/commercial" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">Commercial</Link>
            <Link href="/residential" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">Residential</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">Contact</Link>
            <div className="pt-3 border-t border-gray-200/50">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-center">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Modern SaaS Hero Section with Vashi Background */}
      <section 
        className="pt-20 md:pt-32 pb-16 md:pb-32 relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/location/mumbai.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-orange-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              #1 Rated Pest Control in Vashi - Professional Services Since 2014
            </div>
            
            {/* Main Headline - Zero Ranking Keyword Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Pest Control in Vashi
              </span>
              <br />
              <span className="text-white">| Fast, Safe & Reliable</span>
            </h1>
            
            {/* Secondary Keyword Heading */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
                Professional Pest Control in Vashi - 100% Guaranteed Results
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-orange-200 drop-shadow-md">
                Best Pest Control Services in Vashi | Same Day Treatment Available
              </h3>
            </div>
            
            {/* Subheadline - VSO Optimized */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Looking for professional pest control services in Vashi, Navi Mumbai? We are the top-rated pest control company near you, serving Vashi East, Sector 1, Sector 2, Sector 3, Sector 4, Sector 5, Sector 6, Sector 7, Sector 8, Sector 9, Sector 10, Sector 11, Sector 12, Sector 13, Sector 14, Sector 15, Sector 16, Sector 17, Sector 18, Sector 19, Sector 20, Sector 21, Sector 22, Sector 23, Sector 24, Sector 25, Sector 26, Sector 27, Sector 28, Kopar Khairane, Turbhe, Sanpada, Ghansoli, Juinagar and surrounding areas. Providing same-day service, guaranteed results, and eco-friendly treatments for all types of pest problems in Vashi area.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Inspection
              </a>
              <a href="tel:+918097941077" className="border border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all text-center">
                🐛 Call: +91 80979-41077
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">10+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">500+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">4.9?</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASO Optimized Question-Answer Section for Featured Snippets */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main ASO Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Pest Control in Vashi
              </span>
              <br />
              <span className="text-gray-800">Everything You Need to Know</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers to all your pest control questions for Vashi. Professional solutions with guaranteed results.
            </p>
          </div>

          {/* Featured Snippet Optimized Q&A Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Question 1 - Cost */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</span>
                What does pest control cost in Vashi?
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Pest control in Vashi costs ?500-?5000</strong> depending on property size and pest type. 
                  <span className="block mt-2">� Cockroach control: ?800-?1500</span>
                  <span className="block">� Termite treatment: ?1500-?5000</span>
                  <span className="block">� Bed bug control: ?1200-?2500</span>
                  <span className="block">� General pest control: ?500-?1500</span>
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 font-medium">? Free inspection included � 100% guaranteed results</p>
                </div>
              </div>
            </div>

            {/* Question 2 - Best Service */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</span>
                Which is the best pest control service in Vashi?
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Super Pest Control is the #1 rated service in Vashi</strong> with 4.9/5 stars and 847+ reviews.
                  <span className="block mt-2">� 10+ years of experience in Vashi</span>
                  <span className="block">� WHO-approved safe chemicals</span>
                  <span className="block">� Same-day service available</span>
                  <span className="block">� 5-year warranty on termite treatment</span>
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 font-medium">🐛 Vashi&apos;s most trusted pest control company</p>
                </div>
              </div>
            </div>

            {/* Question 3 - How long */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</span>
                How long does pest control last in Vashi?
              </h3>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Pest control treatments in Vashi last 6-12 months</strong> for general pests, with termite treatment lasting up to 5 years.
                  <span className="block mt-2">� General pest control: 6-12 months</span>
                  <span className="block">� Termite treatment: 5 years warranty</span>
                  <span className="block">� Cockroach control: 8-12 months</span>
                  <span className="block">� Bed bug treatment: 6-8 months</span>
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-700 font-medium">🐛 Free follow-up service included</p>
                </div>
              </div>
            </div>

            {/* Question 4 - Safe for family */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</span>
                Is pest control safe for children and pets in Vashi?
              </h3>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border-l-4 border-teal-500">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Yes, our pest control in Vashi is 100% safe for families and pets.</strong> We use WHO-approved, eco-friendly chemicals.
                  <span className="block mt-2">� Non-toxic to humans and pets</span>
                  <span className="block">� Odorless treatment options available</span>
                  <span className="block">� Child-safe application methods</span>
                  <span className="block">� No need to vacate during treatment</span>
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-teal-200">
                  <p className="text-sm text-teal-700 font-medium">🐛 Family-friendly � Pet-safe certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Search Optimized Questions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Voice Search Answers for Vashi Pest Control
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🐛? &ldquo;Hey Google, pest control near me in Vashi&rdquo;</h4>
                <p className="text-gray-700">Super Pest Control provides the best pest control services in Vashi, Navi Mumbai. Call +91-8097941077 for immediate service. Available 24/7.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-gray-50 to-green-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🐛? &ldquo;Alexa, best pest control company in Vashi&rdquo;</h4>
                <p className="text-gray-700">Super Pest Control is Vashi&apos;s #1 rated pest control company with 4.9-star reviews, 10+ years experience, and guaranteed results.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🐛? &ldquo;Siri, emergency pest control in Vashi&rdquo;</h4>
                <p className="text-gray-700">Get emergency pest control in Vashi within 2 hours. Call Super Pest Control at +91-8097941077 for immediate response to severe infestations.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🐛? &ldquo;OK Google, affordable pest control Vashi prices&rdquo;</h4>
                <p className="text-gray-700">Affordable pest control in Vashi starts from ?500. Get free quotes, inspection, and best prices guaranteed. No hidden charges.</p>
              </div>
            </div>
          </div>

          {/* Local SEO Optimized Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Pest Control in Vashi Right Now?</h3>
            <p className="text-xl mb-6 opacity-90">Get instant quote and same-day service in Vashi, Navi Mumbai</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+918097941077" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                🐛 Call +91-8097941077
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Get Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Complete Pest Control Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 text-sm font-semibold mb-6 border border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Professional Solutions for Every Pest Problem
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Our Complete
              </span>
              <br />
              <span className="text-gray-900">Pest Control Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional pest control solutions for every problem. All services include free inspection, eco-friendly treatments, and comprehensive warranties.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Termite Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                5 Year Warranty
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/termites-control-mumbai.webp" 
                  alt="Termite Control Vashi - Professional Anti-Termite Treatment"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Termite Control Vashi - Professional Anti-Termite Treatment</h3>
                <p className="text-gray-600 text-sm">Complete anti-termite treatment with pre & post-construction solutions. Advanced soil treatment, wood protection, and chemical barrier methods with 5-year comprehensive warranty.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?2,500</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Pre & Post Construction Treatment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Licensed Chemical Applications
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Cockroach Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Most Popular
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/cockroach-control-mumbai.webp" 
                  alt="Cockroach Control Vashi - Professional Cockroach Extermination"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cockroach Control Vashi - Professional Cockroach Extermination</h3>
                <p className="text-gray-600 text-sm">Advanced gel baiting and spray treatments for German cockroaches. Child-safe, pet-friendly solutions designed for Vashi&apos;s climate with long-lasting protection.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?1,500</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Gel Baiting & Spray Treatment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Child & Pet Safe Formulas
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Rodent Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Emergency Service
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/rodents-control-mumbai.webp" 
                  alt="Rodent Control Vashi - Professional Rat Mouse Control"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rodent Control Vashi - Professional Rat Mouse Control</h3>
                <p className="text-gray-600 text-sm">Complete rat and mouse elimination with professional rat-proofing, secure bait stations, and entry point sealing. Guaranteed results with follow-up visits.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?2,000</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Professional Rat-Proofing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Secure Bait Station Systems
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Bed Bug Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Heat Treatment
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/bed-bug-control-mumbai.webp" 
                  alt="Bed Bug Control Vashi - Professional Bed Bug Treatment"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bed Bug Control Vashi - Professional Bed Bug Treatment</h3>
                <p className="text-gray-600 text-sm">Advanced heat treatment and chemical solutions for bed bug elimination. Mattress treatment, furniture protection, and comprehensive room sanitization services.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?3,000</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Heat & Chemical Treatment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Mattress & Furniture Protection
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Ant Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Eco-Friendly
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/ant-control-mumbai.webp" 
                  alt="Ant Control Vashi - Professional Ant Extermination"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ant Control Vashi - Professional Ant Extermination</h3>
                <p className="text-gray-600 text-sm">Targeted ant colony elimination with eco-friendly baiting systems. Effective against all ant species including pharaoh ants, carpenter ants, and common household ants.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?1,200</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Colony Elimination System
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Eco-Friendly Baiting Solutions
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Mosquito Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Monsoon Special
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/mosquitoes-control-mumbai.webp" 
                  alt="Mosquito Control Vashi - Professional Mosquito Treatment"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mosquito Control Vashi - Professional Mosquito Treatment</h3>
                <p className="text-gray-600 text-sm">Comprehensive mosquito management with breeding source elimination, fogging treatments, and larvicide applications. Special monsoon protection packages available.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?1,800</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Breeding Source Elimination
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Fogging & Larvicide Treatment
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Spider Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Web Removal
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/spider-control-mumbai.webp" 
                  alt="Spider Control Vashi - Professional Spider Removal"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spider Control Vashi - Professional Spider Removal</h3>
                <p className="text-gray-600 text-sm">Professional spider removal with web elimination and preventive treatments. Safe removal of venomous spiders and comprehensive property protection from future infestations in Vashi properties.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?1,500</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Web Elimination & Removal
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Venomous Spider Safety Protocol
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Lizard Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Humane Removal
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/lizard-control-mumbai.webp" 
                  alt="Lizard Control Vashi - Professional Lizard Removal"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lizard Control Vashi - Professional Lizard Removal</h3>
                <p className="text-gray-600 text-sm">Humane lizard removal and exclusion services. Natural repellent treatments and entry point sealing to prevent lizards from entering your Vashi property.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?1,000</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Humane Removal Methods
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Natural Repellent Treatments
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Commercial Pest Control */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold z-10">
                Business Solutions
              </div>
              
              {/* Service Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src="/images/services/commercial-pest-control-mumbai.webp" 
                  alt="Commercial Pest Control Vashi - Professional Business Solutions"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Pest Control Vashi - Professional Business Solutions</h3>
                <p className="text-gray-600 text-sm">Comprehensive pest management for businesses, offices, restaurants, and commercial properties. Customized treatment plans with minimal business disruption and compliance documentation.</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">?5,000</span>
                  <p className="text-sm text-gray-500">Starting Price</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Customized Business Solutions
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Compliance Documentation
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105">
                Get Quote Now
              </button>
            </div>

            {/* Additional services can be added here if needed */}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-16">
            <a href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="mr-2">📞</span>
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Advanced SEO - Internal Linking & Semantic Keyword Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Semantic Keyword Hub */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 border border-blue-200 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Complete Pest Control Solutions Network
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Comprehensive Pest Management
              </span>
              <br />
              <span className="text-gray-800">Services in Vashi & Beyond</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our complete range of professional pest control services across Vashi, Navi Mumbai and surrounding areas. 
              Expert pest exterminators, advanced pest management solutions, and guaranteed pest elimination services.
            </p>
          </div>

          {/* Internal Links Grid - RankBrain Optimized */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Service-based Internal Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900">Specialized Pest Control</h3>
              </div>
              <div className="space-y-3">
                <Link href="/termites-control-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Termite Control Vashi - Anti-Termite Treatment
                </Link>
                <Link href="/cockroach-control-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Cockroach Control - Professional Extermination
                </Link>
                <Link href="/bed-bug-control-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Bed Bug Control - Complete Elimination
                </Link>
                <Link href="/rodents-control-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Rodent Control - Rat & Mouse Removal
                </Link>
              </div>
            </div>

            {/* Location-based Internal Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900">Nearby Locations</h3>
              </div>
              <div className="space-y-3">
                <Link href="/pest-control-in-juhu" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Pest Control in Juhu - Expert Team
                </Link>
                <Link href="/pest-control-in-vashi" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Pest Control in Vashi - Professional Service
                </Link>
                <Link href="/pest-control-in-versova" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Pest Control in Versova - 24/7 Service
                </Link>
                <Link href="/pest-control-in-oshiwara" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Pest Control in Oshiwara - Navi Mumbai West
                </Link>
              </div>
            </div>

            {/* Commercial Services Internal Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl mr-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900">Business Solutions</h3>
              </div>
              <div className="space-y-3">
                <Link href="/commercial-pest-control-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Commercial Pest Control - Business Solutions
                </Link>
                <Link href="/commercial-fumigation-navi mumbai" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Commercial Fumigation - Complete Treatment
                </Link>
                <Link href="/residential" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  Residential Pest Control - Home Protection
                </Link>
                <Link href="/services" className="flex items-center text-blue-600 hover:text-orange-600 transition-colors group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-orange-500"></span>
                  All Pest Control Services - Complete List
                </Link>
              </div>
            </div>

          </div>

          {/* Semantic Keywords Section - RankBrain Optimization */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Pest Control in Vashi - Complete Guide
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Comprehensive pest control solutions for Vashi residents and businesses. From pest exterminators to pest management specialists.
              </p>
            </div>

            {/* Semantic Keywords Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">🐛 Search Terms</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Pest Control in Vashi</div>
                  <div>Pest Exterminators Vashi</div>
                  <div>Pest Management Vashi</div>
                  <div>Professional Pest Control</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">🐛 Service Types</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Residential Pest Control</div>
                  <div>Commercial Pest Control</div>
                  <div>Emergency Pest Control</div>
                  <div>Eco-Friendly Treatment</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">🐛 Location Focus</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Vashi Navi Mumbai</div>
                  <div>Pest Control Near Me</div>
                  <div>Local Pest Service</div>
                  <div>Same Day Service</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">? Benefits</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Guaranteed Results</div>
                  <div>Safe for Family</div>
                  <div>Licensed Experts</div>
                  <div>5-Year Warranty</div>
                </div>
              </div>
            </div>

            {/* E-A-T Signals */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium text-lg">
                <span className="mr-2">?</span>
                Licensed � Certified � Trusted by 10,000+ Customers in Vashi
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-4xl">🐛?</div>
          <div className="absolute top-20 right-20 text-3xl">🐛</div>
          <div className="absolute bottom-10 left-20 text-4xl">🐛</div>
          <div className="absolute bottom-20 right-10 text-3xl">🐛</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-30">🐛?</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Creative Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 text-sm font-semibold mb-6 border border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Serving 80+ Locations Across Navi Mumbai & Maharashtra
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Service Areas
              </span>
              <br />
              <span className="text-gray-900">We Cover It All</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional pest control services available across Navi Mumbai, Navi Navi Mumbai, Thane, Pune, and extended Maharashtra regions. Click any location for specialized local services.
            </p>
          </div>

          {/* Location Buttons by Region */}
          <div className="space-y-12">
            
            {/* South Navi Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">South Navi Mumbai (SoBo)</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-vashi',
                  'pest-control-in-vashi',
                  'pest-control-in-worli',
                  'pest-control-in-lower-parel',
                  'pest-control-in-parel'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Central Navi Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Central Navi Mumbai</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-dadar',
                  'pest-control-in-matunga',
                  'pest-control-in-mahim',
                  'pest-control-in-byculla',
                  'pest-control-in-sion',
                  'pest-control-in-wadala',
                  'pest-control-in-dharavi',
                  'pest-control-in-bandra',
                  'pest-control-in-khar',
                  'pest-control-in-santacruz',
                  'pest-control-in-bandra-vashi-complex'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Western Suburbs */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Navi Mumbai Western Suburbs</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-vashi',
                  'pest-control-in-juhu',
                  'pest-control-in-vile-parle',
                  'pest-control-in-vashi',
                  'pest-control-in-goregaon',
                  'pest-control-in-malad',
                  'pest-control-in-vashi',
                  'pest-control-in-borivali',
                  'pest-control-in-dahisar'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Eastern Suburbs */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Navi Mumbai Eastern Suburbs</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-chembur',
                  'pest-control-in-ghatkopar',
                  'pest-control-in-vashi',
                  'pest-control-in-powai',
                  'pest-control-in-vikhroli',
                  'pest-control-in-vashi',
                  'pest-control-in-bhandup',
                  'pest-control-in-mulund',
                  'pest-control-in-vashi'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navi Navi Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Navi Navi Mumbai</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-navi-navi mumbai',
                  'pest-control-in-belapur',
                  'pest-control-in-cbd-belapur',
                  'pest-control-in-nerul',
                  'pest-control-in-vashi',
                  'pest-control-in-vashi',
                  'pest-control-in-kopar-khairane',
                  'pest-control-in-turbhe',
                  'pest-control-in-rabale',
                  'pest-control-in-juinagar',
                  'pest-control-in-urse',
                  'pest-control-in-sanpada',
                  'pest-control-in-seawoods',
                  'pest-control-in-vashi',
                  'pest-control-in-kamothe',
                  'pest-control-in-kalamboli',
                  'pest-control-in-panvel',
                  'pest-control-in-new-panvel',
                  'pest-control-in-dronagiri',
                  'pest-control-in-ulwe',
                  'pest-control-in-taloja',
                  'pest-control-in-mahape'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Thane Region */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Thane Region</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-thane',
                  'pest-control-in-kalyan',
                  'pest-control-in-dombivali',
                  'pest-control-in-bhiwandi',
                  'pest-control-in-mumbra',
                  'pest-control-in-ulhasnagar',
                  'pest-control-in-vashi',
                  'pest-control-in-badlapur',
                  'pest-control-in-diva',
                  'pest-control-in-vashi',
                  'pest-control-in-ghodbunder-road'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Extended Navi Mumbai Region */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Extended Navi Mumbai Region</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-vasai',
                  'pest-control-in-virar',
                  'pest-control-in-nalasopara',
                  'pest-control-in-naigaon',
                  'pest-control-in-mira-road',
                  'pest-control-in-mira-bhayandar',
                  'pest-control-in-bhayander',
                  'pest-control-in-digha',
                  'pest-control-in-darave',
                  'pest-control-in-shirvane',
                  'pest-control-in-boisar'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Pune & Maharashtra */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Pune & Maharashtra</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-pune',
                  'pest-control-in-hinjewadi',
                  'pest-control-in-baner',
                  'pest-control-in-aundh',
                  'pest-control-in-wakad',
                  'pest-control-in-bavdhan',
                  'pest-control-in-kharadi',
                  'pest-control-in-viman-nagar',
                  'pest-control-in-aurangabad',
                  'pest-control-in-nashik',
                  'pest-control-in-ahmednagar',
                  'pest-control-in-solapur',
                  'pest-control-in-kolhapur',
                  'pest-control-in-sangli',
                  'pest-control-in-satara',
                  'pest-control-in-alibag'
                ].map((location, index) => {
                  const locationName = location
                    .replace('pest-control-in-', '')
                    .replace('pest-control-', '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                  
                  return (
                    <a
                      key={index}
                      href={`/${location}`}
                      className="group relative bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs">📍</span>
                        <span className="font-semibold truncate">{locationName}</span>
                      </div>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white to-transparent opacity-0 group-hover:animate-shine"></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don&apos;t See Your Location?
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re expanding our services! Contact us to check availability in your area or to schedule service in nearby locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="mr-2">📞</span>
                  Call Now: +91 80979 41077
                </a>
                <a href="https://wa.me/918097941077" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="mr-2">📞</span>
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Technologies for Complete Pest Protection */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-6xl animate-pulse">🐛</div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce">?</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🐛?</div>
          <div className="absolute bottom-40 right-10 text-4xl animate-bounce">⚡</div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Modern Technologies for
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Complete Pest Protection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leverage the power of advanced pest control technologies for optimal protection and peace of mind.
            </p>
          </div>

          {/* Technology Solutions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Advanced Anti-Termite Treatment */}
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Advanced Anti-Termite Treatment</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cutting-edge soil and wood treatment solutions with 5-year comprehensive warranty protection for your Navi Mumbai property.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Pre & post-construction treatment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Licensed chemical applications
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    5-year warranty coverage
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Gel & Spray Treatment */}
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Professional Gel & Spray Treatment</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced gel baiting and targeted spray solutions designed specifically for Vashi&apos;s climate conditions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    German cockroach specialists
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Child & pet safe formulas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Long-lasting protection
                  </li>
                </ul>
              </div>
            </div>

            {/* Complete Rodent Elimination */}
            <div className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Complete Rodent Elimination</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive rat and mouse control with professional rat-proofing and entry point sealing for Navi Mumbai properties.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Professional rat-proofing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Secure bait station systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Entry point sealing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to protect your property?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Our template provides everything you need to get your pest problems solved quickly. Don&apos;t waste time with ineffective solutions - focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="mr-2">📞</span>
                  Call Now: +91 80979 41077
                </a>
                <a href="https://wa.me/918097941077" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="mr-2">📞</span>
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Licensed & Certified</h3>
              <p className="text-gray-300">Government licensed professionals with over 10 years of experience in Navi Mumbai pest control.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Eco-Friendly Solutions</h3>
              <p className="text-gray-300">Safe, environmentally friendly treatments that protect your family and pets while eliminating pests.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">24/7 Emergency Service</h3>
              <p className="text-gray-300">Round-the-clock emergency pest control services across all Navi Mumbai areas with same-day availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing for Complete Protection */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-6xl">🐛</div>
          <div className="absolute top-40 right-20 text-4xl">🐛</div>
          <div className="absolute bottom-20 left-20 text-5xl">🛡️</div>
          <div className="absolute bottom-40 right-10 text-4xl">?</div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing for
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Complete Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your property. All plans include free inspection and consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Protection */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Protection</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-600">?1,500</span>
                  <p className="text-gray-600 mt-2">Starting price</p>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Cockroach control</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Free inspection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">3-month warranty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Safe chemicals</span>
                  </li>
                </ul>
                <a href="tel:+918097941077" className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </a>
              </div>
            </div>

            {/* Complete Protection - Most Popular */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl border-2 border-orange-400 hover:shadow-3xl transition-all duration-500 group transform hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Complete Protection</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">?3,500</span>
                  <p className="text-orange-100 mt-2">Starting price</p>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>All pest control services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Termite protection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>1-year warranty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Follow-up visits</span>
                  </li>
                </ul>
                <a href="tel:+918097941077" className="w-full inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-orange-600 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Care */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Care</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-purple-600">?5,000</span>
                  <p className="text-gray-600 mt-2">Starting price</p>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Everything in Complete</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">5-year termite warranty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Monthly maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <a href="tel:+918097941077" className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Professional Pest Management Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Complete Guide to Pest Control In Vashi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover everything you need to know about professional pest management services in Vashi, Navi Mumbai. 
              From common pest challenges to advanced treatment solutions, we provide comprehensive information to help you make informed decisions.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Understanding Vashi's Pest Challenges */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  Understanding Pest Control In Vashi: Climate and Environmental Factors
                </h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    Vashi, strategically located in Navi Mumbai, presents unique challenges for pest control due to its urban climate and high-density residential and commercial development. 
                    The area&apos;s growing residential environment creates conditions that provide breeding grounds for various pests. 
                    Understanding these environmental factors is crucial for effective <strong>Pest Control In Vashi</strong>.
                  </p>
                  <p className="mb-6">
                    The monsoon season, typically lasting from June to September, brings increased humidity levels that can reach up to 85-90%. 
                    This moisture creates perfect conditions for cockroaches, termites, and various flying insects to thrive. 
                    Professional <strong>Pest Control In Vashi</strong> services must account for these seasonal variations to provide year-round protection.
                  </p>
                  <p className="mb-6">
                    Urban development in Vashi has led to rapid construction activities, which often disturb natural pest habitats and drive them into residential and commercial spaces. 
                    The presence of construction debris, water accumulation in building sites, and temporary food sources attracts rodents, ants, and other pests. 
                    This makes comprehensive <strong>Pest Control In Vashi</strong> essential for both new and established properties.
                  </p>
                  <p>
                    The area&apos;s well-connected transportation network, including proximity to major highways and the railway station, 
                    facilitates the movement of pests from one location to another. This connectivity requires specialized 
                    <strong>Pest Control In Vashi</strong> strategies that focus on prevention and early intervention.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Common Pest Problems Requiring Professional Intervention
                </h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    Residential and commercial properties in Vashi face diverse pest challenges that require specialized <strong>Pest Control In Vashi</strong> solutions. 
                    Termites pose the most significant structural threat, with subterranean termites being particularly problematic due to the area&apos;s soil conditions. 
                    These silent destroyers can cause extensive damage to wooden structures, furniture, and important documents before detection.
                  </p>
                  <p className="mb-6">
                    Cockroach infestations are extremely common in Vashi&apos;s humid environment, with German cockroaches and American cockroaches being the primary species. 
                    These pests not only contaminate food sources but also spread diseases such as salmonella, dysentery, and gastroenteritis. 
                    Effective <strong>Pest Control In Vashi</strong> for cockroaches requires understanding their hiding spots, breeding patterns, and food preferences.
                  </p>
                  <p className="mb-6">
                    Rodent problems, particularly rats and mice, are prevalent due to the availability of food sources and nesting materials in both residential and commercial areas. 
                    These pests can cause structural damage by gnawing through wires, pipes, and insulation materials. They also pose serious health risks by transmitting diseases like leptospirosis, 
                    hantavirus, and plague. Professional <strong>Pest Control In Vashi</strong> services implement comprehensive rodent management programs that include trapping, baiting, and exclusion techniques.
                  </p>
                  <p>
                    Ant infestations, particularly pharaoh ants and black garden ants, create significant nuisances in kitchens, pantries, and food storage areas. 
                    These social insects form extensive colonies that can quickly spread throughout a property. 
                    Specialized <strong>Pest Control In Vashi</strong> treatments target both visible ants and their hidden colonies to ensure complete elimination.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-xl border border-orange-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Seasonal Pest Activity</h4>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    <div>
                      <strong>Monsoon (June-September):</strong> Peak activity for cockroaches, termites, and mosquitoes
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <div>
                      <strong>Post-Monsoon (October-November):</strong> Increased rodent activity seeking shelter
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <div>
                      <strong>Winter (December-February):</strong> Ant colonies become more active indoors
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></span>
                    <div>
                      <strong>Summer (March-May):</strong> Flying insects and spider activity increases
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-xl border border-green-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h4>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Pest Control In Vashi</strong> emergency services are available 24/7 for urgent infestations that pose immediate health or safety risks.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Wasp and bee removals
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Snake removal services
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Severe rodent infestations
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Commercial kitchen emergencies
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Treatment Methods */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center">
              Advanced Treatment Methods for <span className="text-orange-400">Pest Control In Vashi</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-blue-300">Chemical Treatments</h4>
                <p className="text-gray-300 mb-4">
                  Modern <strong>Pest Control In Vashi</strong> utilizes advanced chemical formulations that are both effective against pests and safe for humans and pets. 
                  These treatments include targeted gel baits for cockroaches, liquid termiticides for soil treatment, and specialized rodenticides with safety mechanisms.
                </p>
                <p className="text-gray-300">
                  All chemical treatments used in <strong>Pest Control In Vashi</strong> are approved by the Central Insecticides Board & Registration Committee (CIB&RC) 
                  and follow strict safety protocols to minimize environmental impact while maximizing pest elimination effectiveness.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-green-300">Eco-Friendly Solutions</h4>
                <p className="text-gray-300 mb-4">
                  Sustainable <strong>Pest Control In Vashi</strong> options include biological control methods, essential oil-based treatments, and physical exclusion techniques. 
                  These environmentally conscious approaches are particularly popular among families with children, elderly members, and those with chemical sensitivities.
                </p>
                <p className="text-gray-300">
                  Integrated Pest Management (IPM) strategies form the foundation of eco-friendly <strong>Pest Control In Vashi</strong>, 
                  combining multiple approaches to achieve long-term pest control while minimizing chemical usage.
                </p>
              </div>
            </div>
          </div>

          {/* Service Selection and Cost Analysis */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Selecting the Right <span className="text-orange-600">Pest Control In Vashi</span> Service
              </h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Choosing the appropriate <strong>Pest Control In Vashi</strong> service requires careful consideration of several factors including the type of pest, 
                  severity of infestation, property size, and budget constraints. Professional services offer various treatment packages ranging from one-time treatments 
                  to comprehensive annual maintenance contracts.
                </p>
                <p className="mb-4">
                  Licensed <strong>Pest Control In Vashi</strong> providers should possess valid certifications from relevant authorities and demonstrate expertise 
                  in handling different pest species. Look for companies that offer detailed inspection reports, treatment plans, and follow-up services to ensure 
                  complete pest elimination.
                </p>
                <p>
                  The best <strong>Pest Control In Vashi</strong> services provide transparent pricing, use quality-approved chemicals, 
                  offer warranties on their treatments, and maintain proper insurance coverage for customer protection.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Cost Analysis and Treatment Investment
              </h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Investment in professional <strong>Pest Control In Vashi</strong> varies significantly based on property size, pest type, and treatment complexity. 
                  Basic cockroach treatments typically range from ?1,500 to ?3,000, while comprehensive termite protection can cost between ?8,000 to ?25,000 
                  depending on property area and soil treatment requirements.
                </p>
                <p className="mb-4">
                  Annual maintenance contracts for <strong>Pest Control In Vashi</strong> often provide better value compared to individual treatments, 
                  especially for properties prone to recurring pest problems. These contracts typically include quarterly inspections, 
                  preventive treatments, and emergency response services.
                </p>
                <p>
                  Consider <strong>Pest Control In Vashi</strong> as a long-term investment in property protection and family health. 
                  Early intervention prevents extensive damage and reduces overall treatment costs compared to emergency pest control situations.
                </p>
              </div>
            </div>
          </div>

          {/* Prevention and Maintenance */}
          <div className="bg-gradient-to-r from-orange-100 via-white to-blue-100 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Prevention Strategies to Complement <span className="text-orange-600">Pest Control In Vashi</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Property Maintenance</h4>
                <p className="text-gray-700 text-sm">
                  Regular property maintenance significantly enhances the effectiveness of <strong>Pest Control In Vashi</strong> treatments. 
                  This includes sealing cracks, fixing water leaks, maintaining proper drainage, and removing debris that attracts pests.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Hygiene Practices</h4>
                <p className="text-gray-700 text-sm">
                  Maintaining high hygiene standards works synergistically with professional <strong>Pest Control In Vashi</strong> services. 
                  Regular cleaning, proper food storage, and waste management eliminate pest attractants and breeding sites.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐛?</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Early Detection</h4>
                <p className="text-gray-700 text-sm">
                  Regular monitoring and early detection of pest activity maximize the success of <strong>Pest Control In Vashi</strong> interventions. 
                  Look for signs like droppings, damage patterns, unusual sounds, or unexplained marks on walls and furniture.
                </p>
              </div>
            </div>
          </div>

          {/* Technology and Innovation */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Technology and Innovation in Modern <span className="text-blue-600">Pest Control In Vashi</span>
            </h3>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <p className="mb-6">
                Contemporary <strong>Pest Control In Vashi</strong> services leverage cutting-edge technology to enhance treatment effectiveness and safety. 
                Digital monitoring systems, smart traps, and IoT-enabled devices provide real-time pest activity data, enabling proactive pest management strategies. 
                These technological advances allow pest control professionals to identify problem areas quickly and deploy targeted treatments.
              </p>
              <p className="mb-6">
                Thermal imaging technology has revolutionized termite detection in <strong>Pest Control In Vashi</strong>, allowing technicians to identify 
                termite activity within walls and wooden structures without destructive inspection methods. This non-invasive approach saves property owners 
                from unnecessary repair costs while ensuring comprehensive termite detection and treatment planning.
              </p>
              <p className="mb-6">
                Advanced baiting systems used in modern <strong>Pest Control In Vashi</strong> services incorporate slow-acting toxicants that allow pests 
                to return to their colonies before the effects take place. This approach ensures colony-wide elimination rather than just killing individual pests, 
                providing more thorough and long-lasting results for properties throughout Vashi.
              </p>
              <p>
                Mobile applications and digital reporting systems have improved customer communication and service transparency in <strong>Pest Control In Vashi</strong>. 
                Customers can schedule appointments, track service history, receive treatment reports, and access preventive care tips through user-friendly digital platforms, 
                making pest control management more convenient and efficient.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* VSO Enhanced - Local Voice Search Optimization Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Voice Search Optimized Content
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Voice Search Answers for
              </span>
              <br />
              <span className="text-white">Pest Control in Vashi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get instant voice search answers for all your pest control needs in Vashi, Navi Mumbai
            </p>
          </div>

          {/* Conversational Q&A Grid - VSO Optimized */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Long-tail Voice Search Question 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">🐛?</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;Where can I find the best pest control service near me in Vashi today?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                Super Pest Control is located in Vashi, Navi Mumbai, and provides same-day pest control services. We are available 24/7 for emergency pest control needs with guaranteed results and free inspection.
              </p>
              <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                <p className="text-green-300 text-sm font-medium">? Available today � Call +91-8097941077</p>
              </div>
            </div>

            {/* Long-tail Voice Search Question 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">🐛?</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;How much does it cost to get pest control done in Vashi area?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                Pest control costs in Vashi start from ?500 for basic treatments and go up to ?5000 for comprehensive solutions. We offer free quotes, competitive pricing, and no hidden charges for all pest control services.
              </p>
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <p className="text-blue-300 text-sm font-medium">🐛 Free quote � Best prices guaranteed</p>
              </div>
            </div>

            {/* Long-tail Voice Search Question 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">💡</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;Which pest control company has the best reviews in Vashi, Navi Mumbai?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                Super Pest Control has the highest ratings in Vashi with 4.9/5 stars from 847+ customers. We have over 10 years of experience and are the most trusted pest control company in the Pune district area.
              </p>
              <div className="mt-4 p-3 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <p className="text-purple-300 text-sm font-medium">? 4.9/5 stars � 847+ reviews</p>
              </div>
            </div>

            {/* Long-tail Voice Search Question 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">?</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;Can I get emergency pest control service in Vashi right now?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                Yes, we provide 24/7 emergency pest control services in Vashi. Call us now at +91-8097941077 for immediate assistance. Our team can reach your location within 2 hours for urgent pest problems.
              </p>
              <div className="mt-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                <p className="text-red-300 text-sm font-medium">🐛 24/7 emergency � 2-hour response</p>
              </div>
            </div>

            {/* Long-tail Voice Search Question 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">✓</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;Is pest control safe for kids and pets living in Vashi apartments?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                Our pest control treatments in Vashi are 100% safe for children and pets. We use WHO-approved, eco-friendly chemicals and follow all safety protocols for residential properties.
              </p>
              <div className="mt-4 p-3 bg-teal-500/20 rounded-lg border border-teal-400/30">
                <p className="text-teal-300 text-sm font-medium">🐛 Child-safe � Pet-friendly certified</p>
              </div>
            </div>

            {/* Long-tail Voice Search Question 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">⚡</div>
                <h3 className="text-xl font-bold">Voice Search Query</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-yellow-300">&ldquo;How often should I get pest control done for my home in Vashi?&rdquo;</h4>
              <p className="text-gray-300 leading-relaxed">
                For homes in Vashi, we recommend pest control every 6-12 months for general maintenance. However, termite treatments last 5 years with warranty, while specific pest problems may require quarterly treatments.
              </p>
              <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                <p className="text-yellow-300 text-sm font-medium">🐛 6-12 month intervals � 5-year termite warranty</p>
              </div>
            </div>

          </div>

          {/* Local Business Voice Search Optimization */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ask Your Voice Assistant About Us!
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="font-bold mb-2">Google Assistant</h4>
                <p className="text-sm text-gray-300">&ldquo;Hey Google, find pest control services in Vashi&rdquo;</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="font-bold mb-2">Siri</h4>
                <p className="text-sm text-gray-300">&ldquo;Hey Siri, call the best pest control in Vashi&rdquo;</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="font-bold mb-2">Alexa</h4>
                <p className="text-sm text-gray-300">&ldquo;Alexa, find Super Pest Control Vashi reviews&rdquo;</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg">
                🐛 Call +91-8097941077
              </a>
              <a href="#contact" className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Get Free Inspection
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section - Matching Home Page Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🐛</div>
          <div className="absolute top-40 right-20 text-4xl">🐛</div>
          <div className="absolute bottom-20 left-20 text-5xl">🛡️</div>
          <div className="absolute bottom-40 right-10 text-4xl">?</div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Creative Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Got Questions? We&apos;ve Got Answers!
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Pest Control
              </span>
              <br />
              <span className="text-gray-900">Questions & Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your Vashi pest problems solved! Get instant answers to the most common questions about our professional pest control services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* FAQ Item 1 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Question with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      What is the best pest control service in Vashi?
                    </h3>
                  </div>
                  
                  {/* Answer */}
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Super Pest Control Vashi is the #1 rated pest control service in Vashi, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving 500+ happy customers.
                    </p>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      How much does pest control cost in Vashi?
                    </h3>
                  </div>
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Pest control in Vashi costs between ?1,500 to ?5,000 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      Which pest control is best for cockroaches in Vashi?
                    </h3>
                  </div>
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Super Pest Control Vashi provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Vashi&apos;s climate with 100% satisfaction guarantee.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      How to get rid of termites in Vashi homes permanently?
                    </h3>
                  </div>
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Professional termite control involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      What are the best pest control methods for Vashi climate?
                    </h3>
                  </div>
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Vashi&apos;s climate requires specialized pest control methods including moisture control, targeted treatments for seasonal pests, gel baiting for cockroaches, and preventive solutions for year-round protection against all common pests.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      Q
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      How often should I get pest control done in Vashi?
                    </h3>
                  </div>
                  <div className="ml-14">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                      A
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      For optimal protection in Vashi, residential pest control should be done every 3-4 months, while commercial properties may need monthly treatments depending on the business type and pest pressure.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our pest control experts are here to help! Get personalized answers and free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  🐛 Call Now: +91 80979-41077
                </a>
                <a href="https://wa.me/918097941077" className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                  🐛 Chat with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Pages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Google</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our Google Business profiles to see reviews, photos, and get directions to our locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Google Business Page */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Super Herbal Power Pest Control</h3>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7536.618757180519!2d72.971271!3d19.181685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8de3fffffff%3A0xd21d174cb4307f65!2sSuper%20Herbal%20power%20Pest%20Control!5e0!3m2!1sen!2sin!4v1758340583155!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Super Herbal Power Pest Control Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/Super+Herbal+power+Pest+Control/@19.181685,72.971271,15z/data=!4m6!3m5!1s0x3be7b8de3fffffff:0xd21d174cb4307f65!8m2!3d19.181685!4d72.971271!16s%2Fg%2F11p5y8qw0r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Second Google Business Page */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Super Pest Control</h3>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30145.766053371026!2d72.971543!3d19.185558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9bf21d997db%3A0xd77137379f669074!2sSuper%20Pest%20Control!5e0!3m2!1sen!2sin!4v1758340595533!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Super Pest Control Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.google.com/maps/place/Super+Pest+Control/@19.185558,72.971543,15z/data=!4m6!3m5!1s0x3be7b9bf21d997db:0xd77137379f669074!8m2!3d19.185558!4d72.971543!16s%2Fg%2F11q4y7qw0r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <span className="text-white font-bold text-xl drop-shadow-sm">🐛</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">Super Pest Control</span>
                  <span className="text-xs text-orange-400 font-medium -mt-1">Navi Mumbai&apos;s #1 Choice</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional pest control services in Navi Mumbai with 10+ years of experience. 
                We provide eco-friendly, family-safe solutions for all types of pest problems.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">��</span>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">��</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">��</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Home</Link>
                <Link href="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">About Us</Link>
                <Link href="/services" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Our Services</Link>
                <Link href="/commercial" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Commercial Services</Link>
                <Link href="/residential" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Residential Services</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Contact Us</Link>
              </div>
            </div>

            {/* Pest Control Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Pest Control Services</h3>
              <div className="space-y-3">
                <Link href="/termites-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Termite Control</Link>
                <Link href="/cockroach-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Cockroach Control</Link>
                <Link href="/rodents-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Rodent Control</Link>
                <Link href="/bed-bug-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Bed Bug Control</Link>
                <Link href="/ant-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Ant Control</Link>
                <Link href="/mosquitoes-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Mosquito Control</Link>
                <Link href="/spider-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Spider Control</Link>
                <Link href="/lizard-control-navi mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Lizard Control</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">✓</span>
                  <div>
                    <p className="text-white font-medium">Call Us Now</p>
                    <a href="tel:+918097941077" className="text-gray-300 hover:text-orange-400 transition-colors text-sm block">+91 80979-41077</a>
                    <a href="tel:+918097941076" className="text-gray-300 hover:text-orange-400 transition-colors text-sm block">+91 80979-41076</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">✓</span>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:superpestcontrol8858@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">superpestcontrol8858@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">✓</span>
                  <div>
                    <p className="text-white font-medium">Website</p>
                    <a href="https://superpestcontrol.in" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">superpestcontrol.in</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">✓</span>
                  <div>
                    <p className="text-white font-medium">Service Areas</p>
                    <p className="text-gray-300 text-sm">Navi Mumbai, Navi Navi Mumbai, Thane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-6">Specialized Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link href="/commercial-fumigation-navi mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Commercial Fumigation</Link>
              <Link href="/flying-insect-management-navi mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Flying Insect Management</Link>
              <Link href="/commercial-pest-control-navi mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Commercial Pest Control</Link>
              <Link href="/residential-pest-control-navi mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Residential Pest Control</Link>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Super Pest Control Navi Mumbai</span>
                <span>Licensed & Certified</span>
                <span>4.9? Rating</span>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Emergency Service:</span>
                <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Call 24/7
                </a>
              </div>
            </div>
            
            {/* Website Credit */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Website Designed & Developed by{' '}
                  <a 
                    href="https://mydigitalcrown.in/" 
                    target="_blank"
                    className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200 hover:underline"
                  >
                    Digital Marketing Company In Navi Mumbai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Zero Ranking Keyword Dominance Section - Final Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Pest Control in Vashi
              </span>
              <span className="text-white"> - Your Trusted Partner</span>
            </h4>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h5 className="font-bold mb-2 text-yellow-300">Why Choose Pest Control in Vashi by Super Pest Control?</h5>
                <p className="text-gray-300">We provide the most reliable pest control in Vashi with guaranteed results. Our expert pest control in Vashi services include termite control, cockroach elimination, and comprehensive pest management solutions.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-yellow-300">Professional Pest Control in Vashi Services</h5>
                <p className="text-gray-300">From residential to commercial pest control in Vashi, we offer complete pest extermination services. Our licensed pest control in Vashi team ensures 100% safe and effective treatments.</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-yellow-300">Emergency Pest Control in Vashi Available 24/7</h5>
                <p className="text-gray-300">Need immediate pest control in Vashi? Call us anytime for emergency pest control in Vashi. We provide same-day pest control in Vashi with guaranteed satisfaction and long-lasting results.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-orange-300">
                🐛 #1 Pest Control in Vashi | 4.9? Rating | 10,000+ Happy Customers | Best Pest Control in Vashi Since 2014
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call & WhatsApp Buttons - Always Visible */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Call Button - Left Side */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a 
            href="tel:+918097941077" 
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
            aria-label="Call Now"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>
        
        {/* WhatsApp Button - Right Side */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a 
            href="https://wa.me/918097941077" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-bounce hover:animate-none"
            aria-label="WhatsApp Chat"
          >
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

