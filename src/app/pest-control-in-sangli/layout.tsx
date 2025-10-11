import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Sangli | #1 Professional Services Maharashtra | Super Pest Control',
  description: 'Professional Pest Control Services in Sangli, Maharashtra. Expert termite control, cockroach treatment, bed bug removal near Miraj, Kupwad, Vishrambag, Shahupuri. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in sangli, best pest control sangli maharashtra, professional pest control sangli, termite control sangli, cockroach control sangli, bed bug control sangli, pest control services sangli maharashtra, affordable pest control sangli, emergency pest control sangli, residential pest control sangli, commercial pest control sangli, pest control near me sangli, same day pest control sangli, eco friendly pest control sangli, licensed pest control sangli, guaranteed pest control sangli, 24/7 pest control sangli, pest exterminators sangli, pest management sangli, fumigation services sangli, anti termite treatment sangli, rodent control sangli, mosquito control sangli, lizard control sangli, spider control sangli, ant control sangli, fly control sangli, miraj pest control, kupwad pest control, vishrambag pest control, shahupuri pest control, ganpati peth pest control, sangli pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sangli",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-sangli',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-sangli',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-sangli'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Sangli | Super Pest Control Services',
    description: 'Get the best pest control services in Sangli, Maharashtra with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-sangli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-sangli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Sangli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Sangli | Super Pest Control',
    description: 'Professional pest control services in Sangli, Maharashtra with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-sangli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Sangli, Maharashtra',
    'geo.position': '16.8524;74.5815',
    'ICBM': '16.8524, 74.5815',
  }
};

export default function PestControlInSangliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
