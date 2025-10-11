import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Solapur | #1 Professional Services Maharashtra | Super Pest Control',
  description: 'Professional Pest Control Services in Solapur, Maharashtra. Expert termite control, cockroach treatment, bed bug removal near Solapur City, Pandharpur, Akkalkot, Barshi. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in solapur, best pest control solapur maharashtra, professional pest control solapur, termite control solapur, cockroach control solapur, bed bug control solapur, pest control services solapur maharashtra, affordable pest control solapur, emergency pest control solapur, residential pest control solapur, commercial pest control solapur, pest control near me solapur, same day pest control solapur, eco friendly pest control solapur, licensed pest control solapur, guaranteed pest control solapur, 24/7 pest control solapur, pest exterminators solapur, pest management solapur, fumigation services solapur, anti termite treatment solapur, rodent control solapur, mosquito control solapur, lizard control solapur, spider control solapur, ant control solapur, fly control solapur, solapur city pest control, pandharpur pest control, akkalkot pest control, barshi pest control, maharashtra pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-solapur",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-solapur',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-solapur',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-solapur'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Solapur | Super Pest Control Services',
    description: 'Get the best pest control services in Solapur, Maharashtra with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-solapur',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-solapur-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Solapur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Solapur | Super Pest Control',
    description: 'Professional pest control services in Solapur, Maharashtra with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-solapur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Solapur, Maharashtra',
    'geo.position': '17.6799;75.3121',
    'ICBM': '17.6799, 75.3121',
  }
};

export default function PestControlInSolapurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
