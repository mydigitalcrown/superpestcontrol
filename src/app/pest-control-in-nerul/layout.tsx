import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Nerul | #1 Professional Services | Super Pest Control',
  description: 'Professional Pest Control Services in Nerul, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Seawoods, Juinagar, Sanpada, Kopar Khairane. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in nerul, best pest control nerul navi mumbai, professional pest control nerul, termite control nerul, cockroach control nerul, bed bug control nerul, pest control services nerul navi mumbai, affordable pest control nerul, emergency pest control nerul, residential pest control nerul, commercial pest control nerul, pest control near me nerul, same day pest control nerul, eco friendly pest control nerul, licensed pest control nerul, guaranteed pest control nerul, 24/7 pest control nerul, pest exterminators nerul, pest management nerul, fumigation services nerul, anti termite treatment nerul, rodent control nerul, mosquito control nerul, lizard control nerul, spider control nerul, ant control nerul, fly control nerul, seawoods pest control, juinagar pest control, sanpada pest control, kopar khairane pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nerul",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-nerul',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-nerul',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-nerul'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Nerul | Super Pest Control Services',
    description: 'Get the best pest control services in Nerul, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-nerul',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-nerul-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Nerul'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Nerul | Super Pest Control',
    description: 'Professional pest control services in Nerul, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-nerul-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nerul, Navi Mumbai',
    'geo.position': '19.0330;73.0168',
    'ICBM': '19.0330, 73.0168',
  }
};

export default function PestControlInNerulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
