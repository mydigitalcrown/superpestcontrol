'use client';

import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "What is the best pest control service in Turbhe, Navi Mumbai?",
    answer: "Super Pest Control is the #1 rated pest control service in Turbhe, Navi Mumbai, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Turbhe's residential and commercial areas."
  },
  {
    question: "How much does pest control cost in Turbhe, Navi Mumbai?",
    answer: "Pest control in Turbhe costs between ₹1,200 to ₹5,000 depending on the type of pest, property size, and treatment required. Super Pest Control offers competitive pricing, comprehensive inspections, and transparent costs with no hidden charges for Turbhe residents."
  },
  {
    question: "Which pest control is best for cockroaches in Turbhe?",
    answer: "Super Pest Control Turbhe provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Turbhe's climate with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Turbhe permanently?",
    answer: "Professional termite control in Turbhe involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Turbhe."
  },
  {
    question: "Are pest control chemicals safe for family in Turbhe?",
    answer: "Yes, Super Pest Control uses only eco-friendly, family-safe, and pet-friendly pest control chemicals approved by regulatory authorities. All treatments in Turbhe follow strict safety protocols and are completely safe for children and pets."
  },
  {
    question: "Do you provide emergency pest control services in Turbhe?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Turbhe with same-day service availability. Our rapid response team covers all areas including MIDC, residential complexes, and commercial facilities for urgent pest situations."
  }
];

export default function PestControlTurbhe() {
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
            "@type": "LocalBusiness",
            "name": "Super Pest Control Turbhe",
            "description": "Professional pest control services in Turbhe, Navi Mumbai. Expert solutions for cockroaches, termites, rodents, and all pests in residential and commercial properties. 24/7 emergency service with eco-friendly treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Turbhe, Navi Mumbai",
              "addressLocality": "Navi Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400705",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0645,
              "longitude": 72.9966
            },
            "telephone": "+91-80979-41077",
            "email": "superpestcontrol8858@gmail.com",
            "url": "https://superpestcontrol.in/pest-control-in-turbhe",
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "₹₹"
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
      <section className="pt-20 pb-16 relative overflow-hidden min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/location/pest-control-turbhe.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best Pest Control in <span className="text-orange-300">Turbhe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional pest control services in Turbhe, Navi Mumbai. 24/7 emergency service for cockroaches, termites, rodents, and all household pests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="tel:+918097941077" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                📞 Call Now - Free Inspection
              </Link>
              <Link href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Turbhe.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                💬 WhatsApp Now
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">⚡ 24/7 Service</h3>
                <p>Emergency pest control available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🌿 Eco-Friendly</h3>
                <p>Safe for family and pets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">🎯 Expert Team</h3>
                <p>Licensed and certified professionals</p>
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
              Our Pest Control Services in Turbhe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete pest management solutions for residential and commercial properties in Turbhe, Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🪳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cockroach Control</h3>
              <p className="text-gray-600 mb-4">Advanced gel baiting and spray treatments for complete cockroach elimination.</p>
              <Link href="/cockroach-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🐜</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Termite Control</h3>
              <p className="text-gray-600 mb-4">Pre and post-construction anti-termite treatments with 5-year warranty.</p>
              <Link href="/termites-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🐀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rodent Control</h3>
              <p className="text-gray-600 mb-4">Safe and effective rat and mice control for homes and offices.</p>
              <Link href="/rodent-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bed Bug Control</h3>
              <p className="text-gray-600 mb-4">Heat treatment and chemical solutions for complete bed bug elimination.</p>
              <Link href="/bed-bug-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🦟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mosquito Control</h3>
              <p className="text-gray-600 mb-4">Indoor and outdoor mosquito control with breeding source elimination.</p>
              <Link href="/mosquitoes-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🕷️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spider Control</h3>
              <p className="text-gray-600 mb-4">Complete spider removal and web cleaning services.</p>
              <Link href="/spider-control-mumbai" className="text-orange-500 hover:text-orange-600 font-semibold">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about pest control services in Turbhe
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Pest Control in Turbhe? We&apos;re Here to Help!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional, safe, and effective pest control solutions with 100% satisfaction guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:+918097941077" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              📞 Call +91 80979-41077
            </Link>
            <Link href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Turbhe.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              💬 WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐛</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Super Pest Control</div>
                  <div className="text-xs text-orange-400">Mumbai&apos;s #1 Choice</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Professional pest control services in Turbhe, Navi Mumbai with 10+ years experience. Licensed, certified, and trusted by thousands of customers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/termites-control-mumbai" className="hover:text-orange-400">Termites Control</Link></li>
                <li><Link href="/cockroach-control-mumbai" className="hover:text-orange-400">Cockroach Control</Link></li>
                <li><Link href="/bed-bug-control-mumbai" className="hover:text-orange-400">Bed Bug Control</Link></li>
                <li><Link href="/rodent-control-mumbai" className="hover:text-orange-400">Rodent Control</Link></li>
                <li><Link href="/spider-control-mumbai" className="hover:text-orange-400">Spider Control</Link></li>
                <li><Link href="/residential-pest-control-mumbai" className="hover:text-orange-400">Residential Pest Control</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 +91 80979-41077</p>
                <p>📧 superpestcontrol8858@gmail.com</p>
                <p>🌐 superpestcontrol.in</p>
                <p>📍 Turbhe, Navi Mumbai</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Super Pest Control Mumbai. All rights reserved. | Licensed & Certified</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <Link
          href="tel:+918097941077"
          className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Call Now"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </Link>
        
        <Link
          href="https://wa.me/918097941077?text=Hi%2C%20I%20need%20pest%20control%20service%20in%20Turbhe.%20Please%20provide%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="WhatsApp Us"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
