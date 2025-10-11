import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Seawoods | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Seawoods. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in seawoods, best pest control seawoods navi mumbai, professional pest control seawoods, termite control seawoods, cockroach control seawoods, bed bug control seawoods, pest control services seawoods navi mumbai, affordable pest control seawoods, emergency pest control seawoods, residential pest control seawoods, commercial pest control seawoods, pest control near me seawoods, same day pest control seawoods, eco friendly pest control seawoods, licensed pest control seawoods, guaranteed pest control seawoods, 24/7 pest control seawoods, pest exterminators seawoods, pest management seawoods, fumigation services seawoods, anti termite treatment seawoods, rodent control seawoods, mosquito control seawoods, lizard control seawoods, spider control seawoods, ant control seawoods, fly control seawoods, seawoods east pest control, seawoods west pest control, nerul pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-seawoods",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-seawoods',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-seawoods',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-seawoods'
    }
  },
  openGraph: {
    title: 'Pest Control in Seawoods | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Seawoods. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-seawoods',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-seawoods-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Nahur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Seawoods | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Seawoods. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-nahur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nahur, Mumbai',
    'geo.position': '19.2183;72.9781',
    'ICBM': '19.2183, 72.9781',
  }
};

export default function PestControlInNahurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
