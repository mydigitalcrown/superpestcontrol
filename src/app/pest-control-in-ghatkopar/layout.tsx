import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Ghatkopar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Ghatkopar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in ghatkopar, best pest control ghatkopar mumbai, professional pest control ghatkopar, termite control ghatkopar, cockroach control ghatkopar, bed bug control ghatkopar, pest control services ghatkopar mumbai, affordable pest control ghatkopar, emergency pest control ghatkopar, residential pest control ghatkopar, commercial pest control ghatkopar, pest control near me ghatkopar, same day pest control ghatkopar, eco friendly pest control ghatkopar, licensed pest control ghatkopar, guaranteed pest control ghatkopar, 24/7 pest control ghatkopar, pest exterminators ghatkopar, pest management ghatkopar, fumigation services ghatkopar, anti termite treatment ghatkopar, rodent control ghatkopar, mosquito control ghatkopar, lizard control ghatkopar, spider control ghatkopar, ant control ghatkopar, fly control ghatkopar, ghatkopar railway station pest control, vidyavihar pest control, vikhroli pest control, east mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghatkopar"
  },
  openGraph: {
    title: 'Pest Control in Ghatkopar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghatkopar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-ghatkopar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ghatkopar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ghatkopar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Ghatkopar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Ghatkopar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-ghatkopar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ghatkopar, Mumbai',
    'geo.position': '19.0856;72.9083',
    'ICBM': '19.0856, 72.9083',
  }
};

export default function PestControlInGhatkoparLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
