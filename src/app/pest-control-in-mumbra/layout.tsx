import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Mumbra | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Mumbra. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in mumbra, best pest control mumbra thane, professional pest control mumbra, termite control mumbra, cockroach control mumbra, bed bug control mumbra, pest control services mumbra thane, affordable pest control mumbra, emergency pest control mumbra, residential pest control mumbra, commercial pest control mumbra, pest control near me mumbra, same day pest control mumbra, eco friendly pest control mumbra, licensed pest control mumbra, guaranteed pest control mumbra, 24/7 pest control mumbra, pest exterminators mumbra, pest management mumbra, fumigation services mumbra, anti termite treatment mumbra, rodent control mumbra, mosquito control mumbra, lizard control mumbra, spider control mumbra, ant control mumbra, fly control mumbra, mumbra east pest control, mumbra west pest control, kausa pest control, diva pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mumbra",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mumbra',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mumbra',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mumbra'
    }
  },
  openGraph: {
    title: 'Pest Control in Mumbra | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mumbra. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-mumbra',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mumbra-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mumbra'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Mumbra | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mumbra. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-mumbra-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbra, Thane',
    'geo.position': '19.2144;73.0470',
    'ICBM': '19.2144, 73.0470',
  }
};

export default function PestControlInMumbraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
