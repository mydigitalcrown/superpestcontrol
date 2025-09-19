'use client';

import Link from "next/link";
import { useState } from "react";

export default function TermitesControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Schema for Termite Control Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://superpestcontrol.vercel.app/termites-control-mumbai#service",
                "name": "Termite Control Mumbai",
                "description": "Professional anti-termite treatment services in Mumbai with 5-year warranty. Pre-construction and post-construction termite control using advanced chemicals and techniques.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Super Pest Control Mumbai",
                  "telephone": "+91-80979-41077",
                  "url": "https://superpestcontrol.vercel.app"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Mumbai",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Maharashtra"
                  }
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Termite Control Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Pre-Construction Termite Treatment",
                        "description": "Soil treatment before construction to prevent termite infestation"
                      },
                      "price": "₹2500",
                      "priceCurrency": "INR"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Post-Construction Termite Treatment",
                        "description": "Chemical barrier treatment for existing buildings"
                      },
                      "price": "₹3500",
                      "priceCurrency": "INR"
                    }
                  ]
                },
                "offers": {
                  "@type": "Offer",
                  "price": "2500",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "priceValidUntil": "2025-12-31"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does termite control cost in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Termite control in Mumbai starts from ₹2,500 for basic treatment. Pre-construction treatment costs ₹2,500-₹4,000, while post-construction treatment ranges from ₹3,500-₹6,000 depending on property size and infestation level."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the best termite treatment for Mumbai homes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The best termite treatment for Mumbai homes includes soil treatment with approved chemicals, wood treatment for existing structures, and barrier protection. Professional treatment with 5-year warranty ensures long-term protection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does termite treatment warranty last in Mumbai?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Super Pest Control Mumbai offers 5-year comprehensive warranty on termite treatment. This includes free re-treatment if termites return within the warranty period and regular inspection services."
                    }
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://superpestcontrol.vercel.app/termites-control-mumbai",
                "url": "https://superpestcontrol.vercel.app/termites-control-mumbai",
                "name": "Termite Control Mumbai | Anti-Termite Treatment | Super Pest Control",
                "description": "Best Termite Control Mumbai ⚡ Pre & Post Construction Treatment 🛡️ 5 Year Warranty 📞 Call +91-80979-41077",
                "inLanguage": "en-IN",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://superpestcontrol.vercel.app"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-12-19"
              }
            ]
          })
        }}
      />
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1">Mumbai&apos;s #1 Choice</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</Link>
              <Link href="/commercial" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Commercial</Link>
              <Link href="/residential" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Residential</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</Link>
              <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                📞 Call Now
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Home</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">About</Link>
                <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Services</Link>
                <Link href="/commercial" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Commercial</Link>
                <Link href="/residential" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Residential</Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
                <a href="tel:+918097941077" className="block mx-3 my-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
                  📞 Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-orange-600/20 text-orange-200 mb-6 border border-orange-600/30">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              #1 Termite Control Mumbai ⭐ 4.9★ Rated
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-orange-400">Termite Control</span> Mumbai
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-orange-100 font-semibold">
              🏆 Best Anti-Termite Treatment ⚡ ₹2,500 Starting Price 🛡️ 5 Year Warranty 📞 24/7 Service
            </h2>
            <p className="text-lg md:text-xl mb-8 text-orange-100">
              Complete termite protection for your Mumbai property. Pre-construction & post-construction treatment with licensed chemicals and certified technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                📞 Call +91 80979-41077
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Free Inspection
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-orange-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-200">₹2,500</div>
                <div className="text-sm text-orange-300">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-200">5 Years</div>
                <div className="text-sm text-orange-300">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-200">24/7</div>
                <div className="text-sm text-orange-300">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-200">500+</div>
                <div className="text-sm text-orange-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Construction Treatment</h3>
              <p className="text-gray-600">Comprehensive soil treatment before construction to prevent future termite infestations.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Construction Treatment</h3>
              <p className="text-gray-600">Advanced chemical barrier treatment for existing buildings and homes.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage with free retreatment if termites return.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Property Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918097941077" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              📞 Call +91 80979-41077
            </a>
            <a href="tel:+918097941076" className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-800 transition-colors">
              📞 Call +91 80979-41076
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold">Super Pest Control Mumbai</span>
            </div>
            <p className="text-gray-400 mb-4">Professional Termite Control Services</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>&copy; 2025 Super Pest Control Mumbai</span>
              <span>Licensed & Certified</span>
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
