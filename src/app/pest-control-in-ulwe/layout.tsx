import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Ulwe | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Ulwe, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Ulwe Node, Sector 1-30, Pushpak Nagar, Roadpali, Kalamboli. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in ulwe, best pest control ulwe navi mumbai, professional pest control ulwe, termite control ulwe, cockroach control ulwe, bed bug control ulwe, pest control services ulwe navi mumbai, affordable pest control ulwe, emergency pest control ulwe, residential pest control ulwe, commercial pest control ulwe, pest control near me ulwe, same day pest control ulwe, eco friendly pest control ulwe, licensed pest control ulwe, guaranteed pest control ulwe, 24/7 pest control ulwe, pest exterminators ulwe, pest management ulwe, fumigation services ulwe, anti termite treatment ulwe, rodent control ulwe, mosquito control ulwe, lizard control ulwe, spider control ulwe, ant control ulwe, fly control ulwe, ulwe node pest control, sector pest control ulwe, pushpak nagar pest control, roadpali pest control, kalamboli pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ulwe",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-ulwe',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-ulwe',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-ulwe'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Ulwe | Super Pest Control Services',
    description: 'Get the best pest control services in Ulwe, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-ulwe',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ulwe-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ulwe'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Ulwe | Super Pest Control',
    description: 'Professional pest control services in Ulwe, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-ulwe-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ulwe, Navi Mumbai',
    'geo.position': '19.0412;73.0198',
    'ICBM': '19.0412, 73.0198',
  }
};

export default function PestControlInUlweLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
