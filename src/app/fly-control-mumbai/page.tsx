'use client';

import Link from "next/link";
import { useState } from "react";

export default function FlyControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
              <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">📞 Call Now</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400">
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
                <a href="tel:+918097941077" className="block mx-3 my-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center">📞 Call Now</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fly Control Services in <span className="text-orange-400">Mumbai</span></h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Professional fly elimination and prevention. Keep your property fly-free with our proven methods.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918097941077" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">📞 Call +91 80979-41077</a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Get Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🪰</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">House Fly Control</h3>
              <p className="text-gray-600">Eliminate common house flies and prevent breeding in your property.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🏪</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fruit Fly Treatment</h3>
              <p className="text-gray-600">Specialized treatment for fruit flies in kitchens and food areas.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mb-6"><span className="text-3xl">🛡️</span></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drain Fly Solutions</h3>
              <p className="text-gray-600">Complete drain fly elimination and prevention programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Eliminate Flies Completely</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918097941077" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">📞 Call +91 80979-41077</a>
            <a href="tel:+918097941076" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors">📞 Call +91 80979-41076</a>
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
                  {' '}Mumbai
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
