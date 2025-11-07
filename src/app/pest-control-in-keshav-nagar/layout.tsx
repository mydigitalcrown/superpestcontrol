import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Keshav Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Keshav Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near Mundhwa, Kharadi, Phoenix Mall. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in keshav nagar, best pest control keshav nagar pune, professional pest control keshav nagar, termite control keshav nagar, cockroach control keshav nagar, bed bug control keshav nagar, pest control services keshav nagar pune, affordable pest control keshav nagar, emergency pest control keshav nagar, residential pest control keshav nagar, commercial pest control keshav nagar, pest control near me keshav nagar, same day pest control keshav nagar, eco friendly pest control keshav nagar, licensed pest control keshav nagar, guaranteed pest control keshav nagar, 24/7 pest control keshav nagar, pest exterminators keshav nagar, pest management keshav nagar, fumigation services keshav nagar, anti termite treatment keshav nagar, rodent control keshav nagar, mosquito control keshav nagar, lizard control keshav nagar, spider control keshav nagar, ant control keshav nagar, fly control keshav nagar, mundhwa pest control, kharadi pest control, phoenix mall pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-keshav-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-keshav-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-keshav-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-keshav-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Keshav Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Keshav Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-keshav-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-keshav-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Keshav Nagar'
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
