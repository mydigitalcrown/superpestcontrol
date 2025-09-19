'use client';

import Link from "next/link";
import { useState } from "react";

export default function CommercialFumigationMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1">Mumbai&apos;s #1 Choice</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</Link>
              <Link href="/commercial" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Commercial</Link>
              <Link href="/residential" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Residential</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</Link>
              <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                📞 Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Home</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">About</Link>
                <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Services</Link>
                <Link href="/commercial" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Commercial</Link>
                <Link href="/residential" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Residential</Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
                <a href="tel:+918097941077" className="block mx-3 my-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center">
                  📞 Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commercial Fumigation Services in <span className="text-orange-400">Mumbai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Large-scale fumigation solutions for warehouses, factories, and commercial properties. Professional, safe, and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +91 80979-41077
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Fumigation Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fumigation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Fumigation Experts
            </h2>
            <p className="text-xl text-gray-600">
              When regular pest control isn&apos;t enough, our commercial fumigation services provide complete pest elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large-Scale Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized equipment and techniques for warehouses, factories, and large commercial properties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Elimination</h3>
              <p className="text-gray-600 leading-relaxed">
                100% pest elimination including eggs, larvae, and adult pests in all life stages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art fumigation equipment and approved chemicals for maximum effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fumigation Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Fumigation Services
            </h2>
            <p className="text-xl text-gray-600">
              We provide specialized fumigation solutions for different types of commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏭 Industrial Fumigation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Warehouse pest elimination</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Factory floor treatment</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Storage facility fumigation</li>
                <li className="flex items-center"><span className="text-red-600 mr-2">✓</span> Equipment protection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📦 Storage & Logistics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Cargo container fumigation</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Cold storage treatment</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Distribution center protection</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Import/export compliance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 Commercial Buildings</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Office building treatment</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Retail space fumigation</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Shopping mall pest control</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Multi-story buildings</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🍽️ Food Industry</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Food processing plants</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Restaurant chains</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Food storage facilities</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> FSSAI compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Fumigation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach ensuring complete pest elimination with minimal business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Site Assessment</h3>
              <p className="text-gray-600">Detailed evaluation of the property, pest infestation level, and fumigation requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Custom Plan</h3>
              <p className="text-gray-600">Customized fumigation strategy including timeline, safety measures, and chemical selection.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Safe Fumigation</h3>
              <p className="text-gray-600">Professional application using advanced equipment and approved fumigants.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Clearance</h3>
              <p className="text-gray-600">Post-fumigation safety clearance and documentation for regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety & Regulatory Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow all safety protocols and regulatory requirements for commercial fumigation in Mumbai.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Safety First</h3>
                  <p className="text-gray-600 text-sm">Strict safety protocols for personnel and property protection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Licensed</h3>
                  <p className="text-gray-600 text-sm">Fully licensed and certified for commercial fumigation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-gray-600 text-sm">Complete fumigation certificates and compliance reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need Professional Fumigation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for a comprehensive fumigation assessment and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918097941077" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              📞 Call +91 80979-41077
            </a>
            <a href="tel:+918097941076" className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors">
              📞 Call +91 80979-41076
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold">Super Pest Control Mumbai</span>
            </div>
            <p className="text-gray-400 mb-4">Professional Commercial Fumigation Services</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>&copy; 2025 Super Pest Control Mumbai</span>
              <span>Licensed & Certified</span>
              <span>Industrial Grade Solutions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
