'use client';

import Link from "next/link";
import { useState } from "react";

// Enhanced FAQ data for Termites Control Mumbai with natural language questions
const faqData = [
  {
    question: "What is the best termite control service in Mumbai?",
    answer: "Super Pest Control is the #1 rated termite control service in Mumbai, offering 24/7 professional anti-termite treatment with pre-construction and post-construction solutions. We provide guaranteed results with over 10 years of experience and 5-year comprehensive warranty coverage."
  },
  {
    question: "How much does termite control cost in Mumbai?",
    answer: "Termite control costs in Mumbai range from ₹2,500-₹6,000 depending on property size and treatment type. Pre-construction treatment starts at ₹2,500, while post-construction treatment ranges from ₹3,500-₹6,000. We offer transparent pricing with no hidden charges and free inspections."
  },
  {
    question: "How long does termite treatment take to complete?",
    answer: "Termite treatment completion time varies by property size and treatment type. Pre-construction treatment takes 1-2 days, while post-construction treatment typically requires 2-3 days. Our chemical barrier treatment provides immediate protection with long-lasting results for 5+ years."
  },
  {
    question: "Is termite control treatment safe for family and pets?",
    answer: "Yes, our termite control treatments are completely safe for families, children, and pets. We use EPA-approved, low-toxicity chemicals with targeted application methods. Our soil treatment creates barriers that are safe for humans while effectively eliminating termites."
  },
  {
    question: "What warranty do you provide for termite treatment in Mumbai?",
    answer: "We provide a comprehensive 5-year warranty on all termite treatments in Mumbai. This includes free re-treatment if termites return, annual inspection services, and complete coverage for any termite damage during the warranty period."
  },
  {
    question: "What is the difference between pre and post-construction termite treatment?",
    answer: "Pre-construction treatment involves soil treatment before building construction to create a chemical barrier. Post-construction treatment treats existing buildings using drilling and chemical injection methods. Both methods provide effective long-term termite protection with 5-year warranty."
  },
  {
    question: "Do you provide emergency termite control in Mumbai?",
    answer: "Yes, we provide 24/7 emergency termite control services across Mumbai including Andheri, Bandra, Borivali, Malad, Thane, and surrounding areas. Our rapid response team can reach you within 2-4 hours for severe infestations requiring immediate attention."
  },
  {
    question: "What areas in Mumbai do you serve for termite control?",
    answer: "We serve all areas of Mumbai including Andheri, Bandra, Borivali, Malad, Goregaon, Kandivali, Thane, Ghatkopar, Powai, Kurla, Chembur, Vikhroli, Mulund, Santacruz, Juhu, Dadar, Lower Parel, Worli, Colaba, Fort, and surrounding suburbs with professional termite control services."
  }
];

export default function TermitesControlMumbai() {
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
            "name": "Super Pest Control Termite Control Mumbai",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional termite control services in Mumbai. Expert pre-construction and post-construction anti-termite treatment with 5-year warranty, licensed chemicals, and guaranteed results. 24/7 emergency service.",
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
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s Termite Experts</span>
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
                <div className="text-xs text-gray-600">24/7 Emergency Service</div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-red-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              #1 Termite Control Experts in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Termite Control
              </span>
              <br />
              <span className="text-white">Mumbai</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Professional anti-termite treatment services in Mumbai. Complete pre-construction and post-construction solutions with 5-year warranty, licensed chemicals, and guaranteed results. 24/7 emergency service.
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
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">₹2,500</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">5 Year</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">500+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Properties Protected</div>
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
              Get answers to common questions about our termite control services in Mumbai
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
              Why Choose Our <span className="text-orange-600">Termite Control</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional anti-termite treatment with guaranteed results across Mumbai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 p-6 md:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Pre-Construction Treatment</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comprehensive soil treatment before construction to create effective chemical barriers and prevent future termite infestations.</p>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Post-Construction Treatment</h3>
              <p className="text-gray-600 text-center leading-relaxed">Advanced drilling and chemical injection methods for existing buildings with effective barrier protection.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">5-Year Warranty</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comprehensive warranty coverage with free re-treatment, annual inspections, and damage protection.</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Licensed Chemicals</h3>
              <p className="text-gray-600 text-center leading-relaxed">EPA-approved, low-toxicity chemicals that are safe for families while providing effective termite elimination.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-6 md:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Certified Technicians</h3>
              <p className="text-gray-600 text-center leading-relaxed">Licensed pest control professionals with specialized training in termite biology and treatment methods.</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-center leading-relaxed">Round-the-clock availability for emergency termite situations across Mumbai and surrounding areas.</p>
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
                  Complete Termite Protection in <span className="text-orange-600">Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Termites pose a serious threat to Mumbai properties, causing billions in damage annually. Our comprehensive termite control services use advanced chemical barrier systems and proven treatment methods to protect your property investment for years to come.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We offer both pre-construction and post-construction termite treatment services across Mumbai, including Andheri, Bandra, Borivali, Malad, Thane, and all surrounding areas. Our licensed technicians use only approved chemicals with 5-year warranty protection.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Termite Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Property Inspection</h4>
                      <p className="text-gray-600 text-sm">Comprehensive assessment to identify termite activity, damage, and optimal treatment approach for your property.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Treatment Planning</h4>
                      <p className="text-gray-600 text-sm">Development of customized treatment plan using pre or post-construction methods based on property requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Chemical Application</h4>
                      <p className="text-gray-600 text-sm">Professional application of licensed chemicals to create effective barriers and eliminate existing termite colonies.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Warranty & Monitoring</h4>
                      <p className="text-gray-600 text-sm">5-year warranty coverage with annual inspections and free re-treatment if termites return.</p>
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
                <h3 className="text-2xl font-bold mb-4">Emergency Termite Service</h3>
                <p className="text-orange-100 mb-6">
                  Don&apos;t let termites damage your property investment. Our emergency response team is available 24/7 for immediate termite treatment across Mumbai.
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
                <p className="text-orange-400 text-sm">Mumbai&apos;s Termite Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Professional termite control services across Mumbai. Expert anti-termite treatment with 5-year warranty for homes and commercial properties.
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
              © 2024 Super Pest Control Mumbai. All rights reserved. Professional termite elimination services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
