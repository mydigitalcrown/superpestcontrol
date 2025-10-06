import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kalamboli | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kalamboli, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Panvel, New Panvel, Kamothe. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kalamboli, best pest control kalamboli navi mumbai, professional pest control kalamboli, termite control kalamboli, cockroach control kalamboli, bed bug control kalamboli, pest control services kalamboli navi mumbai, affordable pest control kalamboli, emergency pest control kalamboli, residential pest control kalamboli, commercial pest control kalamboli, pest control near me kalamboli, same day pest control kalamboli, eco friendly pest control kalamboli, licensed pest control kalamboli, guaranteed pest control kalamboli, 24/7 pest control kalamboli, pest exterminators kalamboli, pest management kalamboli, fumigation services kalamboli, anti termite treatment kalamboli, rodent control kalamboli, mosquito control kalamboli, lizard control kalamboli, spider control kalamboli, ant control kalamboli, fly control kalamboli, panvel pest control, new panvel pest control, kamothe pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalamboli"
  },
  openGraph: {
    title: 'Professional Pest Control in Kalamboli | Super Pest Control Services',
    description: 'Get the best pest control services in Kalamboli, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kalamboli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kalamboli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kalamboli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kalamboli | Super Pest Control',
    description: 'Professional pest control services in Kalamboli, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kalamboli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kalamboli, Navi Mumbai',
    'geo.position': '19.0597;73.1394',
    'ICBM': '19.0597, 73.1394',
  }
};

export default function PestControlInKalamboliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}