import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Colaba | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Colaba, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Fort, Navy Nagar. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in colaba, best pest control colaba, professional pest control colaba, termite control colaba, cockroach control colaba, bed bug control colaba, pest control services colaba mumbai, affordable pest control colaba, emergency pest control colaba, residential pest control colaba, commercial pest control colaba, pest control near me colaba, same day pest control colaba, eco friendly pest control colaba, licensed pest control colaba, guaranteed pest control colaba, 24/7 pest control colaba, pest exterminators colaba, pest management colaba, fumigation services colaba, anti termite treatment colaba, rodent control colaba, mosquito control colaba, lizard control colaba, spider control colaba, ant control colaba, fly control colaba, fort pest control, navy nagar pest control, ballard estate pest control, cuffe parade pest control, south mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-colaba",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-colaba',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-colaba',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-colaba'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Colaba | Super Pest Control Services',
    description: 'Get the best pest control services in Colaba with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-colaba',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-colaba-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Colaba'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Colaba | Super Pest Control',
    description: 'Professional pest control services in Colaba with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-colaba-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Colaba, Mumbai',
    'geo.position': '18.9067;72.8147',
    'ICBM': '18.9067, 72.8147',
  }
};

export default function PestControlInColabaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}