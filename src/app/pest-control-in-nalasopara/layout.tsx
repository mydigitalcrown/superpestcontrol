import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Nalasopara | #1 Professional Services Palghar | Super Pest Control',
  description: 'Professional Pest Control Services in Nalasopara, Palghar. Expert termite control, cockroach treatment, bed bug removal near Nalasopara East, Nalasopara West, Vasai, Virar. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in nalasopara, best pest control nalasopara palghar, professional pest control nalasopara, termite control nalasopara, cockroach control nalasopara, bed bug control nalasopara, pest control services nalasopara palghar, affordable pest control nalasopara, emergency pest control nalasopara, residential pest control nalasopara, commercial pest control nalasopara, pest control near me nalasopara, same day pest control nalasopara, eco friendly pest control nalasopara, licensed pest control nalasopara, guaranteed pest control nalasopara, 24/7 pest control nalasopara, pest exterminators nalasopara, pest management nalasopara, fumigation services nalasopara, anti termite treatment nalasopara, rodent control nalasopara, mosquito control nalasopara, lizard control nalasopara, spider control nalasopara, ant control nalasopara, fly control nalasopara, nalasopara east pest control, nalasopara west pest control, vasai pest control, virar pest control, palghar pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-nalasopara",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-nalasopara',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-nalasopara',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-nalasopara'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Nalasopara | Super Pest Control Services',
    description: 'Get the best pest control services in Nalasopara, Palghar with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-nalasopara',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-nalasopara-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Nalasopara'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Nalasopara | Super Pest Control',
    description: 'Professional pest control services in Nalasopara, Palghar with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-nalasopara-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nalasopara, Palghar',
    'geo.position': '19.4220;72.7960',
    'ICBM': '19.4220, 72.7960',
  }
};

export default function PestControlInNalasoparaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}