import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Khar | 24/7 Service | Super Pest Control',
  description: 'Professional Pest Control Services in Khar, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Khar West, Santa Cruz, Bandra West, Juhu. 100% guaranteed results. Call ?? +91-8097941077 for immediate service.',
  keywords: 'pest control in khar, best pest control khar mumbai, professional pest control khar, termite control khar, cockroach control khar, bed bug control khar, pest control services khar mumbai, affordable pest control khar, emergency pest control khar, residential pest control khar, commercial pest control khar, pest control near me khar, same day pest control khar, eco friendly pest control khar, licensed pest control khar, guaranteed pest control khar, 24/7 pest control khar, pest exterminators khar, pest management khar, fumigation services khar, anti termite treatment khar, rodent control khar, mosquito control khar, lizard control khar, spider control khar, ant control khar, fly control khar, khar west pest control, santa cruz pest control, bandra west pest control, juhu pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-khar"
  },
  openGraph: {
    title: 'Pest Control in Khar | Super Pest Control Services',
    description: 'Get the best pest control services in Khar, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-khar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-khar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Khar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Khar | 24/7 Service | Super Pest Control',
    description: 'Professional pest control services in Khar, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-khar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Khar, Mumbai',
    'geo.position': '19.0692;72.8347',
    'ICBM': '19.0692, 72.8347',
  }
};

export default function PestControlInKharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
