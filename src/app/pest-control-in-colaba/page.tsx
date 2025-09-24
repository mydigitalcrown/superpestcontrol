'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Enhanced FAQ data for Colaba with natural language questions
const faqData = [
  {
    question: "What is the best pest control service in Colaba?",
    answer: "Super Pest Control is the #1 rated pest control service in Colaba, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Colaba's premium residential and commercial properties."
  },
  {
    question: "How much does pest control cost in Colaba?",
    answer: "Pest control in Colaba costs between ₹1,500 to ₹6,000 depending on the type of pest, property size, and treatment required. We offer competitive pricing for heritage buildings and modern apartments."
  },
  {
    question: "Which pest control is best for heritage buildings in Colaba?",
    answer: "Super Pest Control Colaba provides specialized pest control for heritage buildings using structure-safe treatments and advanced monitoring systems with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Colaba heritage buildings permanently?",
    answer: "Professional termite control in Colaba involves specialized treatment for heritage infrastructure, wood protection, and structure preservation. We offer 5-year warranty on termite treatment."
  },
  {
    question: "Are pest control chemicals safe for heritage structures in Colaba?",
    answer: "Yes, Super Pest Control uses only worker-safe, textile-friendly pest control chemicals. All treatments follow strict industrial safety protocols for textile environments."
  },
  {
    question: "Do you provide emergency pest control services in Colaba industrial area?",
    answer: "Yes, we provide 24/7 emergency pest control services in Colaba with same-day service availability for heritage buildings, apartments, and residential emergencies."
  }
];

export default function PestControlColaba() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Pest Control Colaba",
            "description": "Professional pest control services in Colaba with 24/7 emergency support, eco-friendly treatments, and licensed experts. Serving residential and commercial properties.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Colaba, Mumbai",
              "addressLocality": "Colaba"
            },
            "telephone": "+91-80979-41077",
            "openingHours": "Mo-Su 00:00-23:59"
          })
        }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-red-600 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm md:text-xl">🐛</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Colaba Heritage Area</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">📞 +91 80979-41077</div>
                <div className="text-xs text-gray-600">24/7 Emergency Service</div>
              </div>
              <Link href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/location/mumbai.webp"
            alt="Mumbai cityscape background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-orange-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Pest Control Services in 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                Colaba, Mumbai
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Expert pest management solutions for Colaba&apos;s heritage buildings and residential areas
            </p>
            
            <Link href="tel:+918097941077" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg">
              📞 Call Now: +91 80979-41077
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Pest Control Services in Colaba
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Textile Industry Pest Control", description: "Specialized treatments for textile mills and warehouses", icon: "🪳", price: "₹2,500+" },
              { title: "Industrial Termite Treatment", description: "Comprehensive treatment for textile infrastructure", icon: "🐜", price: "₹5,500+" },
              { title: "Warehouse Rodent Control", description: "Safe rodent control for textile storage facilities", icon: "🐭", price: "₹3,000+" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                  <Link href="tel:+918097941077" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call and WhatsApp Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get Immediate Pest Control Service</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918097941077"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call Now: +91 80979-41077
            </a>
            <a
              href="https://wa.me/918097941077"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <span className="mr-2">💬</span>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Google Business Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visit Our Google Business Profiles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Super Pest Control Services - Navi Mumbai</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3089919795856!2d73.01766731490255!3d19.037319987109374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c6ed564979%3A0x9b8e2e2e2e2e2e2e!2sSuper%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Super Pest Control Services - Thane</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7776623575056!2d72.97872931490542!3d19.21835998704031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSuper%20Pest%20Control%20Services%20Thane!5e0!3m2!1sen!2sin!4v1234567890124"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
            <div>
              <h3 className="text-xl font-bold mb-6">Super Pest Control</h3>
              <p className="text-gray-300 mb-4">
                Professional pest control services with 10+ years of experience. 
                Safe, effective, and eco-friendly solutions for homes and businesses.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+918097941077" className="text-green-400 hover:text-green-300">
                  📞 +91 80979-41077
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/termites-control-mumbai" className="hover:text-white">Termite Control</Link></li>
                <li><Link href="/cockroach-control-mumbai" className="hover:text-white">Cockroach Control</Link></li>
                <li><Link href="/bed-bug-control-mumbai" className="hover:text-white">Bed Bug Control</Link></li>
                <li><Link href="/ant-control-mumbai" className="hover:text-white">Ant Control</Link></li>
                <li><Link href="/mosquitoes-control-mumbai" className="hover:text-white">Mosquito Control</Link></li>
                <li><Link href="/spider-control-mumbai" className="hover:text-white">Spider Control</Link></li>
                <li><Link href="/rodents-control-mumbai" className="hover:text-white">Rodent Control</Link></li>
                <li><Link href="/lizard-control-mumbai" className="hover:text-white">Lizard Control</Link></li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/pest-control-navi-mumbai" className="hover:text-white">Navi Mumbai</Link></li>
                <li><Link href="/pest-control-in-thane" className="hover:text-white">Thane</Link></li>
                <li><Link href="/pest-control-pune" className="hover:text-white">Pune</Link></li>
                <li><Link href="/pest-control-in-mumbai" className="hover:text-white">Mumbai</Link></li>
                <li><Link href="/pest-control-pcmc" className="hover:text-white">PCMC</Link></li>
                <li><Link href="/pest-control-in-andheri" className="hover:text-white">Andheri</Link></li>
                <li><Link href="/pest-control-in-borivali" className="hover:text-white">Borivali</Link></li>
                <li><Link href="/pest-control-in-ghatkopar" className="hover:text-white">Ghatkopar</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Mumbai, Navi Mumbai, Thane & Pune</p>
                <p>📞 <a href="tel:+918097941077" className="hover:text-white">+91 80979-41077</a></p>
                <p>💬 <a href="https://wa.me/918097941077" className="hover:text-white">WhatsApp</a></p>
                <p>🌐 Available 24/7</p>
                <p>⚡ Emergency Service Available</p>
                <p>✅ Licensed & Insured</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Super Pest Control. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Website by <a href="https://mydigitalworld.in/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300">My Digital World</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        <a
          href="tel:+918097941077"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Call Now"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
        </a>
        <a
          href="https://wa.me/918097941077"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
