import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Kamothe | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Kamothe. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in kamothe, best pest control kamothe navi mumbai, professional pest control kamothe, termite control kamothe, cockroach control kamothe, bed bug control kamothe, pest control services kamothe navi mumbai, affordable pest control kamothe, emergency pest control kamothe, residential pest control kamothe, commercial pest control kamothe, pest control near me kamothe, same day pest control kamothe, eco friendly pest control kamothe, licensed pest control kamothe, guaranteed pest control kamothe, 24/7 pest control kamothe, pest exterminators kamothe, pest management kamothe, fumigation services kamothe, anti termite treatment kamothe, rodent control kamothe, mosquito control kamothe, lizard control kamothe, spider control kamothe, ant control kamothe, fly control kamothe, panvel pest control, kharghar pest control, kalamboli pest control, new panvel pest control, seawoods pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kamothe"
  },
  openGraph: {
    title: 'Pest Control in Kamothe | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kamothe. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-kamothe',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kamothe-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kamothe'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Kamothe | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kamothe. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-kamothe-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kamothe, Navi Mumbai',
    'geo.position': '19.0351;73.1126',
    'ICBM': '19.0351, 73.1126',
  }
};

export default function PestControlInKamotheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
