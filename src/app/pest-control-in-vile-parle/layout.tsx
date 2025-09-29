import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Vile Parle | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Vile Parle, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Vile Parle East, Vile Parle West, Andheri, Santacruz. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in vile parle, best pest control vile parle mumbai, professional pest control vile parle, termite control vile parle, cockroach control vile parle, bed bug control vile parle, pest control services vile parle mumbai, affordable pest control vile parle, emergency pest control vile parle, residential pest control vile parle, commercial pest control vile parle, pest control near me vile parle, same day pest control vile parle, eco friendly pest control vile parle, licensed pest control vile parle, guaranteed pest control vile parle, 24/7 pest control vile parle, pest exterminators vile parle, pest management vile parle, fumigation services vile parle, anti termite treatment vile parle, rodent control vile parle, mosquito control vile parle, lizard control vile parle, spider control vile parle, ant control vile parle, fly control vile parle, vile parle east pest control, vile parle west pest control, andheri pest control, santacruz pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-vile-parle",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-vile-parle',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-vile-parle',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-vile-parle'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Vile Parle | Super Pest Control Services',
    description: 'Get the best pest control services in Vile Parle, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-vile-parle',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-vile-parle-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Vile Parle'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Vile Parle | Super Pest Control',
    description: 'Professional pest control services in Vile Parle, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-vile-parle-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Vile Parle, Mumbai',
    'geo.position': '19.0989;72.8394',
    'ICBM': '19.0989, 72.8394',
  }
};

export default function PestControlInVileParleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}