import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Sion | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Sion, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Sion East, Sion West, Wadala, Kurla. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in sion, best pest control sion mumbai, professional pest control sion, termite control sion, cockroach control sion, bed bug control sion, pest control services sion mumbai, affordable pest control sion, emergency pest control sion, residential pest control sion, commercial pest control sion, pest control near me sion, same day pest control sion, eco friendly pest control sion, licensed pest control sion, guaranteed pest control sion, 24/7 pest control sion, pest exterminators sion, pest management sion, fumigation services sion, anti termite treatment sion, rodent control sion, mosquito control sion, lizard control sion, spider control sion, ant control sion, fly control sion, sion east pest control, sion west pest control, wadala pest control, kurla pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sion",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-sion',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-sion',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-sion'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Sion | Super Pest Control Services',
    description: 'Get the best pest control services in Sion, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-sion',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-sion-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Sion'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Sion | Super Pest Control',
    description: 'Professional pest control services in Sion, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-sion-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Sion, Mumbai',
    'geo.position': '19.0430;72.8615',
    'ICBM': '19.0430, 72.8615',
  }
};

export default function PestControlInSionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}