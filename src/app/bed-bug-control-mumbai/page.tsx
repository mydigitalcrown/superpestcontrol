'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for Bed Bug Control Mumbai with natural language questions
const faqData = [
  {
    question: "What is the best bed bug control service in Mumbai?",
    answer: "Super Pest Control is the #1 rated bed bug control service in Mumbai, offering 24/7 professional bed bug elimination with heat treatment, chemical solutions, and advanced detection methods. We provide guaranteed results with over 10 years of experience in Mumbai's residential and hospitality sectors."
  },
  {
    question: "How much does bed bug treatment cost in Mumbai?",
    answer: "Bed bug treatment in Mumbai costs between ₹3,000 to ₹8,500 depending on infestation level, room size, and treatment method required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for all Mumbai properties."
  },
  {
    question: "How to get rid of bed bugs permanently in Mumbai homes?",
    answer: "Professional bed bug elimination involves heat treatment, targeted chemical application, mattress steaming, and comprehensive follow-up treatments. Super Pest Control uses advanced detection methods and provides 6-month warranty on bed bug treatment in Mumbai."
  },
  {
    question: "Are bed bug treatment chemicals safe for family in Mumbai?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe bed bug treatment chemicals approved by regulatory authorities. All treatments in Mumbai follow strict safety protocols and are completely safe for families and hospitality businesses."
  },
  {
    question: "How long does bed bug treatment take in Mumbai?",
    answer: "Bed bug treatment typically takes 2-4 hours per room depending on infestation severity. Super Pest Control provides same-day service in Mumbai with follow-up treatments scheduled 15-21 days apart for complete elimination guarantee."
  },
  {
    question: "Do you provide bed bug treatment for hotels in Mumbai?",
    answer: "Yes, Super Pest Control specializes in hospitality bed bug control in Mumbai with discreet service, minimal business disruption, and emergency response. We serve hotels, guest houses, hostels, and commercial accommodations across Mumbai with proven results."
  }
];

export default function BedBugControlMumbai() {
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
            "name": "Super Pest Control Bed Bug Control Mumbai",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional bed bug control services in Mumbai. Expert elimination for homes, hotels, and commercial properties with heat treatment, chemical solutions, and guaranteed results. 24/7 emergency service.",
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
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s Bed Bug Experts</span>
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

      {/* Hero Section with Mumbai Background */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/70 to-orange-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              #1 Bed Bug Elimination Experts in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Bed Bug Control
              </span>
              <br />
              <span className="text-white">Mumbai</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Professional bed bug elimination services in Mumbai. Complete treatment for homes, hotels, and commercial properties with heat treatment, advanced chemicals, and guaranteed results. 24/7 emergency service.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Inspection
              </a>
              <a href="tel:+918097941077" className="border border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all text-center">
                📞 Call: +91 80979-41077
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
                <div className="text-sm text-gray-100 drop-shadow-md">Properties Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">100%</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section - 2000+ Words */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Professional Bed Bug Control Services in Mumbai
                  <span className="block text-2xl text-red-600 font-normal mt-2">Complete Elimination & Heat Treatment Solutions</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Dealing with persistent bed bug infestations in Mumbai? Super Pest Control Mumbai provides the most effective bed bug control solutions across all neighborhoods. Our advanced heat treatment systems and targeted chemical applications ensure complete bed bug elimination, not just temporary relief. With over 10 years of experience treating bed bug infestations in Mumbai&apos;s residential complexes, hotels, and commercial properties, we understand the unique challenges posed by Mumbai&apos;s humid climate and dense living conditions.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800">
                    <strong>🎯 Guaranteed Results:</strong> Our bed bug control treatments come with a 6-month warranty and 99.9% success rate in eliminating bed bug infestations permanently across Mumbai properties.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Heat Treatment Technology</h3>
                  <p className="text-gray-600">Advanced thermal remediation systems that eliminate bed bugs at all life stages, from eggs to adults, without harmful chemicals.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Applications</h3>
                  <p className="text-gray-600">EPA-approved insecticides specifically formulated for bed bug control with residual protection lasting up to 3 months.</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mumbai Bed Bug Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Properties Affected</span>
                  <span className="text-xl font-bold text-red-600">35%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Peak Season</span>
                  <span className="text-lg font-semibold text-gray-900">Mar-Oct</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Treatment Success</span>
                  <span className="text-xl font-bold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Average Cost</span>
                  <span className="text-lg font-semibold text-orange-600">₹3,000-8,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Sections */}
          <div className="mt-16 space-y-12">
            
            {/* Understanding Bed Bugs in Mumbai */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Bed Bug Infestations in Mumbai</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">Common Bed Bug Species in Mumbai</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mumbai&apos;s tropical climate creates ideal conditions for bed bug proliferation. The most common species encountered in Mumbai properties include <strong>Cimex lectularius</strong> (common bed bug) and <strong>Cimex hemipterus</strong> (tropical bed bug). These parasitic insects have adapted remarkably well to Mumbai&apos;s urban environment, thriving in residential apartments, hotels, hostels, and even office spaces.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The tropical bed bug, particularly prevalent in Mumbai, is more aggressive and heat-tolerant than its common counterpart. These insects can survive temperatures up to 45°C, making them exceptionally resilient in Mumbai&apos;s hot and humid conditions. Understanding the specific species is crucial for effective treatment, as different species require tailored approaches for complete elimination.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">Signs of Bed Bug Infestation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Bite Marks:</strong> Red, itchy welts arranged in lines or clusters on exposed skin areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Blood Stains:</strong> Small reddish or rust-colored stains on sheets and mattresses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Dark Spots:</strong> Bed bug excrement appearing as dark spots on fabric surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Sweet Musty Odor:</strong> Distinctive smell in heavily infested rooms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Live Insects:</strong> Brown, oval insects about the size of an apple seed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mumbai-Specific Challenges */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mumbai-Specific Bed Bug Control Challenges</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">Climate Factors</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mumbai&apos;s year-round humidity (65-85%) and warm temperatures (25-35°C) create optimal breeding conditions for bed bugs. The monsoon season particularly accelerates reproduction rates, with females laying up to 5 eggs daily in favorable conditions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">Dense Living</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mumbai&apos;s high-density residential complexes facilitate rapid bed bug spread between units. Shared walls, common ventilation systems, and frequent movement of furniture contribute to cross-contamination between apartments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">Travel Hub</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    As India&apos;s commercial capital, Mumbai sees constant travel and accommodation usage, making hotels, guest houses, and residential properties vulnerable to bed bug introduction through luggage and clothing.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Treatment Methods */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Bed Bug Treatment Methods</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-semibold text-red-600 mb-4">Heat Treatment (Thermal Remediation)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our state-of-the-art heat treatment system is the most effective method for bed bug elimination. This process involves raising the temperature of infested areas to 50-60°C for sustained periods, ensuring complete elimination of bed bugs at all life stages. Heat treatment is particularly effective in Mumbai&apos;s climate as it can penetrate deep into furniture, wall cavities, and other hiding spots that chemical treatments cannot reach.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Process Details:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pre-treatment preparation and inspection</li>
                        <li>• Gradual temperature elevation to target levels</li>
                        <li>• Maintenance of lethal temperatures for 4-6 hours</li>
                        <li>• Cool-down and post-treatment monitoring</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 100% chemical-free treatment</li>
                        <li>• Kills all life stages instantly</li>
                        <li>• Penetrates deep into materials</li>
                        <li>• Single treatment efficacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-orange-600 mb-4">Chemical Treatment (Targeted Application)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our chemical treatment program utilizes EPA-approved insecticides specifically formulated for bed bug control. We employ a combination of contact killers and residual insecticides to ensure immediate elimination and long-term protection. Our technicians are trained in targeted application techniques that maximize efficacy while minimizing exposure to residents.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Insecticides</h4>
                      <p className="text-sm text-gray-700">Fast-acting formulations that provide immediate knockdown of visible bed bugs and nymphs.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Residual Treatments</h4>
                      <p className="text-sm text-gray-700">Long-lasting protection that continues killing bed bugs for up to 3 months after application.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Growth Regulators</h4>
                      <p className="text-sm text-gray-700">Hormone-based treatments that prevent bed bug reproduction and development.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-green-600 mb-4">Integrated Pest Management (IPM)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our IPM approach combines multiple treatment methods with preventive strategies for comprehensive bed bug control. This systematic approach addresses not just the immediate infestation but also the underlying conditions that allow bed bugs to thrive. IPM is particularly effective in Mumbai&apos;s challenging environment where re-infestation risks are high.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">IPM Components Include:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Thorough inspection and monitoring</li>
                        <li>• Habitat modification recommendations</li>
                        <li>• Targeted treatment applications</li>
                        <li>• Regular follow-up assessments</li>
                      </ul>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Prevention education and training</li>
                        <li>• Ongoing monitoring programs</li>
                        <li>• Documentation and reporting</li>
                        <li>• Warranty and guarantee programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation and Safety */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Treatment Preparation & Safety Protocols</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Client Preparation Checklist</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Bedroom Preparation</h4>
                        <p className="text-sm text-gray-700">Strip all bedding, wash in hot water (60°C+), and seal in plastic bags until treatment completion.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Furniture Access</h4>
                        <p className="text-sm text-gray-700">Move furniture away from walls, disassemble bed frames, and provide access to all infested areas.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Personal Items</h4>
                        <p className="text-sm text-gray-700">Remove personal belongings, clothing, and electronics from treatment areas as directed.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Safety Measures</h3>
                  <div className="bg-white p-6 rounded-lg border border-blue-200">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">All chemicals are EPA-approved and safe for residential use</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">Technicians wear protective equipment during application</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">Detailed safety instructions provided to all residents</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">Pet and child safety protocols strictly followed</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-sm">24-hour helpline for post-treatment support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost and Value */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bed Bug Treatment Costs in Mumbai</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Basic Treatment</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹3,000-5,000</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1-2 room treatment</li>
                    <li>• Chemical application</li>
                    <li>• 3-month warranty</li>
                    <li>• 1 follow-up visit</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Comprehensive Treatment</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹5,000-8,000</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Whole apartment treatment</li>
                    <li>• Heat + Chemical treatment</li>
                    <li>• 6-month warranty</li>
                    <li>• 3 follow-up visits</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3">Premium Package</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹8,000-12,000</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Multi-room heat treatment</li>
                    <li>• Furniture steam cleaning</li>
                    <li>• 12-month warranty</li>
                    <li>• Unlimited follow-ups</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors Affecting Treatment Cost</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Property Size:</strong> Larger areas require more materials and time</li>
                    <li><strong>Infestation Severity:</strong> Heavy infestations need multiple treatments</li>
                    <li><strong>Treatment Method:</strong> Heat treatment costs more than chemical-only</li>
                    <li><strong>Property Type:</strong> Commercial properties have different pricing</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Access Requirements:</strong> Difficult access increases complexity</li>
                    <li><strong>Preparation Level:</strong> Client preparation affects treatment time</li>
                    <li><strong>Follow-up Needs:</strong> Additional visits for severe cases</li>
                    <li><strong>Seasonal Factors:</strong> Peak season pricing may apply</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prevention and Maintenance */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Long-term Prevention Strategies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Proactive Measures</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Regular Inspections</h4>
                      <p className="text-sm text-gray-700">Monthly visual inspections of beds, furniture, and sleeping areas for early detection signs.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Travel Precautions</h4>
                      <p className="text-sm text-gray-700">Inspect hotel rooms, keep luggage in bathrooms, and wash clothes immediately after travel.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Protective Encasements</h4>
                      <p className="text-sm text-gray-700">Install bed bug-proof mattress and box spring encasements for long-term protection.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Environmental Management</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Clutter Reduction</h4>
                      <p className="text-sm text-gray-700">Minimize hiding spots by reducing clutter and maintaining organized living spaces.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Vacuum Maintenance</h4>
                      <p className="text-sm text-gray-700">Regular vacuuming of mattresses, bed frames, and furniture cracks and crevices.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Heat Treatment</h4>
                      <p className="text-sm text-gray-700">Periodic high-heat washing of bedding and clothing in temperatures above 50°C.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🛏️</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bedroom Treatment</h3>
              <p className="text-gray-600">Complete bed bug elimination from mattresses, bed frames, and furniture.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🏨</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hotel Treatment</h3>
              <p className="text-gray-600">Professional bed bug control for hospitality industry with minimal disruption.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🔄</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow-up Service</h3>
              <p className="text-gray-600">Multiple treatments and monitoring to ensure complete elimination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-orange-600">Bed Bug Control</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional bed bug elimination with guaranteed results across Mumbai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Professional Inspection</h3>
              <p className="text-gray-600 text-center leading-relaxed">Thorough assessment to identify bed bug hiding spots and infestation severity using advanced detection methods.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 p-6 md:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Heat Treatment</h3>
              <p className="text-gray-600 text-center leading-relaxed">Advanced heat treatment technology that eliminates bed bugs at all life stages without harmful chemicals.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Safe Methods</h3>
              <p className="text-gray-600 text-center leading-relaxed">EPA-approved chemicals and eco-friendly treatment methods that are safe for families, children, and pets.</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Fast Response</h3>
              <p className="text-gray-600 text-center leading-relaxed">24/7 emergency service with same-day treatment available across Mumbai and surrounding areas.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">100% Guarantee</h3>
              <p className="text-gray-600 text-center leading-relaxed">Complete satisfaction guarantee with free follow-up treatments if bed bugs return within warranty period.</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Expert Team</h3>
              <p className="text-gray-600 text-center leading-relaxed">Certified pest control professionals with 10+ years of experience in bed bug elimination and prevention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Complete Bed Bug Elimination in <span className="text-orange-600">Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Bed bugs are one of the most challenging pests to eliminate, requiring professional expertise and advanced treatment methods. Our Mumbai-based team provides comprehensive bed bug control services using state-of-the-art heat treatment technology and EPA-approved chemical solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand the urgency of bed bug infestations and offer 24/7 emergency services across Mumbai, including Andheri, Bandra, Borivali, Malad, Thane, and all surrounding areas. Our certified technicians use integrated pest management approaches to ensure complete elimination.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Bed Bug Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Detailed Inspection</h4>
                      <p className="text-gray-600 text-sm">Comprehensive assessment using detection tools to locate all bed bug hiding spots and breeding areas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Customized Treatment Plan</h4>
                      <p className="text-gray-600 text-sm">Development of targeted treatment strategy based on infestation level and property requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Treatment</h4>
                      <p className="text-gray-600 text-sm">Application of heat treatment or advanced chemical solutions to eliminate bed bugs at all life stages.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Follow-up & Monitoring</h4>
                      <p className="text-gray-600 text-sm">Regular inspections and monitoring to ensure complete elimination with warranty protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Column */}
            <div className="space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas in Mumbai</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Andheri', 'Bandra', 'Borivali', 'Malad',
                    'Goregaon', 'Kandivali', 'Thane', 'Ghatkopar',
                    'Powai', 'Kurla', 'Chembur', 'Vikhroli',
                    'Mulund', 'Bhandup', 'Santacruz', 'Juhu',
                    'Versova', 'Oshiwara', 'Dadar', 'Lower Parel',
                    'Worli', 'Colaba', 'Fort', 'Byculla'
                  ].map((area, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 md:p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Bed Bug Service</h3>
                <p className="text-orange-100 mb-6">
                  Don&apos;t let bed bugs disrupt your sleep and comfort. Our emergency response team is available 24/7 for immediate assistance across Mumbai.
                </p>
                <div className="space-y-3">
                  <a href="tel:+918097941077" className="block w-full bg-white text-orange-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    📞 Call: +91 80979-41077
                  </a>
                  <a href="tel:+918097941076" className="block w-full bg-orange-700 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors">
                    📞 Alt: +91 80979-41076
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Pest Control Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Complete Pest Control Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional pest control solutions for every problem. All services include free inspection, 
              eco-friendly treatments, and comprehensive warranties.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Termite Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/termites-control-mumbai.webp" 
                  alt="Termite Control Mumbai - Professional Anti-Termite Treatment"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  5 Year Warranty
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Termite Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete anti-termite treatment with pre & post-construction solutions. Advanced soil treatment, 
                  wood protection, and chemical barrier methods with 5-year comprehensive warranty.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600">₹2,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Pre & Post Construction Treatment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Licensed Chemical Applications
                  </div>
                </div>
                <Link href="/termites-control-mumbai" className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Cockroach Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/cockroach-control-mumbai.webp" 
                  alt="Cockroach Control Mumbai - Professional Cockroach Extermination"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Cockroach Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Advanced gel baiting and spray treatments for German cockroaches. Child-safe, pet-friendly 
                  solutions designed for Mumbai&apos;s humid climate with long-lasting protection.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">₹1,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Gel Baiting & Spray Treatment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Child & Pet Safe Formulas
                  </div>
                </div>
                <Link href="/cockroach-control-mumbai" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Rodent Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/rodents-control-mumbai.webp" 
                  alt="Rodent Control Mumbai - Professional Rat Mouse Control"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Emergency Service
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  Rodent Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete rat and mouse elimination with professional rat-proofing, secure bait stations, 
                  and entry point sealing. Guaranteed results with follow-up visits.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">₹2,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Professional Rat-Proofing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Secure Bait Station Systems
                  </div>
                </div>
                <Link href="/rodents-control-mumbai" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Bed Bug Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/bed-bug-control-mumbai.webp" 
                  alt="Bed Bug Control Mumbai - Professional Bed Bug Treatment"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Heat Treatment
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Bed Bug Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Advanced heat treatment and chemical solutions for bed bug elimination. Mattress treatment, 
                  furniture protection, and comprehensive room sanitization services.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">₹3,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Heat & Chemical Treatment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Mattress & Furniture Protection
                  </div>
                </div>
                <Link href="/bed-bug-control-mumbai" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Ant Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/ant-control-mumbai.webp" 
                  alt="Ant Control Mumbai - Professional Ant Extermination"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Eco-Friendly
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Ant Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Targeted ant colony elimination with eco-friendly baiting systems. Effective against all ant species 
                  including pharaoh ants, carpenter ants, and common household ants.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">₹1,200</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Colony Elimination System
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Eco-Friendly Baiting Solutions
                  </div>
                </div>
                <Link href="/ant-control-mumbai" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Mosquito Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-yellow-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/mosquitoes-control-mumbai.webp" 
                  alt="Mosquito Control Mumbai - Professional Mosquito Treatment"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Monsoon Special
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Mosquito Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Comprehensive mosquito management with breeding source elimination, fogging treatments, 
                  and larvicide applications. Special monsoon protection packages available.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">₹1,800</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Breeding Source Elimination
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Fogging & Larvicide Treatment
                  </div>
                </div>
                <Link href="/mosquitoes-control-mumbai" className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Spider Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/spider-control-mumbai.webp" 
                  alt="Spider Control Mumbai - Professional Spider Removal"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Web Removal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  Spider Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional spider removal with web elimination and preventive treatments. Safe removal of 
                  venomous spiders and comprehensive property protection from future infestations.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">₹1,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Web Elimination & Removal
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Venomous Spider Safety Protocol
                  </div>
                </div>
                <Link href="/spider-control-mumbai" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Lizard Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/lizard-control-mumbai.webp" 
                  alt="Lizard Control Mumbai - Professional Lizard Removal"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Humane Removal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Lizard Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Humane lizard removal and exclusion services. Natural repellent treatments and entry point 
                  sealing to prevent lizards from entering your Mumbai property.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-teal-600">₹1,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Humane Removal Methods
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Natural Repellent Treatments
                  </div>
                </div>
                <Link href="/lizard-control-mumbai" className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Commercial Pest Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/commercial-pest-control-mumbai.webp" 
                  alt="Commercial Pest Control Mumbai - Professional Business Solutions"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Business Solutions
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  Commercial Pest Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Comprehensive pest management for businesses, offices, restaurants, and commercial properties. 
                  Customized treatment plans with minimal business disruption and compliance documentation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-800">₹5,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Customized Business Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Compliance Documentation
                  </div>
                </div>
                <Link href="/commercial-pest-control-mumbai" className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Residential Pest Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/residential-pest-control-mumbai.webp" 
                  alt="Residential Pest Control Mumbai - Home Protection Services"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Family Safe
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  Residential Pest Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete home protection with family-safe treatments. Customized solutions for apartments, 
                  bungalows, and residential complexes with child and pet-friendly formulations.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-600">₹2,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Family-Safe Treatments
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Complete Home Protection
                  </div>
                </div>
                <Link href="/residential-pest-control-mumbai" className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Commercial Fumigation */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/commercial-fumigation-mumbai.webp" 
                  alt="Commercial Fumigation Mumbai - Warehouse Industrial Fumigation"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Industrial Grade
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Commercial Fumigation
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional fumigation for warehouses, factories, and large commercial spaces. 
                  Complete pest elimination with minimal downtime and regulatory compliance.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-600">₹10,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Industrial Grade Fumigation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Regulatory Compliance
                  </div>
                </div>
                <Link href="/commercial-fumigation-mumbai" className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Creative Q&A Design */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our bed bug control services in Mumbai
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    {/* Q Badge */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Question */}
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      
                      {/* Answer with A Badge */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                          <span className="text-gray-600 font-bold group-hover:text-green-600 transition-colors duration-300">A</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">⭐ Rated 4.9/5 on Google Reviews</h3>
              <p className="text-lg opacity-90 mb-4">
                Join hundreds of satisfied customers who trust our pest control expertise
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-yellow-300 text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="text-white font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-4xl">🏙️</div>
          <div className="absolute top-20 right-20 text-3xl">📍</div>
          <div className="absolute bottom-10 left-20 text-4xl">🚚</div>
          <div className="absolute bottom-20 right-10 text-3xl">🏠</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-30">🗺️</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Creative Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 text-orange-800 text-sm font-semibold mb-6 border border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Serving 80+ Locations Across Mumbai & Maharashtra
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Service Areas
              </span>
              <br />
              <span className="text-gray-900">We Cover It All</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional pest control services available across Mumbai, Navi Mumbai, Thane, Pune, and extended Maharashtra regions. Click any location for specialized local services.
            </p>
          </div>

          {/* Location Buttons by Region */}
          <div className="space-y-12">
            
            {/* South Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">South Mumbai (SoBo)</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-colaba',
                  'pest-control-in-fort',
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

            {/* Central Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Central Mumbai</span>
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
                  'pest-control-in-bandra-kurla-complex'
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
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Mumbai Western Suburbs</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-andheri',
                  'pest-control-in-juhu',
                  'pest-control-in-vile-parle',
                  'pest-control-in-jogeshwari',
                  'pest-control-in-goregaon',
                  'pest-control-in-malad',
                  'pest-control-in-kandivali',
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
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mumbai Eastern Suburbs</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-chembur',
                  'pest-control-in-ghatkopar',
                  'pest-control-in-kurla',
                  'pest-control-in-powai',
                  'pest-control-in-vikhroli',
                  'pest-control-in-kanjurmarg',
                  'pest-control-in-bhandup',
                  'pest-control-in-mulund',
                  'pest-control-in-nahur'
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

            {/* Navi Mumbai */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Navi Mumbai</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  'pest-control-in-navi-mumbai',
                  'pest-control-in-belapur',
                  'pest-control-in-cbd-belapur',
                  'pest-control-in-nerul',
                  'pest-control-in-vashi',
                  'pest-control-in-airoli',
                  'pest-control-in-ghansoli',
                  'pest-control-in-kopar-khairane',
                  'pest-control-in-turbhe',
                  'pest-control-in-rabale',
                  'pest-control-in-juinagar',
                  'pest-control-in-urse',
                  'pest-control-in-sanpada',
                  'pest-control-in-seawoods',
                  'pest-control-in-kharghar',
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
                  'pest-control-in-ambarnath',
                  'pest-control-in-badlapur',
                  'pest-control-in-diva',
                  'pest-control-in-karjat',
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

            {/* Extended Mumbai Region */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Extended Mumbai Region</span>
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
                  'pest-control-boisar'
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
                  'pest-control-in-ambegaon',
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
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don&apos;t See Your Location?
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re expanding our services! Contact us to check availability in your area or to schedule service in nearby locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  📞 Call: +91 80979-41077
                </a>
                <a href="#contact" className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                  💬 Check Availability
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
