import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Mira Road | #1 Professional Services Thane | Super Pest Control',
  description: 'Professional Pest Control Services in Mira Road, Thane. Expert termite control, cockroach treatment, bed bug removal near Mira Road East, Mira Road West, Kashimira, Silver Park. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in mira road, best pest control mira road thane, professional pest control mira road, termite control mira road, cockroach control mira road, bed bug control mira road, pest control services mira road thane, affordable pest control mira road, emergency pest control mira road, residential pest control mira road, commercial pest control mira road, pest control near me mira road, same day pest control mira road, eco friendly pest control mira road, licensed pest control mira road, guaranteed pest control mira road, 24/7 pest control mira road, pest exterminators mira road, pest management mira road, fumigation services mira road, anti termite treatment mira road, rodent control mira road, mosquito control mira road, lizard control mira road, spider control mira road, ant control mira road, fly control mira road, mira road east pest control, mira road west pest control, kashimira pest control, silver park pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mira-road",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mira-road',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mira-road',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mira-road'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Mira Road | Super Pest Control Services',
    description: 'Get the best pest control services in Mira Road, Thane with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-mira-road',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mira-road-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mira Road'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Mira Road | Super Pest Control',
    description: 'Professional pest control services in Mira Road, Thane with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-mira-road-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mira Road, Thane',
    'geo.position': '19.2830;72.8770',
    'ICBM': '19.2830, 72.8770',
  }
};

export default function PestControlInMiraRoadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}