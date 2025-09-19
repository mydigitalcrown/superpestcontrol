import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Super Pest Control Mumbai | Get Free Quote & Inspection",
  description: "Contact Super Pest Control Mumbai for professional pest control services. Free inspection, 24/7 support, expert consultation. Call +91 98765 43210 or get quote online.",
  keywords: "contact pest control mumbai, pest control quote mumbai, pest control inspection mumbai, pest control phone number mumbai, pest control emergency mumbai",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Modern E10-Style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Premium Logo - Mobile Responsive */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-sm md:text-xl drop-shadow-sm">🐛</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">Super Pest Control</span>
                <span className="text-xs text-orange-600 font-medium -mt-1 opacity-70 hidden sm:block">Mumbai&apos;s #1 Choice</span>
              </div>
            </Link>
            
            {/* Modern E10-Style Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-50/70 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
                <Link href="/" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/about" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/services" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/commercial" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Commercial</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/residential" className="relative px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/60 rounded-full transition-all duration-300 hover:scale-105 group">
                  <span className="relative z-10">Residential</span>
                  <div className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Link>
                <Link href="/contact" className="relative px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 transform">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button & CTA */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a href="tel:+919876543210" className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300">
                <span className="text-white text-lg">📞</span>
              </a>
              <button className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 backdrop-blur-sm transition-all duration-300">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Premium CTA Group - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+919876543210" className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 bg-gray-100/60 hover:bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 border border-gray-200/50 hover:border-blue-200/50">
                <span className="text-green-500 text-base">📞</span>
                <span>+91 98765 43210</span>
              </a>
              <Link href="/contact" className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 transform group">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Get In Touch
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Contact Mumbai&apos;s
              </span>
              <br />
              <span className="text-gray-900">Pest Control Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ready to protect your property? Get your free inspection and custom quote from Mumbai&apos;s 
              most trusted pest control professionals.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 text-sm">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">FREE</div>
                <div className="text-gray-600 text-sm">Inspection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2 Hr</div>
                <div className="text-gray-600 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Your Free Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      id="property-type"
                      name="property-type"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment/Flat</option>
                      <option value="independent-house">Independent House</option>
                      <option value="bungalow">Bungalow/Villa</option>
                      <option value="office">Office</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="retail">Retail Store</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                      Area in Mumbai *
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Andheri, Bandra, Powai"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pest-issue" className="block text-sm font-medium text-gray-700 mb-2">
                    Pest Issue *
                  </label>
                  <select
                    id="pest-issue"
                    name="pest-issue"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select pest issue</option>
                    <option value="termites">Termites</option>
                    <option value="cockroaches">Cockroaches</option>
                    <option value="ants">Ants</option>
                    <option value="rodents">Rats/Mice</option>
                    <option value="mosquitoes">Mosquitoes</option>
                    <option value="bed-bugs">Bed Bugs</option>
                    <option value="spiders">Spiders</option>
                    <option value="general">General Pest Control</option>
                    <option value="prevention">Preventive Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="service-type" value="one-time" className="mr-2" />
                      <span className="text-sm">One-time Treatment</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="service-type" value="monthly" className="mr-2" />
                      <span className="text-sm">Monthly Contract</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="service-type" value="emergency" className="mr-2" />
                      <span className="text-sm">Emergency Service</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Please describe your pest issue, property size, urgency level, preferred time for inspection, or any other relevant details..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferred-time"
                    name="preferred-time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Any time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Free Quote & Inspection
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to receive communication from Super Pest Control Mumbai. 
                  We respect your privacy and never share your information.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              {/* Quick Contact */}
              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Emergency Hotline</h3>
                      <p className="text-blue-700">24/7 Available</p>
                    </div>
                  </div>
                  <a href="tel:+919876543210" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-gray-600 mt-2">For urgent pest emergencies</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">WhatsApp Chat</h3>
                      <p className="text-green-700">Quick Response</p>
                    </div>
                  </div>
                  <a href="https://wa.me/919876543210" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-gray-600 mt-2">Send photos & get instant quotes</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                      <p className="text-orange-700">Business Inquiries</p>
                    </div>
                  </div>
                  <a href="mailto:info@superpestcontrol.com" className="text-xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                    info@superpestcontrol.com
                  </a>
                  <p className="text-gray-600 mt-2">Detailed quotes & documentation</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Super Pest Control Mumbai</h4>
                      <p className="text-gray-600">
                        Shop No. 15, Ground Floor<br />
                        Andheri Business Complex<br />
                        Andheri East, Mumbai - 400069<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-xl mr-4">🕒</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM<br />
                        <span className="text-blue-600 font-medium">Emergency services available 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Areas in Mumbai</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Western Suburbs</h4>
                    <ul className="space-y-1">
                      <li>• Andheri (East & West)</li>
                      <li>• Bandra</li>
                      <li>• Juhu</li>
                      <li>• Versova</li>
                      <li>• Goregaon</li>
                      <li>• Malad</li>
                      <li>• Borivali</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Central Mumbai</h4>
                    <ul className="space-y-1">
                      <li>• Powai</li>
                      <li>• Kurla</li>
                      <li>• Ghatkopar</li>
                      <li>• Mulund</li>
                      <li>• Thane</li>
                      <li>• Vikhroli</li>
                      <li>• Kanjurmarg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">South Mumbai</h4>
                    <ul className="space-y-1">
                      <li>• Colaba</li>
                      <li>• Fort</li>
                      <li>• Nariman Point</li>
                      <li>• Marine Drive</li>
                      <li>• Worli</li>
                      <li>• Lower Parel</li>
                      <li>• Dadar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Eastern Suburbs</h4>
                    <ul className="space-y-1">
                      <li>• Chembur</li>
                      <li>• Govandi</li>
                      <li>• Mankhurd</li>
                      <li>• Vashi</li>
                      <li>• Panvel</li>
                      <li>• Nerul</li>
                      <li>• Belapur</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 p-4 bg-blue-50 rounded-lg">
                  <strong>Note:</strong> We serve all areas of Mumbai and surrounding regions. 
                  If your area is not listed, please contact us for service availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our pest control services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you respond to an emergency?</h3>
              <p className="text-gray-600">
                We provide 24/7 emergency pest control services with a response time of 2 hours or less for urgent situations 
                anywhere in Mumbai. Call our emergency hotline at +91 98765 43210.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the inspection really free?</h3>
              <p className="text-gray-600">
                Yes, we provide completely free property inspections with detailed assessment reports. 
                Our experts will identify pest issues, entry points, and provide recommendations at no cost.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your treatments safe for children and pets?</h3>
              <p className="text-gray-600">
                Absolutely. We use only child and pet-safe, eco-friendly formulations. Our treatments are designed to eliminate 
                pests while ensuring complete safety for your family and pets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide warranty on your treatments?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive warranties ranging from 6 months to 5 years depending on the treatment type. 
                We also offer free follow-up services and re-treatments if needed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, all major credit/debit cards, UPI payments, bank transfers, and digital wallets. 
                We also offer flexible payment plans for long-term contracts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you serve areas outside Mumbai?</h3>
              <p className="text-gray-600">
                We primarily serve Mumbai and surrounding areas including Thane, Navi Mumbai, and nearby regions. 
                Please contact us to confirm service availability in your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don&apos;t let pests take over your property. Contact Mumbai&apos;s most trusted pest control experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              📞 Call Now: +91 98765 43210
            </a>
            <a href="https://wa.me/919876543210" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              💬 WhatsApp Chat
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">✅</div>
              <div className="text-blue-100 text-sm mt-2">Licensed & Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">🏆</div>
              <div className="text-blue-100 text-sm mt-2">4.9★ Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">🛡️</div>
              <div className="text-blue-100 text-sm mt-2">100% Satisfaction</div>
            </div>
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
