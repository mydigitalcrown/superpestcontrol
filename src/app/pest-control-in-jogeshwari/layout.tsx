import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Jogeshwari | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Jogeshwari. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in jogeshwari, best pest control jogeshwari mumbai, professional pest control jogeshwari, termite control jogeshwari, cockroach control jogeshwari, bed bug control jogeshwari, pest control services jogeshwari mumbai, affordable pest control jogeshwari, emergency pest control jogeshwari, residential pest control jogeshwari, commercial pest control jogeshwari, pest control near me jogeshwari, same day pest control jogeshwari, eco friendly pest control jogeshwari, licensed pest control jogeshwari, guaranteed pest control jogeshwari, 24/7 pest control jogeshwari, pest exterminators jogeshwari, pest management jogeshwari, fumigation services jogeshwari, anti termite treatment jogeshwari, rodent control jogeshwari, mosquito control jogeshwari, lizard control jogeshwari, spider control jogeshwari, ant control jogeshwari, fly control jogeshwari, jogeshwari east pest control, jogeshwari west pest control, oshiwara pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-jogeshwari"
  },
  openGraph: {
    title: 'Pest Control in Jogeshwari | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Jogeshwari. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-jogeshwari',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-jogeshwari-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Jogeshwari'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Jogeshwari | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Jogeshwari. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-jogeshwari-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Jogeshwari, Mumbai',
    'geo.position': '19.1336;72.8469',
    'ICBM': '19.1336, 72.8469',
  }
};

export default function PestControlInJogeshwariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
