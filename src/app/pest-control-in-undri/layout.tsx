import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Undri | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Undri, Pune. Expert termite control, cockroach treatment, bed bug removal near Karve Road, Paud Road, Mayur Colony, Deepak Society. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in Undri, best pest control Undri pune, professional pest control Undri, termite control Undri, cockroach control Undri, bed bug control Undri, pest control services Undri pune, affordable pest control Undri, emergency pest control Undri, residential pest control Undri, commercial pest control Undri, pest control near me Undri, same day pest control Undri, eco friendly pest control Undri, licensed pest control Undri, guaranteed pest control Undri, 24/7 pest control Undri, pest exterminators Undri, pest management Undri, fumigation services Undri, anti termite treatment Undri, rodent control Undri, mosquito control Undri, lizard control Undri, spider control Undri, ant control Undri, fly control Undri, karve road pest control, paud road pest control, mayur colony pest control, deepak society pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-Undri",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-Undri',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-Undri',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-Undri'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Undri | Super Pest Control Services',
    description: 'Get the best pest control services in Undri, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-Undri',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-Undri-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Undri'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Undri | Super Pest Control',
    description: 'Professional pest control services in Undri, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-Undri-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Undri, Pune',
    'geo.position': '18.5074;73.8077',
    'ICBM': '18.5074, 73.8077',
  }
};

export default function PestControlInUndriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
