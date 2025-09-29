import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Turbhe | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Turbhe, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal near Turbhe MIDC, Kopar Khairane, Vashi, Sanpada, Airoli. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in turbhe, best pest control turbhe navi mumbai, professional pest control turbhe, termite control turbhe, cockroach control turbhe, bed bug control turbhe, pest control services turbhe navi mumbai, affordable pest control turbhe, emergency pest control turbhe, residential pest control turbhe, commercial pest control turbhe, pest control near me turbhe, same day pest control turbhe, eco friendly pest control turbhe, licensed pest control turbhe, guaranteed pest control turbhe, 24/7 pest control turbhe, pest exterminators turbhe, pest management turbhe, fumigation services turbhe, anti termite treatment turbhe, rodent control turbhe, mosquito control turbhe, lizard control turbhe, spider control turbhe, ant control turbhe, fly control turbhe, turbhe midc pest control, kopar khairane pest control, vashi pest control, sanpada pest control, airoli pest control, navi mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-turbhe",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-turbhe',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-turbhe',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-turbhe'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Turbhe | Super Pest Control Services',
    description: 'Get the best pest control services in Turbhe, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-turbhe',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-turbhe-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Turbhe'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Turbhe | Super Pest Control',
    description: 'Professional pest control services in Turbhe, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-turbhe-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Turbhe, Navi Mumbai',
    'geo.position': '19.0688;73.0183',
    'ICBM': '19.0688, 73.0183',
  }
};

export default function PestControlInTurbheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}