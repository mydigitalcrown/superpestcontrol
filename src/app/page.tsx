import Link from "next/link";

// FAQ data for voice search optimization
const faqData = [
  {
    question: "What is the best pest control service in Mumbai?",
    answer: "Super Pest Control Mumbai is the #1 rated pest control service in Mumbai, offering 24/7 professional pest control services with eco-friendly solutions and licensed experts."
  },
  {
    question: "How much does pest control cost in Mumbai?",
    answer: "Pest control in Mumbai typically costs between ₹1,500 to ₹5,000 depending on the type of pest, property size, and treatment required. We offer free inspections and competitive pricing."
  },
  {
    question: "Which pest control is best for cockroaches in Mumbai?",
    answer: "Super Pest Control Mumbai provides the most effective cockroach control using advanced gel baiting, spray treatments, and long-lasting solutions with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Mumbai homes?",
    answer: "Professional termite control involves soil treatment, wood treatment, and barrier protection. Our certified technicians use the latest anti-termite chemicals safe for families."
  },
  {
    question: "What are the best pest control methods for Mumbai climate?",
    answer: "Mumbai's humid climate requires specialized pest control methods including moisture control, targeted treatments for monsoon pests, and preventive solutions for year-round protection."
  },
  {
    question: "How often should I get pest control done in Mumbai?",
    answer: "For optimal protection in Mumbai, residential pest control should be done every 3-4 months, while commercial properties may need monthly treatments depending on the business type."
  },
  {
    question: "Are pest control chemicals safe for children and pets?",
    answer: "Yes, we use only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments follow strict safety protocols."
  },
  {
    question: "Do you provide emergency pest control services in Mumbai?",
    answer: "Yes, we provide 24/7 emergency pest control services across Mumbai including South Mumbai, Central Mumbai, Western Suburbs, and Navi Mumbai with same-day service availability."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Schema for FAQ and Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Super Pest Control Mumbai</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
              <Link href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">FAQ</Link>
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

      {/* Hero Section - Zero Ranking Optimized */}
      <section id="home" className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-primary-600">Pest Control In Mumbai</span> - #1 Professional Services
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-700 mb-4">
                Best Pest Control In Mumbai ✓ 24/7 Service ✓ Licensed Experts
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Looking for <strong>pest control in Mumbai</strong>? We are Mumbai&apos;s #1 rated professional pest control service providing eco-friendly, safe, and effective solutions for termites, cockroaches, rodents, and mosquitoes. Serving all areas of Mumbai with 24/7 emergency service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors text-center">
                  Get Free Inspection
                </a>
                <a href="tel:+919876543210" className="bg-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-600 transition-colors text-center">
                  Emergency Call: +91 98765 43210
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Service Request</h3>
                <p className="text-gray-600 mb-4">Get instant quote for pest control in Mumbai</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select Pest Control Service</option>
                    <option>Termite Control in Mumbai</option>
                    <option>Cockroach Control in Mumbai</option>
                    <option>Rodent Control in Mumbai</option>
                    <option>Mosquito Control in Mumbai</option>
                    <option>General Pest Control in Mumbai</option>
                  </select>
                  <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                    Request Free Inspection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - ASO Optimized */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Pest Control Services in Mumbai</h2>
            <p className="text-xl text-gray-600">Comprehensive pest control solutions for all your needs in Mumbai</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl">🐜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Termite Control in Mumbai</h3>
              <p className="text-gray-600">Advanced anti-termite treatment and prevention for long-term protection of your Mumbai property. Pre and post-construction termite control services.</p>
              <ul className="mt-4 text-sm text-gray-500">
                <li>• Soil treatment</li>
                <li>• Wood treatment</li>
                <li>• 5-year warranty</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-secondary-300 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary-600 text-2xl">🪳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cockroach Control in Mumbai</h3>
              <p className="text-gray-600">Effective cockroach elimination using gel baiting and spray treatments. Perfect for Mumbai&apos;s humid climate conditions.</p>
              <ul className="mt-4 text-sm text-gray-500">
                <li>• Gel baiting</li>
                <li>• Spray treatment</li>
                <li>• 100% safe chemicals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl">🐭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rodent Control in Mumbai</h3>
              <p className="text-gray-600">Complete rat and mouse control solutions for Mumbai homes and offices. Includes sealing entry points and prevention.</p>
              <ul className="mt-4 text-sm text-gray-500">
                <li>• Rat proofing</li>
                <li>• Bait stations</li>
                <li>• Entry point sealing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-secondary-300 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary-600 text-2xl">🦟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mosquito Control in Mumbai</h3>
              <p className="text-gray-600">Professional mosquito control to protect your family from dengue, malaria, and chikungunya in Mumbai&apos;s monsoon season.</p>
              <ul className="mt-4 text-sm text-gray-500">
                <li>• Fogging treatment</li>
                <li>• Breeding site control</li>
                <li>• Monthly maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Search Optimized FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions - Pest Control in Mumbai</h2>
            <p className="text-xl text-gray-600">Get instant answers to common pest control questions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Pest Control Services in Mumbai?</h2>
            <p className="text-xl text-gray-600">Mumbai&apos;s most trusted pest control experts with proven results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified in Mumbai</h3>
              <p className="text-gray-600">Government licensed and certified pest control professionals with over 10 years of experience serving Mumbai families and businesses.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly & Safe Solutions</h3>
              <p className="text-gray-600">100% safe, eco-friendly pest control treatments that protect your family, pets, and the Mumbai environment from harmful chemicals.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service in Mumbai</h3>
              <p className="text-gray-600">Round-the-clock emergency pest control services across all Mumbai areas including South Mumbai, Central Mumbai, Western Suburbs, and Navi Mumbai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Answer Search Optimization Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get the Best Pest Control in Mumbai Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-4">Immediate Response</h3>
              <p className="text-lg">Call us now for same-day pest control service in Mumbai. Our experts are ready to help you 24/7.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Free Inspection</h3>
              <p className="text-lg">Get a free pest inspection and detailed quote for your Mumbai property. No hidden charges, transparent pricing.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Guaranteed Results</h3>
              <p className="text-lg">100% satisfaction guarantee with follow-up visits. If pests return, so do we - absolutely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Best Pest Control Service in Mumbai</h2>
            <p className="text-xl text-gray-600">Ready to solve your pest problems? Contact Mumbai&apos;s #1 pest control experts today!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary-500 text-xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">24/7 Emergency Helpline</p>
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
                    <p className="font-semibold">Service Areas in Mumbai</p>
                    <p className="text-gray-600">South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, Navi Mumbai, Thane</p>
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

            <div className="bg-white p-8 rounded-2xl shadow-2xl border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Pest Control Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Select Mumbai Area</option>
                  <option>South Mumbai (Colaba, Fort, Churchgate)</option>
                  <option>Central Mumbai (Dadar, Parel, Matunga)</option>
                  <option>Western Suburbs (Bandra, Juhu, Andheri)</option>
                  <option>Eastern Suburbs (Ghatkopar, Vikhroli, Mulund)</option>
                  <option>Navi Mumbai (Vashi, Kharghar, Panvel)</option>
                  <option>Thane (Thane West, Thane East)</option>
                </select>
                <textarea rows={4} placeholder="Describe your pest problem in detail..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                  Get Free Inspection & Quote
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
              <h3 className="text-xl font-bold mb-4">Super Pest Control Mumbai</h3>
              <p className="text-gray-400">Mumbai&apos;s #1 trusted pest control experts providing safe and effective solutions for over 10 years. Licensed, certified, and eco-friendly pest control services.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Termite Control in Mumbai</li>
                <li>Cockroach Control in Mumbai</li>
                <li>Rodent Control in Mumbai</li>
                <li>Mosquito Control in Mumbai</li>
                <li>General Pest Control</li>
                <li>Commercial Pest Control</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Mumbai Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>South Mumbai</li>
                <li>Central Mumbai</li>
                <li>Western Suburbs</li>
                <li>Eastern Suburbs</li>
                <li>Navi Mumbai</li>
                <li>Thane</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@superpestcontrolmumbai.com</p>
                <p>🕒 24/7 Emergency Service</p>
                <p>⭐ 4.9/5 Rating (250+ Reviews)</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Super Pest Control Mumbai. All rights reserved. | Best Pest Control in Mumbai | Licensed & Certified</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
