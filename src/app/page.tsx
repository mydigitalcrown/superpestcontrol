'use client';

import Link from "next/link";
import { useState } from "react";

// FAQ data for voice search optimization
const faqData = [
  {
    question: "What is the best pest control service in Mumbai?",
    answer: "Super Pest Control Mumbai is the #1 rated pest control service in Mumbai, offering 24/7 professional pest control services with eco-friendly solutions and licensed experts."
  },
  {
    question: "How much does pest control cost in Mumbai?",
    answer: "Pest control in Mumbai typically costs between ₹1,500 to ₹5,000 depending on the type of pest, property size, and treatment required. We offer free inspections and competitive pricing."
  },
  {
    question: "Which pest control is best for cockroaches in Mumbai?",
    answer: "Super Pest Control Mumbai provides the most effective cockroach control using advanced gel baiting, spray treatments, and long-lasting solutions with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Mumbai homes?",
    answer: "Professional termite control involves soil treatment, wood treatment, and barrier protection. Our certified technicians use the latest anti-termite chemicals safe for families."
  },
  {
    question: "What are the best pest control methods for Mumbai climate?",
    answer: "Mumbai's humid climate requires specialized pest control methods including moisture control, targeted treatments for monsoon pests, and preventive solutions for year-round protection."
  },
  {
    question: "How often should I get pest control done in Mumbai?",
    answer: "For optimal protection in Mumbai, residential pest control should be done every 3-4 months, while commercial properties may need monthly treatments depending on the business type."
  },
  {
    question: "Are pest control chemicals safe for children and pets?",
    answer: "Yes, we use only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments follow strict safety protocols."
  },
  {
    question: "Do you provide emergency pest control services in Mumbai?",
    answer: "Yes, we provide 24/7 emergency pest control services across Mumbai including South Mumbai, Central Mumbai, Western Suburbs, and Navi Mumbai with same-day service availability."
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
              <a href="tel:+919876543210" className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300">
                <span className="text-white text-lg">📞</span>
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Premium CTA Group - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+919876543210" className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 bg-gray-100/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 border border-gray-200/50 hover:border-blue-200/50">
                <span className="text-green-500 text-base">📞</span>
                <span>+91 98765 43210</span>
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
      <section className="pt-20 md:pt-32 pb-16 md:pb-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 md:w-80 md:h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-blue-100 text-blue-800 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
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
              <a href="tel:+919876543210" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all hover:bg-gray-50 text-center">
                📞 Call: +91 98765 43210
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
              <a href="tel:+919876543210" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                📞 +91 98765 43210
              </a>
              <a href="mailto:info@superpestcontrolmumbai.com" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
                📧 Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold">Super Pest Control</span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <span>&copy; 2025 Super Pest Control Mumbai</span>
              <span>Licensed & Certified</span>
              <span>4.9★ Rating</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
