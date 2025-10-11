import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Karjat | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Karjat. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in karjat, best pest control karjat raigad, professional pest control karjat, termite control karjat, cockroach control karjat, bed bug control karjat, pest control services karjat raigad, affordable pest control karjat, emergency pest control karjat, residential pest control karjat, commercial pest control karjat, pest control near me karjat, same day pest control karjat, eco friendly pest control karjat, licensed pest control karjat, guaranteed pest control karjat, 24/7 pest control karjat, pest exterminators karjat, pest management karjat, fumigation services karjat, anti termite treatment karjat, rodent control karjat, mosquito control karjat, lizard control karjat, spider control karjat, ant control karjat, fly control karjat, khopoli pest control, lonavala pest control, talegaon pest control, pen pest control, matheran pest control, raigad pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-karjat"
  },
  openGraph: {
    title: 'Pest Control in Karjat | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Karjat. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-karjat',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-karjat-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Karjat'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Karjat | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Karjat. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-karjat-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Karjat, Raigad',
    'geo.position': '18.9177;73.3226',
    'ICBM': '18.9177, 73.3226',
  }
};

export default function PestControlInKarjatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
