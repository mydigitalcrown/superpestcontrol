import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Kurla | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Kurla. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in kurla, best pest control kurla mumbai, professional pest control kurla, termite control kurla, cockroach control kurla, bed bug control kurla, pest control services kurla mumbai, affordable pest control kurla, emergency pest control kurla, residential pest control kurla, commercial pest control kurla, pest control near me kurla, same day pest control kurla, eco friendly pest control kurla, licensed pest control kurla, guaranteed pest control kurla, 24/7 pest control kurla, pest exterminators kurla, pest management kurla, fumigation services kurla, anti termite treatment kurla, rodent control kurla, mosquito control kurla, lizard control kurla, spider control kurla, ant control kurla, fly control kurla, kurla east pest control, kurla west pest control, chembur pest control, sion pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kurla",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kurla',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kurla',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kurla'
    }
  },
  openGraph: {
    title: 'Pest Control in Kurla | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kurla. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-kurla',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kurla-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kurla'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Kurla | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Kurla. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-kurla-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kurla, Mumbai',
    'geo.position': '19.0728;72.8826',
    'ICBM': '19.0728, 72.8826',
  }
};

export default function PestControlInKurlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
