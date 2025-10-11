import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Wadala | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Wadala, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Antop Hill, Sewri, Parel, Dadar. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in wadala, best pest control wadala mumbai, professional pest control wadala, termite control wadala, cockroach control wadala, bed bug control wadala, pest control services wadala mumbai, affordable pest control wadala, emergency pest control wadala, residential pest control wadala, commercial pest control wadala, pest control near me wadala, same day pest control wadala, eco friendly pest control wadala, licensed pest control wadala, guaranteed pest control wadala, 24/7 pest control wadala, pest exterminators wadala, pest management wadala, fumigation services wadala, anti termite treatment wadala, rodent control wadala, mosquito control wadala, lizard control wadala, spider control wadala, ant control wadala, fly control wadala, antop hill pest control, sewri pest control, parel pest control, dadar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-wadala",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-wadala',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-wadala',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-wadala'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Wadala | Super Pest Control Services',
    description: 'Get the best pest control services in Wadala, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-wadala',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-wadala-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Wadala'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Wadala | Super Pest Control',
    description: 'Professional pest control services in Wadala, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-wadala-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Wadala, Mumbai',
    'geo.position': '19.0176;72.8581',
    'ICBM': '19.0176, 72.8581',
  }
};

export default function PestControlInWadalaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
