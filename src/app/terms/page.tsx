import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Super Pest Control Mumbai",
  description: "Terms and conditions for Super Pest Control Mumbai services. Professional pest control terms, warranty conditions, and service agreements.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl">Super Pest Control Mumbai Service Agreement</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Terms</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Service Agreement</h3>
                <p className="text-gray-600 mb-4">
                  By engaging Super Pest Control Mumbai services, you agree to these terms and conditions. 
                  Our professional pest control services are provided with a commitment to quality, safety, and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Service Warranty</h3>
                <p className="text-gray-600 mb-4">
                  We provide a 5-year warranty on termite control treatments and up to 1-year warranty on other pest control services. 
                  Warranty terms are specific to each service type and treatment method used.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Safety and Compliance</h3>
                <p className="text-gray-600 mb-4">
                  All treatments are conducted using government-approved, eco-friendly chemicals. 
                  We follow strict safety protocols to ensure treatments are safe for children, pets, and family members.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Payment Terms</h3>
                <p className="text-gray-600 mb-4">
                  Payment is due upon service completion unless otherwise arranged. 
                  We accept cash, UPI, and bank transfers. Free inspections are provided with no obligation to purchase services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Service Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Our services cover Mumbai, Navi Mumbai, Thane, Pune, and surrounding areas. 
                  Emergency services are available 24/7 with same-day response in most locations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-4">
                  For questions about these terms or our services, contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-800 font-semibold">Super Pest Control Mumbai</p>
                  <p className="text-gray-600">Phone: <Link href="tel:+918097941077" className="text-blue-600 hover:text-blue-800">+91-80979-41077</Link></p>
                  <p className="text-gray-600">Website: <Link href="/" className="text-blue-600 hover:text-blue-800">superpestcontrol.in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}