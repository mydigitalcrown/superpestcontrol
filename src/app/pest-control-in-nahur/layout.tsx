import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Nahur | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Nahur. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in nahur, best pest control nahur mumbai, professional pest control nahur, termite control nahur, cockroach control nahur, bed bug control nahur, pest control services nahur mumbai, affordable pest control nahur, emergency pest control nahur, residential pest control nahur, commercial pest control nahur, pest control near me nahur, same day pest control nahur, eco friendly pest control nahur, licensed pest control nahur, guaranteed pest control nahur, 24/7 pest control nahur, pest exterminators nahur, pest management nahur, fumigation services nahur, anti termite treatment nahur, rodent control nahur, mosquito control nahur, lizard control nahur, spider control nahur, ant control nahur, fly control nahur, nahur east pest control, nahur west pest control, bhandup pest control, mulund pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nahur",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-nahur',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-nahur',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-nahur'
    }
  },
  openGraph: {
    title: 'Pest Control in Nahur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Nahur. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-nahur',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-nahur-banner.jpg',
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
    title: 'Pest Control in Nahur | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Nahur. 100% guaranteed results. Call 8097941077 for same-day service!',
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
