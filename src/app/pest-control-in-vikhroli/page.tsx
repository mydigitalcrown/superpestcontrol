import Link from "next/link";

// Voice Search Optimization - FAQ Data for Vikhroli
const faqData = [
  {
    question: "What is the best pest control service in Vikhroli?",
    answer: "Super Pest Control is the #1 rated pest control service in Vikhroli, offering 24/7 professional services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Vikhroli and surrounding areas."
  },
  {
    question: "How much does pest control cost in Vikhroli?", 
    answer: "Pest control in Vikhroli costs between ₹1,800 to ₹6,500 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for Vikhroli properties."
  },
  {
    question: "Which pest control is best for cockroaches in Vikhroli?",
    answer: "Super Pest Control Vikhroli provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Vikhroli's environment with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Vikhroli homes permanently?",
    answer: "Professional termite control in Vikhroli involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Vikhroli."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Vikhroli?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments in Vikhroli follow strict safety protocols and are completely safe for families."
  },
  {
    question: "Do you provide emergency pest control services in Vikhroli?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Vikhroli with same-day service availability. Our rapid response team covers all areas in Vikhroli for urgent pest situations."
  }
];

// 100% SEO Optimized Metadata
export const metadata = {
  title: "Best Pest Control Services in Vikhroli | Super Pest Control Mumbai",
  description: "Professional pest control services in Vikhroli. Termite, cockroach, rodent control with 5-year warranty. 24/7 service. Call +91-80979-41077 for free inspection.",
  keywords: "pest control in Vikhroli, Vikhroli pest control, termite control Vikhroli, cockroach control Vikhroli, rodent control Vikhroli, bed bug control Vikhroli, fumigation services Vikhroli, eco-friendly pest control, licensed pest control Vikhroli, emergency pest control Vikhroli, commercial pest control Vikhroli",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Super Pest Control Mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-vikhroli"
  },
  openGraph: {
    type: "website",
    title: "Best Pest Control Services in Vikhroli | Super Pest Control Mumbai", 
    description: "Professional pest control services in Vikhroli. 24/7 service, eco-friendly treatments, 5-year warranty. Call +91-80979-41077",
    url: "https://superpestcontrol.in/pest-control-in-vikhroli",
    locale: "en_IN",
    siteName: "Super Pest Control Mumbai"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Services in Vikhroli | Super Pest Control Mumbai",
    description: "Professional pest control in Vikhroli. 24/7 service, eco-friendly treatments, 5-year warranty. Call +91-80979-41077"
  }
};

export default function PestControlVikhroli() {
  // Structured Data for Local SEO & Voice Search
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Super Pest Control Vikhroli",
        "description": "Industrial and residential pest control in Vikhroli East and West",
        "url": "https://superpestcontrol.in/pest-control-in-vikhroli",
        "telephone": "+91-80979-41077",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vikhroli",
          "addressRegion": "Maharashtra",
          "postalCode": "400079",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates", 
          "latitude": 19.1059,
          "longitude": 72.9292
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
          "@type": "Place",
          "name": "Vikhroli and surrounding areas"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating", 
          "ratingValue": "4.9",
          "reviewCount": "650"
        }
      },
      {
        "@type": "FAQPage", 
        "mainEntity": faqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://superpestcontrol.in"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Pest Control in Vikhroli",
            "item": "https://superpestcontrol.in/pest-control-in-vikhroli"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Primary H1 for SEO */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Pest Control Services in Vikhroli
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Industrial and residential pest control in Vikhroli East and West - Expert solutions with 5-year warranty and 24/7 emergency service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+918097941077"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
                >
                  Call +91-80979-41077
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
                >
                  Free Inspection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits - H2 for SEO Structure */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Our Pest Control Services in Vikhroli?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Licensed & Certified</h3>
                <p className="text-gray-600">10+ years serving Vikhroli and surrounding areas with government-approved treatments</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">Child-safe and pet-safe pest control chemicals for all Vikhroli family homes and properties</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Emergency Service</h3>
                <p className="text-gray-600">Same-day pest control response across all Vikhroli localities and neighborhoods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Location Keywords */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Comprehensive Pest Control Services in Vikhroli
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Cockroach Control", desc: "Advanced gel baiting & spray treatment for Vikhroli homes with guaranteed results", icon: "🪳" },
                { name: "Termite Control", desc: "Pre & post-construction termite protection with 5-year warranty coverage", icon: "🐛" },
                { name: "Rodent Control", desc: "Complete mice & rat removal with entry point sealing in Vikhroli properties", icon: "🐭" },
                { name: "Bed Bug Control", desc: "Heat treatment & chemical solutions for complete bed bug elimination", icon: "🛏️" },
                { name: "Ant Control", desc: "Colony elimination & prevention for all ant species in Vikhroli area", icon: "🐜" },
                { name: "Mosquito Control", desc: "Indoor & outdoor mosquito management for Vikhroli's climate", icon: "🦟" }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name} in Vikhroli</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link
                    href="tel:+918097941077"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Get Free Quote →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section for Voice Search Optimization */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions - Pest Control in Vikhroli
            </h2>
            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Rid of Pests in Vikhroli?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Call now for immediate pest control assistance in Vikhroli and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+918097941077"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
              >
                Call +91-80979-41077 Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
