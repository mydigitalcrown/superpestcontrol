import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Shirvane | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Shirvane, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Shirvane, Borivali, Kandivali, Dahisar. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in shirvane, best pest control shirvane mumbai, professional pest control shirvane, termite control shirvane, cockroach control shirvane, bed bug control shirvane, pest control services shirvane mumbai, affordable pest control shirvane, emergency pest control shirvane, residential pest control shirvane, commercial pest control shirvane, pest control near me shirvane, same day pest control shirvane, eco friendly pest control shirvane, licensed pest control shirvane, guaranteed pest control shirvane, 24/7 pest control shirvane, pest exterminators shirvane, pest management shirvane, fumigation services shirvane, anti termite treatment shirvane, rodent control shirvane, mosquito control shirvane, lizard control shirvane, spider control shirvane, ant control shirvane, fly control shirvane, shirvane area pest control, borivali pest control, kandivali pest control, dahisar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shirvane",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-shirvane',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-shirvane',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-shirvane'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Shirvane | Super Pest Control Services',
    description: 'Get the best pest control services in Shirvane, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-shirvane',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-shirvane-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Shirvane'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Shirvane | Super Pest Control',
    description: 'Professional pest control services in Shirvane, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-shirvane-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Shirvane, Mumbai',
    'geo.position': '19.2547;72.8181',
    'ICBM': '19.2547, 72.8181',
  }
};

export default function PestControlInShirvaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
