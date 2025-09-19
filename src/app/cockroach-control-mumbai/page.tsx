'use client';

import Link from "next/link";
import { useState } from "react";

export default function CockroachControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
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
              Cockroach Control Services in <span className="text-orange-400">Mumbai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Eliminate cockroaches completely from your home or business. Safe, effective, and long-lasting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +91 80979-41077
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Treatment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Cockroach Elimination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🪳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">German Cockroach</h3>
              <p className="text-gray-600">Specialized treatment for the most common household cockroach species.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Treatment</h3>
              <p className="text-gray-600">Food-safe treatments for kitchen and dining areas.</p>
            </div>

            <div className="bg-gradient-to-br from-brown-50 to-yellow-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚿</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bathroom Control</h3>
              <p className="text-gray-600">Moisture area treatment for complete cockroach elimination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Rid of Cockroaches Today
          </h2>
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
            <p className="text-gray-400 mb-4">Professional Cockroach Control Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
