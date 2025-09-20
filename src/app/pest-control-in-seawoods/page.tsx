'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for Seawoods with natural language questions
const faqData = [
  {
    question: "What is the best coastal pest control service in Seawoods, Navi Mumbai?",
    answer: "Super Pest Control is the #1 rated coastal pest control service in Seawoods, Navi Mumbai, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Seawoods&apos; coastal residential and commercial areas."
  },
  {
    question: "How much does coastal pest control cost in Seawoods, Navi Mumbai?",
    answer: "Coastal pest control in Seawoods costs between ₹2,200 to ₹6,800 depending on the type of pest, property size, and treatment required. Super Pest Control offers competitive coastal area pricing, comprehensive inspections, and transparent costs with no hidden charges for Seawoods properties."
  },
  {
    question: "Which pest control is best for coastal homes in Seawoods?",
    answer: "Super Pest Control Seawoods provides the most effective coastal cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Seawoods&apos; coastal environment with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Seawoods coastal homes permanently?",
    answer: "Professional termite control in Seawoods involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Seawoods coastal properties."
  },
  {
    question: "Are pest control chemicals safe for coastal environments in Seawoods?",
    answer: "Yes, Super Pest Control uses only eco-friendly, environmentally-safe, and coastal-appropriate pest control chemicals approved by regulatory authorities. All treatments in Seawoods follow strict safety protocols and are completely safe for coastal residential and commercial environments."
  },
  {
    question: "Do you provide emergency pest control services in Seawoods?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Seawoods with same-day service availability. Our rapid response team covers all areas including coastal apartments, waterfront complexes, and commercial areas for urgent pest situations."
  }
];

export default function PestControlSeawoods() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Schema for FAQ and Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Pest Control Seawoods",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional coastal pest control services in Seawoods, Navi Mumbai. Expert solutions for cockroaches, termites, rodents, and all pests in coastal residential and commercial areas. 24/7 emergency service with eco-friendly treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Seawoods, Navi Mumbai",
              "addressLocality": "Seawoods",
              "addressRegion": "Maharashtra",
              "postalCode": "400706",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0218,
              "longitude": 73.0168
            },
            "telephone": "+91-80979-41077",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Seawoods and surrounding Navi Mumbai coastal areas"
            },
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "700"
            }
          })
        }}
      />
      
      {/* Ultra Modern E10-Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 via-teal-600 to-blue-700 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-teal-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-blue-600 font-medium -mt-1 opacity-70 hidden sm:block">Coastal Area</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-50/70 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Home</span>
                </Link>
                <Link href="/about" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About</span>
                </Link>
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Services</span>
                </Link>
                <Link href="/contact" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Contact</span>
                </Link>
              </div>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">📞 +91 80979-41077</div>
                <div className="text-xs text-gray-600">24/7 Emergency Service</div>
              </div>
              <Link href="tel:+918097941077" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Coastal Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link href="/" className="block py-2 text-gray-900 font-medium">Home</Link>
                <Link href="/about" className="block py-2 text-gray-900 font-medium">About</Link>
                <Link href="/services" className="block py-2 text-gray-900 font-medium">Services</Link>
                <Link href="/contact" className="block py-2 text-gray-900 font-medium">Contact</Link>
                <Link href="tel:+918097941077" className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold">
                  📞 Call Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Mumbai Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/location/mumbai.webp"
            alt="Mumbai cityscape background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-blue-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Coastal Pest Control Services in 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Seawoods, Navi Mumbai
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Professional pest management solutions for Seawoods&apos; coastal residential and commercial areas
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              24/7 emergency pest control services across Seawoods coastal apartments and waterfront complexes with eco-friendly treatments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="tel:+918097941077" className="group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  📞 Call Now: +91 80979-41077
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
              <Link href="#quote" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  Get Coastal Quote
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">700+</div>
                <div className="text-sm text-gray-300">Coastal Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-300">Eco-Safe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">5★</div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Coastal Pest Control Services in Seawoods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coastal pest management solutions tailored for Seawoods&apos; waterfront residential and commercial environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Coastal Cockroach Control",
                description: "Advanced gel baiting and targeted treatments for Seawoods' coastal residential and commercial areas",
                icon: "🪳",
                price: "₹2,200+"
              },
              {
                title: "Waterfront Termite Treatment",
                description: "Comprehensive soil and wood treatment with 5-year warranty for Seawoods coastal homes and buildings",
                icon: "🐜",
                price: "₹4,400+"
              },
              {
                title: "Coastal Rodent Control",
                description: "Safe and effective mice and rat control for Seawoods' waterfront apartments and commercial properties",
                icon: "🐭",
                price: "₹2,600+"
              },
              {
                title: "Seaside Bed Bug Treatment",
                description: "Heat treatment and chemical solutions for complete bed bug elimination in Seawoods coastal properties",
                icon: "🛏️",
                price: "₹3,000+"
              },
              {
                title: "Coastal Mosquito Control",
                description: "Breeding source elimination and targeted spraying for Seawoods' waterfront residential areas",
                icon: "🦟",
                price: "₹2,000+"
              },
              {
                title: "Complete Coastal Pest Control",
                description: "Full-service treatment for all common pests in Seawoods' coastal environment",
                icon: "🐛",
                price: "₹3,400+"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link href="tel:+918097941077" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about coastal pest control services in Seawoods, Navi Mumbai
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full p-3 font-bold text-lg min-w-[3rem] h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    Q
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full p-3 font-bold text-lg min-w-[3rem] h-12 flex items-center justify-center">
                        A
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="quote" className="py-20 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Coastal Home in Seawoods?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Super Pest Control today for immediate, professional coastal pest management solutions in Seawoods, Navi Mumbai
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="tel:+918097941077" className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                📞 Call: +91 80979-41077
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </Link>
            <Link href="#" className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                💬 WhatsApp Us
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">24/7 Coastal Emergency</h3>
              <p className="opacity-90">Round-the-clock coastal pest control in Seawoods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Fully Licensed & Insured</h3>
              <p className="opacity-90">Certified coastal professionals with full coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Coastal Guarantee</h3>
              <p className="opacity-90">100% satisfaction or money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🐛</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">Super Pest Control</div>
                  <div className="text-blue-400 text-sm">Coastal Area</div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Professional coastal pest control services in Seawoods, Navi Mumbai. We provide eco-friendly, safe, and effective pest management solutions for waterfront residential and commercial areas.
              </p>
              <div className="text-blue-400 font-semibold">
                📞 +91 80979-41077 | Available 24/7
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Coastal Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Coastal Cockroach Control</li>
                <li>Waterfront Termite Treatment</li>
                <li>Coastal Rodent Control</li>
                <li>Seaside Bed Bug Treatment</li>
                <li>Coastal Mosquito Control</li>
                <li>Complete Coastal Pest Control</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Coverage Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Coastal Apartments</li>
                <li>Waterfront Complexes</li>
                <li>Seaside Homes</li>
                <li>Commercial Areas</li>
                <li>Beachfront Properties</li>
                <li>Marina Areas</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Super Pest Control Seawoods. All rights reserved. | Professional coastal pest control services in Seawoods, Navi Mumbai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
