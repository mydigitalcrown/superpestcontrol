import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in New Panvel | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in New Panvel. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in new panvel, best pest control new panvel navi mumbai, professional pest control new panvel, termite control new panvel, cockroach control new panvel, bed bug control new panvel, pest control services new panvel navi mumbai, affordable pest control new panvel, emergency pest control new panvel, residential pest control new panvel, commercial pest control new panvel, pest control near me new panvel, same day pest control new panvel, eco friendly pest control new panvel, licensed pest control new panvel, guaranteed pest control new panvel, 24/7 pest control new panvel, pest exterminators new panvel, pest management new panvel, fumigation services new panvel, anti termite treatment new panvel, rodent control new panvel, mosquito control new panvel, lizard control new panvel, spider control new panvel, ant control new panvel, fly control new panvel, sector 1 pest control, sector 7 pest control, sector 15 pest control, sector 21 pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-new-panvel",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-new-panvel',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-new-panvel',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-new-panvel'
    }
  },
  openGraph: {
    title: 'Pest Control in New Panvel | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in New Panvel. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-new-panvel',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-new-panvel-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in New Panvel'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in New Panvel | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in New Panvel. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-new-panvel-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'New Panvel, Navi Mumbai',
    'geo.position': '19.0144;73.1050',
    'ICBM': '19.0144, 73.1050',
  }
};

export default function PestControlInNewPanvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
