'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const faqData = [
  {
    question: "What is the best pest control service in Ulwe, Navi Mumbai?",
    answer: "Super Pest Control is the #1 rated pest control service in Ulwe, Navi Mumbai, offering 24/7 professional pest control services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Ulwe's modern residential and commercial areas."
  },
  {
    question: "How much does pest control cost in Ulwe?",
    answer: "Pest control in Ulwe costs between ₹1,800 to ₹6,000 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges."
  },
  {
    question: "Which pest control is best for cockroaches in Ulwe?",
    answer: "Super Pest Control Ulwe provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Ulwe's modern infrastructure."
  },
  {
    question: "How to get rid of termites in Ulwe homes permanently?",
    answer: "Professional termite control in Ulwe involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. We offer 5-year warranty on termite treatment."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Ulwe?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments follow strict safety protocols."
  },
  {
    question: "Do you provide emergency pest control services in Ulwe?",
    answer: "Yes, we provide 24/7 emergency pest control services in Ulwe with same-day service availability. Our rapid response team covers all residential and commercial areas."
  }
];

export default function PestControlUlwe() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Pest Control Ulwe",
            "description": "Professional pest control services in Ulwe, Navi Mumbai. Expert solutions for all pests with 24/7 emergency service.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ulwe, Navi Mumbai",
              "addressLocality": "Ulwe",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
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
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-red-600 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-xl">🐛</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Ulwe Node</span>
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

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'}`}></div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link href="/" className="block py-2 text-gray-900 font-medium">Home</Link>
                <Link href="/about" className="block py-2 text-gray-900 font-medium">About</Link>
                <Link href="/services" className="block py-2 text-gray-900 font-medium">Services</Link>
                <Link href="/contact" className="block py-2 text-gray-900 font-medium">Contact</Link>
                <Link href="tel:+918097941077" className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg font-semibold">
                  📞 Call Now
                </Link>
              </div>
            </div>
          )}
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
                Ulwe, Navi Mumbai
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Expert pest management solutions for Ulwe&apos;s modern residential and commercial areas
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              24/7 emergency pest control services across Ulwe node with eco-friendly treatments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="tel:+918097941077" className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg">
                📞 Call Now: +91 80979-41077
              </Link>
              <Link href="#quote" className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Pest Control Services in Ulwe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cockroach Control", description: "Advanced gel baiting and targeted treatments", icon: "🪳", price: "₹1,800+" },
              { title: "Termite Treatment", description: "Comprehensive soil and wood treatment with 5-year warranty", icon: "🐜", price: "₹3,500+" },
              { title: "Rodent Control", description: "Safe and effective mice and rat control", icon: "🐭", price: "₹2,200+" },
              { title: "Bed Bug Treatment", description: "Heat treatment and chemical solutions", icon: "🛏️", price: "₹2,800+" },
              { title: "Mosquito Control", description: "Breeding source elimination and targeted spraying", icon: "🦟", price: "₹1,600+" },
              { title: "Complete Pest Control", description: "Full-service treatment for all common pests", icon: "🐛", price: "₹3,000+" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Rid of Pests in Ulwe?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Super Pest Control today for immediate, professional pest management solutions
          </p>
          
          <Link href="tel:+918097941077" className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg">
            📞 Call: +91 80979-41077
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Super Pest Control Ulwe</div>
            <p className="text-gray-400 mb-6">Professional pest control services in Ulwe, Navi Mumbai</p>
            <div className="text-orange-400 font-semibold">📞 +91 80979-41077 | Available 24/7</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
