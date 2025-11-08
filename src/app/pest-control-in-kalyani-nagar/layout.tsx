import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kalyani Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Kalyani Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near Yerawada, Koregaon Park, Viman Nagar, Nagar Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in kalyani nagar, best pest control kalyani nagar pune, professional pest control kalyani nagar, termite control kalyani nagar, cockroach control kalyani nagar, bed bug control kalyani nagar, pest control services kalyani nagar pune, affordable pest control kalyani nagar, emergency pest control kalyani nagar, residential pest control kalyani nagar, commercial pest control kalyani nagar, pest control near me kalyani nagar, same day pest control kalyani nagar, eco friendly pest control kalyani nagar, licensed pest control kalyani nagar, guaranteed pest control kalyani nagar, 24/7 pest control kalyani nagar, pest exterminators kalyani nagar, pest management kalyani nagar, fumigation services kalyani nagar, anti termite treatment kalyani nagar, rodent control kalyani nagar, mosquito control kalyani nagar, lizard control kalyani nagar, spider control kalyani nagar, ant control kalyani nagar, fly control kalyani nagar, yerawada pest control, koregaon park pest control, viman nagar pest control, nagar road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalyani-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kalyani-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kalyani-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kalyani-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kalyani Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Kalyani Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kalyani-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kalyani-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kalyani Nagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kalyani Nagar | Super Pest Control',
    description: 'Professional pest control services in Kalyani Nagar, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kalyani-nagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kalyani Nagar, Pune',
    'geo.position': '18.5392;73.9079',
    'ICBM': '18.5392, 73.9079',
  }
};

export default function PestControlInKalyaniNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
