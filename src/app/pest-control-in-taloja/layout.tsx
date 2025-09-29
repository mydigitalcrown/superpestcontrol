import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Taloja | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Taloja, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Taloja MIDC, Kharghar, Panvel, New Panvel. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in taloja, best pest control taloja navi mumbai, professional pest control taloja, termite control taloja, cockroach control taloja, bed bug control taloja, pest control services taloja navi mumbai, affordable pest control taloja, emergency pest control taloja, residential pest control taloja, commercial pest control taloja, pest control near me taloja, same day pest control taloja, eco friendly pest control taloja, licensed pest control taloja, guaranteed pest control taloja, 24/7 pest control taloja, pest exterminators taloja, pest management taloja, fumigation services taloja, anti termite treatment taloja, rodent control taloja, mosquito control taloja, lizard control taloja, spider control taloja, ant control taloja, fly control taloja, taloja midc pest control, kharghar pest control, panvel pest control, new panvel pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-taloja",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-taloja',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-taloja',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-taloja'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Taloja | Super Pest Control Services',
    description: 'Get the best pest control services in Taloja, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-taloja',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-taloja-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Taloja'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Taloja | Super Pest Control',
    description: 'Professional pest control services in Taloja, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-taloja-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Taloja, Navi Mumbai',
    'geo.position': '19.0833;73.1000',
    'ICBM': '19.0833, 73.1000',
  }
};

export default function PestControlInTalojaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}