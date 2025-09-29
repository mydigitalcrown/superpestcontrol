import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Pune | #1 Professional Services Maharashtra | Super Pest Control',
  description: 'Professional Pest Control Services in Pune, Maharashtra. Expert termite control, cockroach treatment, bed bug removal near Pimpri-Chinchwad, Wakad, Baner, Aundh. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in pune, best pest control pune maharashtra, professional pest control pune, termite control pune, cockroach control pune, bed bug control pune, pest control services pune maharashtra, affordable pest control pune, emergency pest control pune, residential pest control pune, commercial pest control pune, pest control near me pune, same day pest control pune, eco friendly pest control pune, licensed pest control pune, guaranteed pest control pune, 24/7 pest control pune, pest exterminators pune, pest management pune, fumigation services pune, anti termite treatment pune, rodent control pune, mosquito control pune, lizard control pune, spider control pune, ant control pune, fly control pune, pimpri chinchwad pest control, wakad pest control, baner pest control, aundh pest control, kothrud pest control, hadapsar pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pune",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pune',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-pune',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-pune'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Pune | Super Pest Control Services',
    description: 'Get the best pest control services in Pune, Maharashtra with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-pune',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-pune-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Pune'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Pune | Super Pest Control',
    description: 'Professional pest control services in Pune, Maharashtra with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-pune-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune, Maharashtra',
    'geo.position': '18.5204;73.8567',
    'ICBM': '18.5204, 73.8567',
  }
};

export default function PestControlInPuneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}