import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Pest Control Mumbai | Office, Restaurant, Warehouse Solutions",
  description: "Professional commercial pest control services in Mumbai. Comprehensive solutions for offices, restaurants, hotels, warehouses. Licensed experts, compliance support, maintenance contracts.",
  keywords: "commercial pest control mumbai, office pest control mumbai, restaurant pest control mumbai, hotel pest control, warehouse pest management, business pest control solutions",
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern SaaS Header */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Modern Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Super Pest Control</span>
            </Link>
            
            {/* Modern Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/commercial" className="text-sm text-gray-900 font-medium transition-colors">Commercial</Link>
              <Link href="/residential" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Residential</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>
            
            {/* Modern CTA */}
            <div className="flex items-center space-x-4">
              <a href="tel:+919876543210" className="hidden sm:inline-flex text-sm text-gray-600 hover:text-gray-900 transition-colors">
                +91 98765 43210
              </a>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Commercial Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Professional Pest Control
              </span>
              <br />
              <span className="text-gray-900">for Business Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Protect your business reputation with comprehensive commercial pest control solutions. 
              Compliance-ready services for Mumbai&apos;s leading businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 text-sm">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">99.8%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">ISO</div>
                <div className="text-gray-600 text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored pest control strategies for different business types in Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurants & Food Service */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurants & Food Service</h3>
              <p className="text-gray-700 mb-6">
                FSSAI compliant pest control for restaurants, cafes, cloud kitchens, and food processing units.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Kitchen deep cleaning & sanitization</li>
                <li>• Rodent monitoring systems</li>
                <li>• Flying insect control</li>
                <li>• HACCP compliance support</li>
                <li>• Regular audit reports</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600 mb-2">₹5,000+/month</div>
              <Link href="/contact" className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>

            {/* Offices & Corporate */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Offices & Corporate</h3>
              <p className="text-gray-700 mb-6">
                Professional pest management for offices, co-working spaces, and corporate buildings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Discreet treatment schedules</li>
                <li>• Minimal business disruption</li>
                <li>• Ant & cockroach control</li>
                <li>• Termite prevention</li>
                <li>• Employee health protection</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-2">₹3,000+/month</div>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>

            {/* Hotels & Hospitality */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hotels & Hospitality</h3>
              <p className="text-gray-700 mb-6">
                Guest satisfaction focused pest control for hotels, resorts, and hospitality businesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 24/7 emergency response</li>
                <li>• Guest room treatments</li>
                <li>• Bed bug elimination</li>
                <li>• Laundry area protection</li>
                <li>• Reputation management</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-2">₹8,000+/month</div>
              <Link href="/contact" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>

            {/* Retail & Shopping */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail & Shopping</h3>
              <p className="text-gray-700 mb-6">
                Customer-focused pest control for retail stores, malls, and shopping centers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Store inventory protection</li>
                <li>• Customer area safety</li>
                <li>• Warehouse pest control</li>
                <li>• Storage area management</li>
                <li>• Flexible scheduling</li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-2">₹4,000+/month</div>
              <Link href="/contact" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>

            {/* Warehouses & Logistics */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warehouses & Logistics</h3>
              <p className="text-gray-700 mb-6">
                Large-scale pest management for warehouses, distribution centers, and logistics facilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Commodity protection</li>
                <li>• Fumigation services</li>
                <li>• Perimeter protection</li>
                <li>• Bird control systems</li>
                <li>• Compliance documentation</li>
              </ul>
              <div className="text-2xl font-bold text-red-600 mb-2">₹10,000+/month</div>
              <Link href="/contact" className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>

            {/* Healthcare Facilities */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Facilities</h3>
              <p className="text-gray-700 mb-6">
                Specialized pest control for hospitals, clinics, and healthcare facilities with strict hygiene standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Infection control compliance</li>
                <li>• Safe chemical protocols</li>
                <li>• Patient area protection</li>
                <li>• Medical waste area treatment</li>
                <li>• Healthcare certifications</li>
              </ul>
              <div className="text-2xl font-bold text-teal-600 mb-2">₹6,000+/month</div>
              <Link href="/contact" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Commercial Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600">
              Trusted by Mumbai&apos;s leading businesses for reliable pest control solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-600">
                All treatments comply with FSSAI, ISO, and industry-specific regulations. Complete documentation provided.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Service timing designed around your business hours. Weekend and after-hours treatments available.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Emergency pest situations handled within 2 hours. Dedicated account manager for priority support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Reports</h3>
              <p className="text-gray-600">
                Monthly pest control reports with photos, treatment details, and recommendations for management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
                99.8% customer satisfaction rate with long-term service contracts and relationship management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                Industry-specific expertise with certified technicians trained for different business environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the maintenance contract that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-gray-50 rounded-3xl p-8 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Protection</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₹3,000<span className="text-lg text-gray-600">/month</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Monthly pest control visits</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Basic pest monitoring</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Service reports</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Phone support</span>
                </li>
              </ul>
              
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Choose Basic
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 relative border-2 border-orange-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Care</h3>
              <div className="text-4xl font-bold text-orange-600 mb-6">₹6,000<span className="text-lg text-gray-600">/month</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Bi-weekly comprehensive treatments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Advanced monitoring systems</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Detailed photo reports</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Emergency call-outs included</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              
              <Link href="/contact" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Choose Professional
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="bg-gray-50 rounded-3xl p-8 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solution</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">₹12,000<span className="text-lg text-gray-600">/month</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Weekly premium treatments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Real-time monitoring technology</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Compliance audit support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Custom solutions & consultancy</span>
                </li>
              </ul>
              
              <Link href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Choose Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom commercial pest control solution for your Mumbai business. Free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Free Business Consultation
            </Link>
            <a href="tel:+919876543210" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
              📞 Emergency: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🐛</span>
              </div>
              <span className="text-xl font-semibold">Super Pest Control</span>
            </Link>
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <span>&copy; 2025 Super Pest Control Mumbai</span>
              <span>Licensed & Certified</span>
              <span>4.9★ Rating</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
