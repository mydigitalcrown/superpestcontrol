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

      {/* Modern SaaS Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-blue-100 text-blue-800 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              #1 Pest Control in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Pest Control
              </span>
              <br />
              <span className="text-gray-900">Faster Than Ever</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
              Eliminate pests from your Mumbai property in record time with our powerful, 
              ready-to-deploy solutions. Backed by advanced technology and expert professionals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                Get Free Inspection
              </a>
              <a href="tel:+918097941077" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all hover:bg-gray-50 text-center">
                📞 Call: +91 80979-41077
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
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

      {/* Modern FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pest control services in Mumbai.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
              <a href="mailto:info@superpestcontrolmumbai.com" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
                📧 Get Quote
              </a>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
