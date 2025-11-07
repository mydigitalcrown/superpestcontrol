import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Fatima Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Fatima Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near FC Road, JM Road, Prabhat Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in fatima nagar, best pest control fatima nagar pune, professional pest control fatima nagar, termite control fatima nagar, cockroach control fatima nagar, bed bug control fatima nagar, pest control services fatima nagar pune, affordable pest control fatima nagar, emergency pest control fatima nagar, residential pest control fatima nagar, commercial pest control fatima nagar, pest control near me fatima nagar, same day pest control fatima nagar, eco friendly pest control fatima nagar, licensed pest control fatima nagar, guaranteed pest control fatima nagar, 24/7 pest control fatima nagar, pest exterminators fatima nagar, pest management fatima nagar, fumigation services fatima nagar, anti termite treatment fatima nagar, rodent control fatima nagar, mosquito control fatima nagar, lizard control fatima nagar, spider control fatima nagar, ant control fatima nagar, fly control fatima nagar, fc road pest control, jm road pest control, prabhat road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-fatima-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-fatima-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-fatima-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-fatima-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Fatima Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Fatima Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-fatima-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-fatima-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Fatima Nagar'
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
