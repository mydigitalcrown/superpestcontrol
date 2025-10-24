import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Badlapur | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Badlapur. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in badlapur, best pest control badlapur, professional pest control badlapur, termite control badlapur, cockroach control badlapur, bed bug control badlapur, pest control services badlapur maharashtra, affordable pest control badlapur, emergency pest control badlapur, residential pest control badlapur, commercial pest control badlapur, pest control near me badlapur, same day pest control badlapur, eco friendly pest control badlapur, licensed pest control badlapur, guaranteed pest control badlapur, 24/7 pest control badlapur, pest exterminators badlapur, pest management badlapur, fumigation services badlapur, anti termite treatment badlapur, rodent control badlapur, mosquito control badlapur, lizard control badlapur, spider control badlapur, ant control badlapur, fly control badlapur',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-badlapur"
  },
  openGraph: {
    title: 'Pest Control in Badlapur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Badlapur. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-badlapur',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-badlapur-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Badlapur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Badlapur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Badlapur. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-badlapur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Badlapur, Maharashtra',
    'geo.position': '19.1559;73.2695',
    'ICBM': '19.1559, 73.2695',
  }
};

export default function PestControlInBadlapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
