'use client';

import Link from "next/link";
import Image from "next/image";

export default function PestControlMiraBhayandar() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-xl">🐛</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mira Bhayandar</span>
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
                Mira Bhayandar, Mumbai
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
              Expert pest management solutions for Mira Bhayandar&apos;s twin city residential and commercial areas
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
              Our Pest Control Services in Mira Bhayandar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Twin City Cockroach Control", description: "Advanced treatments for Mira & Bhayandar areas", icon: "🪳", price: "₹1,800+" },
              { title: "Municipal Termite Treatment", description: "Comprehensive treatment for twin city properties", icon: "🐜", price: "₹3,400+" },
              { title: "Urban Rodent Control", description: "Safe pest control for dense urban areas", icon: "🐭", price: "₹2,100+" },
              { title: "Residential Bed Bug Treatment", description: "Complete elimination for housing complexes", icon: "🛏️", price: "₹2,700+" },
              { title: "Municipal Mosquito Control", description: "City-wide mosquito management programs", icon: "🦟", price: "₹1,600+" },
              { title: "Complete Urban Pest Control", description: "Full-service twin city pest management", icon: "🐛", price: "₹3,100+" }
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

      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Rid of Pests in Mira Bhayandar?
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4">Super Pest Control Mira Bhayandar</div>
          <p className="text-gray-400 mb-6">Professional pest control services in Mira Bhayandar, Mumbai</p>
          <div className="text-orange-400 font-semibold">📞 +91 80979-41077 | Available 24/7</div>
        </div>
      </footer>
    </div>
  );
}
