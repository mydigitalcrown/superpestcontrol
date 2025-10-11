import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Satara | #1 Professional Services Maharashtra | Super Pest Control',
  description: 'Professional Pest Control Services in Satara, Maharashtra. Expert termite control, cockroach treatment, bed bug removal near Satara City, Koregaon, Karad, Phaltan. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in satara, best pest control satara maharashtra, professional pest control satara, termite control satara, cockroach control satara, bed bug control satara, pest control services satara maharashtra, affordable pest control satara, emergency pest control satara, residential pest control satara, commercial pest control satara, pest control near me satara, same day pest control satara, eco friendly pest control satara, licensed pest control satara, guaranteed pest control satara, 24/7 pest control satara, pest exterminators satara, pest management satara, fumigation services satara, anti termite treatment satara, rodent control satara, mosquito control satara, lizard control satara, spider control satara, ant control satara, fly control satara, satara city pest control, koregaon pest control, karad pest control, phaltan pest control, wai pest control, maharashtra pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-satara",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-satara',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-satara',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-satara'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Satara | Super Pest Control Services',
    description: 'Get the best pest control services in Satara, Maharashtra with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-satara',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-satara-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Satara'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Satara | Super Pest Control',
    description: 'Professional pest control services in Satara, Maharashtra with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-satara-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Satara, Maharashtra',
    'geo.position': '17.6805;74.0183',
    'ICBM': '17.6805, 74.0183',
  }
};

export default function PestControlInSataraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
