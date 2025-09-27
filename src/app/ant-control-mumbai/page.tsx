'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// FAQ data for ant control
const faqData = [
  {
    question: "What types of ants do you control in Mumbai?",
    answer: "We control all ant species including black ants, sugar ants, fire ants, pharaoh ants, carpenter ants, and common household ants. Our treatments are customized based on the specific ant species infesting your property."
  },
  {
    question: "How long does ant control treatment take to work?",
    answer: "You'll see initial results within 24-48 hours, with complete colony elimination typically achieved within 1-2 weeks. Our gel baits continue working for weeks, ensuring long-lasting protection against re-infestation."
  },
  {
    question: "Are your ant control treatments safe for children and pets?",
    answer: "Yes, all our ant control treatments use eco-friendly, low-toxicity products that are completely safe for families, children, and pets. We use targeted gel baiting methods that minimize exposure while maximizing effectiveness."
  },
  {
    question: "What's included in your ant control service?",
    answer: "Our service includes thorough inspection, identification of ant species, targeted gel baiting, spray treatments for trails, colony elimination, entry point sealing recommendations, and 3-month follow-up warranty with free re-treatment if needed."
  },
  {
    question: "How much does ant control cost in Mumbai?",
    answer: "Ant control starts from ₹1,200 for residential properties. The final cost depends on property size, infestation level, and ant species. We provide transparent pricing with no hidden charges and free inspection."
  },
  {
    question: "How do you eliminate the entire ant colony?",
    answer: "We use advanced gel baiting systems that worker ants carry back to the colony, eliminating the queen and entire nest. This method ensures complete colony destruction rather than just surface treatment."
  },
  {
    question: "Do you provide warranty for ant control treatment?",
    answer: "Yes, we provide a 3-month warranty on all ant control treatments. If ants return during the warranty period, we'll re-treat your property free of charge."
  },
  {
    question: "How can I prevent ant infestations after treatment?",
    answer: "We provide detailed prevention tips including proper food storage, cleaning practices, sealing entry points, removing water sources, and regular maintenance. Our team will guide you on ant-proofing your property."
  }
];

export default function AntControlMumbai() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-full shadow-md shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 transform">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-xl">Services</Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-orange-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              #1 Ant Control in Mumbai
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Ant Control
              </span>
              <br />
              <span className="text-white">Mumbai Experts</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Complete ant colony elimination with advanced gel baiting systems. 
              Safe, effective treatments for all ant species across Mumbai homes and businesses.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Ant Inspection
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
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">1000+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Ant Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">99.9%</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">3M</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🐜</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Black Ants</h3>
              <p className="text-gray-600">Targeted treatment for common black ant infestations in homes and gardens.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🍯</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sugar Ants</h3>
              <p className="text-gray-600">Specialized control for sugar ants and sweet-seeking ant species.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🔥</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fire Ants</h3>
              <p className="text-gray-600">Safe removal of aggressive fire ant colonies and nests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Ant Control Content - SEO Optimized */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Professional Ant Control Services in Mumbai
                  <span className="block text-2xl text-orange-600 font-normal mt-2">Complete Colony Elimination & Prevention</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Dealing with persistent ant infestations in Mumbai? Super Pest Control Mumbai provides the most effective ant control solutions across all neighborhoods. Our advanced gel baiting systems and targeted treatments ensure complete colony elimination, not just surface-level control.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800">
                    <strong>🎯 Guaranteed Results:</strong> Our ant control treatments come with a 3-month warranty and 99.9% success rate in eliminating entire ant colonies permanently.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600">⚡</span>
                    </span>
                    Quick Response
                  </h3>
                  <p className="text-gray-600">Same-day service available across Mumbai. Our technicians reach your location within 2-4 hours of booking.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600">🛡️</span>
                    </span>
                    Safe Methods
                  </h3>
                  <p className="text-gray-600">Child and pet-safe treatments using eco-friendly gel baits and low-toxicity products approved by health authorities.</p>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Ant Control?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Colony Destruction</h4>
                    <p className="text-gray-600 text-sm">Advanced gel baiting that eliminates queen and entire colony</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">All Ant Species Coverage</h4>
                    <p className="text-gray-600 text-sm">Black ants, sugar ants, fire ants, carpenter ants, pharaoh ants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">3-Month Warranty</h4>
                    <p className="text-gray-600 text-sm">Free re-treatment if ants return during warranty period</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">Starting ₹1,200 with no hidden charges or surprise fees</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
                  Get Free Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Ant Species Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Common Ant Species in Mumbai
              <span className="block text-xl text-gray-600 font-normal mt-2">Expert Identification & Targeted Treatment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mumbai&apos;s tropical climate creates ideal conditions for various ant species. Our experts identify the exact species infesting your property and apply species-specific treatment protocols for maximum effectiveness.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Black Garden Ants */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🐜</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Black Garden Ants</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Size:</strong> 3-5mm workers, 15mm queen</p>
                <p><strong>Behavior:</strong> Form trails to food sources, nest in soil</p>
                <p><strong>Common Areas:</strong> Gardens, kitchen areas, near water sources</p>
                <p><strong>Peak Season:</strong> Monsoon and post-monsoon months</p>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Our Treatment:</h4>
                <p className="text-sm text-gray-600">Gel baiting near nest entrances and feeding trails. Complete colony elimination within 10-14 days.</p>
              </div>
            </div>

            {/* Sugar Ants */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-orange-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🍯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sugar Ants (Pharaoh Ants)</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Size:</strong> 1.5-2mm, very small and light colored</p>
                <p><strong>Behavior:</strong> Attracted to sweet substances, multiple queens</p>
                <p><strong>Common Areas:</strong> Kitchens, pantries, near food storage</p>
                <p><strong>Challenge:</strong> Rapid reproduction and colony splitting</p>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Our Treatment:</h4>
                <p className="text-sm text-gray-600">Specialized sweet gel baits and slow-acting insecticides to prevent colony fragmentation.</p>
              </div>
            </div>

            {/* Fire Ants */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-red-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Fire Ants</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Size:</strong> 2-6mm, reddish-brown color</p>
                <p><strong>Behavior:</strong> Aggressive, painful stings, outdoor colonies</p>
                <p><strong>Common Areas:</strong> Gardens, lawns, outdoor spaces</p>
                <p><strong>Risk:</strong> Medical concern for allergic individuals</p>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Our Treatment:</h4>
                <p className="text-sm text-gray-600">Professional-grade granular baits and mound treatment for safe, complete elimination.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Can&apos;t Identify Your Ant Species?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our expert technicians provide free ant species identification during inspection. 
                Different species require different treatment approaches for optimal results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Free Inspection
                </a>
                <a href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20help%20identifying%20ant%20species%20in%20my%20property" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  WhatsApp Photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process & Methods */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Ant Control Process
              <span className="block text-xl text-gray-600 font-normal mt-2">Step-by-Step Colony Elimination</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures complete ant colony destruction, not just temporary relief. 
              Every treatment is customized based on ant species, infestation level, and property layout.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Process Steps */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Inspection & Assessment</h3>
                  <p className="text-gray-700">Our certified technicians conduct a thorough 360-degree inspection to identify ant species, locate nesting sites, map feeding trails, and assess infestation severity. We also identify entry points and conducive conditions.</p>
                  <div className="mt-3 text-sm text-gray-600">
                    ✓ Species identification • ✓ Colony location • ✓ Entry point mapping • ✓ Risk assessment
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Treatment Plan</h3>
                  <p className="text-gray-700">Based on inspection findings, we develop a species-specific treatment strategy using the most effective methods. Our plans consider property size, family safety, pet presence, and long-term prevention needs.</p>
                  <div className="mt-3 text-sm text-gray-600">
                    ✓ Species-specific approach • ✓ Safety considerations • ✓ Timeline planning • ✓ Prevention strategy
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Treatment Application</h3>
                  <p className="text-gray-700">We apply advanced gel baits, liquid treatments, and targeted sprays using professional equipment. Our slow-acting formulations ensure worker ants carry the treatment back to the colony, eliminating the queen and entire nest.</p>
                  <div className="mt-3 text-sm text-gray-600">
                    ✓ Gel baiting systems • ✓ Trail treatments • ✓ Nest targeting • ✓ Entry point sealing
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring & Follow-up</h3>
                  <p className="text-gray-700">We monitor treatment effectiveness over 3 months with scheduled follow-ups. Our warranty includes free re-treatment if ants return. We also provide detailed prevention guidance to maintain long-term ant-free environment.</p>
                  <div className="mt-3 text-sm text-gray-600">
                    ✓ Progress monitoring • ✓ 3-month warranty • ✓ Free re-treatment • ✓ Prevention guidance
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Methods */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600">🎯</span>
                  </span>
                  Advanced Gel Baiting System
                </h3>
                <p className="text-gray-700 mb-4">Our primary method uses professional-grade gel baits that attract worker ants. The slow-acting formula allows ants to share food with the colony, ensuring queen and larvae elimination.</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Effectiveness:</strong> 99% colony elimination rate within 10-14 days</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600">🌿</span>
                  </span>
                  Eco-Friendly Solutions
                </h3>
                <p className="text-gray-700 mb-4">Child and pet-safe formulations using minimal environmental impact. Our treatments target only ants while being safe for beneficial insects and the environment.</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Safety:</strong> Approved by health authorities, safe for families</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-600">🔧</span>
                  </span>
                  Integrated Approach
                </h3>
                <p className="text-gray-700 mb-4">Combination of gel baits, liquid sprays, granular baits, and physical exclusion methods tailored to your specific ant problem and property requirements.</p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-800"><strong>Coverage:</strong> Indoor, outdoor, and perimeter protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve in Mumbai */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ant Control Services Across Mumbai
              <span className="block text-xl text-gray-600 font-normal mt-2">Professional Coverage in All Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Super Pest Control Mumbai provides comprehensive ant control services across all Mumbai neighborhoods, suburbs, and commercial areas. Our local expertise ensures faster response times and better understanding of area-specific ant problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* South Mumbai */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm">S</span>
                South Mumbai
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Colaba & Fort</p>
                <p>• Marine Drive & Nariman Point</p>
                <p>• Churchgate & CST</p>
                <p>• Dadar & Parel</p>
                <p>• Worli & Lower Parel</p>
                <p>• Byculla & Grant Road</p>
              </div>
            </div>

            {/* Western Suburbs */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm">W</span>
                Western Suburbs
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Bandra & Khar</p>
                <p>• Santacruz & Vile Parle</p>
                <p>• Andheri East & West</p>
                <p>• Juhu & Versova</p>
                <p>• Goregaon & Malad</p>
                <p>• Borivali & Kandivali</p>
              </div>
            </div>

            {/* Eastern Suburbs */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm">E</span>
                Eastern Suburbs
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Chembur & Ghatkopar</p>
                <p>• Kurla & Vidyavihar</p>
                <p>• Mulund & Bhandup</p>
                <p>• Powai & Vikhroli</p>
                <p>• Thane West & East</p>
                <p>• Dombivli & Kalyan</p>
              </div>
            </div>

            {/* Navi Mumbai */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm">N</span>
                Navi Mumbai
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Vashi & Nerul</p>
                <p>• CBD Belapur & Kharghar</p>
                <p>• Airoli & Ghansoli</p>
                <p>• Panvel & New Panvel</p>
                <p>• Kamothe & Ulwe</p>
                <p>• Taloja & Dronagiri</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 Quick Response Times Across Mumbai
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2-4 Hours</div>
                  <p className="text-gray-700">Emergency Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Same Day</div>
                  <p className="text-gray-700">Regular Service Booking</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-gray-700">Customer Support</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                  Book Service in Your Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ants Are Attracted to Mumbai Homes */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Are Ants So Common in Mumbai?
                <span className="block text-xl text-gray-600 font-normal mt-2">Understanding the Root Causes</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🌧️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tropical Climate</h3>
                    <p className="text-gray-700">Mumbai&apos;s warm, humid climate with monsoon seasons creates perfect breeding conditions for ants. High humidity and temperature accelerate ant reproduction cycles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Dense Urban Living</h3>
                    <p className="text-gray-700">High-rise buildings and compact living spaces create shared walls and common areas where ant colonies can easily spread between units through plumbing and electrical conduits.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🍯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Abundant Food Sources</h3>
                    <p className="text-gray-700">Kitchen waste, food spills, and improper storage provide constant food sources. Even tiny crumbs can sustain large ant colonies for weeks.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">💧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Availability</h3>
                    <p className="text-gray-700">Leaky pipes, water storage areas, and humid bathrooms provide essential water sources that ants need for survival and colony expansion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🔍 Common Ant Entry Points in Mumbai Homes
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚪 Doors & Windows</h4>
                  <p className="text-sm text-gray-600">Gaps under doors, window frames, and weatherstripping provide easy access routes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🔌 Electrical Outlets</h4>
                  <p className="text-sm text-gray-600">Wall outlets and electrical conduits create hidden highways for ant movement.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚰 Plumbing Areas</h4>
                  <p className="text-sm text-gray-600">Pipes penetrations, sink areas, and bathroom fixtures offer both entry and water sources.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🧱 Wall Cracks</h4>
                  <p className="text-sm text-gray-600">Foundation cracks, wall joints, and expansion gaps allow ant colony establishment.</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">Need help identifying entry points?</p>
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                  Free Entry Point Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Risks & Urgency */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Health Risks of Ant Infestations
              <span className="block text-xl text-gray-600 font-normal mt-2">Why Immediate Action Is Important</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While ants may seem harmless, untreated infestations pose serious health and property risks. Understanding these dangers helps prioritize professional ant control treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Health Concerns */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Concerns</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Disease Transmission</h4>
                  <p className="text-gray-600 text-sm">Ants carry bacteria from garbage areas to food preparation surfaces, potentially spreading salmonella, E.coli, and other pathogens.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Food Contamination</h4>
                  <p className="text-gray-600 text-sm">Ants contaminate stored food, making it unsafe for consumption and leading to potential food poisoning.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Allergic Reactions</h4>
                  <p className="text-gray-600 text-sm">Some ant species can bite or sting, causing allergic reactions, especially dangerous for sensitive individuals.</p>
                </div>
              </div>
            </div>

            {/* Property Damage */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Damage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Structural Issues</h4>
                  <p className="text-gray-600 text-sm">Carpenter ants can damage wooden structures, while other species create extensive underground tunnel systems.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Electrical Problems</h4>
                  <p className="text-gray-600 text-sm">Ants can damage electrical wiring and equipment, potentially causing shorts and fire hazards.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Garden Destruction</h4>
                  <p className="text-gray-600 text-sm">Some ant species protect aphids that damage plants, while others directly harm roots and stems.</p>
                </div>
              </div>
            </div>

            {/* Quality of Life */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">😟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality of Life</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Stress & Anxiety</h4>
                  <p className="text-gray-600 text-sm">Constant ant presence creates stress, especially in kitchens and bedrooms where people should feel comfortable.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sleep Disruption</h4>
                  <p className="text-gray-600 text-sm">Ant trails in bedrooms and bathrooms disrupt peaceful living and can cause sleep disturbances.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Embarrassment</h4>
                  <p className="text-gray-600 text-sm">Visible ant infestations can be embarrassing when entertaining guests or family members.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">🚨 Don&apos;t Wait - Act Now!</h3>
              <p className="text-xl mb-6">
                Every day you delay treatment, ant colonies grow stronger and larger. What starts as a small problem can quickly become a major infestation affecting your entire building.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">24-48 Hours</div>
                  <p className="text-sm">Colony size can double</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">1 Week</div>
                  <p className="text-sm">Multiple satellite colonies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">1 Month</div>
                  <p className="text-sm">Building-wide infestation</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  📞 Emergency Ant Control
                </a>
                <a href="https://wa.me/918097941077?text=Hi%2C%20I%20have%20an%20urgent%20ant%20problem%20that%20needs%20immediate%20attention" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional Treatment */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              DIY vs Professional Ant Control
              <span className="block text-xl text-gray-600 font-normal mt-2">Why Professional Treatment Works Better</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many Mumbai residents try DIY methods first, but most fail to eliminate the root cause. Here&apos;s why professional ant control is more effective and cost-efficient in the long run.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* DIY Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">❌</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DIY Methods</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">❌ Common DIY Failures:</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• <strong>Chalk Lines & Powders:</strong> Only repel visible ants, don&apos;t eliminate colonies</p>
                    <p>• <strong>Home Remedies:</strong> Coffee grounds, cinnamon - temporary deterrents at best</p>
                    <p>• <strong>Store-Bought Sprays:</strong> Kill surface ants but colonies remain intact</p>
                    <p>• <strong>Ant Baits:</strong> Often wrong formulation for specific ant species</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">⚠️ Why DIY Often Fails:</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>• Treats symptoms, not root cause</p>
                    <p>• Wrong product for ant species</p>
                    <p>• Incomplete coverage of affected areas</p>
                    <p>• No follow-up or monitoring</p>
                    <p>• Can scatter colonies (budding)</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Result:</strong> 90% of DIY treatments fail within 2-4 weeks, often making the problem worse by causing colony fragmentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Treatment */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Treatment</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">✅ Professional Advantages:</h4>
                  <div className="space-y-3 text-gray-700">
                    <p>• <strong>Species Identification:</strong> Correct treatment for specific ant type</p>
                    <p>• <strong>Colony Targeting:</strong> Eliminates queen and entire colony structure</p>
                    <p>• <strong>Professional Products:</strong> Commercial-grade, more effective formulations</p>
                    <p>• <strong>Comprehensive Coverage:</strong> Indoor, outdoor, and perimeter treatment</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Why Our Method Works:</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>• Systematic inspection and assessment</p>
                    <p>• Species-specific treatment protocols</p>
                    <p>• Professional-grade gel baiting systems</p>
                    <p>• 3-month monitoring and warranty</p>
                    <p>• Prevention and exclusion advice</p>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Result:</strong> 99% success rate with complete colony elimination within 10-14 days and 3-month warranty protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💰 Cost Comparison: DIY vs Professional</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-4">DIY Total Cost (6 months)</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Multiple store products: ₹800-1,500</p>
                  <p>• Time investment: 20+ hours</p>
                  <p>• Repeated treatments: ₹500-1,000</p>
                  <p>• Food contamination losses: ₹1,000+</p>
                  <p>• <strong className="text-red-600">Total: ₹2,300-3,500+</strong></p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>❌ No guarantee of success</p>
                  <p>❌ Problem often returns</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">Professional Treatment</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• One-time professional service: ₹1,200</p>
                  <p>• Complete colony elimination</p>
                  <p>• 3-month warranty included</p>
                  <p>• Expert advice and prevention</p>
                  <p>• <strong className="text-green-600">Total: ₹1,200</strong></p>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>✅ 99% success guarantee</p>
                  <p>✅ Long-term protection</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Save Money & Time:</strong> Professional treatment costs less than failed DIY attempts
              </p>
              <a href="tel:+918097941077" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all">
                Get Professional Treatment Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Ant Problems in Mumbai */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Seasonal Ant Activity in Mumbai
              <span className="block text-xl text-gray-600 font-normal mt-2">When Are Ants Most Active?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding Mumbai&apos;s seasonal ant patterns helps you prepare and take preventive action. Our treatment schedules are optimized for maximum effectiveness during peak activity periods.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Pre-Monsoon */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">☀️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Pre-Monsoon</h3>
                <p className="text-sm text-gray-600">March - May</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700"><strong>Activity Level:</strong> High</p>
                <p className="text-sm text-gray-700"><strong>Behavior:</strong> Colony expansion and food hoarding</p>
                <p className="text-sm text-gray-700"><strong>Common Areas:</strong> Kitchens, water sources</p>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <p className="text-xs text-orange-800"><strong>Best Treatment Time:</strong> Ideal for preventive treatment before peak season</p>
                </div>
              </div>
            </div>

            {/* Monsoon */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🌧️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Monsoon</h3>
                <p className="text-sm text-gray-600">June - September</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700"><strong>Activity Level:</strong> Very High</p>
                <p className="text-sm text-gray-700"><strong>Behavior:</strong> Seeking shelter indoors</p>
                <p className="text-sm text-gray-700"><strong>Common Areas:</strong> Dry indoor spaces</p>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-xs text-blue-800"><strong>Peak Problem Time:</strong> Most service calls during this period</p>
                </div>
              </div>
            </div>

            {/* Post-Monsoon */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🍂</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Post-Monsoon</h3>
                <p className="text-sm text-gray-600">October - November</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700"><strong>Activity Level:</strong> High</p>
                <p className="text-sm text-gray-700"><strong>Behavior:</strong> Colony rebuilding and nesting</p>
                <p className="text-sm text-gray-700"><strong>Common Areas:</strong> Wall cavities, gardens</p>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-xs text-green-800"><strong>Treatment Focus:</strong> Targeting new colonies before winter</p>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">❄️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Winter</h3>
                <p className="text-sm text-gray-600">December - February</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700"><strong>Activity Level:</strong> Moderate</p>
                <p className="text-sm text-gray-700"><strong>Behavior:</strong> Reduced activity, indoor hiding</p>
                <p className="text-sm text-gray-700"><strong>Common Areas:</strong> Warm indoor locations</p>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-xs text-gray-800"><strong>Maintenance Time:</strong> Good for deep treatment and prevention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-orange-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🗓️ Optimal Treatment Timing</h3>
              <p className="text-lg text-gray-700 mb-6">
                The best time for ant control treatment is <strong>before peak season</strong> (March-April) or during <strong>post-monsoon</strong> (October-November) when colonies are vulnerable.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🌟 Preventive Treatment (March-April)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Prevents monsoon infestations</li>
                    <li>• More effective colony elimination</li>
                    <li>• Lower ant population</li>
                    <li>• Better long-term results</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Corrective Treatment (October-November)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Eliminates established colonies</li>
                    <li>• Prevents winter nesting</li>
                    <li>• Prepares for next season</li>
                    <li>• Comprehensive cleanup</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Book your ant control treatment at the right time for maximum effectiveness!</p>
              <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all">
                Schedule Seasonal Treatment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of professionalism and safety in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed by Government</h3>
              <p className="text-gray-600 text-sm">Maharashtra State Pest Control License</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Certified</h3>
              <p className="text-gray-600 text-sm">Environment-friendly practices certified</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Top Rated Service</h3>
              <p className="text-gray-600 text-sm">4.9/5 rating from 500+ customers</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600 text-sm">Advanced safety training and protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Rid of Ants?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ satisfied customers who trust Super Pest Control Mumbai for effective ant elimination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Free Inspection
            </Link>
            <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              📞 Call +91 80979-41077
            </a>
          </div>
        </div>
      </section>

      {/* All Pest Control Services Section */}
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

          {/* Services Grid - All 17 Services */}
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
                  Complete anti-termite treatment with pre & post-construction solutions.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600">₹3,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
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
                  alt="Cockroach Control Mumbai - Professional Roach Extermination"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  Advanced gel baiting and spray treatments for German cockroaches.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">₹1,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
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
                  Comprehensive rat and mouse control with trapping and baiting methods.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">₹2,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
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
                  Advanced heat treatment and chemical methods for bed bug elimination.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">₹2,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/bed-bug-control-mumbai" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Ant Control - Highlighted */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-green-400 hover:border-green-500 relative">
              <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg text-sm font-bold">
                CURRENT SERVICE
              </div>
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
                  Targeted ant colony elimination with eco-friendly baiting systems.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">₹1,200</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/ant-control-mumbai" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  You&apos;re Here
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
                  Comprehensive mosquito management with breeding source elimination.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">₹1,800</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
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
                  alt="Spider Control Mumbai - Professional Spider Extermination"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Safe Treatment
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  Spider Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Effective spider control with web removal and preventive treatments.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">₹1,300</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
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
                  alt="Lizard Control Mumbai - Professional Lizard Repellent"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Non-Toxic
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Lizard Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Safe and humane lizard control with natural repellent methods.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-teal-600">₹1,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/lizard-control-mumbai" className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Fly Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/fly-control-mumbai.webp" 
                  alt="Fly Control Mumbai - Professional Fly Management"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Quick Results
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  Fly Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional fly control with traps and breeding site elimination.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-600">₹1,400</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/fly-control-mumbai" className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Bees Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/bees-control-mumbai.webp" 
                  alt="Bees Control Mumbai - Professional Bee Removal"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Safe Removal
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Bees Control Mumbai
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Safe bee removal and hive relocation by certified professionals.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-amber-600">₹2,200</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/bees-control-mumbai" className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Flying Insect Management */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/flying-insect-management-mumbai.webp" 
                  alt="Flying Insect Management Mumbai - Professional Control"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Comprehensive
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Flying Insect Management
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete flying insect control including flies, moths, and gnats.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-600">₹1,600</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/flying-insect-management-mumbai" className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Commercial Pest Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-slate-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/commercial-pest-control-mumbai.webp" 
                  alt="Commercial Pest Control Mumbai - Business Solutions"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Business Solutions
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors">
                  Commercial Pest Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Customized pest management solutions for businesses and offices.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-600">₹5,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/commercial-pest-control-mumbai" className="block w-full bg-slate-600 hover:bg-slate-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Residential Pest Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-rose-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/residential-pest-control-mumbai.webp" 
                  alt="Residential Pest Control Mumbai - Home Solutions"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Home Protection
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  Residential Pest Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete home pest protection with family-safe treatments.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-rose-600">₹2,500</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/residential-pest-control-mumbai" className="block w-full bg-rose-600 hover:bg-rose-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Commercial Fumigation */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-violet-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/commercial-fumigation-mumbai.webp" 
                  alt="Commercial Fumigation Mumbai - Industrial Treatment"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Industrial Grade
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                  Commercial Fumigation
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Industrial fumigation services for warehouses and large facilities.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-violet-600">₹8,000</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/commercial-fumigation-mumbai" className="block w-full bg-violet-600 hover:bg-violet-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Wood Borer Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/wood-borer-control-mumbai.webp" 
                  alt="Wood Borer Control Mumbai - Furniture Protection"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Furniture Protection
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
                  Wood Borer Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Protect wooden furniture and structures from borer damage.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-700">₹1,800</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/wood-borer-control-mumbai" className="block w-full bg-orange-700 hover:bg-orange-800 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Get Quote Now
                </Link>
              </div>
            </div>

            {/* Silverfish Control */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/services/silverfish-control-mumbai.webp" 
                  alt="Silverfish Control Mumbai - Paper & Fabric Protection"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Document Protection
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  Silverfish Control
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Protect books, documents, and fabrics from silverfish damage.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-600">₹1,100</span>
                  <span className="text-sm text-gray-500">Starting Price</span>
                </div>
                <Link href="/silverfish-control-mumbai" className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
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

      {/* Enhanced FAQ Section - Same as Home Page */}
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
              Got Questions About Ant Control?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Ant Control
              </span>
              <br />
              <span className="text-gray-900">Questions & Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get expert answers about our professional ant control services in Mumbai. Everything you need to know about effective ant elimination.
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
                Still Have Questions About Ant Control?
              </h3>
              <p className="text-gray-600 mb-6">
                Our ant control experts are here to help! Get personalized advice for your specific ant problems in Mumbai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  📞 Call Ant Expert Now
                </a>
                <a href="https://wa.me/918097941077?text=Hi%2C%20I%20have%20questions%20about%20ant%20control%20services" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
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
