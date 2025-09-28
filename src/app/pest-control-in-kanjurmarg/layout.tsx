import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kanjurmarg | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kanjurmarg, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Kanjurmarg East, Kanjurmarg West, Vikhroli, Powai, Bhandup, Mulund. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kanjurmarg, best pest control kanjurmarg mumbai, professional pest control kanjurmarg, termite control kanjurmarg, cockroach control kanjurmarg, bed bug control kanjurmarg, pest control services kanjurmarg mumbai, affordable pest control kanjurmarg, emergency pest control kanjurmarg, residential pest control kanjurmarg, commercial pest control kanjurmarg, pest control near me kanjurmarg, same day pest control kanjurmarg, eco friendly pest control kanjurmarg, licensed pest control kanjurmarg, guaranteed pest control kanjurmarg, 24/7 pest control kanjurmarg, pest exterminators kanjurmarg, pest management kanjurmarg, fumigation services kanjurmarg, anti termite treatment kanjurmarg, rodent control kanjurmarg, mosquito control kanjurmarg, lizard control kanjurmarg, spider control kanjurmarg, ant control kanjurmarg, fly control kanjurmarg, kanjurmarg east pest control, kanjurmarg west pest control, vikhroli pest control, powai pest control, bhandup pest control, mulund pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kanjurmarg",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kanjurmarg',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kanjurmarg',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kanjurmarg'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kanjurmarg | Super Pest Control Services',
    description: 'Get the best pest control services in Kanjurmarg, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kanjurmarg',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kanjurmarg-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kanjurmarg'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kanjurmarg | Super Pest Control',
    description: 'Professional pest control services in Kanjurmarg, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kanjurmarg-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kanjurmarg, Mumbai',
    'geo.position': '19.1237;72.9348',
    'ICBM': '19.1237, 72.9348',
  }
};

export default function PestControlInKanjurmargLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}