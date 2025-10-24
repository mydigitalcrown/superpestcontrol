import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Dahisar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Dahisar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in dahisar, best pest control dahisar, professional pest control dahisar, termite control dahisar, cockroach control dahisar, bed bug control dahisar, pest control services dahisar mumbai, affordable pest control dahisar, emergency pest control dahisar, residential pest control dahisar, commercial pest control dahisar, pest control near me dahisar, same day pest control dahisar, eco friendly pest control dahisar, licensed pest control dahisar, guaranteed pest control dahisar, 24/7 pest control dahisar, pest exterminators dahisar, pest management dahisar, fumigation services dahisar, anti termite treatment dahisar, rodent control dahisar, mosquito control dahisar, lizard control dahisar, spider control dahisar, ant control dahisar, fly control dahisar, dahisar east pest control, dahisar west pest control, western mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dahisar"
  },
  openGraph: {
    title: 'Pest Control in Dahisar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Dahisar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-dahisar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-dahisar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Dahisar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Dahisar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Dahisar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-dahisar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Dahisar, Mumbai',
    'geo.position': '19.2544;72.8606',
    'ICBM': '19.2544, 72.8606',
  }
};

export default function PestControlInDahisarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
