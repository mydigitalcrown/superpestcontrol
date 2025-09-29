import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Malad | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Malad, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Malad West, Malad East, Mindspace, Poisar. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in malad, best pest control malad mumbai, professional pest control malad, termite control malad, cockroach control malad, bed bug control malad, pest control services malad mumbai, affordable pest control malad, emergency pest control malad, residential pest control malad, commercial pest control malad, pest control near me malad, same day pest control malad, eco friendly pest control malad, licensed pest control malad, guaranteed pest control malad, 24/7 pest control malad, pest exterminators malad, pest management malad, fumigation services malad, anti termite treatment malad, rodent control malad, mosquito control malad, lizard control malad, spider control malad, ant control malad, fly control malad, malad west pest control, malad east pest control, mindspace pest control, poisar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-malad",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-malad',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-malad',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-malad'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Malad | Super Pest Control Services',
    description: 'Get the best pest control services in Malad, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-malad',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-malad-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Malad'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Malad | Super Pest Control',
    description: 'Professional pest control services in Malad, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-malad-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Malad, Mumbai',
    'geo.position': '19.1876;72.8385',
    'ICBM': '19.1876, 72.8385',
  }
};

export default function PestControlInMaladLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}