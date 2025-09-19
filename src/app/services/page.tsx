import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Services Mumbai | Termite, Cockroach, Rodent Control",
  description: "Complete pest control services in Mumbai. Professional termite control, cockroach treatment, rodent control, mosquito control. Licensed experts, eco-friendly solutions, 24/7 service.",
  keywords: "pest control services mumbai, termite control mumbai, cockroach control mumbai, rodent control mumbai, mosquito control mumbai, professional pest control, licensed pest control services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/about" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
              <button className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-all duration-300">
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
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Our Professional Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Complete Pest Control
              </span>
              <br />
              <span className="text-gray-900">Solutions for Mumbai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Professional pest control services designed specifically for Mumbai&apos;s climate and urban environment. 
              Advanced technology, eco-friendly solutions, and guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Termite Control */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🐜</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Termite Control</h2>
                  <p className="text-orange-700 font-medium">Advanced Anti-Termite Treatment</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Comprehensive termite protection with pre and post-construction treatments. Our advanced soil and 
                wood treatment methods provide long-lasting protection for your Mumbai property.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Pre & post-construction treatment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">5-year comprehensive warranty</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Licensed chemical applications</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Soil & wood barrier protection</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-orange-600">₹3,000+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Cockroach Control */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🪳</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Cockroach Control</h2>
                  <p className="text-blue-700 font-medium">Advanced Gel & Spray Treatment</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Highly effective cockroach elimination using professional gel baiting and targeted spray treatments. 
                Perfect for Mumbai&apos;s humid climate conditions.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Professional gel baiting system</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">German cockroach specialists</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Child & pet safe formulas</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Long-lasting protection</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-600">₹1,500+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Rodent Control */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🐭</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Rodent Control</h2>
                  <p className="text-green-700 font-medium">Complete Rat & Mouse Elimination</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Comprehensive rodent control for Mumbai homes and offices. Professional rat-proofing, 
                secure bait stations, and entry point sealing for complete protection.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Professional rat-proofing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Secure bait station systems</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Entry point sealing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Preventive monitoring</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">₹2,500+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Mosquito Control */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🦟</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Mosquito Control</h2>
                  <p className="text-purple-700 font-medium">Monsoon Season Protection</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Professional mosquito control to protect against dengue, malaria, and chikungunya. 
                Specialized treatments for Mumbai&apos;s monsoon season challenges.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Professional fogging treatment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Breeding site elimination</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Monthly maintenance program</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Disease prevention focused</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">₹2,000+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional 4-step process ensuring effective pest control and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Inspection</h3>
              <p className="text-gray-600">
                Comprehensive property assessment to identify pest issues and determine the best treatment approach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Treatment Plan</h3>
              <p className="text-gray-600">
                Tailored solution designed specifically for your property type, pest species, and infestation level.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Treatment</h3>
              <p className="text-gray-600">
                Expert application using advanced techniques and eco-friendly chemicals by certified technicians.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow-up & Warranty</h3>
              <p className="text-gray-600">
                Regular monitoring, follow-up visits, and warranty protection to ensure long-term pest control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive pest management solutions for all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Pest Control</h3>
              <p className="text-gray-600 mb-6">
                Specialized solutions for offices, restaurants, warehouses, and other commercial properties.
              </p>
              <Link href="/commercial" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Pest Control</h3>
              <p className="text-gray-600 mb-6">
                Safe and effective pest control solutions designed specifically for homes and families.
              </p>
              <Link href="/residential" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6">
                24/7 emergency pest control services for urgent situations across all Mumbai areas.
              </p>
              <a href="tel:+919876543210" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Call Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the service you need and get a free inspection today. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Free Inspection
            </Link>
            <a href="tel:+919876543210" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
              📞 Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold">Super Pest Control</span>
            </Link>
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
