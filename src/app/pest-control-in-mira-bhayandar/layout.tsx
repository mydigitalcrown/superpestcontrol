import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Mira Bhayandar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Mira Bhayandar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in mira bhayandar, best pest control mira bhayandar thane, professional pest control mira bhayandar, termite control mira bhayandar, cockroach control mira bhayandar, bed bug control mira bhayandar, pest control services mira bhayandar thane, affordable pest control mira bhayandar, emergency pest control mira bhayandar, residential pest control mira bhayandar, commercial pest control mira bhayandar, pest control near me mira bhayandar, same day pest control mira bhayandar, eco friendly pest control mira bhayandar, licensed pest control mira bhayandar, guaranteed pest control mira bhayandar, 24/7 pest control mira bhayandar, pest exterminators mira bhayandar, pest management mira bhayandar, fumigation services mira bhayandar, anti termite treatment mira bhayandar, rodent control mira bhayandar, mosquito control mira bhayandar, lizard control mira bhayandar, spider control mira bhayandar, ant control mira bhayandar, fly control mira bhayandar, mira road pest control, bhayandar east pest control, bhayandar west pest control, golden nest pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mira-bhayandar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mira-bhayandar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mira-bhayandar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mira-bhayandar'
    }
  },
  openGraph: {
    title: 'Pest Control in Mira Bhayandar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mira Bhayandar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-mira-bhayandar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mira-bhayandar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mira Bhayandar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Mira Bhayandar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mira Bhayandar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-mira-bhayandar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mira Bhayandar, Thane',
    'geo.position': '19.2952;72.8544',
    'ICBM': '19.2952, 72.8544',
  }
};

export default function PestControlInMiraBhayandarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
