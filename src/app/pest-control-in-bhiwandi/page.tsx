'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const faqData = [
  {
    question: "What is the best pest control service in Bhiwandi, Thane?",
    answer: "Super Pest Control is the #1 rated pest control service in Bhiwandi, offering 24/7 professional pest control services with eco-friendly solutions for the textile hub's industrial and residential areas."
  },
  {
    question: "How much does pest control cost in Bhiwandi?",
    answer: "Pest control in Bhiwandi costs between ₹2,000 to ₹8,000 depending on the type of pest, property size, and treatment required. We offer competitive pricing for textile factories and warehouses."
  },
  {
    question: "Which pest control is best for textile warehouses in Bhiwandi?",
    answer: "Super Pest Control Bhiwandi provides specialized pest control for textile warehouses using fabric-safe treatments and advanced monitoring systems with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Bhiwandi textile mills permanently?",
    answer: "Professional termite control in Bhiwandi involves specialized treatment for textile infrastructure, wood protection, and fabric preservation. We offer 5-year warranty on termite treatment."
  },
  {
    question: "Are pest control chemicals safe for textile workers in Bhiwandi?",
    answer: "Yes, Super Pest Control uses only worker-safe, textile-friendly pest control chemicals. All treatments follow strict industrial safety protocols for textile environments."
  },
  {
    question: "Do you provide emergency pest control services in Bhiwandi industrial area?",
    answer: "Yes, we provide 24/7 emergency pest control services in Bhiwandi with same-day service availability for textile mills, warehouses, and residential emergencies."
  }
];

export default function PestControlBhiwandi() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Pest Control Bhiwandi",
            "description": "Professional pest control services in Bhiwandi, Thane. Expert solutions for textile industry and residential pest management.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bhiwandi, Thane",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "postalCode": "421302",
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
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-red-600 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm md:text-xl">🐛</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Bhiwandi Textile Hub</span>
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
                Bhiwandi, Thane
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Expert pest management solutions for Bhiwandi&apos;s textile industry and residential areas
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
              Our Pest Control Services in Bhiwandi
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4">Super Pest Control Bhiwandi</div>
          <p className="text-gray-400 mb-6">Professional pest control services in Bhiwandi, Thane</p>
          <div className="text-orange-400 font-semibold">📞 +91 80979-41077 | Available 24/7</div>
        </div>
      </footer>
    </div>
  );
}
