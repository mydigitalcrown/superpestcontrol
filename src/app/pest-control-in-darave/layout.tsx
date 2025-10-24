import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Darave | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Darave. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in darave, best pest control darave navi mumbai, professional pest control darave, termite control darave, cockroach control darave, bed bug control darave, pest control services darave navi mumbai, affordable pest control darave, emergency pest control darave, residential pest control darave, commercial pest control darave, pest control near me darave, same day pest control darave, eco friendly pest control darave, licensed pest control darave, guaranteed pest control darave, 24/7 pest control darave, pest exterminators darave, pest management darave, fumigation services darave, anti termite treatment darave, rodent control darave, mosquito control darave, lizard control darave, spider control darave, ant control darave, fly control darave',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-darave"
  },
  openGraph: {
    title: 'Pest Control in Darave | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Darave. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-darave',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/location/mumbai.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Darave'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Darave | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Darave. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/location/mumbai.webp'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Darave, Navi Mumbai',
    'geo.position': '19.0330;73.0297',
    'ICBM': '19.0330, 73.0297',
  }
};

export default function PestControlInDaraveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
