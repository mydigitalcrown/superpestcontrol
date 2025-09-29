import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Urse | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Urse, Pune. Expert termite control, cockroach treatment, bed bug removal near Mundhwa, Koregaon Park, Viman Nagar, Lohegaon. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in urse, best pest control urse pune, professional pest control urse, termite control urse, cockroach control urse, bed bug control urse, pest control services urse pune, affordable pest control urse, emergency pest control urse, residential pest control urse, commercial pest control urse, pest control near me urse, same day pest control urse, eco friendly pest control urse, licensed pest control urse, guaranteed pest control urse, 24/7 pest control urse, pest exterminators urse, pest management urse, fumigation services urse, anti termite treatment urse, rodent control urse, mosquito control urse, lizard control urse, spider control urse, ant control urse, fly control urse, mundhwa pest control, koregaon park pest control, viman nagar pest control, lohegaon pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-urse",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-urse',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-urse',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-urse'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Urse | Super Pest Control Services',
    description: 'Get the best pest control services in Urse, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-urse',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-urse-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Urse'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Urse | Super Pest Control',
    description: 'Professional pest control services in Urse, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-urse-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Urse, Pune',
    'geo.position': '18.5014;73.7898',
    'ICBM': '18.5014, 73.7898',
  }
};

export default function PestControlInUrseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}