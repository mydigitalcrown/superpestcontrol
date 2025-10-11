import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Vashi | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Vashi. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in vashi, best pest control vashi navi mumbai, professional pest control vashi, termite control vashi, cockroach control vashi, bed bug control vashi, pest control services vashi navi mumbai, affordable pest control vashi, emergency pest control vashi, residential pest control vashi, commercial pest control vashi, pest control near me vashi, same day pest control vashi, eco friendly pest control vashi, licensed pest control vashi, guaranteed pest control vashi, 24/7 pest control vashi, pest exterminators vashi, pest management vashi, fumigation services vashi, anti termite treatment vashi, rodent control vashi, mosquito control vashi, lizard control vashi, spider control vashi, ant control vashi, fly control vashi, sector pest control vashi, kopar khairane pest control, turbhe pest control, sanpada pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-vashi",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-vashi',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-vashi',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-vashi'
    }
  },
  openGraph: {
    title: 'Pest Control in Vashi | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Vashi. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-vashi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-vashi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Vashi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Vashi | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Vashi. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-vashi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Vashi, Navi Mumbai',
    'geo.position': '19.0330;73.0297',
    'ICBM': '19.0330, 73.0297',
  }
};

export default function PestControlInVashiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
