import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Hadapsar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Hadapsar, Pune. Expert termite control, cockroach treatment, bed bug removal near Wanowrie, Fatima Nagar, Undri, Kondhwa. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in hadapsar, best pest control hadapsar pune, professional pest control hadapsar, termite control hadapsar, cockroach control hadapsar, bed bug control hadapsar, pest control services hadapsar pune, affordable pest control hadapsar, emergency pest control hadapsar, residential pest control hadapsar, commercial pest control hadapsar, pest control near me hadapsar, same day pest control hadapsar, eco friendly pest control hadapsar, licensed pest control hadapsar, guaranteed pest control hadapsar, 24/7 pest control hadapsar, pest exterminators hadapsar, pest management hadapsar, fumigation services hadapsar, anti termite treatment hadapsar, rodent control hadapsar, mosquito control hadapsar, lizard control hadapsar, spider control hadapsar, ant control hadapsar, fly control hadapsar, wanowrie pest control, fatima nagar pest control, undri pest control, kondhwa pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-hadapsar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-hadapsar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-hadapsar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-hadapsar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Hadapsar | Super Pest Control Services',
    description: 'Get the best pest control services in Hadapsar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-hadapsar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-hadapsar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Hadapsar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Hadapsar | Super Pest Control',
    description: 'Professional pest control services in Hadapsar, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-hadapsar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Hadapsar, Pune',
    'geo.position': '18.5089;73.9321',
    'ICBM': '18.5089, 73.9321',
  }
};

export default function PestControlInHadapsarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
