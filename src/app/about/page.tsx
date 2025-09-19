import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Super Pest Control Mumbai | 10+ Years Experience",
  description: "Learn about Super Pest Control Mumbai - Your trusted pest control experts with 10+ years of experience. Licensed professionals, eco-friendly solutions, and 500+ satisfied customers.",
  keywords: "about super pest control mumbai, pest control company mumbai, licensed pest control experts, professional pest control team mumbai, experienced exterminators mumbai",
};

export default function AboutPage() {
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
              <Link href="/about" className="text-sm text-gray-900 font-medium transition-colors">About Us</Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/commercial" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Commercial</Link>
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
              About Super Pest Control Mumbai
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Mumbai&apos;s Most Trusted
              </span>
              <br />
              <span className="text-gray-900">Pest Control Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              With over 10 years of experience and 500+ satisfied customers, we are Mumbai&apos;s leading 
              pest control service provider, committed to protecting your property with safe and effective solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2013, Super Pest Control Mumbai began with a simple mission: to provide 
                  Mumbai families and businesses with safe, effective, and reliable pest control solutions. 
                  What started as a small local service has grown into Mumbai&apos;s most trusted pest control company.
                </p>
                <p>
                  Our founder, recognizing the unique challenges posed by Mumbai&apos;s humid climate and 
                  urban environment, dedicated years to understanding local pest behaviors and developing 
                  specialized treatment methods that work specifically for Mumbai conditions.
                </p>
                <p>
                  Today, we are proud to serve over 500 satisfied customers across Mumbai, from South Mumbai 
                  to Navi Mumbai, providing comprehensive pest control solutions that protect what matters 
                  most to our clients.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed & Certified</h4>
                    <p className="text-gray-600">Government licensed with certified technicians</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Eco-Friendly Solutions</h4>
                    <p className="text-gray-600">Safe for families, pets, and environment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Emergency Service</h4>
                    <p className="text-gray-600">Round-the-clock support when you need us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring years of experience and dedication to protecting your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">RS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Singh</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Lead Technician</p>
              <p className="text-gray-600">
                10+ years experience in pest control. Certified in advanced termite treatment and eco-friendly pest management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">AP</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h3>
              <p className="text-blue-600 font-medium mb-4">Senior Pest Control Specialist</p>
              <p className="text-gray-600">
                8+ years experience specializing in commercial pest control and rodent management for Mumbai businesses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">SK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suresh Kumar</h3>
              <p className="text-blue-600 font-medium mb-4">Residential Pest Expert</p>
              <p className="text-gray-600">
                7+ years experience in residential pest control, specializing in cockroach and mosquito control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of professionalism and safety in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed by Government</h3>
              <p className="text-gray-600 text-sm">Maharashtra State Pest Control License</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌿</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Certified</h3>
              <p className="text-gray-600 text-sm">Environment-friendly practices certified</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Top Rated Service</h3>
              <p className="text-gray-600 text-sm">4.9/5 rating from 500+ customers</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600 text-sm">Advanced safety training and protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ satisfied customers who trust Super Pest Control Mumbai for their pest control needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Free Inspection
            </Link>
            <a href="tel:+919876543210" className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-70 transition-colors">
              📞 Call Now: +91 98765 43210
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
