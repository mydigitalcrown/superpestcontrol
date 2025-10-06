import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kamothe | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kamothe, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Panvel, Kharghar, Kalamboli, New Panvel. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kamothe, best pest control kamothe navi mumbai, professional pest control kamothe, termite control kamothe, cockroach control kamothe, bed bug control kamothe, pest control services kamothe navi mumbai, affordable pest control kamothe, emergency pest control kamothe, residential pest control kamothe, commercial pest control kamothe, pest control near me kamothe, same day pest control kamothe, eco friendly pest control kamothe, licensed pest control kamothe, guaranteed pest control kamothe, 24/7 pest control kamothe, pest exterminators kamothe, pest management kamothe, fumigation services kamothe, anti termite treatment kamothe, rodent control kamothe, mosquito control kamothe, lizard control kamothe, spider control kamothe, ant control kamothe, fly control kamothe, panvel pest control, kharghar pest control, kalamboli pest control, new panvel pest control, seawoods pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kamothe"
  },
  openGraph: {
    title: 'Professional Pest Control in Kamothe | Super Pest Control Services',
    description: 'Get the best pest control services in Kamothe, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kamothe',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kamothe-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kamothe'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kamothe | Super Pest Control',
    description: 'Professional pest control services in Kamothe, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kamothe-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kamothe, Navi Mumbai',
    'geo.position': '19.0351;73.1126',
    'ICBM': '19.0351, 73.1126',
  }
};

export default function PestControlInKamotheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}