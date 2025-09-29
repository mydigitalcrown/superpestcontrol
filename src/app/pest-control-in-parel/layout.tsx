import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Parel | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Parel, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Lower Parel, Upper Parel, Lalbaug, Elphinstone Road. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in parel, best pest control parel mumbai, professional pest control parel, termite control parel, cockroach control parel, bed bug control parel, pest control services parel mumbai, affordable pest control parel, emergency pest control parel, residential pest control parel, commercial pest control parel, pest control near me parel, same day pest control parel, eco friendly pest control parel, licensed pest control parel, guaranteed pest control parel, 24/7 pest control parel, pest exterminators parel, pest management parel, fumigation services parel, anti termite treatment parel, rodent control parel, mosquito control parel, lizard control parel, spider control parel, ant control parel, fly control parel, lower parel pest control, upper parel pest control, lalbaug pest control, elphinstone road pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-parel",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-parel',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-parel',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-parel'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Parel | Super Pest Control Services',
    description: 'Get the best pest control services in Parel, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-parel',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-parel-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Parel'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Parel | Super Pest Control',
    description: 'Professional pest control services in Parel, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-parel-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Parel, Mumbai',
    'geo.position': '19.0099;72.8347',
    'ICBM': '19.0099, 72.8347',
  }
};

export default function PestControlInParelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}