import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Sanpada | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Sanpada, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Sanpada Station, Juinagar, Nerul, CBD Belapur. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in sanpada, best pest control sanpada navi mumbai, professional pest control sanpada, termite control sanpada, cockroach control sanpada, bed bug control sanpada, pest control services sanpada navi mumbai, affordable pest control sanpada, emergency pest control sanpada, residential pest control sanpada, commercial pest control sanpada, pest control near me sanpada, same day pest control sanpada, eco friendly pest control sanpada, licensed pest control sanpada, guaranteed pest control sanpada, 24/7 pest control sanpada, pest exterminators sanpada, pest management sanpada, fumigation services sanpada, anti termite treatment sanpada, rodent control sanpada, mosquito control sanpada, lizard control sanpada, spider control sanpada, ant control sanpada, fly control sanpada, sanpada station pest control, juinagar pest control, nerul pest control, cbd belapur pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-sanpada",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-sanpada',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-sanpada',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-sanpada'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Sanpada | Super Pest Control Services',
    description: 'Get the best pest control services in Sanpada, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-sanpada',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-sanpada-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Sanpada'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Sanpada | Super Pest Control',
    description: 'Professional pest control services in Sanpada, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-sanpada-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Sanpada, Navi Mumbai',
    'geo.position': '19.0710;73.0169',
    'ICBM': '19.0710, 73.0169',
  }
};

export default function PestControlInSanpadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}