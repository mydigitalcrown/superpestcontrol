import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Dadar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Dadar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in dadar, best pest control dadar, professional pest control dadar, termite control dadar, cockroach control dadar, bed bug control dadar, pest control services dadar mumbai, affordable pest control dadar, emergency pest control dadar, residential pest control dadar, commercial pest control dadar, pest control near me dadar, same day pest control dadar, eco friendly pest control dadar, licensed pest control dadar, guaranteed pest control dadar, 24/7 pest control dadar, pest exterminators dadar, pest management dadar, fumigation services dadar, anti termite treatment dadar, rodent control dadar, mosquito control dadar, lizard control dadar, spider control dadar, ant control dadar, fly control dadar, dadar east pest control, dadar west pest control, central mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dadar"
  },
  openGraph: {
    title: 'Pest Control in Dadar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Dadar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-dadar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-dadar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Dadar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Dadar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Dadar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-dadar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Dadar, Mumbai',
    'geo.position': '19.0178;72.8478',
    'ICBM': '19.0178, 72.8478',
  }
};

export default function PestControlInDadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
