import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Mundhwa | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Mundhwa, Pune. Expert termite control, cockroach treatment, bed bug removal near Kharadi, Hadapsar, Magarpatta, NIBM Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in mundhwa, best pest control mundhwa pune, professional pest control mundhwa, termite control mundhwa, cockroach control mundhwa, bed bug control mundhwa, pest control services mundhwa pune, affordable pest control mundhwa, emergency pest control mundhwa, residential pest control mundhwa, commercial pest control mundhwa, pest control near me mundhwa, same day pest control mundhwa, eco friendly pest control mundhwa, licensed pest control mundhwa, guaranteed pest control mundhwa, 24/7 pest control mundhwa, pest exterminators mundhwa, pest management mundhwa, fumigation services mundhwa, anti termite treatment mundhwa, rodent control mundhwa, mosquito control mundhwa, lizard control mundhwa, spider control mundhwa, ant control mundhwa, fly control mundhwa, kharadi pest control, hadapsar pest control, magarpatta pest control, nibm road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mundhwa",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mundhwa',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mundhwa',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mundhwa'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Mundhwa | Super Pest Control Services',
    description: 'Get the best pest control services in Mundhwa, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-mundhwa',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mundhwa-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mundhwa'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Mundhwa | Super Pest Control',
    description: 'Professional pest control services in Mundhwa, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-mundhwa-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mundhwa, Pune',
    'geo.position': '18.5244;73.9396',
    'ICBM': '18.5244, 73.9396',
  }
};

export default function PestControlInMundhwaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
