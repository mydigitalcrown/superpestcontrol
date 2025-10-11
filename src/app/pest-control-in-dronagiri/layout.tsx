import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Dronagiri | #1 Professional Services Navi Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Dronagiri, Navi Mumbai. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in dronagiri, best pest control dronagiri navi mumbai, professional pest control dronagiri, termite control dronagiri, cockroach control dronagiri, bed bug control dronagiri, pest control services dronagiri navi mumbai, affordable pest control dronagiri, emergency pest control dronagiri, residential pest control dronagiri, commercial pest control dronagiri, pest control near me dronagiri, same day pest control dronagiri, eco friendly pest control dronagiri, licensed pest control dronagiri, guaranteed pest control dronagiri, 24/7 pest control dronagiri, pest exterminators dronagiri, pest management dronagiri, fumigation services dronagiri, anti termite treatment dronagiri, rodent control dronagiri, mosquito control dronagiri, lizard control dronagiri, spider control dronagiri, ant control dronagiri, fly control dronagiri, ulwe pest control, kharghar pest control, panvel pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dronagiri"
  },
  openGraph: {
    title: 'Professional Pest Control in Dronagiri | Super Pest Control Services',
    description: 'Get the best pest control services in Dronagiri, Navi Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-dronagiri',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/location/mumbai.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Dronagiri'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Dronagiri | Super Pest Control',
    description: 'Professional pest control services in Dronagiri, Navi Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/location/mumbai.webp'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Dronagiri, Navi Mumbai',
    'geo.position': '18.9537;72.9945',
    'ICBM': '18.9537, 72.9945',
  }
};

export default function PestControlInDronagiriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
