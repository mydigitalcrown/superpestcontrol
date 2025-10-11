import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Oshiwara | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Oshiwara, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Oshiwara East, Oshiwara West, Jogeshwari, Malad. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in oshiwara, best pest control oshiwara mumbai, professional pest control oshiwara, termite control oshiwara, cockroach control oshiwara, bed bug control oshiwara, pest control services oshiwara mumbai, affordable pest control oshiwara, emergency pest control oshiwara, residential pest control oshiwara, commercial pest control oshiwara, pest control near me oshiwara, same day pest control oshiwara, eco friendly pest control oshiwara, licensed pest control oshiwara, guaranteed pest control oshiwara, 24/7 pest control oshiwara, pest exterminators oshiwara, pest management oshiwara, fumigation services oshiwara, anti termite treatment oshiwara, rodent control oshiwara, mosquito control oshiwara, lizard control oshiwara, spider control oshiwara, ant control oshiwara, fly control oshiwara, oshiwara east pest control, oshiwara west pest control, jogeshwari pest control, malad pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-oshiwara",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-oshiwara',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-oshiwara',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-oshiwara'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Oshiwara | Super Pest Control Services',
    description: 'Get the best pest control services in Oshiwara, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-oshiwara',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-oshiwara-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Oshiwara'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Oshiwara | Super Pest Control',
    description: 'Professional pest control services in Oshiwara, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-oshiwara-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Oshiwara, Mumbai',
    'geo.position': '19.1490;72.8320',
    'ICBM': '19.1490, 72.8320',
  }
};

export default function PestControlInOshiwaraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
