import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Kolhapur | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Kolhapur. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in kolhapur, best pest control kolhapur maharashtra, professional pest control kolhapur, termite control kolhapur, cockroach control kolhapur, bed bug control kolhapur, pest control services kolhapur maharashtra, affordable pest control kolhapur, emergency pest control kolhapur, residential pest control kolhapur, commercial pest control kolhapur, pest control near me kolhapur, same day pest control kolhapur, eco friendly pest control kolhapur, licensed pest control kolhapur, guaranteed pest control kolhapur, 24/7 pest control kolhapur, pest exterminators kolhapur, pest management kolhapur, fumigation services kolhapur, anti termite treatment kolhapur, rodent control kolhapur, mosquito control kolhapur, lizard control kolhapur, spider control kolhapur, ant control kolhapur, fly control kolhapur, shivaji park pest control, mahadwar road pest control, rankala pest control, new palace pest control, kolhapur pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kolhapur",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kolhapur',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kolhapur',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kolhapur'
    }
  },
  openGraph: {
    title: 'Pest Control in Kolhapur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kolhapur. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-kolhapur',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kolhapur-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kolhapur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Kolhapur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kolhapur. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-kolhapur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kolhapur, Maharashtra',
    'geo.position': '16.7050;74.2433',
    'ICBM': '16.7050, 74.2433',
  }
};

export default function PestControlInKolhapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
