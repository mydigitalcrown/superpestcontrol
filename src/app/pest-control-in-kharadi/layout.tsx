import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kharadi | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Kharadi, Pune. Expert termite control, cockroach treatment, bed bug removal near Wagholi, Hadapsar, Viman Nagar, Kalyani Nagar. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in kharadi, best pest control kharadi pune, professional pest control kharadi, termite control kharadi, cockroach control kharadi, bed bug control kharadi, pest control services kharadi pune, affordable pest control kharadi, emergency pest control kharadi, residential pest control kharadi, commercial pest control kharadi, pest control near me kharadi, same day pest control kharadi, eco friendly pest control kharadi, licensed pest control kharadi, guaranteed pest control kharadi, 24/7 pest control kharadi, pest exterminators kharadi, pest management kharadi, fumigation services kharadi, anti termite treatment kharadi, rodent control kharadi, mosquito control kharadi, lizard control kharadi, spider control kharadi, ant control kharadi, fly control kharadi, wagholi pest control, hadapsar pest control, viman nagar pest control, kalyani nagar pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kharadi"
  },
  openGraph: {
    title: 'Professional Pest Control in Kharadi | Super Pest Control Services',
    description: 'Get the best pest control services in Kharadi, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kharadi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kharadi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kharadi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kharadi | Super Pest Control',
    description: 'Professional pest control services in Kharadi, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kharadi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kharadi, Pune',
    'geo.position': '18.5513;73.9470',
    'ICBM': '18.5513, 73.9470',
  }
};

export default function PestControlInKharadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}