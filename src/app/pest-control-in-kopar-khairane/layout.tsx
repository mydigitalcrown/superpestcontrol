import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kopar Khairane | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Kopar Khairane, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Ghansoli, Airoli, Rabale, Vashi. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kopar khairane, best pest control kopar khairane navi mumbai, professional pest control kopar khairane, termite control kopar khairane, cockroach control kopar khairane, bed bug control kopar khairane, pest control services kopar khairane navi mumbai, affordable pest control kopar khairane, emergency pest control kopar khairane, residential pest control kopar khairane, commercial pest control kopar khairane, pest control near me kopar khairane, same day pest control kopar khairane, eco friendly pest control kopar khairane, licensed pest control kopar khairane, guaranteed pest control kopar khairane, 24/7 pest control kopar khairane, pest exterminators kopar khairane, pest management kopar khairane, fumigation services kopar khairane, anti termite treatment kopar khairane, rodent control kopar khairane, mosquito control kopar khairane, lizard control kopar khairane, spider control kopar khairane, ant control kopar khairane, fly control kopar khairane, ghansoli pest control, airoli pest control, rabale pest control, vashi pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kopar-khairane",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kopar-khairane',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kopar-khairane',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kopar-khairane'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kopar Khairane | Super Pest Control Services',
    description: 'Get the best pest control services in Kopar Khairane, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kopar-khairane',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kopar-khairane-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kopar Khairane'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kopar Khairane | Super Pest Control',
    description: 'Professional pest control services in Kopar Khairane, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kopar-khairane-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kopar Khairane, Navi Mumbai',
    'geo.position': '19.1034;73.0173',
    'ICBM': '19.1034, 73.0173',
  }
};

export default function PestControlInKoparKhairaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}