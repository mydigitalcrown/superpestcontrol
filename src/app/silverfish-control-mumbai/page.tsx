'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function SilverfishControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqData = [
    {
      question: "How do I know if I have a silverfish problem?",
      answer: "Signs include seeing small, silvery insects in bathrooms, kitchens, or basements, finding damage to books, papers, or clothing, and noticing yellow stains or small holes in fabric or paper items."
    },
    {
      question: "Are silverfish treatments safe for my family?",
      answer: "Yes, our silverfish treatments use family and pet-safe methods. We focus on targeted application in areas where silverfish hide, using minimal chemicals with maximum effectiveness."
    },
    {
      question: "What attracts silverfish to my home?",
      answer: "Silverfish are attracted to moisture, starchy foods, paper, glue, and cellulose materials. They thrive in humid environments like bathrooms, basements, kitchens, and areas with poor ventilation."
    },
    {
      question: "How long does silverfish treatment take?",
      answer: "Initial treatment takes 1-2 hours. Complete elimination typically occurs within 2-4 weeks with follow-up treatments as needed. We also provide moisture control recommendations."
    },
    {
      question: "Do silverfish cause damage to property?",
      answer: "Yes, silverfish can damage books, newspapers, clothing, wallpaper, and stored food items. They feed on starchy materials and can cause significant damage over time if left untreated."
    },
    {
      question: "How can I prevent silverfish infestations?",
      answer: "Prevention includes reducing humidity levels, fixing water leaks, storing books and papers in dry areas, using dehumidifiers, and sealing cracks and crevices where they might enter."
    }
  ];

  return (
    <>
      <Head>
        <title>Silverfish Control Services Mumbai | Safe & Effective Treatment</title>
        <meta name="description" content="Professional silverfish control services in Mumbai. Protect your books, clothing, and property from silverfish damage. Safe, guaranteed treatments." />
        <meta name="keywords" content="silverfish control mumbai, silverfish treatment, pest control mumbai, silverfish extermination, home pest control" />
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
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Silverfish Control in Mumbai</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert silverfish elimination services to protect your books, clothing, and property from damage
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Silverfish Control Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Residential Treatment</h3>
              <p className="text-gray-600 mb-4">Complete silverfish elimination for homes, apartments, and residential properties.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Safe for families and pets</li>
                <li>• Targeted application methods</li>
                <li>• Moisture control advice</li>
                <li>• Follow-up monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Commercial Solutions</h3>
              <p className="text-gray-600 mb-4">Professional silverfish control for offices, libraries, warehouses, and commercial spaces.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Document protection</li>
                <li>• Inventory preservation</li>
                <li>• Minimal business disruption</li>
                <li>• Regular maintenance programs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Prevention Programs</h3>
              <p className="text-gray-600 mb-4">Long-term silverfish prevention strategies and environmental modifications.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Humidity control solutions</li>
                <li>• Entry point sealing</li>
                <li>• Regular inspections</li>
                <li>• Preventive treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Silverfish Control?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">100% satisfaction guarantee with effective silverfish elimination</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Methods</h3>
              <p className="text-gray-600">Family and pet-safe treatments with minimal chemical usage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">Certified technicians with silverfish behavior expertise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-gray-600">Fast service response and flexible scheduling options</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
          <h2 className="text-4xl font-bold mb-6">Stop Silverfish Damage Before It Gets Worse</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protect your valuable items and property from silverfish damage. Get professional treatment today.
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
    </>
  );
}