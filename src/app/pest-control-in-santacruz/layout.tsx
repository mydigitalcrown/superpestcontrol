import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Santacruz | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Santacruz, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Santacruz East, Santacruz West, Khar, Vile Parle. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in santacruz, best pest control santacruz mumbai, professional pest control santacruz, termite control santacruz, cockroach control santacruz, bed bug control santacruz, pest control services santacruz mumbai, affordable pest control santacruz, emergency pest control santacruz, residential pest control santacruz, commercial pest control santacruz, pest control near me santacruz, same day pest control santacruz, eco friendly pest control santacruz, licensed pest control santacruz, guaranteed pest control santacruz, 24/7 pest control santacruz, pest exterminators santacruz, pest management santacruz, fumigation services santacruz, anti termite treatment santacruz, rodent control santacruz, mosquito control santacruz, lizard control santacruz, spider control santacruz, ant control santacruz, fly control santacruz, santacruz east pest control, santacruz west pest control, khar pest control, vile parle pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-santacruz",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-santacruz',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-santacruz',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-santacruz'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Santacruz | Super Pest Control Services',
    description: 'Get the best pest control services in Santacruz, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-santacruz',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-santacruz-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Santacruz'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Santacruz | Super Pest Control',
    description: 'Professional pest control services in Santacruz, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-santacruz-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Santacruz, Mumbai',
    'geo.position': '19.0810;72.8410',
    'ICBM': '19.0810, 72.8410',
  }
};

export default function PestControlInSantacruzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
