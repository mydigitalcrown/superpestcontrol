'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Services() {
  const services = [
    {
      title: "Termites Control",
      description: "Comprehensive termite treatment and prevention services",
      link: "/termites-control-mumbai",
      icon: "🐛"
    },
    {
      title: "Cockroach Control", 
      description: "Professional cockroach extermination and prevention",
      link: "/cockroach-control-mumbai",
      icon: "🪳"
    },
    {
      title: "Bed Bug Control",
      description: "Safe and effective bed bug removal services",
      link: "/bed-bug-control-mumbai", 
      icon: "🛏️"
    },
    {
      title: "Rodent Control",
      description: "Rats and mice control with guaranteed results",
      link: "/rodent-control-mumbai",
      icon: "🐭"
    },
    {
      title: "Spider Control",
      description: "Expert spider management and web removal",
      link: "/spider-control-mumbai",
      icon: "🕷️"
    },
    {
      title: "Ant Control",
      description: "Complete ant colony elimination services",
      link: "/ant-control-mumbai",
      icon: "🐜"
    },
    {
      title: "Mosquito Control",
      description: "Mosquito control and breeding site elimination",
      link: "/mosquitoes-control-mumbai",
      icon: "🦟"
    },
    {
      title: "Tick Control",
      description: "Professional tick treatment for homes and gardens",
      link: "/ticks-control-mumbai",
      icon: "🕷️"
    },
    {
      title: "Residential Pest Control",
      description: "Comprehensive home pest management solutions",
      link: "/residential-pest-control-mumbai",
      icon: "🏠"
    },
    {
      title: "Commercial Pest Control",
      description: "Business and commercial property pest solutions",
      link: "/commercial-pest-control-mumbai",
      icon: "🏢"
    }
  ];

  return (
    <>
      <Head>
        <title>Pest Control Services in Mumbai | Super Pest Control</title>
        <meta name="description" content="Complete pest control services in Mumbai. Termites, cockroaches, bed bugs, rodents, and more. Professional, safe, and guaranteed results." />
        <meta name="keywords" content="pest control services mumbai, termite control, cockroach control, bed bug control, rodent control" />
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
            <Link href="/services" className="hover:text-orange-400 text-orange-400">Services</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Pest Control Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional pest management solutions for homes and businesses across Mumbai
          </p>
          <a href="tel:+919137094641" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Call Now: +91 91370 94641
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Complete Pest Management Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-orange-500 font-semibold group-hover:text-orange-600">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Super Pest Control?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Certified professionals with full insurance coverage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Methods</h3>
              <p className="text-gray-600">Family and pet-safe treatments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">100% satisfaction guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Emergency response available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free inspection and customized pest control solution.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Super Pest Control</h3>
              <p className="text-gray-300 mb-4">Professional pest control services across Mumbai with guaranteed results.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
                <li><Link href="/services" className="hover:text-orange-400">Services</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
              </ul>
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
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact</h4>
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
