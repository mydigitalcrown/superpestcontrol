import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Bandra Kurla Complex | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Bandra Kurla Complex. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in bandra kurla complex, best pest control bkc, professional pest control bandra kurla complex, termite control bkc, cockroach control bandra kurla complex, bed bug control bkc, pest control services bandra kurla complex mumbai, commercial pest control bkc, office pest control bandra kurla complex, corporate pest control bkc, affordable pest control bandra kurla complex, emergency pest control bkc, business district pest control, pest control near me bkc, same day pest control bandra kurla complex, eco friendly pest control bkc, licensed pest control bandra kurla complex, guaranteed pest control bkc, 24/7 pest control bandra kurla complex, pest exterminators bkc, pest management bandra kurla complex, fumigation services bkc, anti termite treatment bandra kurla complex, rodent control bkc, mosquito control bandra kurla complex, lizard control bkc, spider control bandra kurla complex, ant control bkc, fly control bandra kurla complex',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bandra-kurla-complex"
  },
  openGraph: {
    title: 'Pest Control in Bandra Kurla Complex | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Bandra Kurla Complex. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-bandra-kurla-complex',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-bandra-kurla-complex-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Bandra Kurla Complex'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Bandra Kurla Complex | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Bandra Kurla Complex. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-bandra-kurla-complex-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Bandra Kurla Complex, Mumbai',
    'geo.position': '19.0728;72.8826',
    'ICBM': '19.0728, 72.8826',
  }
};

export default function PestControlInBandraKurlaComplexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
