import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Darave | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Darave, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in darave, best pest control darave navi mumbai, professional pest control darave, termite control darave, cockroach control darave, bed bug control darave, pest control services darave navi mumbai, affordable pest control darave, emergency pest control darave, residential pest control darave, commercial pest control darave, pest control near me darave, same day pest control darave, eco friendly pest control darave, licensed pest control darave, guaranteed pest control darave, 24/7 pest control darave, pest exterminators darave, pest management darave, fumigation services darave, anti termite treatment darave, rodent control darave, mosquito control darave, lizard control darave, spider control darave, ant control darave, fly control darave',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-darave"
  },
  openGraph: {
    title: 'Professional Pest Control in Darave | Super Pest Control Services',
    description: 'Get the best pest control services in Darave, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-darave',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-darave-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Darave'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Darave | Super Pest Control',
    description: 'Professional pest control services in Darave, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-darave-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Darave, Navi Mumbai',
    'geo.position': '19.0330;73.0297',
    'ICBM': '19.0330, 73.0297',
  }
};

export default function PestControlInDaraveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}