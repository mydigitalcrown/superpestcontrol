'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function RodentsControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Rats Control",
      description: "Comprehensive rat extermination using advanced baiting systems and exclusion techniques.",
      features: ["24/7 monitoring systems", "Child-safe rat baits", "Entry point sealing", "Population monitoring"]
    },
    {
      title: "Mice Control", 
      description: "Targeted mice elimination with humane traps and preventive measures.",
      features: ["Live trapping options", "Ultrasonic deterrents", "Nest removal", "Sanitation guidance"]
    },
    {
      title: "Commercial Rodent Solutions",
      description: "Large-scale rodent management for businesses, restaurants, and warehouses.",
      features: ["HACCP compliant", "Regular audits", "Documentation support", "Emergency response"]
    }
  ];

  const faqData = [
    {
      question: "How do I know if I have a rodent problem?",
      answer: "Signs include droppings, gnaw marks, scratching sounds, grease marks along walls, and strong ammonia odors. Our experts can conduct a thorough inspection to confirm the presence and extent of infestation."
    },
    {
      question: "Are your rodent control methods safe for children and pets?",
      answer: "Yes, we use child and pet-safe methods including tamper-resistant bait stations, humane traps, and eco-friendly repellents. All treatments are applied by certified technicians following strict safety protocols."
    },
    {
      question: "How long does rodent control treatment take?",
      answer: "Initial treatment typically takes 1-2 hours. Complete elimination may require 2-4 weeks with follow-up visits. We provide ongoing monitoring to prevent re-infestation."
    },
    {
      question: "What's the difference between rats and mice control?",
      answer: "Rats are larger and require stronger baits and traps, while mice are smaller but breed faster. Our treatment approach varies based on species identification, nesting locations, and infestation severity."
    },
    {
      question: "Do you provide commercial rodent control services?",
      answer: "Yes, we offer specialized commercial rodent management for restaurants, hotels, offices, warehouses, and industrial facilities. Our services are HACCP compliant with detailed documentation."
    },
    {
      question: "How can I prevent future rodent infestations?",
      answer: "Prevention includes sealing entry points, removing food sources, eliminating water access, regular cleaning, and professional monitoring. We provide comprehensive prevention plans with regular inspections."
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Rodents Control Services in Mumbai | Rats & Mice Extermination</title>
        <meta name="description" content="Expert rodents control services in Mumbai. Safe, effective rats and mice extermination for homes and businesses. Child-safe methods, 24/7 support. Call now!" />
        <meta name="keywords" content="rodents control mumbai, rats control, mice control, rodent extermination, pest control mumbai" />
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
          <h1 className="text-5xl font-bold mb-6">Professional Rodents Control in Mumbai</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert rats and mice extermination services with safe, effective solutions for homes and businesses across Mumbai
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Rodent Control Services</h2>
          
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Rodent Control?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Certified pest control professionals with full insurance coverage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Family Safe Methods</h3>
              <p className="text-gray-600">Child and pet-safe treatments with minimal environmental impact</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">100% satisfaction guarantee with follow-up service included</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency response for severe infestations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Rodent Control Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Inspection</h3>
              <p className="text-gray-600">Comprehensive property assessment to identify infestation severity and entry points</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Treatment Plan</h3>
              <p className="text-gray-600">Customized treatment strategy based on rodent species and infestation level</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Professional application of baits, traps, and exclusion measures</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Follow-up</h3>
              <p className="text-gray-600">Regular monitoring and maintenance to prevent re-infestation</p>
            </div>
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
          <h2 className="text-4xl font-bold mb-6">Don&apos;t Let Rodents Take Over Your Property</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get professional rodent control services today. Fast, effective, and guaranteed results.
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
              <div className="flex space-x-4">
                <a href="tel:+919137094641" className="text-orange-400 hover:text-orange-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/termites-control-mumbai" className="hover:text-orange-400">Termite Control</Link></li>
                <li><Link href="/cockroach-control-mumbai" className="hover:text-orange-400">Cockroach Control</Link></li>
                <li><Link href="/bed-bug-control-mumbai" className="hover:text-orange-400">Bed Bug Control</Link></li>
                <li><Link href="/rodent-control-mumbai" className="hover:text-orange-400">Rodent Control</Link></li>
                <li><Link href="/spider-control-mumbai" className="hover:text-orange-400">Spider Control</Link></li>
                <li><Link href="/residential-pest-control-mumbai" className="hover:text-orange-400">Residential Pest Control</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Areas Covered</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>South Mumbai</li>
                <li>Central Mumbai</li>
                <li>Western Suburbs</li>
                <li>Eastern Suburbs</li>
                <li>Navi Mumbai</li>
                <li>Thane & Beyond</li>
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
        
        <a 
          href="https://wa.me/919137094641?text=Hi, I need rodent control services"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </>
  );
}
