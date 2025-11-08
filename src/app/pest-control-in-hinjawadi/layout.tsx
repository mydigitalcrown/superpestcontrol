import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Hinjawadi | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Hinjawadi, Pune. Expert termite control, cockroach treatment, bed bug removal near Wakad, Baner, Aundh, Bavdhan. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in hinjawadi, best pest control hinjawadi pune, professional pest control hinjawadi, termite control hinjawadi, cockroach control hinjawadi, bed bug control hinjawadi, pest control services hinjawadi pune, affordable pest control hinjawadi, emergency pest control hinjawadi, residential pest control hinjawadi, commercial pest control hinjawadi, pest control near me hinjawadi, same day pest control hinjawadi, eco friendly pest control hinjawadi, licensed pest control hinjawadi, guaranteed pest control hinjawadi, 24/7 pest control hinjawadi, pest exterminators hinjawadi, pest management hinjawadi, fumigation services hinjawadi, anti termite treatment hinjawadi, rodent control hinjawadi, mosquito control hinjawadi, lizard control hinjawadi, spider control hinjawadi, ant control hinjawadi, fly control hinjawadi, wakad pest control, baner pest control, aundh pest control, bavdhan pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-hinjawadi",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-hinjawadi',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-hinjawadi',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-hinjawadi'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Hinjawadi | Super Pest Control Services',
    description: 'Get the best pest control services in Hinjawadi, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-hinjawadi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-hinjawadi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Hinjawadi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Hinjawadi | Super Pest Control',
    description: 'Professional pest control services in Hinjawadi, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-hinjawadi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Hinjawadi, Pune',
    'geo.position': '18.5204;73.6967',
    'ICBM': '18.5204, 73.6967',
  }
};

export default function PestControlInHinjawadiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
