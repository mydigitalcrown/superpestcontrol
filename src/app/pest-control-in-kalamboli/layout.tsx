import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Kalamboli | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Kalamboli. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in kalamboli, best pest control kalamboli navi mumbai, professional pest control kalamboli, termite control kalamboli, cockroach control kalamboli, bed bug control kalamboli, pest control services kalamboli navi mumbai, affordable pest control kalamboli, emergency pest control kalamboli, residential pest control kalamboli, commercial pest control kalamboli, pest control near me kalamboli, same day pest control kalamboli, eco friendly pest control kalamboli, licensed pest control kalamboli, guaranteed pest control kalamboli, 24/7 pest control kalamboli, pest exterminators kalamboli, pest management kalamboli, fumigation services kalamboli, anti termite treatment kalamboli, rodent control kalamboli, mosquito control kalamboli, lizard control kalamboli, spider control kalamboli, ant control kalamboli, fly control kalamboli, panvel pest control, new panvel pest control, kamothe pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalamboli"
  },
  openGraph: {
    title: 'Pest Control in Kalamboli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kalamboli. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-kalamboli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kalamboli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kalamboli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Kalamboli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kalamboli. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-kalamboli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kalamboli, Navi Mumbai',
    'geo.position': '19.0597;73.1394',
    'ICBM': '19.0597, 73.1394',
  }
};

export default function PestControlInKalamboliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
