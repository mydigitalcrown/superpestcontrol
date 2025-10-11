import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Viman Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Viman Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near Kharadi, Kalyani Nagar, Nagar Road, Airport Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in viman nagar, best pest control viman nagar pune, professional pest control viman nagar, termite control viman nagar, cockroach control viman nagar, bed bug control viman nagar, pest control services viman nagar pune, affordable pest control viman nagar, emergency pest control viman nagar, residential pest control viman nagar, commercial pest control viman nagar, pest control near me viman nagar, same day pest control viman nagar, eco friendly pest control viman nagar, licensed pest control viman nagar, guaranteed pest control viman nagar, 24/7 pest control viman nagar, pest exterminators viman nagar, pest management viman nagar, fumigation services viman nagar, anti termite treatment viman nagar, rodent control viman nagar, mosquito control viman nagar, lizard control viman nagar, spider control viman nagar, ant control viman nagar, fly control viman nagar, kharadi pest control, kalyani nagar pest control, nagar road pest control, airport road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-viman-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-viman-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-viman-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-viman-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Viman Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Viman Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-viman-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-viman-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Viman Nagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Viman Nagar | Super Pest Control',
    description: 'Professional pest control services in Viman Nagar, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-viman-nagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Viman Nagar, Pune',
    'geo.position': '18.5679;73.9143',
    'ICBM': '18.5679, 73.9143',
  }
};

export default function PestControlInVimanNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
