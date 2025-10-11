import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Bandra | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Bandra. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in bandra, best pest control bandra, professional pest control bandra, termite control bandra, cockroach control bandra, bed bug control bandra, pest control services bandra mumbai, affordable pest control bandra, emergency pest control bandra, residential pest control bandra, commercial pest control bandra, pest control near me bandra, same day pest control bandra, eco friendly pest control bandra, licensed pest control bandra, guaranteed pest control bandra, 24/7 pest control bandra, pest exterminators bandra, pest management bandra, fumigation services bandra, anti termite treatment bandra, rodent control bandra, mosquito control bandra, lizard control bandra, spider control bandra, ant control bandra, fly control bandra, bandra east pest control, bandra west pest control, bandra kurla complex pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bandra"
  },
  openGraph: {
    title: 'Pest Control in Bandra | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Bandra. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-bandra',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-bandra-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Bandra'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Bandra | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Bandra. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-bandra-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Bandra, Mumbai',
    'geo.position': '19.0596;72.8295',
    'ICBM': '19.0596, 72.8295',
  }
};

export default function PestControlInBandraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
