import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Jogeshwari | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Jogeshwari, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Jogeshwari East, Jogeshwari West, Oshiwara. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in jogeshwari, best pest control jogeshwari mumbai, professional pest control jogeshwari, termite control jogeshwari, cockroach control jogeshwari, bed bug control jogeshwari, pest control services jogeshwari mumbai, affordable pest control jogeshwari, emergency pest control jogeshwari, residential pest control jogeshwari, commercial pest control jogeshwari, pest control near me jogeshwari, same day pest control jogeshwari, eco friendly pest control jogeshwari, licensed pest control jogeshwari, guaranteed pest control jogeshwari, 24/7 pest control jogeshwari, pest exterminators jogeshwari, pest management jogeshwari, fumigation services jogeshwari, anti termite treatment jogeshwari, rodent control jogeshwari, mosquito control jogeshwari, lizard control jogeshwari, spider control jogeshwari, ant control jogeshwari, fly control jogeshwari, jogeshwari east pest control, jogeshwari west pest control, oshiwara pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-jogeshwari"
  },
  openGraph: {
    title: 'Professional Pest Control in Jogeshwari | Super Pest Control Services',
    description: 'Get the best pest control services in Jogeshwari, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
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
    title: 'Best Pest Control in Jogeshwari | Super Pest Control',
    description: 'Professional pest control services in Jogeshwari, Mumbai with guaranteed results. Call now for expert treatment!',
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