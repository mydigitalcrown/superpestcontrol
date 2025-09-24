import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Super Pest Control Mumbai",
  description: "Privacy policy for Super Pest Control Mumbai. How we collect, use, and protect your personal information during pest control services.",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">Super Pest Control Mumbai Data Protection</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Statement</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide when requesting pest control services, including your name, 
                  phone number, address, and pest control requirements. This information helps us provide 
                  effective, customized pest control solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
                <p className="text-gray-600 mb-4">
                  Your information is used to schedule services, provide treatments, send service reminders, 
                  and maintain warranty records. We may contact you about follow-up treatments or new services 
                  that may benefit your pest control needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Information Protection</h3>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information. 
                  Your data is stored securely and accessed only by authorized personnel for service delivery purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Information Sharing</h3>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or transfer your personal information to third parties. 
                  Information may only be shared with service technicians as needed to complete your pest control treatment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Preferences</h3>
                <p className="text-gray-600 mb-4">
                  You can opt out of promotional communications at any time while continuing to receive 
                  service-related communications. We respect your communication preferences and privacy choices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We retain your information for as long as necessary to provide services and maintain 
                  warranty records. You can request data deletion at any time, subject to legal requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact for Privacy Concerns</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about this privacy policy or how we handle your information:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-800 font-semibold">Super Pest Control Mumbai</p>
                  <p className="text-gray-600">Phone: <Link href="tel:+918097941077" className="text-blue-600 hover:text-blue-800">+91-80979-41077</Link></p>
                  <p className="text-gray-600">Website: <Link href="/" className="text-blue-600 hover:text-blue-800">superpestcontrol.in</Link></p>
                  <p className="text-gray-600 text-sm mt-2">Last Updated: {new Date().getFullYear()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}