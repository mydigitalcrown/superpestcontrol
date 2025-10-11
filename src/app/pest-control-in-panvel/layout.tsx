import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Panvel | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Panvel, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Panvel City, Old Panvel, Khanda Colony, Awas Vikas. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in panvel, best pest control panvel navi mumbai, professional pest control panvel, termite control panvel, cockroach control panvel, bed bug control panvel, pest control services panvel navi mumbai, affordable pest control panvel, emergency pest control panvel, residential pest control panvel, commercial pest control panvel, pest control near me panvel, same day pest control panvel, eco friendly pest control panvel, licensed pest control panvel, guaranteed pest control panvel, 24/7 pest control panvel, pest exterminators panvel, pest management panvel, fumigation services panvel, anti termite treatment panvel, rodent control panvel, mosquito control panvel, lizard control panvel, spider control panvel, ant control panvel, fly control panvel, panvel city pest control, old panvel pest control, khanda colony pest control, awas vikas pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-panvel",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-panvel',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-panvel',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-panvel'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Panvel | Super Pest Control Services',
    description: 'Get the best pest control services in Panvel, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-panvel',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-panvel-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Panvel'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Panvel | Super Pest Control',
    description: 'Professional pest control services in Panvel, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-panvel-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Panvel, Navi Mumbai',
    'geo.position': '18.9894;73.1305',
    'ICBM': '18.9894, 73.1305',
  }
};

export default function PestControlInPanvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
