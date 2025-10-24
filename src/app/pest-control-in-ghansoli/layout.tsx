import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ghansoli | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ghansoli. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in ghansoli, best pest control ghansoli navi mumbai, professional pest control ghansoli, termite control ghansoli, cockroach control ghansoli, bed bug control ghansoli, pest control services ghansoli navi mumbai, affordable pest control ghansoli, emergency pest control ghansoli, residential pest control ghansoli, commercial pest control ghansoli, pest control near me ghansoli, same day pest control ghansoli, eco friendly pest control ghansoli, licensed pest control ghansoli, guaranteed pest control ghansoli, 24/7 pest control ghansoli, pest exterminators ghansoli, pest management ghansoli, fumigation services ghansoli, anti termite treatment ghansoli, rodent control ghansoli, mosquito control ghansoli, lizard control ghansoli, spider control ghansoli, ant control ghansoli, fly control ghansoli, ghansoli railway station pest control, kopar khairane pest control, airoli pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghansoli"
  },
  openGraph: {
    title: 'Pest Control in Ghansoli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghansoli. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-ghansoli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ghansoli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ghansoli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Ghansoli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghansoli. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-ghansoli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ghansoli, Navi Mumbai',
    'geo.position': '19.1197;73.0169',
    'ICBM': '19.1197, 73.0169',
  }
};

export default function PestControlInGhansoliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
