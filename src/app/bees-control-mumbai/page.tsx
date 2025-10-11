'use client';

import Link from "next/link";
import { useState } from "react";

// Enhanced FAQ data for Bees Control Mumbai with natural language questions
const faqData = [
  {
    question: "What is the best bee removal service in Mumbai?",
    answer: "Super Pest Control is the #1 rated bee removal service in Mumbai, offering 24/7 professional bee hive removal with safe relocation methods, specialized equipment, and humane approaches. We provide guaranteed results with over 10 years of experience in Mumbai's residential and commercial sectors."
  },
  {
    question: "How much does bee removal cost in Mumbai?",
    answer: "Bee removal in Mumbai costs between ₹2,000 to ₹6,000 depending on hive size, location accessibility, and removal complexity. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for all Mumbai properties."
  },
  {
    question: "Is bee removal safe for family and property in Mumbai?",
    answer: "Yes, Super Pest Control uses only safe, humane bee removal methods with specialized protective equipment. Our trained professionals ensure complete safety for families, pets, and property while relocating bees to suitable environments without harm."
  },
  {
    question: "How long does bee hive removal take in Mumbai?",
    answer: "Bee hive removal typically takes 1-3 hours depending on hive size and location complexity. Super Pest Control provides same-day service in Mumbai with complete hive removal and area sanitization for immediate safety."
  },
  {
    question: "Do you relocate bees or exterminate them in Mumbai?",
    answer: "Super Pest Control specializes in humane bee relocation in Mumbai, working with local beekeepers to safely relocate hives to suitable environments. We prioritize bee conservation while ensuring your property safety through professional removal methods."
  },
  {
    question: "Do you provide emergency bee swarm removal in Mumbai?",
    answer: "Yes, Super Pest Control provides 24/7 emergency bee swarm removal across Mumbai including sudden swarm arrivals, aggressive bee behavior, and immediate safety threats. Our rapid response team can reach you within 2-4 hours for urgent situations."
  }
];

export default function BeesControlMumbai() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Schema for FAQ and Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Pest Control Bee Removal Mumbai",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional bee removal services in Mumbai. Safe hive removal and relocation for homes and commercial properties with humane methods, specialized equipment, and emergency response. 24/7 bee control service.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mumbai, Maharashtra",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0760,
              "longitude": 72.8777
            },
            "telephone": "+91-80979-41077",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Mumbai and surrounding areas"
            },
            "priceRange": "₹₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }}
      />
      
      {/* Ultra Modern E10-Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s Bee Experts</span>
              </div>
            </Link>
            
            {/* Modern E10-Style Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-50/70 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">Home</Link>
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

      {/* Ultra Premium Hero Section */}
      <main className="pt-16 md:pt-20">
        <section className="relative min-h-[80vh] bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-yellow-200/40 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200/50 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
          
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-32 left-[10%] text-2xl animate-bounce delay-300">🐝</div>
            <div className="absolute top-48 right-[15%] text-xl animate-bounce delay-700">🏠</div>
            <div className="absolute bottom-48 left-[20%] text-lg animate-bounce delay-1000">🛡️</div>
            <div className="absolute bottom-32 right-[25%] text-2xl animate-bounce delay-500">✨</div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left space-y-8">
                {/* Premium Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full px-4 py-2 shadow-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-gray-700">Eco-Friendly Bee Relocation</span>
                  <span className="text-lg">🐝</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="block">Professional</span>
                    <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Bee Removal</span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl">Services Mumbai</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Safe, humane bee hive removal and relocation services across Mumbai. Expert bee control with <span className="font-semibold text-orange-600">guaranteed results</span> and eco-friendly methods.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="font-medium">24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🛡️</span>
                    </div>
                    <span className="font-medium">Humane Relocation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">⭐</span>
                    </div>
                    <span className="font-medium">10+ Years Experience</span>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <a 
                    href="tel:+918097941077" 
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative z-10 flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <span>Call Now: +91 80979-41077</span>
                    </span>
                  </a>
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center space-x-3">
                      <span className="text-xl">💬</span>
                      <span>Get Free Inspection</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative lg:order-first order-last">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for bee-related visual */}
                    <div className="text-8xl lg:text-9xl opacity-80">🐝</div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Safe Removal
                    </div>
                    <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Mumbai Experts
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-12 right-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500"></div>
                      <div className="absolute top-16 right-16 w-4 h-4 bg-amber-400 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </div>
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-sm font-semibold text-gray-700">Same Day Service</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-500 text-lg">🏆</span>
                      <span className="text-sm font-semibold text-gray-700">#1 in Mumbai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <span>🐝</span>
                    <span>Mumbai&apos;s Bee Experts</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Expert Bee Removal Services in <span className="text-orange-600">Mumbai</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Super Pest Control provides Mumbai&apos;s most trusted bee removal and relocation services. We specialize in safe, humane bee hive removal that protects both your property and these valuable pollinators.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Comprehensive Bee Control Solutions</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Safe Bee Hive Removal</h4>
                        <p className="text-gray-600">Professional removal of bee hives from walls, roofs, trees, and other structures using specialized equipment and protective gear.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm">🐝</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Humane Bee Relocation</h4>
                        <p className="text-gray-600">We work with local beekeepers to safely relocate bee colonies to suitable environments where they can continue to thrive.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-orange-600 text-sm">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Emergency Swarm Response</h4>
                        <p className="text-gray-600">24/7 emergency response for bee swarms and aggressive bee behavior situations across Mumbai.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 text-sm">🏠</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Property Protection</h4>
                        <p className="text-gray-600">Complete area sanitization and sealing of entry points to prevent future bee infestations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Bee Control Services?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700 font-medium">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700 font-medium">Eco-Friendly Methods</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700 font-medium">Same Day Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700 font-medium">10+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-8">
                <div className="grid gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200">
                    <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl">🐝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe Bee Removal</h3>
                    <p className="text-gray-600 mb-4">Professional bee removal services that prioritize the safety of both your family and the bees. Our trained experts use specialized equipment and humane methods.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>No harmful chemicals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Protective equipment included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Minimal property damage</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border border-amber-200">
                    <div className="w-16 h-16 bg-amber-200 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl">🏠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Hive Relocation</h3>
                    <p className="text-gray-600 mb-4">Complete hive relocation services working with local beekeepers to ensure bees are moved to appropriate environments where they can continue their important work.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Partner beekeeper network</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Suitable environment placement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Colony preservation focused</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                    <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Service</h3>
                    <p className="text-gray-600 mb-4">24/7 emergency bee swarm and aggressive bee situation response across Mumbai. Quick action when you need it most to ensure safety.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>2-4 hour response time</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Available 24/7</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-500">•</span>
                        <span>Mumbai-wide coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>🏆</span>
                <span>Mumbai&apos;s Trusted Choice</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Super Pest Control for <span className="text-orange-600">Bee Removal</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                With over 10 years of experience in Mumbai, we&apos;re the leading bee control specialists committed to safe, humane, and effective bee removal services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully licensed pest control professionals with comprehensive insurance coverage. Your property and family are protected throughout our service.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Government Licensed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Full Insurance Coverage</span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly Methods</h3>
                <p className="text-gray-600 leading-relaxed">
                  Environmentally conscious bee removal that protects beneficial pollinators while ensuring your safety. No harmful chemicals or extermination.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Humane Relocation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Bee Conservation Focus</span>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Emergency Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock emergency bee removal services across Mumbai. Fast response times when you need immediate assistance.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>2-4 Hour Response</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Mumbai-Wide Service</span>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">👨‍🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
                <p className="text-gray-600 leading-relaxed">
                  Highly trained bee removal specialists with years of experience. Continuous training on latest bee control methods and safety protocols.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Ongoing Training</span>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparent, fair pricing with no hidden charges. Free inspections and detailed quotes before any work begins.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Free Inspection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>No Hidden Charges</span>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete satisfaction guarantee on all bee removal services. We stand behind our work with comprehensive warranties.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Service Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <span>✓</span>
                    <span>Follow-up Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready for Professional Bee Removal?</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Don&apos;t let bee problems stress you. Our expert team is ready to provide safe, effective bee removal services across Mumbai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+918097941077" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    📞 Call Now: +91 80979-41077
                  </a>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    💬 Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 17 Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>🛡️</span>
                <span>Comprehensive Pest Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="text-orange-600">Pest Control</span> Services Mumbai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Beyond bee removal, we offer comprehensive pest control solutions for all your residential and commercial needs across Mumbai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Service 1 - Termite Control */}
              <div className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-red-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🐛</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Termite Control</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced termite treatment and prevention for complete property protection.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pre & Post Construction Treatment</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10 Year Warranty</span>
                  </div>
                </div>
              </div>

              {/* Service 2 - Cockroach Control */}
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🪳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cockroach Control</h3>
                <p className="text-gray-600 text-sm mb-4">Effective cockroach elimination with safe, family-friendly treatments.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Gel Baiting Technology</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Child & Pet Safe</span>
                  </div>
                </div>
              </div>

              {/* Service 3 - Rodent Control */}
              <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🐭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rodent Control</h3>
                <p className="text-gray-600 text-sm mb-4">Complete rat and mouse control with humane and effective methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Trapping & Exclusion</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Entry Point Sealing</span>
                  </div>
                </div>
              </div>

              {/* Service 4 - Ant Control */}
              <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🐜</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ant Control</h3>
                <p className="text-gray-600 text-sm mb-4">Targeted ant elimination with colony destruction techniques.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Colony Targeting</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Long-lasting Protection</span>
                  </div>
                </div>
              </div>

              {/* Service 5 - Bed Bug Control */}
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🛏️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bed Bug Control</h3>
                <p className="text-gray-600 text-sm mb-4">Complete bed bug elimination with heat treatment and chemical methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Heat Treatment Available</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Follow-up Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Service 6 - Mosquito Control */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mosquito Control</h3>
                <p className="text-gray-600 text-sm mb-4">Effective mosquito control for indoor and outdoor areas.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Breeding Site Treatment</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Outdoor Fogging</span>
                  </div>
                </div>
              </div>

              {/* Service 7 - Fly Control */}
              <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-yellow-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🪰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fly Control</h3>
                <p className="text-gray-600 text-sm mb-4">Professional fly control solutions for homes and businesses.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Source Elimination</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>UV Light Traps</span>
                  </div>
                </div>
              </div>

              {/* Service 8 - Spider Control */}
              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🕷️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Spider Control</h3>
                <p className="text-gray-600 text-sm mb-4">Safe spider removal and prevention for all spider species.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Web Removal</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Preventive Barriers</span>
                  </div>
                </div>
              </div>

              {/* Service 9 - Lizard Control */}
              <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lizard Control</h3>
                <p className="text-gray-600 text-sm mb-4">Humane lizard control and exclusion methods.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Humane Removal</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Entry Prevention</span>
                  </div>
                </div>
              </div>

              {/* Service 10 - Silverfish Control */}
              <div className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🐟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Silverfish Control</h3>
                <p className="text-gray-600 text-sm mb-4">Eliminate silverfish and protect your books and documents.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Moisture Control</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Document Protection</span>
                  </div>
                </div>
              </div>

              {/* Service 11 - Flea Control */}
              <div className="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-pink-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flea Control</h3>
                <p className="text-gray-600 text-sm mb-4">Pet-safe flea control for homes with animals.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pet-Safe Products</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Carpet Treatment</span>
                  </div>
                </div>
              </div>

              {/* Service 12 - Wasp Control */}
              <div className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🐝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wasp Control</h3>
                <p className="text-gray-600 text-sm mb-4">Safe wasp and hornet nest removal services.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Nest Removal</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Safety Equipment</span>
                  </div>
                </div>
              </div>

              {/* Service 13 - Beetle Control */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🪲</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Beetle Control</h3>
                <p className="text-gray-600 text-sm mb-4">Control various beetle species damaging wood and fabric.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Wood Protection</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fabric Treatment</span>
                  </div>
                </div>
              </div>

              {/* Service 14 - Moth Control */}
              <div className="group bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6 border border-violet-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-violet-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moth Control</h3>
                <p className="text-gray-600 text-sm mb-4">Protect clothing and pantry from moth damage.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Wardrobe Treatment</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pantry Pest Control</span>
                  </div>
                </div>
              </div>

              {/* Service 15 - Centipede Control */}
              <div className="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 border border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-rose-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦶</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centipede Control</h3>
                <p className="text-gray-600 text-sm mb-4">Remove centipedes and millipedes from your property.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Moisture Control</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Perimeter Treatment</span>
                  </div>
                </div>
              </div>

              {/* Service 16 - Cricket Control */}
              <div className="group bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl p-6 border border-lime-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-lime-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🦗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cricket Control</h3>
                <p className="text-gray-600 text-sm mb-4">Stop cricket noise and damage with targeted treatment.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Noise Reduction</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Damage Prevention</span>
                  </div>
                </div>
              </div>

              {/* Service 17 - General Fumigation */}
              <div className="group bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border border-cyan-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-cyan-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">General Fumigation</h3>
                <p className="text-gray-600 text-sm mb-4">Complete property fumigation for severe infestations.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Whole Property Treatment</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Commercial Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Multiple Pest Control Services?</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Get a comprehensive inspection and customized treatment plan for all your pest control needs in Mumbai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+918097941077" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    📞 Call for Complete Inspection
                  </a>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    📋 Get Service Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call & WhatsApp Buttons Section */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Instant Help</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Need immediate bee removal assistance? Contact us now for quick response and professional service across Mumbai.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              {/* Call Button */}
              <a 
                href="tel:+918097941077" 
                className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto min-w-[280px]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm opacity-90">Call Now</div>
                  <div className="text-lg font-bold">+91 80979-41077</div>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/918097941077" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto min-w-[280px]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm opacity-90">WhatsApp</div>
                  <div className="text-lg font-bold">+91 80979-41077</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

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
                  <span className="text-xs text-orange-400 font-medium -mt-1">Mumbai&apos;s #1 Choice</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional pest control services in Mumbai with 10+ years of experience. 
                We provide eco-friendly, family-safe solutions for all types of pest problems.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📘</span>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📷</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
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
                <Link href="/termites-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Termite Control</Link>
                <Link href="/cockroach-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Cockroach Control</Link>
                <Link href="/rodents-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Rodent Control</Link>
                <Link href="/bed-bug-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Bed Bug Control</Link>
                <Link href="/ant-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Ant Control</Link>
                <Link href="/mosquitoes-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Mosquito Control</Link>
                <Link href="/spider-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Spider Control</Link>
                <Link href="/lizard-control-mumbai" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Lizard Control</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">📞</span>
                  <div>
                    <p className="text-white font-medium">Call Us Now</p>
                    <a href="tel:+918097941077" className="text-gray-300 hover:text-orange-400 transition-colors text-sm block">+91 80979-41077</a>
                    <a href="tel:+918097941076" className="text-gray-300 hover:text-orange-400 transition-colors text-sm block">+91 80979-41076</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">✉️</span>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:superpestcontrol8858@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">superpestcontrol8858@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">🌐</span>
                  <div>
                    <p className="text-white font-medium">Website</p>
                    <a href="https://superpestcontrol.in" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">superpestcontrol.in</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-lg mt-0.5">📍</span>
                  <div>
                    <p className="text-white font-medium">Service Areas</p>
                    <p className="text-gray-300 text-sm">Mumbai, Navi Mumbai, Thane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-6">Specialized Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link href="/commercial-fumigation-mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Commercial Fumigation</Link>
              <Link href="/flying-insect-management-mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Flying Insect Management</Link>
              <Link href="/commercial-pest-control-mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Commercial Pest Control</Link>
              <Link href="/residential-pest-control-mumbai" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">Residential Pest Control</Link>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2025 Super Pest Control Mumbai</span>
                <span>Licensed & Certified</span>
                <span>4.9★ Rating</span>
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
                    Digital Marketing Company In Mumbai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Buttons - Always Visible */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Call Button - Left Side */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a
            href="tel:+918097941077"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="Call Now: +91 80979-41077"
          >
            <svg className="w-8 h-8 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              📞 Call Now
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </a>
        </div>

        {/* WhatsApp Button - Right Side */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a
            href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Mumbai.%20Please%20provide%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="WhatsApp: +91 80979-41077"
          >
            <svg className="w-8 h-8 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
            </svg>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              💬 WhatsApp
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </a>
        </div>

        {/* Mobile Bottom Floating Buttons - Only on Small Screens */}
        <div className="block md:hidden">
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <div className="flex space-x-4">
              {/* Mobile Call Button */}
              <a
                href="tel:+918097941077"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="Call Now"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>

              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Mumbai.%20Please%20provide%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
