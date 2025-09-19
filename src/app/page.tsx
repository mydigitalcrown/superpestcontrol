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
      
      {/* Professional Header with Logo */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Professional Text Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-600 leading-tight">
                  Super Pest Control
                </h1>
                <p className="text-sm text-secondary-600 font-medium tracking-wide">MUMBAI&apos;S #1 PEST EXPERTS</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-secondary-600 font-medium transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-secondary-600 font-medium transition-all duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-secondary-600 font-medium transition-all duration-300 relative group">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-secondary-600 font-medium transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex flex-col text-right text-sm">
                <span className="text-gray-600 font-medium">24/7 Emergency</span>
                <span className="text-secondary-600 font-bold">+91 98765 43210</span>
              </div>
              <a href="tel:+919876543210" className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Call Now
              </a>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Hero Section - Zero Ranking Optimized */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-secondary-50 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Ccircle cx='60' cy='60' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2 animate-pulse"></span>
                #1 Rated Pest Control in Mumbai
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary-600 block">Pest Control</span>
                  <span className="text-secondary-700 block">In Mumbai</span>
                  <span className="text-gray-800 text-2xl md:text-3xl font-medium block mt-2">
                    Professional & Trusted Services
                  </span>
                </h1>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
                  <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <span className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      24/7 Emergency Service
                    </span>
                    <span className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Licensed Experts
                    </span>
                    <span className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Eco-Friendly Solutions
                    </span>
                    <span className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Free Inspection
                    </span>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Looking for <strong className="text-primary-600">pest control in Mumbai</strong>? We are Mumbai&apos;s #1 rated professional pest control service providing eco-friendly, safe, and effective solutions for termites, cockroaches, rodents, and mosquitoes. Serving all areas of Mumbai with guaranteed results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Get Free Inspection
                </a>
                <a href="tel:+919876543210" className="group bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Emergency: +91 98765 43210
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">250+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Professional Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Instant Quote</h3>
                  <p className="text-gray-600">Free inspection & consultation for pest control in Mumbai</p>
                  <div className="flex justify-center mt-3">
                    <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Response in 15 minutes
                    </div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" />
                    <input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                    <option>Select Pest Control Service</option>
                    <option>🐜 Termite Control in Mumbai</option>
                    <option>🪳 Cockroach Control in Mumbai</option>
                    <option>🐭 Rodent Control in Mumbai</option>
                    <option>🦟 Mosquito Control in Mumbai</option>
                    <option>🏠 General Pest Control in Mumbai</option>
                    <option>🏢 Commercial Pest Control</option>
                  </select>
                  <textarea rows={3} placeholder="Describe your pest problem..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"></textarea>
                  <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Request Free Inspection Now
                  </button>
                </form>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>🔒 Your information is 100% secure and confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section - ASO Optimized */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Our Professional Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">Professional Pest Control</span>
              <br />
              <span className="text-secondary-700">Services in Mumbai</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions designed specifically for Mumbai&apos;s climate and urban environment. Industry-leading techniques with guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Termite Control Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-3xl">🐜</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  POPULAR
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Termite Control</h3>
              <h4 className="text-primary-600 font-semibold text-center mb-4">Advanced Anti-Termite Treatment</h4>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive termite protection for Mumbai properties with pre & post-construction treatments. 5-year warranty included.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Soil & Wood Treatment
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  5-Year Comprehensive Warranty
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Licensed Chemicals Only
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">₹3,000+</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>

            {/* Cockroach Control Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-secondary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-secondary-600 text-3xl">🪳</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  EFFECTIVE
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cockroach Control</h3>
              <h4 className="text-secondary-600 font-semibold text-center mb-4">Advanced Gel & Spray Treatment</h4>
              <p className="text-gray-600 text-center mb-6">
                Highly effective cockroach elimination perfect for Mumbai&apos;s humid climate. German cockroach specialists.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Professional Gel Baiting
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Targeted Spray Treatment
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Child & Pet Safe Formula
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600 mb-1">₹1,500+</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>

            {/* Rodent Control Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-3xl">🐭</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  COMPLETE
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Rodent Control</h3>
              <h4 className="text-primary-600 font-semibold text-center mb-4">Complete Rat & Mouse Elimination</h4>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive rodent control for Mumbai homes and offices. Includes rat-proofing and entry point sealing.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Professional Rat Proofing
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Secure Bait Stations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Entry Point Sealing
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">₹2,500+</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>

            {/* Mosquito Control Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-secondary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-secondary-600 text-3xl">🦟</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  MONSOON
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mosquito Control</h3>
              <h4 className="text-secondary-600 font-semibold text-center mb-4">Monsoon Season Protection</h4>
              <p className="text-gray-600 text-center mb-6">
                Professional mosquito control to protect against dengue, malaria, and chikungunya during Mumbai monsoons.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Professional Fogging Treatment
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Breeding Site Elimination
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Monthly Maintenance Program
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600 mb-1">₹2,000+</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>
          </div>

          {/* Service Process */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Professional Service Process</h3>
              <p className="text-xl opacity-90">Industry-standard 4-step process ensuring 100% customer satisfaction</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Free Inspection</h4>
                <p className="text-sm opacity-90">Detailed property assessment and pest identification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Custom Treatment Plan</h4>
                <p className="text-sm opacity-90">Tailored solution based on pest type and severity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Professional Treatment</h4>
                <p className="text-sm opacity-90">Expert application using industry-leading methods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Follow-up & Warranty</h4>
                <p className="text-sm opacity-90">Regular monitoring and warranty protection</p>
              </div>
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
