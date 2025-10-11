import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Vikhroli | 24/7 Service | Super Pest Control',
  description: 'Professional Pest Control Services in Vikhroli, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Vikhroli East, Vikhroli West, Ghatkopar, Kanjurmarg. 100% guaranteed results. Call ?? +91-8097941077 for immediate service.',
  keywords: 'pest control in vikhroli, best pest control vikhroli mumbai, professional pest control vikhroli, termite control vikhroli, cockroach control vikhroli, bed bug control vikhroli, pest control services vikhroli mumbai, affordable pest control vikhroli, emergency pest control vikhroli, residential pest control vikhroli, commercial pest control vikhroli, pest control near me vikhroli, same day pest control vikhroli, eco friendly pest control vikhroli, licensed pest control vikhroli, guaranteed pest control vikhroli, 24/7 pest control vikhroli, pest exterminators vikhroli, pest management vikhroli, fumigation services vikhroli, anti termite treatment vikhroli, rodent control vikhroli, mosquito control vikhroli, lizard control vikhroli, spider control vikhroli, ant control vikhroli, fly control vikhroli, vikhroli east pest control, vikhroli west pest control, ghatkopar pest control, kanjurmarg pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-vikhroli",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-vikhroli',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-vikhroli',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-vikhroli'
    }
  },
  openGraph: {
    title: 'Pest Control in Vikhroli | Super Pest Control Services',
    description: 'Get the best pest control services in Vikhroli, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-vikhroli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-vikhroli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Vikhroli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Vikhroli | 24/7 Service | Super Pest Control',
    description: 'Professional pest control services in Vikhroli, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-vikhroli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Vikhroli, Mumbai',
    'geo.position': '19.1136;72.9251',
    'ICBM': '19.1136, 72.9251',
  }
};

export default function PestControlInVikhroliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
