import Link from "next/link";

// Voice Search Optimization - FAQ Data for Naigaon
const faqData = [
  {
    question: "What is the best pest control service in Naigaon?",
    answer: "Super Pest Control is the #1 rated pest control service in Naigaon, offering 24/7 professional services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Naigaon and surrounding Mumbai areas."
  },
  {
    question: "How much does pest control cost in Naigaon?", 
    answer: "Pest control in Naigaon costs between ₹1,800 to ₹6,500 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for Naigaon properties."
  },
  {
    question: "Which pest control is best for cockroaches in Naigaon?",
    answer: "Super Pest Control Naigaon provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Naigaon's environment with 100% satisfaction guarantee."
  },
  {
    question: "How to get rid of termites in Naigaon homes permanently?",
    answer: "Professional termite control in Naigaon involves pre-construction and post-construction soil treatment, wood treatment, and barrier protection using licensed anti-termite chemicals. Super Pest Control offers 5-year warranty on termite treatment in Naigaon."
  },
  {
    question: "Are pest control chemicals safe for children and pets in Naigaon?",
    answer: "Yes, Super Pest Control uses only eco-friendly, child-safe, and pet-safe pest control chemicals approved by regulatory authorities. All treatments in Naigaon follow strict safety protocols and are completely safe for families."
  },
  {
    question: "Do you provide emergency pest control services in Naigaon?",
    answer: "Yes, Super Pest Control provides 24/7 emergency pest control services in Naigaon with same-day service availability. Our rapid response team covers all areas in Naigaon for urgent pest situations."
  }
];

// 100% SEO Optimized Metadata
export const metadata = {
  title: "Best Pest Control Services in Naigaon | Super Pest Control Mumbai",
  description: "Professional pest control services in Naigaon. Termite, cockroach, rodent control with 5-year warranty. 24/7 service. Call +91-80979-41077 for free inspection.",
  keywords: "pest control in Naigaon, Naigaon pest control, termite control Naigaon, cockroach control Naigaon, rodent control Naigaon, bed bug control Naigaon, fumigation services Naigaon, eco-friendly pest control, licensed pest control Naigaon, emergency pest control Naigaon, commercial pest control Naigaon",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Super Pest Control Mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/0"
  },
  openGraph: {
    type: "website",
    title: "Best Pest Control Services in Naigaon | Super Pest Control Mumbai", 
    description: "Professional pest control services in Naigaon. 24/7 service, eco-friendly treatments, 5-year warranty. Call +91-80979-41077",
    url: "https://superpestcontrol.in/0",
    locale: "en_IN",
    siteName: "Super Pest Control Mumbai",
    images: [
      {
        url: "https://superpestcontrol.in/images/pest-control-Naigaon.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services in Naigaon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Services in Naigaon | Super Pest Control Mumbai",
    description: "Professional pest control in Naigaon. 24/7 service, eco-friendly treatments, 5-year warranty. Call +91-80979-41077"
  }
};

export default function PestControlNaigaon() {
  // Structured Data for Local SEO & Voice Search
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Super Pest Control Naigaon",
        "description": "Coastal suburban pest control in Naigaon East and West Vasai-Virar",
        "url": "https://superpestcontrol.in/0",
        "telephone": "+91-80979-41077",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Naigaon",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates", 
          "latitude": 19.3587,
          "longitude": 72.8556
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceArea": {
          "@type": "Place",
          "name": "Naigaon and surrounding Mumbai areas"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating", 
          "ratingValue": "4.9",
          "reviewCount": "650"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pest Control Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cockroach Control in Naigaon"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Termite Control in Naigaon"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Rodent Control in Naigaon"
              }
            }
          ]
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
            "name": "Pest Control in Naigaon",
            "item": "https://superpestcontrol.in/0"
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
                Professional Pest Control Services in Naigaon
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Coastal suburban pest control in Naigaon East and West Vasai-Virar - Expert solutions with 5-year warranty and 24/7 emergency service
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
              Why Choose Our Pest Control Services in Naigaon?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Licensed & Certified</h3>
                <p className="text-gray-600">10+ years serving Naigaon and surrounding Mumbai areas with government-approved treatments</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">Child-safe and pet-safe pest control chemicals for all Naigaon family homes and properties</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Emergency Service</h3>
                <p className="text-gray-600">Same-day pest control response across all Naigaon localities and neighborhoods</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Location Keywords */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Comprehensive Pest Control Services in Naigaon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Cockroach Control", desc: "Advanced gel baiting & spray treatment for Naigaon homes with guaranteed results", icon: "🪳" },
                { name: "Termite Control", desc: "Pre & post-construction termite protection with 5-year warranty coverage", icon: "🐛" },
                { name: "Rodent Control", desc: "Complete mice & rat removal with entry point sealing in Naigaon properties", icon: "🐭" },
                { name: "Bed Bug Control", desc: "Heat treatment & chemical solutions for complete bed bug elimination", icon: "🛏️" },
                { name: "Ant Control", desc: "Colony elimination & prevention for all ant species in Naigaon area", icon: "🐜" },
                { name: "Mosquito Control", desc: "Indoor & outdoor mosquito management for Naigaon's climate", icon: "🦟" }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name} in Naigaon</h3>
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
              Frequently Asked Questions - Pest Control in Naigaon
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

        {/* Local Coverage Keywords */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Pest Control Coverage Areas Near Naigaon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Naigaon Central</h3>
                <p className="text-sm text-gray-600">Professional pest control services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Naigaon East</h3>
                <p className="text-sm text-gray-600">Residential pest management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Naigaon West</h3>
                <p className="text-sm text-gray-600">Commercial pest solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Naigaon South</h3>
                <p className="text-sm text-gray-600">Emergency pest control</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Rid of Pests in Naigaon?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Call now for immediate pest control assistance in Naigaon and surrounding Mumbai areas
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
