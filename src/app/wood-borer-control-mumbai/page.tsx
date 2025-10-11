'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function WoodBorerControlMumbai() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqData = [
    {
      question: "How do I know if I have a wood borer infestation?",
      answer: "Signs include small round holes in wooden furniture, fine sawdust around wooden items, weak or damaged wood structures, and hearing faint ticking or tapping sounds from wooden objects."
    },
    {
      question: "Are wood borer treatments safe for my furniture?",
      answer: "Yes, our wood borer treatments are specifically designed to be safe for wooden furniture while effectively eliminating wood borers. We use targeted application methods that don't damage the wood finish."
    },
    {
      question: "How long does wood borer treatment take?",
      answer: "Treatment typically takes 2-4 hours depending on the extent of infestation and number of items to be treated. Complete elimination may take 2-3 weeks with follow-up monitoring."
    },
    {
      question: "Can wood borers spread to other furniture?",
      answer: "Yes, wood borers can spread from infested furniture to other wooden items in your home. Early treatment is essential to prevent widespread damage to wooden structures and furniture."
    },
    {
      question: "Do you treat both old and new furniture?",
      answer: "Yes, we treat all types of wooden furniture and structures including antique pieces, new furniture, wooden flooring, beams, and other wooden installations."
    },
    {
      question: "How can I prevent future wood borer infestations?",
      answer: "Prevention includes regular inspection of wooden items, maintaining proper humidity levels, using treated wood for construction, and scheduling periodic professional inspections."
    }
  ];

  return (
    <>
      <Head>
        <title>Wood Borer Control Services Mumbai | Furniture Protection Treatment</title>
        <meta name="description" content="Professional wood borer control services in Mumbai. Protect your wooden furniture and structures. Safe, effective treatments with guaranteed results." />
        <meta name="keywords" content="wood borer control mumbai, furniture protection, wood borer treatment, pest control mumbai, wood damage prevention" />
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
          <h1 className="text-5xl font-bold mb-6">Professional Wood Borer Control in Mumbai</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert wood borer treatment services to protect your valuable wooden furniture and structures
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Wood Borer Control Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Furniture Treatment</h3>
              <p className="text-gray-600 mb-4">Specialized treatment for wooden furniture including chairs, tables, cabinets, and antique pieces.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Safe for all wood types</li>
                <li>• Preserves wood finish</li>
                <li>• Prevents re-infestation</li>
                <li>• Quick-drying formula</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Structural Treatment</h3>
              <p className="text-gray-600 mb-4">Protection for wooden beams, flooring, doors, windows, and other structural elements.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Deep penetration treatment</li>
                <li>• Long-lasting protection</li>
                <li>• Structural integrity maintenance</li>
                <li>• Professional application</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Preventive Treatment</h3>
              <p className="text-gray-600 mb-4">Protective treatments for new wooden installations and regular maintenance programs.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• New wood protection</li>
                <li>• Annual maintenance</li>
                <li>• Early detection</li>
                <li>• Cost-effective prevention</li>
              </ul>
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
          <h2 className="text-4xl font-bold mb-6">Protect Your Wooden Assets Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don&apos;t let wood borers damage your valuable furniture and structures. Get professional treatment now.
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
