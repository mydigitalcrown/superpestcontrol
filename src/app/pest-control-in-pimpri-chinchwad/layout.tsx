import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Pimpri Chinchwad | #1 Professional Services PCMC | Super Pest Control',
  description: 'Professional Pest Control Services in Pimpri Chinchwad, PCMC. Expert termite control, cockroach treatment, bed bug removal near Wakad, Aundh, Baner, Sangvi. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in pimpri chinchwad, best pest control pimpri chinchwad pcmc, professional pest control pimpri chinchwad, termite control pimpri chinchwad, cockroach control pimpri chinchwad, bed bug control pimpri chinchwad, pest control services pimpri chinchwad pcmc, affordable pest control pimpri chinchwad, emergency pest control pimpri chinchwad, residential pest control pimpri chinchwad, commercial pest control pimpri chinchwad, pest control near me pimpri chinchwad, same day pest control pimpri chinchwad, eco friendly pest control pimpri chinchwad, licensed pest control pimpri chinchwad, guaranteed pest control pimpri chinchwad, 24/7 pest control pimpri chinchwad, pest exterminators pimpri chinchwad, pest management pimpri chinchwad, fumigation services pimpri chinchwad, anti termite treatment pimpri chinchwad, rodent control pimpri chinchwad, mosquito control pimpri chinchwad, lizard control pimpri chinchwad, spider control pimpri chinchwad, ant control pimpri chinchwad, fly control pimpri chinchwad, wakad pest control, aundh pest control, baner pest control, sangvi pest control, pcmc pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pimpri-chinchwad",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-pimpri-chinchwad',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-pimpri-chinchwad'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Pimpri Chinchwad | Super Pest Control Services',
    description: 'Get the best pest control services in Pimpri Chinchwad, PCMC with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-pimpri-chinchwad-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Pimpri Chinchwad'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Pimpri Chinchwad | Super Pest Control',
    description: 'Professional pest control services in Pimpri Chinchwad, PCMC with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-pimpri-chinchwad-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pimpri Chinchwad, PCMC',
    'geo.position': '18.6278;73.8131',
    'ICBM': '18.6278, 73.8131',
  }
};

export default function PestControlInPimpriChinchwadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
