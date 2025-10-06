import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Juhu | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Juhu, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Juhu Beach, Vile Parle, Santacruz. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in juhu, best pest control juhu mumbai, professional pest control juhu, termite control juhu, cockroach control juhu, bed bug control juhu, pest control services juhu mumbai, affordable pest control juhu, emergency pest control juhu, residential pest control juhu, commercial pest control juhu, pest control near me juhu, same day pest control juhu, eco friendly pest control juhu, licensed pest control juhu, guaranteed pest control juhu, 24/7 pest control juhu, pest exterminators juhu, pest management juhu, fumigation services juhu, anti termite treatment juhu, rodent control juhu, mosquito control juhu, lizard control juhu, spider control juhu, ant control juhu, fly control juhu, juhu beach pest control, vile parle pest control, santacruz pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-juhu"
  },
  openGraph: {
    title: 'Professional Pest Control in Juhu | Super Pest Control Services',
    description: 'Get the best pest control services in Juhu, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-juhu',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-juhu-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Juhu'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Juhu | Super Pest Control',
    description: 'Professional pest control services in Juhu, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-juhu-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Juhu, Mumbai',
    'geo.position': '19.1076;72.8263',
    'ICBM': '19.1076, 72.8263',
  }
};

export default function PestControlInJuhuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}