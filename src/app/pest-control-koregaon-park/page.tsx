'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for Koregaon Park with natural language questions
const faqData = [
  {
    question: "What is the best pest control service in Koregaon Park, Pune?",
    answer: "Super Pest Control is the #1 rated pest control service in Koregaon Park, Pune, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Koregaon Park&apos;s luxury residential areas and upscale commercial establishments."
  },
  {
    question: "How much does pest control cost in Koregaon Park, Pune?",
    answer: "Pest control in Koregaon Park costs between ₹3,800 to ₹13,000 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for Koregaon Park luxury properties."
  },
  {
    question: "Which pest control is best for cockroaches in Koregaon Park?",
    answer: "Super Pest Control Koregaon Park provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Koregaon Park&apos;s luxury residential and upscale commercial environment with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Koregaon Park homes permanently?",
    answer: "Professional termite control in Koregaon Park involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Koregaon Park."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Koregaon Park?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments in Koregaon Park follow strict safety protocols and are completely safe for families and luxury communities."
  },
  {
    question: "Do you provide emergency pest control services in Koregaon Park?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Koregaon Park with same-day service availability. Our rapid response team covers all areas including North Main Road, Boat Club Road, and surrounding upscale localities for urgent pest situations."
  }
];

export default function PestControlKoregaonPark() {
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
            "name": "Super Pest Control Koregaon Park",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional pest control services in Koregaon Park, Pune. Expert solutions for cockroaches, termites, rodents, and all pests in luxury residential areas and upscale commercial establishments. 24/7 emergency service with eco-friendly treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Koregaon Park, Pune",
              "addressLocality": "Koregaon Park",
              "addressRegion": "Maharashtra",
              "postalCode": "411001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.5362,
              "longitude": 73.8937
            },
            "telephone": "+91-80979-41077",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Koregaon Park and surrounding Pune areas"
            },
            "priceRange": "₹₹₹₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "800"
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
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-emerald-600 font-medium -mt-1 opacity-70 hidden sm:block">Luxury Pune Elite</span>
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
              <Link href="tel:+918097941077" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Free Quote
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
                <Link href="tel:+918097941077" className="block w-full bg-emerald-500 text-white text-center py-3 rounded-lg font-semibold">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-emerald-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Pest Control Services in 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Koregaon Park, Pune
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Elite pest management solutions for Koregaon Park&apos;s luxury residential areas and upscale commercial establishments
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              24/7 emergency pest control services in North Main Road, Boat Club Road, and surrounding upscale localities with eco-friendly treatments and guaranteed results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="tel:+918097941077" className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  📞 Call Now: +91 80979-41077
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
              <Link href="#quote" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  Get Free Quote
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">800+</div>
                <div className="text-sm text-gray-300">Elite Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-sm text-gray-300">Emergency Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">5★</div>
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
              Our Pest Control Services in Koregaon Park
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest management solutions tailored for Koregaon Park&apos;s unique luxury residential and upscale commercial environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Cockroach Control",
                description: "Advanced gel baiting and targeted treatments for Koregaon Park's luxury residential areas and upscale commercial establishments",
                icon: "🪳",
                price: "₹3,800+"
              },
              {
                title: "Luxury Termite Treatment",
                description: "Comprehensive soil and wood treatment with 5-year warranty for Koregaon Park luxury homes and premium buildings",
                icon: "🐜",
                price: "₹8,200+"
              },
              {
                title: "Premium Rodent Control",
                description: "Safe and effective mice and rat control for Koregaon Park's luxury residential and upscale commercial properties",
                icon: "🐭",
                price: "₹4,200+"
              },
              {
                title: "Luxury Bed Bug Treatment",
                description: "Heat treatment and chemical solutions for complete bed bug elimination in Koregaon Park elite properties",
                icon: "🛏️",
                price: "₹4,800+"
              },
              {
                title: "Elite Mosquito Control",
                description: "Breeding source elimination and targeted spraying for Koregaon Park's luxury residential and upscale commercial areas",
                icon: "🦟",
                price: "₹3,200+"
              },
              {
                title: "Complete Elite Pest Control",
                description: "Full-service treatment for all common pests in Koregaon Park's diverse luxury residential and upscale commercial neighborhood",
                icon: "🐛",
                price: "₹5,800+"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">{service.price}</span>
                  <Link href="tel:+918097941077" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
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
              Get answers to common questions about pest control services in Koregaon Park, Pune
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full p-3 font-bold text-lg min-w-[3rem] h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    Q
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full p-3 font-bold text-lg min-w-[3rem] h-12 flex items-center justify-center">
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
      <section id="quote" className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Rid of Pests in Koregaon Park?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Super Pest Control today for immediate, professional pest management solutions in Koregaon Park, Pune
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="tel:+918097941077" className="group bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1">
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
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency</h3>
              <p className="opacity-90">Round-the-clock pest control services in Koregaon Park</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Licensed & Insured</h3>
              <p className="opacity-90">Certified professionals with insurance coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Satisfaction Guarantee</h3>
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🐛</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">Super Pest Control</div>
                  <div className="text-emerald-400 text-sm">Luxury Pune Elite</div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Professional pest control services in Koregaon Park, Pune. We provide eco-friendly, safe, and effective pest management solutions for luxury residential areas and upscale commercial establishments.
              </p>
              <div className="text-emerald-400 font-semibold">
                📞 +91 80979-41077 | Available 24/7
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Elite Cockroach Control</li>
                <li>Luxury Termite Treatment</li>
                <li>Premium Rodent Control</li>
                <li>Luxury Bed Bug Treatment</li>
                <li>Elite Mosquito Control</li>
                <li>Complete Elite Pest Control</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Coverage Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>North Main Road</li>
                <li>Boat Club Road</li>
                <li>Luxury Residentials</li>
                <li>Upscale Establishments</li>
                <li>Elite Communities</li>
                <li>Premium Commercial</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Super Pest Control Koregaon Park. All rights reserved. | Professional pest control services in Koregaon Park, Pune</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
