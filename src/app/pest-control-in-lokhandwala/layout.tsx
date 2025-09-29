import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Lokhandwala | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Lokhandwala, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Lokhandwala Complex, Four Bungalows, Oshiwara, Versova. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in lokhandwala, best pest control lokhandwala mumbai, professional pest control lokhandwala, termite control lokhandwala, cockroach control lokhandwala, bed bug control lokhandwala, pest control services lokhandwala mumbai, affordable pest control lokhandwala, emergency pest control lokhandwala, residential pest control lokhandwala, commercial pest control lokhandwala, pest control near me lokhandwala, same day pest control lokhandwala, eco friendly pest control lokhandwala, licensed pest control lokhandwala, guaranteed pest control lokhandwala, 24/7 pest control lokhandwala, pest exterminators lokhandwala, pest management lokhandwala, fumigation services lokhandwala, anti termite treatment lokhandwala, rodent control lokhandwala, mosquito control lokhandwala, lizard control lokhandwala, spider control lokhandwala, ant control lokhandwala, fly control lokhandwala, lokhandwala complex pest control, four bungalows pest control, oshiwara pest control, versova pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lokhandwala",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-lokhandwala',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-lokhandwala',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-lokhandwala'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Lokhandwala | Super Pest Control Services',
    description: 'Get the best pest control services in Lokhandwala, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-lokhandwala',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-lokhandwala-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Lokhandwala'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Lokhandwala | Super Pest Control',
    description: 'Professional pest control services in Lokhandwala, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-lokhandwala-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Lokhandwala, Mumbai',
    'geo.position': '19.1333;72.8327',
    'ICBM': '19.1333, 72.8327',
  }
};

export default function PestControlInLokhandwalaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}