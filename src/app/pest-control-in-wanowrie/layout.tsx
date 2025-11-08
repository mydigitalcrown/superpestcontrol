import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Wanowrie | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Wanowrie, Pune. Expert termite control, cockroach treatment, bed bug removal near Hadapsar, Fatima Nagar, Undri, Kondhwa. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in wanowrie, best pest control wanowrie pune, professional pest control wanowrie, termite control wanowrie, cockroach control wanowrie, bed bug control wanowrie, pest control services wanowrie pune, affordable pest control wanowrie, emergency pest control wanowrie, residential pest control wanowrie, commercial pest control wanowrie, pest control near me wanowrie, same day pest control wanowrie, eco friendly pest control wanowrie, licensed pest control wanowrie, guaranteed pest control wanowrie, 24/7 pest control wanowrie, pest exterminators wanowrie, pest management wanowrie, fumigation services wanowrie, anti termite treatment wanowrie, rodent control wanowrie, mosquito control wanowrie, lizard control wanowrie, spider control wanowrie, ant control wanowrie, fly control wanowrie, hadapsar pest control, fatima nagar pest control, undri pest control, kondhwa pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-wanowrie",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-wanowrie',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-wanowrie',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-wanowrie'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Wanowrie | Super Pest Control Services',
    description: 'Get the best pest control services in Wanowrie, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-wanowrie',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-wanowrie-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Wanowrie'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Wanowrie | Super Pest Control',
    description: 'Professional pest control services in Wanowrie, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-wanowrie-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Wanowrie, Pune',
    'geo.position': '18.5018;73.8636',
    'ICBM': '18.5018, 73.8636',
  }
};

export default function PestControlInWanowrieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
