import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Shivaji Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Shivaji Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near Camp, Koregaon Park, Kalyani Nagar, Sangamvadi. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in shivaji nagar, best pest control shivaji nagar pune, professional pest control shivaji nagar, termite control shivaji nagar, cockroach control shivaji nagar, bed bug control shivaji nagar, pest control services shivaji nagar pune, affordable pest control shivaji nagar, emergency pest control shivaji nagar, residential pest control shivaji nagar, commercial pest control shivaji nagar, pest control near me shivaji nagar, same day pest control shivaji nagar, eco friendly pest control shivaji nagar, licensed pest control shivaji nagar, guaranteed pest control shivaji nagar, 24/7 pest control shivaji nagar, pest exterminators shivaji nagar, pest management shivaji nagar, fumigation services shivaji nagar, anti termite treatment shivaji nagar, rodent control shivaji nagar, mosquito control shivaji nagar, lizard control shivaji nagar, spider control shivaji nagar, ant control shivaji nagar, fly control shivaji nagar, camp pest control, koregaon park pest control, kalyani nagar pest control, sangamvadi pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shivaji-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-shivaji-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-shivaji-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-shivaji-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Shivaji Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Shivaji Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-shivaji-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-shivaji-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Shivaji Nagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Shivaji Nagar | Super Pest Control',
    description: 'Professional pest control services in Shivaji Nagar, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-shivaji-nagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Shivaji Nagar, Pune',
    'geo.position': '18.5314;73.8447',
    'ICBM': '18.5314, 73.8447',
  }
};

export default function PestControlInShivajiNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
