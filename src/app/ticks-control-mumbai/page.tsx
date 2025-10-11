'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function TicksControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Residential Tick Control",
      description: "Comprehensive tick elimination for homes, gardens, and pets using targeted treatments.",
      features: ["Pet-safe treatments", "Garden area treatment", "Indoor/outdoor protection", "Follow-up monitoring"]
    },
    {
      title: "Commercial Tick Management", 
      description: "Professional tick control for offices, hotels, and commercial properties.",
      features: ["Property-wide treatment", "Regular maintenance", "Employee safety protocols", "Documentation support"]
    },
    {
      title: "Tick Prevention Programs",
      description: "Long-term tick prevention strategies to keep your property tick-free year-round.",
      features: ["Quarterly treatments", "Environmental modification", "Monitoring systems", "Prevention guidance"]
    }
  ];

  const faqData = [
    {
      question: "How do I know if I have a tick problem?",
      answer: "Signs include finding ticks on pets or family members, tick bites, and spotting ticks in outdoor areas like gardens, lawns, or wooded areas around your property."
    },
    {
      question: "Are tick treatments safe for pets and children?",
      answer: "Yes, we use pet and child-safe treatments specifically designed for tick control. All products are applied by certified technicians following strict safety protocols."
    },
    {
      question: "What diseases can ticks transmit?",
      answer: "Ticks can transmit serious diseases including Lyme disease, Rocky Mountain spotted fever, and tick-borne encephalitis. Professional treatment is essential for health protection."
    },
    {
      question: "How long does tick treatment take to be effective?",
      answer: "Tick treatments typically show results within 24-48 hours. Complete elimination may take 1-2 weeks with follow-up treatments as needed."
    },
    {
      question: "Do you treat both indoor and outdoor areas?",
      answer: "Yes, we provide comprehensive treatment for both indoor and outdoor areas including gardens, lawns, pet areas, and interior spaces where ticks may be present."
    },
    {
      question: "How can I prevent future tick infestations?",
      answer: "Prevention includes regular lawn maintenance, removing leaf litter, treating pet areas, using repellents, and scheduling regular professional treatments during tick season."
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Tick Control Services in Mumbai | Safe & Effective Treatment</title>
        <meta name="description" content="Expert tick control services in Mumbai. Safe, effective tick elimination for homes and businesses. Pet-safe treatments, 24/7 support. Call now!" />
        <meta name="keywords" content="tick control mumbai, tick treatment, tick extermination, pest control mumbai, tick removal" />
      </Head>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/" className="hover:text-orange-400">Super Pest Control</Link>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="hover:text-orange-400">About</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block py-2 hover:text-orange-400">Home</Link>
            <Link href="/about" className="block py-2 hover:text-orange-400">About</Link>
            <Link href="/contact" className="block py-2 hover:text-orange-400">Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Tick Control in Mumbai</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert tick elimination services with safe, effective treatments for homes and businesses across Mumbai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919137094641" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call Now: +91 91370 94641
            </a>
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Tick Control Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  activeService === index ? 'bg-blue-900 text-white' : 'bg-white hover:bg-blue-50'
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Family from Tick-Borne Diseases</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get professional tick control services today. Safe, effective, and guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919137094641" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call Now: +91 91370 94641
            </a>
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Super Pest Control</h3>
              <p className="text-gray-300 mb-4">Professional pest control services across Mumbai with guaranteed results and eco-friendly solutions.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/termites-control-mumbai" className="hover:text-orange-400">Termite Control</Link></li>
                <li><Link href="/cockroach-control-mumbai" className="hover:text-orange-400">Cockroach Control</Link></li>
                <li><Link href="/bed-bug-control-mumbai" className="hover:text-orange-400">Bed Bug Control</Link></li>
                <li><Link href="/rodent-control-mumbai" className="hover:text-orange-400">Rodent Control</Link></li>
                <li><Link href="/spider-control-mumbai" className="hover:text-orange-400">Spider Control</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📞 +91 91370 94641</li>
                <li>✉️ info@superpestcontrol.in</li>
                <li>🕒 24/7 Emergency Service</li>
                <li>📍 Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Super Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <a 
          href="tel:+919137094641"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
          title="Call Now"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
