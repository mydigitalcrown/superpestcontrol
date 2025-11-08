import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Manor | #1 Professional Services Thane | Super Pest Control',
  description: 'Professional Pest Control Services in Manor, Thane. Expert termite control, cockroach treatment, bed bug removal near Wada, Bhiwandi, Kalyan, Vasai. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in manor, best pest control manor thane, professional pest control manor, termite control manor, cockroach control manor, bed bug control manor, pest control services manor thane, affordable pest control manor, emergency pest control manor, residential pest control manor, commercial pest control manor, pest control near me manor, same day pest control manor, eco friendly pest control manor, licensed pest control manor, guaranteed pest control manor, 24/7 pest control manor, pest exterminators manor, pest management manor, fumigation services manor, anti termite treatment manor, rodent control manor, mosquito control manor, lizard control manor, spider control manor, ant control manor, fly control manor, wada pest control, bhiwandi pest control, kalyan pest control, vasai pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-manor",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-manor',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-manor',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-manor'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Manor | Super Pest Control Services',
    description: 'Get the best pest control services in Manor, Thane with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-manor',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-manor-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Manor'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Manor | Super Pest Control',
    description: 'Professional pest control services in Manor, Thane with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-manor-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Manor, Thane',
    'geo.position': '19.7645;73.0176',
    'ICBM': '19.7645, 73.0176',
  }
};

export default function PestControlInManorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
