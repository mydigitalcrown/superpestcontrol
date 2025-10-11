import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Kandivali | 24/7 Service | Super Pest Control',
  description: 'Professional Pest Control Services in Kandivali, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Kandivali East, Kandivali West, Malad, Borivali, Lokhandwala, Charkop. 100% guaranteed results. Call ?? +91-8097941077 for immediate service.',
  keywords: 'pest control in kandivali, best pest control kandivali mumbai, professional pest control kandivali, termite control kandivali, cockroach control kandivali, bed bug control kandivali, pest control services kandivali mumbai, affordable pest control kandivali, emergency pest control kandivali, residential pest control kandivali, commercial pest control kandivali, pest control near me kandivali, same day pest control kandivali, eco friendly pest control kandivali, licensed pest control kandivali, guaranteed pest control kandivali, 24/7 pest control kandivali, pest exterminators kandivali, pest management kandivali, fumigation services kandivali, anti termite treatment kandivali, rodent control kandivali, mosquito control kandivali, lizard control kandivali, spider control kandivali, ant control kandivali, fly control kandivali, kandivali east pest control, kandivali west pest control, malad pest control, borivali pest control, lokhandwala pest control, charkop pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kandivali"
  },
  openGraph: {
    title: 'Pest Control in Kandivali | Super Pest Control Services',
    description: 'Get the best pest control services in Kandivali, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kandivali',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kandivali-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kandivali'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Kandivali | 24/7 Service | Super Pest Control',
    description: 'Professional pest control services in Kandivali, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kandivali-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kandivali, Mumbai',
    'geo.position': '19.2056;72.8505',
    'ICBM': '19.2056, 72.8505',
  }
};

export default function PestControlInKandivaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
