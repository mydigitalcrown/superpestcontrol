import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Nashik | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Nashik. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in nashik, best pest control nashik maharashtra, professional pest control nashik, termite control nashik, cockroach control nashik, bed bug control nashik, pest control services nashik maharashtra, affordable pest control nashik, emergency pest control nashik, residential pest control nashik, commercial pest control nashik, pest control near me nashik, same day pest control nashik, eco friendly pest control nashik, licensed pest control nashik, guaranteed pest control nashik, 24/7 pest control nashik, pest exterminators nashik, pest management nashik, fumigation services nashik, anti termite treatment nashik, rodent control nashik, mosquito control nashik, lizard control nashik, spider control nashik, ant control nashik, fly control nashik, nashik east pest control, nashik west pest control, nashik road pest control, deolali pest control, maharashtra pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nashik",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-nashik',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-nashik',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-nashik'
    }
  },
  openGraph: {
    title: 'Pest Control in Nashik | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Nashik. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-nashik',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-nashik-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Nashik'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Nashik | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Nashik. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-nashik-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik, Maharashtra',
    'geo.position': '19.9975;73.7898',
    'ICBM': '19.9975, 73.7898',
  }
};

export default function PestControlInNashikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
