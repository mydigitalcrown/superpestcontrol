import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Digha | #1 Professional Services West Bengal | Super Pest Control',
  description: 'Professional Pest Control Services in Digha, West Bengal. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in digha, best pest control digha west bengal, professional pest control digha, termite control digha, cockroach control digha, bed bug control digha, pest control services digha west bengal, affordable pest control digha, emergency pest control digha, residential pest control digha, commercial pest control digha, pest control near me digha, same day pest control digha, eco friendly pest control digha, licensed pest control digha, guaranteed pest control digha, 24/7 pest control digha, pest exterminators digha, pest management digha, fumigation services digha, anti termite treatment digha, rodent control digha, mosquito control digha, lizard control digha, spider control digha, ant control digha, fly control digha',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-digha"
  },
  openGraph: {
    title: 'Professional Pest Control in Digha | Super Pest Control Services',
    description: 'Get the best pest control services in Digha, West Bengal with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-digha',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-digha-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Digha'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Digha | Super Pest Control',
    description: 'Professional pest control services in Digha, West Bengal with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-digha-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-WB',
    'geo.placename': 'Digha, West Bengal',
    'geo.position': '21.6258;87.5069',
    'ICBM': '21.6258, 87.5069',
  }
};

export default function PestControlInDighaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}