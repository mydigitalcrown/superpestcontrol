'use client';


import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for Bhayander with natural language questions
const faqData = [
  {
    question: "What is the best pest control service in Bhayander?",
    answer: "Super Pest Control is the #1 rated pest control service in Bhayander, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Bhayander&apos;s suburban residential communities and expanding commercial developments."
  },
  {
    question: "How much does pest control cost in Bhayander?",
    answer: "Pest control in Bhayander costs between ₹2,000 to ₹6,500 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for Bhayander properties."
  },
  {
    question: "Which pest control is best for cockroaches in Bhayander?",
    answer: "Super Pest Control Bhayander provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Bhayander&apos;s suburban environment and residential complexes with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Bhayander homes permanently?",
    answer: "Professional termite control in Bhayander involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Bhayander."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Bhayander?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments in Bhayander follow strict safety protocols and are completely safe for families and suburban communities."
  },
  {
    question: "Do you provide emergency pest control services in Bhayander?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Bhayander with same-day service availability. Our rapid response team covers all areas including residential societies, commercial establishments, and suburban complexes for urgent pest situations."
  }
];

export default function PestControlBhayander() {
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
            "name": "Super Pest Control Bhayander",
            "image": "https://superpestcontrol.vercel.app/images/logo.png",
            "description": "Professional pest control services in Bhayander, Mumbai. Expert solutions for cockroaches, termites, rodents, and all pests in suburban residential communities and expanding commercial developments. 24/7 emergency service with eco-friendly treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bhayander, Mumbai",
              "addressLocality": "Bhayander",
              "addressRegion": "Maharashtra",
              "postalCode": "401101",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.3017,
              "longitude": 72.8538
            },
            "telephone": "+91-80979-41077",
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Bhayander and surrounding areas"
            },
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }}
      />
      
      <Header subtitle="Professional Pest Control in Bhayander" />

      {/* Hero Section with Mumbai Background */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-orange-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              #1 Extended Mumbai Pest Control in Bhayander
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Pest Control
              </span>
              <br />
              <span className="text-white">Bhayander</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 md:px-0 drop-shadow-md">
              Professional pest control services in Bhayander, Mumbai. Expert solutions for cockroaches, termites, rodents, and all pests in suburban residential communities and expanding commercial developments. 24/7 emergency service with eco-friendly treatments.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center backdrop-blur-sm">
                Get Free Inspection
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
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">500+</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">24/7</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">4.9★</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Extended Mumbai Pest Control Services in Bhayander
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest management solutions for Bhayander&apos;s suburban community. Professional, safe, and effective treatments for this growing Extended Mumbai area with excellent connectivity and expanding residential infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-red-100">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/images/services/cockroach-control-mumbai.webp" 
                  alt="Cockroach Control Bhayander"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  Cockroach Control in Bhayander
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced cockroach elimination using gel baiting and targeted treatments for Bhayander&apos;s suburban residential societies and commercial developments.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">₹2,199+</span>
                  <a href="tel:+918097941077" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all">
                    Get Quote Now
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-yellow-100">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/images/services/termites-control-mumbai.webp" 
                  alt="Termite Control Bhayander"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Termite Control in Bhayander
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete termite protection with soil treatment and wood protection for Bhayander&apos;s expanding residential complexes and suburban buildings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">₹4,499+</span>
                  <a href="tel:+918097941077" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all">
                    Get Quote Now
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/images/services/rodents-control-mumbai.webp" 
                  alt="Rodent Control Bhayander"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  Rodent Control in Bhayander
                </h3>
                <p className="text-gray-600 mb-4">
                  Effective rat and mice control solutions for Bhayander&apos;s suburban residential societies and expanding commercial establishments.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-600">₹2,699+</span>
                  <a href="tel:+918097941077" className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all">
                    Get Quote Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Got Questions? We&apos;ve Got Answers!
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Bhayander Pest Control
              </span>
              <br />
              <span className="text-gray-900">Questions & Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your Bhayander pest problems solved! Get instant answers to the most common questions about our Extended Mumbai pest control services in this thriving suburban community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        Q
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className="ml-14">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                        A
                      </div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions about pest control in Bhayander?
              </h3>
              <p className="text-gray-600 mb-6">
                Our Bhayander Extended Mumbai pest control experts are here to help! Get personalized answers and free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  📞 Call Now: +91 80979-41077
                </a>
                <a href="#contact" className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                  💬 Chat with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to protect your Bhayander property?
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our Extended Mumbai pest control services in Bhayander today. Free inspection and consultation included.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Extended Mumbai Inspection in Bhayander</h3>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for immediate assistance and a free property inspection in Bhayander and suburban communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href="tel:+918097941077" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                📞 +91 80979-41077
              </a>
              <a href="mailto:info@superpestcontrol.in" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
                📧 Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Super Pest Control Bhayander</h3>
              <p className="text-gray-300 mb-4">
                Professional pest control services in Bhayander with 10+ years of experience. 
                Safe, effective, and eco-friendly solutions for this expanding Extended Mumbai suburban community.
              </p>
              <div className="flex space-x-4">
                <span>📞 +91 80979-41077</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Extended Mumbai Pest Control</li>
                <li>Cockroach Control</li>
                <li>Termite Treatment</li>
                <li>Rodent Control</li>
                <li>Bed Bug Treatment</li>
                <li>Residential Pest Control</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Suburban Communities</li>
                <li>Residential Societies</li>
                <li>Commercial Areas</li>
                <li>Railway Vicinity</li>
                <li>Extended Mumbai</li>
                <li>Growing Townships</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@superpestcontrol.com</p>
                <p>📞 +91 80979-41077</p>
                <p>🏢 Bhayander, Mumbai</p>
                <p>⏰ 24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Super Pest Control Bhayander. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
