import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Juinagar | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Juinagar, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Nerul, Seawoods, Belapur. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in juinagar, best pest control juinagar navi mumbai, professional pest control juinagar, termite control juinagar, cockroach control juinagar, bed bug control juinagar, pest control services juinagar navi mumbai, affordable pest control juinagar, emergency pest control juinagar, residential pest control juinagar, commercial pest control juinagar, pest control near me juinagar, same day pest control juinagar, eco friendly pest control juinagar, licensed pest control juinagar, guaranteed pest control juinagar, 24/7 pest control juinagar, pest exterminators juinagar, pest management juinagar, fumigation services juinagar, anti termite treatment juinagar, rodent control juinagar, mosquito control juinagar, lizard control juinagar, spider control juinagar, ant control juinagar, fly control juinagar, nerul pest control, seawoods pest control, belapur pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-juinagar"
  },
  openGraph: {
    title: 'Professional Pest Control in Juinagar | Super Pest Control Services',
    description: 'Get the best pest control services in Juinagar, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-juinagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-juinagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Juinagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Juinagar | Super Pest Control',
    description: 'Professional pest control services in Juinagar, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-juinagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Juinagar, Navi Mumbai',
    'geo.position': '19.0330;73.0297',
    'ICBM': '19.0330, 73.0297',
  }
};

export default function PestControlInJuinagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
