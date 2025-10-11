import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Worli | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Worli, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Lower Parel, Prabhadevi, Mahalaxmi, Dadar. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in worli, best pest control worli mumbai, professional pest control worli, termite control worli, cockroach control worli, bed bug control worli, pest control services worli mumbai, affordable pest control worli, emergency pest control worli, residential pest control worli, commercial pest control worli, pest control near me worli, same day pest control worli, eco friendly pest control worli, licensed pest control worli, guaranteed pest control worli, 24/7 pest control worli, pest exterminators worli, pest management worli, fumigation services worli, anti termite treatment worli, rodent control worli, mosquito control worli, lizard control worli, spider control worli, ant control worli, fly control worli, lower parel pest control, prabhadevi pest control, mahalaxmi pest control, dadar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-worli",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-worli',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-worli',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-worli'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Worli | Super Pest Control Services',
    description: 'Get the best pest control services in Worli, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-worli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-worli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Worli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Worli | Super Pest Control',
    description: 'Professional pest control services in Worli, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-worli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Worli, Mumbai',
    'geo.position': '19.0176;72.8125',
    'ICBM': '19.0176, 72.8125',
  }
};

export default function PestControlInWorliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
