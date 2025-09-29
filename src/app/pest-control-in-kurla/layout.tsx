import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kurla | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kurla, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Kurla East, Kurla West, Chembur, Sion. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kurla, best pest control kurla mumbai, professional pest control kurla, termite control kurla, cockroach control kurla, bed bug control kurla, pest control services kurla mumbai, affordable pest control kurla, emergency pest control kurla, residential pest control kurla, commercial pest control kurla, pest control near me kurla, same day pest control kurla, eco friendly pest control kurla, licensed pest control kurla, guaranteed pest control kurla, 24/7 pest control kurla, pest exterminators kurla, pest management kurla, fumigation services kurla, anti termite treatment kurla, rodent control kurla, mosquito control kurla, lizard control kurla, spider control kurla, ant control kurla, fly control kurla, kurla east pest control, kurla west pest control, chembur pest control, sion pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kurla",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kurla',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kurla',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kurla'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kurla | Super Pest Control Services',
    description: 'Get the best pest control services in Kurla, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kurla',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kurla-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kurla'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kurla | Super Pest Control',
    description: 'Professional pest control services in Kurla, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kurla-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kurla, Mumbai',
    'geo.position': '19.0728;72.8826',
    'ICBM': '19.0728, 72.8826',
  }
};

export default function PestControlInKurlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}