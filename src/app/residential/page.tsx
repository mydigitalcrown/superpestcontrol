import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Pest Control Mumbai | Family-Safe Residential Solutions",
  description: "Professional residential pest control services in Mumbai. Family-safe, child & pet friendly solutions for homes, apartments. Expert technicians, eco-friendly treatments, guaranteed results.",
  keywords: "home pest control mumbai, residential pest control mumbai, family safe pest control, apartment pest control mumbai, home termite control, child pet safe pest control",
};

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Modern E10-Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70">Mumbai&apos;s #1 Choice</span>
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
                <Link href="/residential" className="relative px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform">
                  <span className="relative z-10">Residential</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/contact" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="p-3 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Premium CTA Group */}
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Family-Safe Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Protect Your Home
              </span>
              <br />
              <span className="text-gray-900">& Family in Mumbai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Safe, effective pest control solutions designed specifically for families. Child & pet friendly treatments 
              that protect your Mumbai home without compromising safety.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-gray-600 text-sm">Homes Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600 text-sm">Family Safe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2 Hr</div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1 Year</div>
                <div className="text-gray-600 text-sm">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Pest Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Home Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions tailored for Mumbai homes and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kitchen & Dining */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🍳</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Kitchen & Dining Protection</h2>
                  <p className="text-orange-700 font-medium">Food-Safe Pest Control</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Specialized treatment for ants, cockroaches, and other kitchen pests using food-safe, 
                family-friendly products that won&apos;t contaminate your cooking areas.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Food-safe gel treatments</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Cabinet & pantry protection</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Ant trail elimination</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Drain fly control</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-orange-600">₹1,200+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Bedroom & Living */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🛏️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Bedroom & Living Areas</h2>
                  <p className="text-blue-700 font-medium">Safe Sleep Environment</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Complete protection for sleeping and living areas with special focus on bed bugs, 
                mosquitoes, and other pests that disturb your family&apos;s comfort and health.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Bed bug heat treatment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Mosquito control systems</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Spider web removal</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Carpet & upholstery treatment</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-600">₹1,800+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Bathroom & Utility */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🚿</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Bathroom & Utility Areas</h2>
                  <p className="text-green-700 font-medium">Moisture Area Protection</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Specialized treatment for damp areas prone to silverfish, drain flies, and moisture-loving pests. 
                Mold prevention and humidity-related pest control solutions.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Silverfish control</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Drain treatment & cleaning</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Moisture control solutions</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Centipede & millipede control</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">₹1,000+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Complete Home Treatment */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white text-3xl">🏠</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Complete Home Treatment</h2>
                  <p className="text-purple-700 font-medium">Whole House Protection</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Comprehensive whole-house treatment including termite protection, foundation treatment, 
                and preventive barriers to keep your entire Mumbai home pest-free.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Anti-termite soil treatment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Foundation barrier protection</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Garden & outdoor treatment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Entry point sealing</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">₹4,500+</div>
                  <div className="text-gray-600">Starting price</div>
                </div>
                <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Safety Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Family-First Safety Standards</h2>
            <p className="text-xl text-gray-600">
              Your family&apos;s safety is our top priority in every treatment we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Child-Safe Formulas</h3>
              <p className="text-gray-600">
                All our treatments use child-safe, non-toxic formulations that are effective against pests 
                but completely safe for children and babies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">🐕</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pet-Friendly Solutions</h3>
              <p className="text-gray-600">
                Pet-safe treatments that won&apos;t harm your furry family members. Special protocols for homes 
                with cats, dogs, and other pets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-orange-600 text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly Chemicals</h3>
              <p className="text-gray-600">
                Environmentally responsible pest control using biodegradable chemicals that break down safely 
                without harming the environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-purple-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimal Disruption</h3>
              <p className="text-gray-600">
                Treatment schedules designed around your family routine. Most treatments require no evacuation 
                and minimal preparation time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-red-600 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Application</h3>
              <p className="text-gray-600">
                Professional technicians use secure application methods, child-proof bait stations, 
                and tamper-resistant systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Documentation</h3>
              <p className="text-gray-600">
                Complete safety data sheets and treatment records provided. Full transparency about all 
                chemicals and methods used in your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Home Types Covered</h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for different types of Mumbai residences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Apartments */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apartments & Flats</h3>
              <p className="text-gray-600 mb-6">
                High-rise living solutions with special attention to shared walls, common areas, and building regulations.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Shared wall treatments</li>
                <li>• Balcony pest control</li>
                <li>• Society compliance protocols</li>
                <li>• Neighbor coordination</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">₹2,500+ per flat</div>
            </div>

            {/* Independent Houses */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Independent Houses</h3>
              <p className="text-gray-600 mb-6">
                Complete property protection including gardens, terraces, storage areas, and outdoor spaces.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Garden & terrace treatment</li>
                <li>• Storage room protection</li>
                <li>• Perimeter barrier systems</li>
                <li>• Compound wall treatments</li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-4">₹4,000+ per house</div>
            </div>

            {/* Bungalows & Villas */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bungalows & Villas</h3>
              <p className="text-gray-600 mb-6">
                Premium protection for larger properties with extensive grounds, multiple buildings, and luxury features.
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>• Multi-building coordination</li>
                <li>• Swimming pool areas</li>
                <li>• Guest house treatments</li>
                <li>• Landscaped garden care</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-4">₹8,000+ per property</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Protection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mumbai Seasonal Protection</h2>
            <p className="text-xl text-gray-600">
              Year-round protection adapted to Mumbai&apos;s unique climate and seasonal pest patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monsoon Season */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🌧️</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Monsoon Season (June-September)</h3>
                  <p className="text-blue-600 font-medium">High Humidity Protection</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Specialized treatments for increased mosquito, termite, and fungal pest activity during Mumbai&apos;s monsoon season.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Enhanced mosquito control & breeding site elimination</li>
                <li>• Increased termite monitoring & soil treatments</li>
                <li>• Mold & moisture pest prevention</li>
                <li>• Drain cleaning & maintenance</li>
                <li>• Waterlogging area treatments</li>
              </ul>
            </div>

            {/* Summer Season */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">☀️</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Summer Season (March-May)</h3>
                  <p className="text-orange-600 font-medium">Heat-Driven Pest Control</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Targeted treatments for pests seeking shelter and water sources during Mumbai&apos;s hot summer months.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Increased ant & cockroach activity control</li>
                <li>• Water source area protection</li>
                <li>• Heat-seeking pest barriers</li>
                <li>• Air conditioning unit treatments</li>
                <li>• Kitchen & bathroom intensified protection</li>
              </ul>
            </div>

            {/* Winter Season */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🍃</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Winter Season (December-February)</h3>
                  <p className="text-green-600 font-medium">Shelter-Seeking Protection</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive protection against pests seeking warm shelter during Mumbai&apos;s cooler winter months.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Rodent prevention & warm area protection</li>
                <li>• Indoor spider control intensification</li>
                <li>• Clothing & storage protection</li>
                <li>• Heating area treatments</li>
                <li>• Foundation crack sealing</li>
              </ul>
            </div>

            {/* Post-Monsoon */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🌈</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Post-Monsoon (October-November)</h3>
                  <p className="text-purple-600 font-medium">Recovery Period Care</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Recovery treatments addressing pest populations that thrived during monsoon and preparation for cooler months.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Post-flood pest elimination</li>
                <li>• Moisture damage assessment & treatment</li>
                <li>• Breeding site destruction</li>
                <li>• Preventive barrier renewal</li>
                <li>• Winter preparation treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Your Family Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get safe, effective pest control for your Mumbai home. Free inspection and family-safe treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Free Home Inspection
            </Link>
            <a href="tel:+919876543210" className="bg-green-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
              📞 Call Now: +91 98765 43210
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">✅</div>
              <div className="text-green-100 text-sm mt-2">100% Family Safe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">🛡️</div>
              <div className="text-green-100 text-sm mt-2">1 Year Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">⚡</div>
              <div className="text-green-100 text-sm mt-2">Same Day Service</div>
            </div>
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
