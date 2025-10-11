import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ghodbunder Road | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ghodbunder Road. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in ghodbunder road, best pest control ghodbunder road thane, professional pest control ghodbunder road, termite control ghodbunder road, cockroach control ghodbunder road, bed bug control ghodbunder road, pest control services ghodbunder road thane, affordable pest control ghodbunder road, emergency pest control ghodbunder road, residential pest control ghodbunder road, commercial pest control ghodbunder road, pest control near me ghodbunder road, same day pest control ghodbunder road, eco friendly pest control ghodbunder road, licensed pest control ghodbunder road, guaranteed pest control ghodbunder road, 24/7 pest control ghodbunder road, pest exterminators ghodbunder road, pest management ghodbunder road, fumigation services ghodbunder road, anti termite treatment ghodbunder road, rodent control ghodbunder road, mosquito control ghodbunder road, lizard control ghodbunder road, spider control ghodbunder road, ant control ghodbunder road, fly control ghodbunder road, majiwada pest control, wagle estate pest control, thane west pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghodbunder-road"
  },
  openGraph: {
    title: 'Pest Control in Ghodbunder Road | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghodbunder Road. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-ghodbunder-road',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ghodbunder-road-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ghodbunder Road'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Ghodbunder Road | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghodbunder Road. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-ghodbunder-road-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ghodbunder Road, Thane',
    'geo.position': '19.2183;72.9781',
    'ICBM': '19.2183, 72.9781',
  }
};

export default function PestControlInGhodbunderRoadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
