import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kothrud | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Kothrud, Pune. Expert termite control, cockroach treatment, bed bug removal near Karve Road, Paud Road, Mayur Colony, Deepak Society. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in kothrud, best pest control kothrud pune, professional pest control kothrud, termite control kothrud, cockroach control kothrud, bed bug control kothrud, pest control services kothrud pune, affordable pest control kothrud, emergency pest control kothrud, residential pest control kothrud, commercial pest control kothrud, pest control near me kothrud, same day pest control kothrud, eco friendly pest control kothrud, licensed pest control kothrud, guaranteed pest control kothrud, 24/7 pest control kothrud, pest exterminators kothrud, pest management kothrud, fumigation services kothrud, anti termite treatment kothrud, rodent control kothrud, mosquito control kothrud, lizard control kothrud, spider control kothrud, ant control kothrud, fly control kothrud, karve road pest control, paud road pest control, mayur colony pest control, deepak society pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kothrud",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-kothrud',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-kothrud',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-kothrud'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Kothrud | Super Pest Control Services',
    description: 'Get the best pest control services in Kothrud, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kothrud',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kothrud-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kothrud'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kothrud | Super Pest Control',
    description: 'Professional pest control services in Kothrud, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kothrud-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kothrud, Pune',
    'geo.position': '18.5074;73.8077',
    'ICBM': '18.5074, 73.8077',
  }
};

export default function PestControlInKothrudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
