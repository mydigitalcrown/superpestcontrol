import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Lohegaon | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Lohegaon, Pune. Expert termite control, cockroach treatment, bed bug removal near Pune Airport, Dhanori, Alandi Road, Vishrantwadi. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in lohegaon, best pest control lohegaon pune, professional pest control lohegaon, termite control lohegaon, cockroach control lohegaon, bed bug control lohegaon, pest control services lohegaon pune, affordable pest control lohegaon, emergency pest control lohegaon, residential pest control lohegaon, commercial pest control lohegaon, pest control near me lohegaon, same day pest control lohegaon, eco friendly pest control lohegaon, licensed pest control lohegaon, guaranteed pest control lohegaon, 24/7 pest control lohegaon, pest exterminators lohegaon, pest management lohegaon, fumigation services lohegaon, anti termite treatment lohegaon, rodent control lohegaon, mosquito control lohegaon, lizard control lohegaon, spider control lohegaon, ant control lohegaon, fly control lohegaon, pune airport pest control, dhanori pest control, alandi road pest control, vishrantwadi pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-lohegaon",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-lohegaon',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-lohegaon',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-lohegaon'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Lohegaon | Super Pest Control Services',
    description: 'Get the best pest control services in Lohegaon, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-lohegaon',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-lohegaon-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Lohegaon'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Lohegaon | Super Pest Control',
    description: 'Professional pest control services in Lohegaon, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-lohegaon-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Lohegaon, Pune',
    'geo.position': '18.5922;73.9324',
    'ICBM': '18.5922, 73.9324',
  }
};

export default function PestControlInLohegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
