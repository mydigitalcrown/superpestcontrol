import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Magarpatta | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Magarpatta, Pune. Expert termite control, cockroach treatment, bed bug removal near Hadapsar, Mundhwa, Kharadi, Wanowrie. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in magarpatta, best pest control magarpatta pune, professional pest control magarpatta, termite control magarpatta, cockroach control magarpatta, bed bug control magarpatta, pest control services magarpatta pune, affordable pest control magarpatta, emergency pest control magarpatta, residential pest control magarpatta, commercial pest control magarpatta, pest control near me magarpatta, same day pest control magarpatta, eco friendly pest control magarpatta, licensed pest control magarpatta, guaranteed pest control magarpatta, 24/7 pest control magarpatta, pest exterminators magarpatta, pest management magarpatta, fumigation services magarpatta, anti termite treatment magarpatta, rodent control magarpatta, mosquito control magarpatta, lizard control magarpatta, spider control magarpatta, ant control magarpatta, fly control magarpatta, hadapsar pest control, mundhwa pest control, kharadi pest control, wanowrie pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-magarpatta",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-magarpatta',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-magarpatta',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-magarpatta'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Magarpatta | Super Pest Control Services',
    description: 'Get the best pest control services in Magarpatta, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-magarpatta',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-magarpatta-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Magarpatta'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Magarpatta | Super Pest Control',
    description: 'Professional pest control services in Magarpatta, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-magarpatta-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Magarpatta, Pune',
    'geo.position': '18.5127;73.9364',
    'ICBM': '18.5127, 73.9364',
  }
};

export default function PestControlInMagarpattaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
