import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Matunga | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Matunga, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Matunga East, Matunga West, King Circle, Mahim Junction. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in matunga, best pest control matunga mumbai, professional pest control matunga, termite control matunga, cockroach control matunga, bed bug control matunga, pest control services matunga mumbai, affordable pest control matunga, emergency pest control matunga, residential pest control matunga, commercial pest control matunga, pest control near me matunga, same day pest control matunga, eco friendly pest control matunga, licensed pest control matunga, guaranteed pest control matunga, 24/7 pest control matunga, pest exterminators matunga, pest management matunga, fumigation services matunga, anti termite treatment matunga, rodent control matunga, mosquito control matunga, lizard control matunga, spider control matunga, ant control matunga, fly control matunga, matunga east pest control, matunga west pest control, king circle pest control, mahim junction pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-matunga",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-matunga',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-matunga',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-matunga'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Matunga | Super Pest Control Services',
    description: 'Get the best pest control services in Matunga, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-matunga',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-matunga-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Matunga'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Matunga | Super Pest Control',
    description: 'Professional pest control services in Matunga, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-matunga-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Matunga, Mumbai',
    'geo.position': '19.0270;72.8431',
    'ICBM': '19.0270, 72.8431',
  }
};

export default function PestControlInMatungaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
