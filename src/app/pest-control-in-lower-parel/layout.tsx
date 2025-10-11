import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Lower Parel | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Lower Parel, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Worli, Mahalaxmi, Phoenix Mills, Kamala Mills. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in lower parel, best pest control lower parel mumbai, professional pest control lower parel, termite control lower parel, cockroach control lower parel, bed bug control lower parel, pest control services lower parel mumbai, affordable pest control lower parel, emergency pest control lower parel, residential pest control lower parel, commercial pest control lower parel, pest control near me lower parel, same day pest control lower parel, eco friendly pest control lower parel, licensed pest control lower parel, guaranteed pest control lower parel, 24/7 pest control lower parel, pest exterminators lower parel, pest management lower parel, fumigation services lower parel, anti termite treatment lower parel, rodent control lower parel, mosquito control lower parel, lizard control lower parel, spider control lower parel, ant control lower parel, fly control lower parel, worli pest control, mahalaxmi pest control, phoenix mills pest control, kamala mills pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lower-parel",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-lower-parel',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-lower-parel',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-lower-parel'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Lower Parel | Super Pest Control Services',
    description: 'Get the best pest control services in Lower Parel, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-lower-parel',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-lower-parel-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Lower Parel'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Lower Parel | Super Pest Control',
    description: 'Professional pest control services in Lower Parel, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-lower-parel-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Lower Parel, Mumbai',
    'geo.position': '19.0006;72.8325',
    'ICBM': '19.0006, 72.8325',
  }
};

export default function PestControlInLowerParelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
