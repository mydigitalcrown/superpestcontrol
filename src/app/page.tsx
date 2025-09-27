'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for voice search optimization with natural language questions
const faqData = [
  {
    question: "What is the best pest control service in Mumbai?",
    answer: "Super Pest Control Mumbai is the #1 rated pest control service in Mumbai, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving 500+ happy customers."
  },
  {
    question: "How much does pest control cost in Mumbai?",
    answer: "Pest control in Mumbai costs between ₹1,500 to ₹5,000 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges."
  },
  {
    question: "Which pest control is best for cockroaches in Mumbai?",
    answer: "Super Pest Control Mumbai provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Mumbai's humid climate with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Mumbai homes permanently?",
    answer: "Professional termite control involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment."
  },
  {
    question: "What are the best pest control methods for Mumbai climate?",
    answer: "Mumbai's humid climate requires specialized pest control methods including moisture control, targeted treatments for monsoon pests, gel baiting for cockroaches, and preventive solutions for year-round protection against all common pests."
  },
  {
    question: "How often should I get pest control done in Mumbai?",
    answer: "For optimal protection in Mumbai, residential pest control should be done every 3-4 months, while commercial properties may need monthly treatments depending on the business type and pest pressure."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Mumbai?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments follow strict safety protocols and are completely safe for families."
  },
  {
    question: "Do you provide emergency pest control services in Mumbai?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services across Mumbai including South Mumbai, Central Mumbai, Western Suburbs, Navi Mumbai, and Thane with same-day service availability."
  },
  {
    question: "What is the contact number for pest control in Mumbai?",
    answer: "For immediate pest control assistance in Mumbai, call Super Pest Control at +91-80979-41077 or +91-80979-41076. We provide 24/7 emergency service with free inspection and consultation."
  },
  {
    question: "Which areas in Mumbai do you serve for pest control?",
    answer: "Super Pest Control serves all areas of Mumbai including South Mumbai (SoBo), Central Mumbai, Western Suburbs, Eastern Suburbs, Navi Mumbai, Thane, and surrounding areas with same-day service availability."
  }
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Schema for FAQ and Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s #1 Choice</span>
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

      {/* Modern SaaS Hero Section with Mumbai Background */}
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
              #1 Pest Control in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Pest Control
              </span>
              <br />
              <span className="text-white">Faster Than Ever</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Eliminate pests from your Mumbai property in record time with our powerful, 
              ready-to-deploy solutions. Backed by advanced technology and expert professionals.
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
                <div className="text-sm text-gray-100 drop-shadow-md">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">4.9★</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Complete 
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent block">
                Pest Control Services
              </span>
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
                <img 
                  src="/images/services/rodents-control-mumbai.webp" 
                  alt="Rodent Control Mumbai - Professional Rat Mouse Control"
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
                <img 
                  src="/images/services/bed-bug-control-mumbai.webp" 
                  alt="Bed Bug Control Mumbai - Professional Bed Bug Treatment"
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
                <img 
                  src="/images/services/ant-control-mumbai.webp" 
                  alt="Ant Control Mumbai - Professional Ant Extermination"
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
                <img 
                  src="/images/services/mosquitoes-control-mumbai.webp" 
                  alt="Mosquito Control Mumbai - Professional Mosquito Treatment"
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
                <img 
                  src="/images/services/spider-control-mumbai.webp" 
                  alt="Spider Control Mumbai - Professional Spider Removal"
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
                <img 
                  src="/images/services/lizard-control-mumbai.webp" 
                  alt="Lizard Control Mumbai - Professional Lizard Removal"
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
                <img 
                  src="/images/services/commercial-pest-control-mumbai.webp" 
                  alt="Commercial Pest Control Mumbai - Professional Business Solutions"
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

            {/* Continue with remaining services... */}
            
            {/* Residential Pest Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/residential-pest-control-mumbai.webp" 
                  alt="Residential Pest Control Mumbai - Home Protection Services"
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
                <img 
                  src="/images/services/commercial-fumigation-mumbai.webp" 
                  alt="Commercial Fumigation Mumbai - Warehouse Industrial Fumigation"
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

            {/* Flying Insect Management */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-lime-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/flying-insect-management-mumbai.webp" 
                  alt="Flying Insect Management Mumbai - Professional Flying Pest Control"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  UV Light Traps
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                  Flying Insect Management
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Advanced flying insect control with UV light traps, insect zappers, and targeted treatments. 
                  Effective against flies, moths, beetles, and other flying pests.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-lime-600">₹2,200</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    UV Light Trap Systems
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Targeted Flying Pest Treatment
                  </div>
                </div>
                <Link href="/flying-insect-management-mumbai" className="block w-full bg-lime-600 hover:bg-lime-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Fly Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/fly-control-mumbai.webp" 
                  alt="Fly Control Mumbai - Professional House Fly Management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Quick Results
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Fly Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Comprehensive fly control with breeding source elimination, sticky traps, and residual sprays. 
                  Effective against house flies, fruit flies, and drain flies.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-amber-600">₹1,300</span>
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
                    Multi-Species Fly Control
                  </div>
                </div>
                <Link href="/fly-control-mumbai" className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Bees Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-yellow-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/bees-control-mumbai.webp" 
                  alt="Bees Control Mumbai - Safe Bee Hive Removal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Safe Removal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Bees Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Safe and humane bee hive removal services. Professional beekeepers relocate hives without 
                  harming bees, ensuring safety for your family and the environment.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">₹2,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Humane Hive Relocation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Eco-Friendly Methods
                  </div>
                </div>
                <Link href="/bees-control-mumbai" className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Wood Borer Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/wood-borer-control-mumbai.webp" 
                  alt="Wood Borer Control Mumbai - Furniture Protection Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Furniture Protection
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Wood Borer Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Specialized treatment for wood-boring insects affecting furniture and wooden structures. 
                  Injection treatment, surface spraying, and preventive protection for valuable wood items.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-600">₹2,800</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Injection & Surface Treatment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Furniture Value Protection
                  </div>
                </div>
                <Link href="/wood-borer-control-mumbai" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Ticks Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-rose-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/ticks-control-mumbai.webp" 
                  alt="Ticks Control Mumbai - Pet Safe Tick Removal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Pet Safe
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  Ticks Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Comprehensive tick control for homes with pets. Safe treatments for yards, gardens, 
                  and indoor spaces to protect your family and pets from tick-borne diseases.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-rose-600">₹1,600</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Pet-Safe Formulations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Yard & Indoor Treatment
                  </div>
                </div>
                <Link href="/ticks-control-mumbai" className="block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Silverfish Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-slate-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/services/silverfish-control-mumbai.webp" 
                  alt="Silverfish Control Mumbai - Paper Document Protection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Document Protection
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                  Silverfish Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Specialized silverfish control to protect books, documents, and paper materials. 
                  Moisture control, targeted treatments, and prevention strategies for library and office spaces.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-600">₹1,400</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Moisture Control Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Library & Office Protection
                  </div>
                </div>
                <Link href="/silverfish-control-mumbai" className="block w-full bg-slate-600 hover:bg-slate-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern SaaS Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern Technologies for
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent block">
                Complete Pest Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Leverage the power of advanced pest control technologies for optimal protection and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Termite Control */}
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🐜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Anti-Termite Treatment</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge soil and wood treatment solutions with 5-year comprehensive warranty protection for your Mumbai property.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Pre & post-construction treatment
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Licensed chemical applications
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  5-year warranty coverage
                </div>
              </div>
            </div>

            {/* Cockroach Control */}
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🪳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Gel & Spray Treatment</h3>
              <p className="text-gray-600 mb-6">
                Advanced gel baiting and targeted spray solutions designed specifically for Mumbai&apos;s humid climate conditions.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  German cockroach specialists
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Child & pet safe formulas
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Long-lasting protection
                </div>
              </div>
            </div>

            {/* Rodent Control */}
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🐭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Rodent Elimination</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive rat and mouse control with professional rat-proofing and entry point sealing for Mumbai properties.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Professional rat-proofing
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Secure bait station systems
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Entry point sealing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to protect your property?
            </h2>
            <p className="text-xl text-gray-600">
              Our template provides everything you need to get your pest problems solved quickly. 
              Don&apos;t waste time with ineffective solutions - focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Government licensed professionals with over 10 years of experience in Mumbai pest control.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Safe, environmentally friendly treatments that protect your family and pets while eliminating pests.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency pest control services across all Mumbai areas with same-day availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent block">
                Complete Protection
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your property. All plans include free inspection and consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic Protection</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">₹1,500</div>
                <div className="text-gray-500 mb-6">Starting price</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Cockroach control
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Free inspection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    3-month warranty
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Safe chemicals
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors block text-center">
                  Get Started
                </a>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 relative transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Complete Protection</h3>
                <div className="text-4xl font-bold mb-1">₹3,500</div>
                <div className="text-blue-200 mb-6">Starting price</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    All pest control services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Termite protection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    1-year warranty
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    24/7 support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Follow-up visits
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors block text-center">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Care</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">₹5,000</div>
                <div className="text-gray-500 mb-6">Starting price</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Everything in Complete
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    5-year termite warranty
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Monthly maintenance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors block text-center">
                  Get Started
                </a>
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

      {/* Creative FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🐛</div>
          <div className="absolute top-40 right-20 text-4xl">🏠</div>
          <div className="absolute bottom-20 left-20 text-5xl">🔧</div>
          <div className="absolute bottom-40 right-10 text-4xl">⭐</div>
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
              Your Mumbai pest problems solved! Get instant answers to the most common questions about our professional pest control services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="group">
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
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Answer */}
                    <div className="ml-14">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                        A
                      </div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
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
                  📞 Call Now: +91 80979-41077
                </a>
                <a href="#contact" className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                  💬 Chat with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to protect your property?
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our professional pest control services today. Free inspection and consultation included.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Inspection</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for immediate assistance and a free property inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href="tel:+918097941077" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                📞 +91 80979-41077
              </a>
              <a href="mailto:info@superpestcontrol.in" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
                📧 Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Main SEO Article */}
            <article className="prose prose-lg max-w-none">
              <header className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Professional Pest Control Services in Mumbai: Your Complete Guide
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover why Super Pest Control Mumbai is the trusted choice for thousands of residential and commercial properties across Mumbai, Navi Mumbai, and Thane.
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Professional Pest Control in Mumbai?</h3>
                  <p className="text-gray-700 mb-4">
                    Mumbai&apos;s tropical climate and dense urban environment create the perfect breeding ground for various pests. From monsoon-driven cockroach infestations to year-round termite threats, the city&apos;s residents face unique pest challenges that require professional expertise and advanced treatment methods.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Super Pest Control Mumbai has been serving the Mumbai metropolitan area for over 10 years, providing comprehensive pest management solutions that are both effective and environmentally responsible. Our team of certified technicians understands the local pest behavior patterns and climate-specific challenges that Mumbai properties face.
                  </p>
                  <p className="text-gray-700">
                    We use state-of-the-art equipment, eco-friendly chemicals, and proven methodologies to ensure complete pest elimination while maintaining the safety of your family, pets, and employees. Our integrated pest management approach focuses on long-term prevention rather than just temporary solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mumbai&apos;s Most Common Pest Problems</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Cockroaches:</strong> German and American cockroaches thrive in Mumbai&apos;s humid conditions, spreading diseases and contaminating food sources.</li>
                    <li><strong>Termites:</strong> Subterranean termites cause billions in property damage annually, particularly during monsoon season.</li>
                    <li><strong>Rodents:</strong> Rats and mice multiply rapidly in urban environments, causing structural damage and health hazards.</li>
                    <li><strong>Mosquitoes:</strong> Aedes and Culex mosquitoes spread dengue, malaria, and chikungunya, especially during rainy months.</li>
                    <li><strong>Ants:</strong> Carpenter ants and sugar ants create persistent infestations in kitchens and food storage areas.</li>
                    <li><strong>Bed Bugs:</strong> Increasing travel and urbanization has led to rising bed bug infestations in Mumbai homes and hotels.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Comprehensive Pest Control Services</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🏠</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Residential Pest Control</h4>
                    <p className="text-gray-700">Complete home protection including kitchens, bedrooms, bathrooms, and outdoor areas. Our residential services cover all common household pests with family-safe treatments.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🏢</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Commercial Pest Control</h4>
                    <p className="text-gray-700">Specialized solutions for offices, restaurants, hotels, warehouses, and industrial facilities. Customized treatment plans that comply with health department regulations.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">⚡</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h4>
                    <p className="text-gray-700">24/7 emergency pest control for urgent infestations. Same-day service available across Mumbai, with rapid response teams ready to tackle severe pest problems.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Treatment Methods and Technologies</h3>
              
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Integrated Pest Management (IPM)</h4>
                <p className="text-gray-700 mb-4">
                  Our IPM approach combines multiple control strategies to achieve maximum effectiveness while minimizing environmental impact. This scientifically-proven method includes inspection, identification, monitoring, prevention, and targeted treatment protocols.
                </p>
                <p className="text-gray-700 mb-4">
                  We begin every service with a comprehensive property inspection to identify pest entry points, breeding areas, and environmental factors contributing to infestations. This detailed assessment allows us to create customized treatment plans that address both current problems and future prevention.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Eco-Friendly Solutions</h4>
                <p className="text-gray-700 mb-4">
                  Environmental responsibility is at the core of our pest control philosophy. We prioritize the use of organic, biodegradable, and low-toxicity treatments that effectively eliminate pests while protecting human health and the environment.
                </p>
                <p className="text-gray-700 mb-4">
                  Our green pest control methods include botanical insecticides, beneficial bacteria, pheromone traps, and mechanical exclusion techniques. These approaches are particularly important for food service establishments, schools, healthcare facilities, and homes with children and pets.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Latest Technology and Equipment</h4>
                <p className="text-gray-700 mb-4">
                  Super Pest Control Mumbai invests in cutting-edge technology to ensure superior service delivery. Our technicians use digital monitoring systems, thermal imaging cameras for termite detection, and precision application equipment for targeted treatments.
                </p>
                <p className="text-gray-700 mb-4">
                  We employ GPS tracking for service documentation, moisture meters for identifying conducive conditions, and specialized injection systems for precise chemical placement. This technology-driven approach ensures consistent results and provides detailed service reports for our clients.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Areas Across Mumbai Metropolitan Region</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">South Mumbai (SoBo)</h4>
                    <p className="text-gray-700 mb-4">
                      Serving prestigious areas including Colaba, Fort, Churchgate, Marine Drive, Malabar Hill, Pedder Road, Breach Candy, Cuffe Parade, and Nariman Point. Our premium services cater to luxury residences, heritage buildings, and commercial establishments in Mumbai&apos;s business district.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Central Mumbai</h4>
                    <p className="text-gray-700 mb-4">
                      Comprehensive coverage of Dadar, Prabhadevi, Lower Parel, Matunga, Mahim, Bandra, Khar, Santacruz, and surrounding areas. We understand the unique challenges of dense urban living and provide tailored solutions for high-rise apartments and commercial complexes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Western Suburbs</h4>
                    <p className="text-gray-700 mb-4">
                      Expert services for Andheri, Versova, Juhu, Vile Parle, Goregaon, Malad, Kandivali, Borivali, and Dahisar. Our team specializes in treating the diverse property types found in Mumbai&apos;s western corridor, from seaside bungalows to modern housing societies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Eastern Suburbs & Extended Areas</h4>
                    <p className="text-gray-700 mb-4">
                      Serving Kurla, Ghatkopar, Vikhroli, Powai, Mulund, Bhandup, Navi Mumbai, Thane, and beyond. We provide the same high-quality service standards across all areas, ensuring consistent pest control excellence regardless of location.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Pest Control Solutions</h3>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">Hospitality and Food Service</h4>
                  <p className="text-gray-700 mb-4">
                    Restaurants, hotels, cafes, and food processing facilities require specialized pest control protocols to maintain health department compliance and protect brand reputation. Our hospitality pest management programs include regular monitoring, documentation, staff training, and emergency response procedures.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We understand the critical importance of maintaining pest-free environments in food service establishments. Our treatments are scheduled during off-hours to minimize business disruption, and we use only food-safe products approved for commercial kitchen environments.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">Healthcare Facilities</h4>
                  <p className="text-gray-700 mb-4">
                    Hospitals, clinics, laboratories, and pharmaceutical facilities require the highest standards of pest control to protect patient safety and maintain sterile environments. Our healthcare pest management programs comply with NABH and other regulatory requirements.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We provide comprehensive solutions for medical facilities, including specialized treatments for sensitive areas, documentation for compliance audits, and emergency response protocols that prioritize patient safety and operational continuity.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibent text-gray-900 mb-4">Educational Institutions</h4>
                  <p className="text-gray-700 mb-4">
                    Schools, colleges, and universities need safe, effective pest control that protects students and faculty while maintaining learning environments. Our educational facility programs use child-safe methods and provide pest awareness education for maintenance staff.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">Retail and Commercial Spaces</h4>
                  <p className="text-gray-700 mb-4">
                    Shopping malls, retail stores, offices, and warehouses each present unique pest control challenges. Our commercial solutions include discrete service delivery, flexible scheduling, and comprehensive reporting to meet corporate standards and regulatory requirements.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-8 mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Pest Control Strategies for Mumbai</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Monsoon Season (June - September)</h4>
                    <p className="text-gray-700">
                      Mumbai&apos;s intense monsoon season creates ideal conditions for mosquito breeding, increased cockroach activity, and termite swarming. Our monsoon pest control programs include enhanced moisture control, targeted breeding site elimination, and preventive treatments for water-related pest issues.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Post-Monsoon Period (October - November)</h4>
                    <p className="text-gray-700">
                      The post-monsoon period often sees increased rodent activity as pests seek shelter and food sources. This is also peak season for spider infestations and flying insect management. Our programs focus on entry point sealing and population control measures.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Winter and Summer Seasons</h4>
                    <p className="text-gray-700">
                      During drier months, ant activity typically increases as they search for water sources. This is also the optimal time for intensive termite treatments and structural pest control measures. Our year-round programs adapt to these seasonal variations.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance and Customer Satisfaction</h3>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Super Pest Control Mumbai maintains rigorous quality standards through continuous training, regular service audits, and customer feedback integration. Our technicians are certified in the latest pest control techniques and safety protocols, ensuring consistent service excellence across all properties.
                </p>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive service guarantees, detailed treatment reports, and follow-up inspections to ensure complete customer satisfaction. Our quality assurance program includes regular supervisor visits, customer surveys, and continuous improvement initiatives based on industry best practices.
                </p>
                <p className="text-gray-700 mb-4">
                  Customer education is a key component of our service philosophy. We provide property owners with detailed information about pest prevention, maintenance recommendations, and early warning signs to watch for between service visits.
                </p>
              </div>

              <div className="text-center bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Property?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join thousands of satisfied customers who trust Super Pest Control Mumbai for complete pest management solutions. Contact us today for a free consultation and customized treatment plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+918097941077" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block">
                    📞 Call: +91 80979-41077
                  </a>
                  <a href="#contact" className="bg-orange-600 bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-all inline-block">
                    💬 Free Consultation
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call & WhatsApp Buttons Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Instant Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need immediate pest control assistance? Contact us now for quick response and professional service across Mumbai.
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
              href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Mumbai.%20Please%20provide%20details." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto min-w-[280px]"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              <div className="text-left">
                <div className="text-sm opacity-90">WhatsApp</div>
                <div className="text-lg font-bold">+91 80979-41077</div>
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              🕒 <strong>Available 24/7</strong> • 🚀 <strong>Quick Response</strong> • 💯 <strong>Professional Service</strong>
            </p>
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
                  <span className="text-orange-400 text-lg mt-0.5">�</span>
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
