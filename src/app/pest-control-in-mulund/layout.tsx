import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Mulund | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Mulund. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in mulund, best pest control mulund mumbai, professional pest control mulund, termite control mulund, cockroach control mulund, bed bug control mulund, pest control services mulund mumbai, affordable pest control mulund, emergency pest control mulund, residential pest control mulund, commercial pest control mulund, pest control near me mulund, same day pest control mulund, eco friendly pest control mulund, licensed pest control mulund, guaranteed pest control mulund, 24/7 pest control mulund, pest exterminators mulund, pest management mulund, fumigation services mulund, anti termite treatment mulund, rodent control mulund, mosquito control mulund, lizard control mulund, spider control mulund, ant control mulund, fly control mulund, mulund east pest control, mulund west pest control, bhandup pest control, nahur pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mulund",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mulund',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mulund',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mulund'
    }
  },
  openGraph: {
    title: 'Pest Control in Mulund | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mulund. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-mulund',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mulund-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mulund'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Mulund | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mulund. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-mulund-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mulund, Mumbai',
    'geo.position': '19.1728;72.9450',
    'ICBM': '19.1728, 72.9450',
  }
};

export default function PestControlInMulundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
