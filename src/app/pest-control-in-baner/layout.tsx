import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Baner | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Baner. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in baner, best pest control baner pune, professional pest control baner, termite control baner, cockroach control baner, bed bug control baner, pest control services baner pune, affordable pest control baner, emergency pest control baner, residential pest control baner, commercial pest control baner, pest control near me baner, same day pest control baner, eco friendly pest control baner, licensed pest control baner, guaranteed pest control baner, 24/7 pest control baner, pest exterminators baner, pest management baner, fumigation services baner, anti termite treatment baner, rodent control baner, mosquito control baner, lizard control baner, spider control baner, ant control baner, fly control baner',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-baner"
  },
  openGraph: {
    title: 'Pest Control in Baner | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Baner. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-baner',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/location/mumbai.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Baner'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Baner | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Baner. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/location/mumbai.webp'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Baner, Pune',
    'geo.position': '18.5593;73.7759',
    'ICBM': '18.5593, 73.7759',
  }
};

export default function PestControlInBanerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
