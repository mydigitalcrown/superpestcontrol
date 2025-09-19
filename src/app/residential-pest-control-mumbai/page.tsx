'use client';

import Link from "next/link";
import { useState } from "react";

export default function ResidentialPestControlMumbai() {
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
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Residential Pest Control Services in <span className="text-orange-400">Mumbai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Protect your family and home with safe, effective pest control solutions. Family-friendly, eco-safe, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +91 80979-41077
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Residential Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Mumbai Families Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              We understand the importance of keeping your family safe while effectively eliminating pests from your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Family & Pet Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                All our treatments are eco-friendly and safe for your family members, including children and pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive protection for all areas of your home including bedrooms, kitchen, living areas, and storage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Prevention</h3>
              <p className="text-gray-600 leading-relaxed">
                Not just treatment, but prevention strategies to keep your home pest-free for months to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Home Pest Control Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Every area of your home deserves protection from unwanted pests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🍽️ Kitchen & Dining Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Cockroach elimination</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Ant control & prevention</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Food storage protection</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Safe for food areas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛏️ Bedrooms & Living Rooms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Bed bug treatment</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Mosquito control</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Spider removal</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Carpet & furniture protection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚿 Bathrooms & Wet Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Drain fly control</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Silverfish elimination</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Moisture pest control</li>
                <li className="flex items-center"><span className="text-orange-600 mr-2">✓</span> Mold prevention</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏠 Structural & Foundation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span> Termite protection</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span> Rodent control</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span> Wood borer treatment</li>
                <li className="flex items-center"><span className="text-purple-600 mr-2">✓</span> Foundation sealing</li>
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
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From inspection to prevention, we make pest control easy for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Free Inspection</h3>
              <p className="text-gray-600">Thorough assessment of your home to identify pest issues and entry points.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Custom Plan</h3>
              <p className="text-gray-600">Personalized treatment plan designed specifically for your home and family needs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Safe Treatment</h3>
              <p className="text-gray-600">Family-safe application of eco-friendly pest control solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Follow-up</h3>
              <p className="text-gray-600">Regular monitoring and maintenance to ensure long-term pest prevention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free home inspection and customized pest control quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918097941077" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              📞 Call +91 80979-41077
            </a>
            <a href="tel:+918097941076" className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors">
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
            <p className="text-gray-400 mb-4">Family-Safe Residential Pest Control Services</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>&copy; 2025 Super Pest Control Mumbai</span>
              <span>Licensed & Certified</span>
              <span>1000+ Happy Families</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
