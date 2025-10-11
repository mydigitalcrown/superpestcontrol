import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Rabale | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Rabale, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Rabale MIDC, TTC Industrial Area, Rabale Village, Ghansoli. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in rabale, best pest control rabale navi mumbai, professional pest control rabale, termite control rabale, cockroach control rabale, bed bug control rabale, pest control services rabale navi mumbai, affordable pest control rabale, emergency pest control rabale, residential pest control rabale, commercial pest control rabale, pest control near me rabale, same day pest control rabale, eco friendly pest control rabale, licensed pest control rabale, guaranteed pest control rabale, 24/7 pest control rabale, pest exterminators rabale, pest management rabale, fumigation services rabale, anti termite treatment rabale, rodent control rabale, mosquito control rabale, lizard control rabale, spider control rabale, ant control rabale, fly control rabale, rabale midc pest control, ttc industrial area pest control, rabale village pest control, ghansoli pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-rabale",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-rabale',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-rabale',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-rabale'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Rabale | Super Pest Control Services',
    description: 'Get the best pest control services in Rabale, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-rabale',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-rabale-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Rabale'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Rabale | Super Pest Control',
    description: 'Professional pest control services in Rabale, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-rabale-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Rabale, Navi Mumbai',
    'geo.position': '19.1334;73.0112',
    'ICBM': '19.1334, 73.0112',
  }
};

export default function PestControlInRabaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
