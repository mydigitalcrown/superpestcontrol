import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Malad | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Malad. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in malad, best pest control malad mumbai, professional pest control malad, termite control malad, cockroach control malad, bed bug control malad, pest control services malad mumbai, affordable pest control malad, emergency pest control malad, residential pest control malad, commercial pest control malad, pest control near me malad, same day pest control malad, eco friendly pest control malad, licensed pest control malad, guaranteed pest control malad, 24/7 pest control malad, pest exterminators malad, pest management malad, fumigation services malad, anti termite treatment malad, rodent control malad, mosquito control malad, lizard control malad, spider control malad, ant control malad, fly control malad, malad west pest control, malad east pest control, mindspace pest control, poisar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-malad",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-malad',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-malad',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-malad'
    }
  },
  openGraph: {
    title: 'Pest Control in Malad | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Malad. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-malad',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-malad-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Malad'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Malad | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Malad. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-malad-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Malad, Mumbai',
    'geo.position': '19.1876;72.8385',
    'ICBM': '19.1876, 72.8385',
  }
};

export default function PestControlInMaladLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
