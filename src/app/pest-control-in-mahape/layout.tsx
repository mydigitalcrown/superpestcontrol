import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kharghar | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kharghar, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Panvel, Kalamboli, Kamothe, New Panvel. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kharghar, best pest control kharghar navi mumbai, professional pest control kharghar, termite control kharghar, cockroach control kharghar, bed bug control kharghar, pest control services kharghar navi mumbai, affordable pest control kharghar, emergency pest control kharghar, residential pest control kharghar, commercial pest control kharghar, pest control near me kharghar, same day pest control kharghar, eco friendly pest control kharghar, licensed pest control kharghar, guaranteed pest control kharghar, 24/7 pest control kharghar, pest exterminators kharghar, pest management kharghar, fumigation services kharghar, anti termite treatment kharghar, rodent control kharghar, mosquito control kharghar, lizard control kharghar, spider control kharghar, ant control kharghar, fly control kharghar, panvel pest control, kalamboli pest control, kamothe pest control, new panvel pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kharghar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kharghar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kharghar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kharghar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kharghar | Super Pest Control Services',
    description: 'Get the best pest control services in Kharghar, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kharghar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kharghar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kharghar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kharghar | Super Pest Control',
    description: 'Professional pest control services in Kharghar, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kharghar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kharghar, Navi Mumbai',
    'geo.position': '19.0492;73.0675',
    'ICBM': '19.0492, 73.0675',
  }
};

export default function PestControlInKhargharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}