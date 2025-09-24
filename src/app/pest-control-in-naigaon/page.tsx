import Link from "next/link";

// Voice Search Optimization - FAQ Data 
const faqData = [
  {
    question: "What is the best pest control service in Naigaon East and West?",
    answer: "Super Pest Control is the #1 rated pest control service in Naigaon, offering 24/7 professional services with eco-friendly solutions, licensed experts, and over 10 years of experience serving Naigaon East, Naigaon West, and surrounding Vasai-Virar areas."
  },
  {
    question: "How much does pest control cost in Naigaon?", 
    answer: "Pest control in Naigaon costs between ₹1,800 to ₹6,500 depending on the type of pest, property size, and treatment required. Super Pest Control offers free inspections, competitive pricing, and transparent costs with no hidden charges for Naigaon properties."
  },
  {
    question: "Which pest control is best for cockroaches in Naigaon?",
    answer: "Super Pest Control Naigaon provides the most effective cockroach control using advanced gel baiting, targeted spray treatments, and long-lasting solutions specifically designed for Naigaon's coastal suburban environment with 100% satisfaction guarantee."
  }
];

// 100% SEO Optimized Metadata
export const metadata = {
  title: "Best Pest Control Services in Naigaon East & West | Super Pest Control",
  description: "Professional pest control services in Naigaon East & West. Termite, cockroach, rodent control with 5-year warranty. 24/7 service. Call +91-80979-41077 for free inspection.",
  keywords: "pest control in Naigaon, Naigaon East pest control, Naigaon West pest control, termite control Naigaon, cockroach control Naigaon, rodent control Naigaon, bed bug control Naigaon, fumigation services Naigaon, eco-friendly pest control, licensed pest control Naigaon, emergency pest control Naigaon, commercial pest control Naigaon",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author: "Super Pest Control Mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-naigaon"
  },
  openGraph: {
    type: "website",
    title: "Best Pest Control Services in Naigaon East & West | Super Pest Control", 
    description: "Professional pest control services in Naigaon East & West. 24/7 service, eco-friendly treatments, 5-year warranty. Call +91-80979-41077",
    url: "https://superpestcontrol.in/pest-control-in-naigaon",
    locale: "en_IN",
    siteName: "Super Pest Control Mumbai"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Services in Naigaon East & West | Super Pest Control",
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
        "description": "Professional pest control services in Naigaon East and West with 5-year warranty",
        "url": "https://superpestcontrol.in/pest-control-in-naigaon",
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
        "serviceArea": "Naigaon East, Naigaon West, Vasai-Virar",
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pest Control Services in Naigaon East & West
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert solutions for cockroaches, termites, rodents & all pests in Naigaon
            </p>
            <Link
              href="tel:+918097941077"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
            >
              Call +91-80979-41077
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Pest Control Services in Naigaon?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Licensed & Certified</h3>
              <p className="text-gray-600">10+ years serving Naigaon East, West & Vasai-Virar areas</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Safe for children, pets & families in Naigaon</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">Same-day pest control response in Naigaon</p>
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
              { name: "Cockroach Control", desc: "Advanced gel baiting & spray treatment for Naigaon homes", icon: "🪳" },
              { name: "Termite Control", desc: "Pre & post-construction termite protection with 5-year warranty", icon: "🐛" },
              { name: "Rodent Control", desc: "Complete mice & rat removal with entry point sealing", icon: "🐭" },
              { name: "Bed Bug Control", desc: "Heat treatment & chemical solutions for bed bug elimination", icon: "🛏️" },
              { name: "Ant Control", desc: "Colony elimination & prevention for all ant species", icon: "🐜" },
              { name: "Mosquito Control", desc: "Indoor & outdoor mosquito management in coastal areas", icon: "🦟" }
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

      {/* FAQ Section for Voice Search */}
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

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Rid of Pests in Naigaon?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call now for immediate pest control assistance in Naigaon East, West & surrounding Vasai-Virar areas
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
