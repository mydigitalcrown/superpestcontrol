import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Naigaon | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Naigaon. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in naigaon, best pest control naigaon palghar, professional pest control naigaon, termite control naigaon, cockroach control naigaon, bed bug control naigaon, pest control services naigaon palghar, affordable pest control naigaon, emergency pest control naigaon, residential pest control naigaon, commercial pest control naigaon, pest control near me naigaon, same day pest control naigaon, eco friendly pest control naigaon, licensed pest control naigaon, guaranteed pest control naigaon, 24/7 pest control naigaon, pest exterminators naigaon, pest management naigaon, fumigation services naigaon, anti termite treatment naigaon, rodent control naigaon, mosquito control naigaon, lizard control naigaon, spider control naigaon, ant control naigaon, fly control naigaon, naigaon east pest control, naigaon west pest control, vasai pest control, virar pest control, palghar pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-naigaon",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-naigaon',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-naigaon',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-naigaon'
    }
  },
  openGraph: {
    title: 'Pest Control in Naigaon | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Naigaon. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-naigaon',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-naigaon-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Naigaon'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Naigaon | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Naigaon. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-naigaon-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Naigaon, Palghar',
    'geo.position': '19.3470;72.7870',
    'ICBM': '19.3470, 72.7870',
  }
};

export default function PestControlInNaigaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
