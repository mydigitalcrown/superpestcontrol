'use client';

import Link from "next/link";
import { useState } from "react";

// Enhanced FAQ data for Commercial Pest Control Mumbai with B2B focus
const faqData = [
  {
    question: "What is the best commercial pest control service in Mumbai?",
    answer: "Super Pest Control is the #1 rated commercial pest control service in Mumbai, serving 500+ businesses with comprehensive IPM solutions, compliance documentation, and 24/7 emergency response. We specialize in restaurants, offices, hotels, warehouses, and retail establishments with industry-specific protocols."
  },
  {
    question: "How much does commercial pest control cost in Mumbai?",
    answer: "Commercial pest control costs in Mumbai range from ₹3,000-₹15,000 per month depending on business size, pest pressure, and service frequency. We offer transparent pricing with AMC contracts, compliance documentation, and customized treatment plans for different industries."
  },
  {
    question: "Do you provide pest control compliance certificates for businesses?",
    answer: "Yes, we provide complete compliance documentation including pest control certificates, treatment logs, HACCP compliance reports, and regulatory documentation required by health departments, FSSAI, and municipal authorities for business licensing and inspections."
  },
  {
    question: "Can you service our business after hours or weekends?",
    answer: "Yes, we offer flexible scheduling including after-hours, weekend, and holiday services to minimize disruption to your business operations. Our 24/7 emergency response team can handle urgent pest issues for critical business environments like restaurants and hotels."
  },
  {
    question: "What industries do you serve for commercial pest control?",
    answer: "We serve all commercial sectors including restaurants, hotels, offices, hospitals, schools, warehouses, retail stores, manufacturing facilities, food processing units, and government buildings with industry-specific pest management protocols and compliance requirements."
  },
  {
    question: "How often should commercial properties get pest control treatment?",
    answer: "Commercial properties should receive monthly pest control treatments, with high-risk businesses like restaurants requiring bi-weekly or weekly services. We provide customized AMC schedules based on industry requirements, pest pressure, and regulatory compliance needs."
  },
  {
    question: "Do you provide emergency commercial pest control in Mumbai?",
    answer: "Yes, we provide 24/7 emergency commercial pest control across Mumbai including same-day service for critical situations. Our rapid response team handles urgent infestations that could impact business operations, health inspections, or customer safety."
  },
  {
    question: "What areas in Mumbai do you serve for commercial pest control?",
    answer: "We serve all commercial areas of Mumbai including BKC, Nariman Point, Lower Parel, Andheri East/West, Powai, Goregaon, Malad, Thane, Navi Mumbai, and surrounding business districts with dedicated commercial service teams and industry expertise."
  }
];

export default function CommercialPestControlMumbai() {
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
            "name": "Super Pest Control Commercial Services Mumbai",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional commercial pest control services in Mumbai. Expert B2B solutions for restaurants, offices, hotels, warehouses with compliance documentation and 24/7 emergency service.",
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
              "name": "Mumbai commercial areas"
            },
            "priceRange": "₹₹₹₹",
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
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s B2B Experts</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-50/70 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Home</span>
                </Link>
                <Link href="/about" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About</span>
                </Link>
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Services</span>
                </Link>
                <Link href="/contact" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Contact</span>
                </Link>
              </div>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">📞 +91 80979-41077</div>
                <div className="text-xs text-gray-600">24/7 Business Support</div>
              </div>
              <Link href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link href="/" className="block py-2 text-gray-900 font-medium">Home</Link>
                <Link href="/about" className="block py-2 text-gray-900 font-medium">About</Link>
                <Link href="/services" className="block py-2 text-gray-900 font-medium">Services</Link>
                <Link href="/contact" className="block py-2 text-gray-900 font-medium">Contact</Link>
                <Link href="tel:+918097941077" className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg font-semibold">
                  📞 Call Now
                </Link>
              </div>
            </div>
          )}
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-gray-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Mumbai&apos;s #1 Commercial Pest Control
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Commercial
              </span>
              <br />
              <span className="text-white">Pest Control Mumbai</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Professional B2B pest control services for restaurants, offices, hotels, and warehouses. Complete compliance documentation, flexible scheduling, and 24/7 emergency support for 500+ Mumbai businesses.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Business Quote
              </a>
              <a href="tel:+918097941077" className="border border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all text-center">
                📞 Call: +91 80979-41077
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">₹3,000</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Monthly AMC</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">500+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Business Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">100%</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Compliance Docs</div>
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
              Business <span className="text-orange-600">FAQs</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our commercial pest control services in Mumbai
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

      {/* Service Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Mumbai Businesses <span className="text-orange-600">Choose Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional B2B pest control with industry-specific solutions across Mumbai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Office Buildings</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comprehensive workspace protection with minimal disruption to business operations and employee safety focus.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Restaurants & Hotels</h3>
              <p className="text-gray-600 text-center leading-relaxed">Food service pest control with HACCP compliance, health department certification, and guest safety protocols.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Warehouses & Manufacturing</h3>
              <p className="text-gray-600 text-center leading-relaxed">Industrial pest control with large-scale fumigation, rodent monitoring systems, and product protection protocols.</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-6 md:p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Compliance Documentation</h3>
              <p className="text-gray-600 text-center leading-relaxed">Complete regulatory compliance with certificates, logs, and reports for health department and licensing requirements.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 md:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Flexible Scheduling</h3>
              <p className="text-gray-600 text-center leading-relaxed">After-hours and weekend service options with 24/7 emergency response to minimize business disruption.</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">AMC Contracts</h3>
              <p className="text-gray-600 text-center leading-relaxed">Annual maintenance contracts with guaranteed service levels, cost predictability, and priority emergency response.</p>
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
                  Professional B2B Pest Control in <span className="text-orange-600">Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Commercial properties face unique pest control challenges that require specialized expertise and industry-specific solutions. Our professional B2B pest control services protect over 500 Mumbai businesses with comprehensive IPM programs, regulatory compliance, and emergency response protocols.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand the critical importance of maintaining pest-free environments for business operations, customer safety, and regulatory compliance. Our certified technicians provide customized solutions for restaurants, offices, hotels, warehouses, and manufacturing facilities across Mumbai&apos;s commercial districts.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commercial Service Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Assessment</h4>
                      <p className="text-gray-600 text-sm">Comprehensive evaluation of your facility, industry requirements, and pest risk factors specific to your business type.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom IPM Plan</h4>
                      <p className="text-gray-600 text-sm">Development of integrated pest management strategy with compliance documentation and service scheduling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Implementation</h4>
                      <p className="text-gray-600 text-sm">Execution of treatment plan with minimal business disruption and complete safety protocols for staff and customers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                      <p className="text-gray-600 text-sm">Regular monitoring, documentation, and 24/7 emergency response with compliance reporting and service logs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Column */}
            <div className="space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Commercial Areas Served</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'BKC', 'Nariman Point', 'Lower Parel', 'Andheri East',
                    'Andheri West', 'Powai', 'Goregaon', 'Malad',
                    'Thane', 'Navi Mumbai', 'Worli', 'Fort',
                    'Colaba', 'Dadar', 'Ghatkopar', 'Vikhroli',
                    'Mulund', 'Kandivali', 'Borivali', 'Santacruz',
                    'Juhu', 'Versova', 'Oshiwara', 'Bhandup'
                  ].map((area, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 md:p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">24/7 Business Support</h3>
                <p className="text-orange-100 mb-6">
                  Don&apos;t let pest issues disrupt your business operations or compliance. Our emergency response team provides immediate assistance for critical commercial situations.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-bold text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur opacity-20"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Super Pest Control</h3>
                <p className="text-orange-400 text-sm">Mumbai&apos;s B2B Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Professional commercial pest control services across Mumbai. Expert B2B solutions with compliance documentation and 24/7 support for 500+ businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                📞 +91 80979-41077
              </a>
              <a href="tel:+918097941076" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                📞 +91 80979-41076
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Super Pest Control Mumbai. All rights reserved. Professional commercial pest control services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
