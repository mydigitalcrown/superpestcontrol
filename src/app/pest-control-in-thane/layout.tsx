import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Thane | #1 Professional Services Thane City | Super Pest Control',
  description: 'Professional Pest Control Services in Thane, Maharashtra. Expert termite control, cockroach treatment, bed bug removal near Thane West, Thane East, Wagle Estate, Hiranandani Estate. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in thane, best pest control thane city, professional pest control thane, termite control thane, cockroach control thane, bed bug control thane, pest control services thane maharashtra, affordable pest control thane, emergency pest control thane, residential pest control thane, commercial pest control thane, pest control near me thane, same day pest control thane, eco friendly pest control thane, licensed pest control thane, guaranteed pest control thane, 24/7 pest control thane, pest exterminators thane, pest management thane, fumigation services thane, anti termite treatment thane, rodent control thane, mosquito control thane, lizard control thane, spider control thane, ant control thane, fly control thane, thane west pest control, thane east pest control, wagle estate pest control, hiranandani estate pest control, thane city pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-thane",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-thane',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-thane',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-thane'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Thane | Super Pest Control Services',
    description: 'Get the best pest control services in Thane, Maharashtra with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-thane',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-thane-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Thane'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Thane | Super Pest Control',
    description: 'Professional pest control services in Thane, Maharashtra with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-thane-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Thane, Maharashtra',
    'geo.position': '19.2183;73.0177',
    'ICBM': '19.2183, 73.0177',
  }
};

export default function PestControlInThaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
