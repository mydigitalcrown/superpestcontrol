'use client';

import Link from "next/link";
import { useState } from "react";

// Enhanced FAQ data for Mosquito Control Mumbai with natural language questions
const faqData = [
  {
    question: "What is the best mosquito control service in Mumbai?",
    answer: "Super Pest Control is the #1 rated mosquito control service in Mumbai, offering professional fogging, breeding site elimination, and seasonal protection programs. We provide guaranteed results with eco-friendly methods that protect families from mosquito-borne diseases like dengue and malaria."
  },
  {
    question: "How much does mosquito control cost in Mumbai?",
    answer: "Mosquito control costs in Mumbai range from ₹1,500-₹5,000 depending on property size and treatment frequency. We offer transparent pricing with no hidden charges, free inspections, and customized seasonal protection plans including fogging and breeding site management."
  },
  {
    question: "When is the best time for mosquito treatment in Mumbai?",
    answer: "The best time for mosquito treatment in Mumbai is during pre-monsoon (April-May) and post-monsoon (September-October) seasons when breeding is highest. We recommend year-round protection with intensive treatments during monsoon months for maximum effectiveness."
  },
  {
    question: "Is mosquito control treatment safe for family and pets?",
    answer: "Yes, our mosquito control treatments are completely safe for families, children, and pets. We use WHO-approved formulations, natural repellents, and targeted application methods that eliminate mosquitoes without harmful residues or toxic exposure."
  },
  {
    question: "How long does mosquito fogging treatment last?",
    answer: "Our mosquito fogging treatment provides immediate relief for 15-30 days, depending on weather conditions and mosquito pressure. For continuous protection, we recommend monthly treatments during monsoon season and bi-monthly treatments during other seasons."
  },
  {
    question: "What diseases do mosquitoes spread in Mumbai?",
    answer: "Mosquitoes in Mumbai spread serious diseases including dengue fever, malaria, chikungunya, and Zika virus. Our comprehensive mosquito control program targets Aedes, Anopheles, and Culex species that transmit these diseases, protecting your family's health."
  },
  {
    question: "Do you provide emergency mosquito control in Mumbai?",
    answer: "Yes, we provide 24/7 emergency mosquito control services across Mumbai including Andheri, Bandra, Borivali, Malad, Thane, and surrounding areas. Our rapid response team can perform emergency fogging within 4-6 hours for severe infestations or disease outbreaks."
  },
  {
    question: "How can I prevent mosquitoes in my Mumbai home?",
    answer: "Prevent mosquitoes by eliminating standing water, using window screens, maintaining proper drainage, and regular professional treatments. We provide detailed prevention guidelines and offer quarterly maintenance programs for long-term mosquito-free environments in Mumbai homes."
  }
];

export default function MosquitoesControlMumbai() {
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
            "name": "Super Pest Control Mosquito Control Mumbai",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional mosquito control services in Mumbai. Expert fogging, breeding site elimination, and seasonal protection against dengue, malaria, and other mosquito-borne diseases. 24/7 emergency service.",
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
              "reviewCount": "650"
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
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s Mosquito Experts</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              #1 Mosquito Control Experts in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Mosquito Control
              </span>
              <br />
              <span className="text-white">Mumbai</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Professional mosquito control services in Mumbai. Advanced fogging, breeding site elimination, and seasonal protection against dengue, malaria, and mosquito-borne diseases. 24/7 emergency service.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Inspection
              </a>
              <a href="tel:+918097941077" className="border border-white/40 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all text-center">
                📞 Call: +91 80979-41077
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">₹1,500</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">100%</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Safe Methods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">650+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Protected Homes</div>
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
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our mosquito control services in Mumbai
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    {/* Q Badge */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Question */}
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
              Why Choose Our <span className="text-blue-600">Mosquito Control</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional mosquito elimination with seasonal protection across Mumbai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🦟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Professional Fogging</h3>
              <p className="text-gray-600 text-center leading-relaxed">Advanced ULV fogging with WHO-approved formulations for immediate mosquito elimination and long-lasting protection.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Breeding Site Control</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comprehensive elimination of standing water sources and breeding sites to prevent future mosquito populations.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Disease Prevention</h3>
              <p className="text-gray-600 text-center leading-relaxed">Targeted protection against dengue, malaria, chikungunya, and other mosquito-borne diseases in Mumbai.</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-6 md:p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Family Safe Methods</h3>
              <p className="text-gray-600 text-center leading-relaxed">Eco-friendly treatments safe for children, pets, and the environment with minimal chemical exposure.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 md:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Seasonal Programs</h3>
              <p className="text-gray-600 text-center leading-relaxed">Customized protection plans for monsoon season with intensive pre and post-monsoon treatments.</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Emergency Response</h3>
              <p className="text-gray-600 text-center leading-relaxed">24/7 emergency mosquito control for disease outbreaks and severe infestations across Mumbai.</p>
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
                  Complete Mosquito Protection in <span className="text-blue-600">Mumbai</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Mosquitoes are more than just a nuisance in Mumbai - they&apos;re serious health threats that spread dengue, malaria, chikungunya, and Zika virus. Our comprehensive mosquito control services use advanced fogging technology, breeding site elimination, and seasonal protection programs to safeguard your family and property.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mumbai&apos;s tropical climate and monsoon seasons create ideal breeding conditions for mosquitoes. We provide year-round protection with intensive treatments during peak breeding seasons, ensuring your home remains mosquito-free throughout the year.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mosquito Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Site Assessment</h4>
                      <p className="text-gray-600 text-sm">Comprehensive inspection to identify breeding sites, mosquito hotspots, and entry points around your property.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Breeding Site Elimination</h4>
                      <p className="text-gray-600 text-sm">Remove and treat standing water sources, clean drains, and eliminate mosquito breeding habitats.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Fogging</h4>
                      <p className="text-gray-600 text-sm">Advanced ULV fogging treatment using WHO-approved formulations for immediate mosquito elimination.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ongoing Monitoring</h4>
                      <p className="text-gray-600 text-sm">Regular follow-ups and seasonal treatments to maintain mosquito-free environment year-round.</p>
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
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 md:p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Mosquito Service</h3>
                <p className="text-blue-100 mb-6">
                  Don&apos;t risk mosquito-borne diseases like dengue and malaria. Our emergency response team provides immediate fogging and protection across Mumbai.
                </p>
                <div className="space-y-3">
                  <a href="tel:+918097941077" className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    📞 Call: +91 80979-41077
                  </a>
                  <a href="tel:+918097941076" className="block w-full bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
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
                <p className="text-orange-400 text-sm">Mumbai&apos;s Mosquito Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Professional mosquito control services across Mumbai. Expert fogging and breeding site elimination with guaranteed protection against mosquito-borne diseases.
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
              © 2024 Super Pest Control Mumbai. All rights reserved. Professional mosquito control services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
