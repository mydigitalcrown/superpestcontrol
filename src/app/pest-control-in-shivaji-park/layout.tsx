import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Shivaji Park | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Shivaji Park, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Dadar, Mahim, Prabhadevi, Worli. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in shivaji park, best pest control shivaji park mumbai, professional pest control shivaji park, termite control shivaji park, cockroach control shivaji park, bed bug control shivaji park, pest control services shivaji park mumbai, affordable pest control shivaji park, emergency pest control shivaji park, residential pest control shivaji park, commercial pest control shivaji park, pest control near me shivaji park, same day pest control shivaji park, eco friendly pest control shivaji park, licensed pest control shivaji park, guaranteed pest control shivaji park, 24/7 pest control shivaji park, pest exterminators shivaji park, pest management shivaji park, fumigation services shivaji park, anti termite treatment shivaji park, rodent control shivaji park, mosquito control shivaji park, lizard control shivaji park, spider control shivaji park, ant control shivaji park, fly control shivaji park, dadar pest control, mahim pest control, prabhadevi pest control, worli pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-shivaji-park",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-shivaji-park',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-shivaji-park',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-shivaji-park'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Shivaji Park | Super Pest Control Services',
    description: 'Get the best pest control services in Shivaji Park, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-shivaji-park',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-shivaji-park-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Shivaji Park'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Shivaji Park | Super Pest Control',
    description: 'Professional pest control services in Shivaji Park, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-shivaji-park-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Shivaji Park, Mumbai',
    'geo.position': '19.0330;72.8397',
    'ICBM': '19.0330, 72.8397',
  }
};

export default function PestControlInShivajiParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
