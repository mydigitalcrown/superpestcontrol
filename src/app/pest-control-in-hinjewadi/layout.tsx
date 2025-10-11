import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Hinjewadi | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Hinjewadi. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in hinjewadi, best pest control hinjewadi pune, professional pest control hinjewadi, termite control hinjewadi, cockroach control hinjewadi, bed bug control hinjewadi, pest control services hinjewadi pune, affordable pest control hinjewadi, emergency pest control hinjewadi, residential pest control hinjewadi, commercial pest control hinjewadi, pest control near me hinjewadi, same day pest control hinjewadi, eco friendly pest control hinjewadi, licensed pest control hinjewadi, guaranteed pest control hinjewadi, 24/7 pest control hinjewadi, pest exterminators hinjewadi, pest management hinjewadi, fumigation services hinjewadi, anti termite treatment hinjewadi, rodent control hinjewadi, mosquito control hinjewadi, lizard control hinjewadi, spider control hinjewadi, ant control hinjewadi, fly control hinjewadi, hinjewadi it park pest control, baner pest control, aundh pest control, wakad pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-hinjewadi"
  },
  openGraph: {
    title: 'Pest Control in Hinjewadi | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Hinjewadi. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-hinjewadi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-hinjewadi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Hinjewadi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Hinjewadi | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Hinjewadi. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-hinjewadi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Hinjewadi, Pune',
    'geo.position': '18.5204;73.6967',
    'ICBM': '18.5204, 73.6967',
  }
};

export default function PestControlInHinjewadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
