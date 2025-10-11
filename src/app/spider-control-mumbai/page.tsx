'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: "How do I identify different types of spiders in Mumbai?",
    answer: "Common spiders in Mumbai include house spiders, jumping spiders, and huntsman spiders. Look for web patterns, size, and behavior. Our experts can identify species and determine the best treatment approach."
  },
  {
    question: "Are spider control treatments safe for my family?",
    answer: "Yes, we use eco-friendly, WHO-approved pesticides that are safe for humans and pets. Our targeted treatments focus on spider hideouts while ensuring your family's safety."
  },
  {
    question: "How long does spider control treatment last?",
    answer: "Our professional spider control treatments typically provide protection for 3-6 months. We offer follow-up services and preventive measures to maintain a spider-free environment."
  },
  {
    question: "What attracts spiders to my Mumbai home?",
    answer: "Spiders are attracted to insects (their food), dark corners, moisture, clutter, and outdoor lighting that draws insects. We address these factors as part of our comprehensive treatment."
  },
  {
    question: "Do you provide spider web removal service?",
    answer: "Yes, our service includes complete spider web removal from all accessible areas, along with treatment to prevent new web formation and spider re-infestation."
  }
];

export default function SpiderControlMumbai() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Spider Control Services Mumbai",
            "description": "Professional spider control and web removal services in Mumbai. Safe and effective solutions for all types of spiders with guaranteed results.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Super Pest Control Mumbai",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-80979-41077"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mumbai"
            }
          })
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐛</span>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Super Pest Control</div>
                <div className="text-xs text-orange-600">Mumbai&apos;s #1 Choice</div>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:+918097941077" className="text-sm font-semibold text-orange-600">+91 80979-41077</a>
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/services/spider-control-mumbai.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Spider Control in <span className="text-orange-300">Mumbai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Complete spider removal and web cleaning services. Safe, effective treatments for all spider species in Mumbai homes and offices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="tel:+918097941077" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                📞 Call Now - Free Inspection
              </Link>
              <Link href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20spider%20control%20service%20in%20Mumbai.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                💬 WhatsApp Now
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🕷️ All Species</h3>
                <p>Treatment for all types of spiders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🌿 Safe Methods</h3>
                <p>Eco-friendly and family-safe treatments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🕸️ Web Removal</h3>
                <p>Complete web cleaning included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Spider Control Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional spider removal services covering all common species found in Mumbai properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">House Spider Control</h3>
              <p className="text-gray-600 mb-4">Treatment for common house spiders, cellar spiders, and web-building species in homes.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Corner and ceiling treatment</li>
                <li>• Web removal and cleaning</li>
                <li>• Entry point sealing</li>
                <li>• Long-lasting protection</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">₹1,500-3,000</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Spider Control</h3>
              <p className="text-gray-600 mb-4">Professional spider control for offices, shops, and commercial spaces.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Comprehensive space treatment</li>
                <li>• Regular maintenance plans</li>
                <li>• Minimal business disruption</li>
                <li>• Professional appearance maintenance</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">₹3,000-8,000</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🕸️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Removal Service</h3>
              <p className="text-gray-600 mb-4">Complete spider web cleaning and removal from all accessible areas.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• High-reach web removal</li>
                <li>• Corner and crevice cleaning</li>
                <li>• Preventive spray application</li>
                <li>• Regular cleaning schedules</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600">₹800-2,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Spider Control Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach for complete spider elimination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Inspection</h3>
              <p className="text-gray-600">Identify spider species, hiding spots, and entry points</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🕸️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Web Removal</h3>
              <p className="text-gray-600">Complete cleaning of existing webs and egg sacs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Treatment</h3>
              <p className="text-gray-600">Targeted application of safe, effective spider control products</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Prevention</h3>
              <p className="text-gray-600">Sealing entry points and applying preventive barriers</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about spider control
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className={`text-2xl transform transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Professional Spider Control Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Safe and effective spider removal with web cleaning service. Contact us for a free inspection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:+918097941077" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              📞 Call +91 80979-41077
            </Link>
            <Link href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20spider%20control%20service%20in%20Mumbai.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              💬 WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐛</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Super Pest Control</div>
                  <div className="text-xs text-orange-400">Mumbai&apos;s #1 Choice</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Professional pest control services in Mumbai with 10+ years experience. Licensed, certified, and trusted by thousands of customers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/termites-control-mumbai" className="hover:text-orange-400">Termites Control</Link></li>
                <li><Link href="/cockroach-control-mumbai" className="hover:text-orange-400">Cockroach Control</Link></li>
                <li><Link href="/bed-bug-control-mumbai" className="hover:text-orange-400">Bed Bug Control</Link></li>
                <li><Link href="/ant-control-mumbai" className="hover:text-orange-400">Ant Control</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 +91 80979-41077</p>
                <p>📧 superpestcontrol8858@gmail.com</p>
                <p>🌐 superpestcontrol.in</p>
                <p>📍 Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Super Pest Control Mumbai. All rights reserved. | Licensed & Certified</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a
            href="tel:+918097941077"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="Call Now: +91 80979-41077"
          >
            <svg className="w-8 h-8 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <a
            href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20spider%20control%20service%20in%20Mumbai.%20Please%20provide%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="WhatsApp: +91 80979-41077"
          >
            <svg className="w-8 h-8 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
            </svg>
          </a>
        </div>

        <div className="block md:hidden">
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <div className="flex space-x-4">
              <a
                href="tel:+918097941077"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                title="Call Now"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20spider%20control%20service%20in%20Mumbai.%20Please%20provide%20details."
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
