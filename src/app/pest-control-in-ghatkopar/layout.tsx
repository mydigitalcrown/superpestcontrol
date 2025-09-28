import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Ghatkopar | #1 Professional Services East Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Ghatkopar, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Ghatkopar Railway Station, Vidyavihar, Vikhroli. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in ghatkopar, best pest control ghatkopar mumbai, professional pest control ghatkopar, termite control ghatkopar, cockroach control ghatkopar, bed bug control ghatkopar, pest control services ghatkopar mumbai, affordable pest control ghatkopar, emergency pest control ghatkopar, residential pest control ghatkopar, commercial pest control ghatkopar, pest control near me ghatkopar, same day pest control ghatkopar, eco friendly pest control ghatkopar, licensed pest control ghatkopar, guaranteed pest control ghatkopar, 24/7 pest control ghatkopar, pest exterminators ghatkopar, pest management ghatkopar, fumigation services ghatkopar, anti termite treatment ghatkopar, rodent control ghatkopar, mosquito control ghatkopar, lizard control ghatkopar, spider control ghatkopar, ant control ghatkopar, fly control ghatkopar, ghatkopar railway station pest control, vidyavihar pest control, vikhroli pest control, east mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-ghatkopar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-ghatkopar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-ghatkopar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-ghatkopar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Ghatkopar | Super Pest Control Services',
    description: 'Get the best pest control services in Ghatkopar, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-ghatkopar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-ghatkopar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Ghatkopar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Ghatkopar | Super Pest Control',
    description: 'Professional pest control services in Ghatkopar, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-ghatkopar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Ghatkopar, Mumbai',
    'geo.position': '19.0856;72.9083',
    'ICBM': '19.0856, 72.9083',
  }
};

export default function PestControlInGhatkoparLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}