import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Powai | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Powai. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in powai, best pest control powai mumbai, professional pest control powai, termite control powai, cockroach control powai, bed bug control powai, pest control services powai mumbai, affordable pest control powai, emergency pest control powai, residential pest control powai, commercial pest control powai, pest control near me powai, same day pest control powai, eco friendly pest control powai, licensed pest control powai, guaranteed pest control powai, 24/7 pest control powai, pest exterminators powai, pest management powai, fumigation services powai, anti termite treatment powai, rodent control powai, mosquito control powai, lizard control powai, spider control powai, ant control powai, fly control powai, powai lake pest control, hiranandani gardens pest control, iit powai pest control, chandivali pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-powai",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-powai',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-powai',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-powai'
    }
  },
  openGraph: {
    title: 'Pest Control in Powai | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Powai. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-powai',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-powai-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Powai'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Powai | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Powai. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-powai-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Powai, Mumbai',
    'geo.position': '19.1173;72.9063',
    'ICBM': '19.1173, 72.9063',
  }
};

export default function PestControlInPowaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
