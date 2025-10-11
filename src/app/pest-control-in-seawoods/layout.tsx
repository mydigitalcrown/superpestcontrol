import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Seawoods | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Seawoods, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Seawoods East, Seawoods West, Nerul. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in seawoods, best pest control seawoods navi mumbai, professional pest control seawoods, termite control seawoods, cockroach control seawoods, bed bug control seawoods, pest control services seawoods navi mumbai, affordable pest control seawoods, emergency pest control seawoods, residential pest control seawoods, commercial pest control seawoods, pest control near me seawoods, same day pest control seawoods, eco friendly pest control seawoods, licensed pest control seawoods, guaranteed pest control seawoods, 24/7 pest control seawoods, pest exterminators seawoods, pest management seawoods, fumigation services seawoods, anti termite treatment seawoods, rodent control seawoods, mosquito control seawoods, lizard control seawoods, spider control seawoods, ant control seawoods, fly control seawoods, seawoods east pest control, seawoods west pest control, nerul pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-seawoods",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-seawoods',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-seawoods',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-seawoods'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Seawoods | Super Pest Control Services',
    description: 'Get the best pest control services in Seawoods, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-seawoods',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-seawoods-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Nahur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Nahur | Super Pest Control',
    description: 'Professional pest control services in Nahur, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-nahur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nahur, Mumbai',
    'geo.position': '19.2183;72.9781',
    'ICBM': '19.2183, 72.9781',
  }
};

export default function PestControlInNahurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
