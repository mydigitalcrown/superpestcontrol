import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Wagholi | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Wagholi, Pune. Expert termite control, cockroach treatment, bed bug removal near Kharadi, Lohegaon, Mundhwa, Hadapsar. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in wagholi, best pest control wagholi pune, professional pest control wagholi, termite control wagholi, cockroach control wagholi, bed bug control wagholi, pest control services wagholi pune, affordable pest control wagholi, emergency pest control wagholi, residential pest control wagholi, commercial pest control wagholi, pest control near me wagholi, same day pest control wagholi, eco friendly pest control wagholi, licensed pest control wagholi, guaranteed pest control wagholi, 24/7 pest control wagholi, pest exterminators wagholi, pest management wagholi, fumigation services wagholi, anti termite treatment wagholi, rodent control wagholi, mosquito control wagholi, lizard control wagholi, spider control wagholi, ant control wagholi, fly control wagholi, kharadi pest control, lohegaon pest control, mundhwa pest control, hadapsar pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-wagholi",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-wagholi',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-wagholi',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-wagholi'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Wagholi | Super Pest Control Services',
    description: 'Get the best pest control services in Wagholi, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-wagholi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-wagholi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Wagholi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Wagholi | Super Pest Control',
    description: 'Professional pest control services in Wagholi, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-wagholi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Wagholi, Pune',
    'geo.position': '18.6161;73.9776',
    'ICBM': '18.6161, 73.9776',
  }
};

export default function PestControlInWagholiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
