import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Super Pest Control</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+919876543210" className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Mumbai&apos;s <span className="text-primary-600">Leading</span> Pest Control Service
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Safe, effective, and eco-friendly pest control solutions for your home and business. 
                Serving Mumbai with over 10 years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors text-center">
                  Get Free Quote
                </a>
                <a href="tel:+919876543210" className="bg-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-600 transition-colors text-center">
                  Emergency Call: +91 98765 43210
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Service Request</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select Service</option>
                    <option>Termite Control</option>
                    <option>Cockroach Treatment</option>
                    <option>Rodent Control</option>
                    <option>Mosquito Control</option>
                  </select>
                  <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                    Request Service
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600">Comprehensive pest control solutions for all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl">🐜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Termite Control</h3>
              <p className="text-gray-600">Advanced termite treatment and prevention for long-term protection of your property.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary-600 text-2xl">🪳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cockroach Treatment</h3>
              <p className="text-gray-600">Effective cockroach elimination using safe and proven methods.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl">🐭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rodent Control</h3>
              <p className="text-gray-600">Complete rodent control and prevention solutions for homes and offices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary-600 text-2xl">🦟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mosquito Control</h3>
              <p className="text-gray-600">Professional mosquito control to protect your family from diseases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Super Pest Control?</h2>
            <p className="text-xl text-gray-600">Mumbai&apos;s most trusted pest control experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Government licensed and certified pest control professionals with years of experience.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Safe, eco-friendly treatments that protect your family and the environment.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency pest control services across Mumbai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-white/90">Ready to solve your pest problems? Contact us today!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary-500 text-xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-500 text-xl mr-4">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@superpestcontrolmumbai.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-500 text-xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-gray-600">All Mumbai Suburbs & Navi Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-500 text-xl mr-4">🕒</span>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <textarea rows={4} placeholder="Describe your pest problem..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Super Pest Control</h3>
              <p className="text-gray-400">Mumbai&apos;s trusted pest control experts providing safe and effective solutions for over 10 years.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Termite Control</li>
                <li>Cockroach Treatment</li>
                <li>Rodent Control</li>
                <li>Mosquito Control</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>South Mumbai</li>
                <li>Central Mumbai</li>
                <li>Western Suburbs</li>
                <li>Navi Mumbai</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 98765 43210</p>
                <p>info@superpestcontrolmumbai.com</p>
                <p>24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Super Pest Control Mumbai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
