import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Mahape | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Mahape. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in mahape, best pest control mahape navi mumbai, professional pest control mahape, termite control mahape, cockroach control mahape, bed bug control mahape, pest control services mahape navi mumbai, affordable pest control mahape, emergency pest control mahape, residential pest control mahape, commercial pest control mahape, pest control near me mahape, same day pest control mahape, eco friendly pest control mahape, licensed pest control mahape, guaranteed pest control mahape, 24/7 pest control mahape, pest exterminators mahape, pest management mahape, fumigation services mahape, anti termite treatment mahape, rodent control mahape, mosquito control mahape, lizard control mahape, spider control mahape, ant control mahape, fly control mahape, mahape village pest control, millennium business park pest control, mindspace pest control, taloja pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mahape",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mahape',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mahape',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mahape'
    }
  },
  openGraph: {
    title: 'Pest Control in Mahape | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mahape. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-mahape',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mahape-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mahape'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Mahape | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Mahape. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-mahape-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mahape, Navi Mumbai',
    'geo.position': '19.1078;73.0140',
    'ICBM': '19.1078, 73.0140',
  }
};

export default function PestControlInMahapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
