import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ulhasnagar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ulhasnagar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in ulhasnagar, best pest control ulhasnagar thane, professional pest control ulhasnagar, termite control ulhasnagar, cockroach control ulhasnagar, bed bug control ulhasnagar, pest control services ulhasnagar thane, affordable pest control ulhasnagar, emergency pest control ulhasnagar, residential pest control ulhasnagar, commercial pest control ulhasnagar, pest control near me ulhasnagar, same day pest control ulhasnagar, eco friendly pest control ulhasnagar, licensed pest control ulhasnagar, guaranteed pest control ulhasnagar, 24/7 pest control ulhasnagar, pest exterminators ulhasnagar, pest management ulhasnagar, fumigation services ulhasnagar, anti termite treatment ulhasnagar, rodent control ulhasnagar, mosquito control ulhasnagar, lizard control ulhasnagar, spider control ulhasnagar, ant control ulhasnagar, fly control ulhasnagar, camp pest control ulhasnagar, shahad pest control, ambernath pest control, badlapur pest control, vithalwadi pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ulhasnagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-ulhasnagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-ulhasnagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-ulhasnagar'
    }
  },
  openGraph: {
    title: 'Pest Control in Ulhasnagar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ulhasnagar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-ulhasnagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ulhasnagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ulhasnagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Ulhasnagar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ulhasnagar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-ulhasnagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ulhasnagar, Thane',
    'geo.position': '19.2215;73.1645',
    'ICBM': '19.2215, 73.1645',
  }
};

export default function PestControlInUlhasnagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
