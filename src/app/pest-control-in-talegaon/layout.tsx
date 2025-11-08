import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Talegaon | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Talegaon, Pune. Expert termite control, cockroach treatment, bed bug removal near Karve Road, Paud Road, Mayur Colony, Deepak Society. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in Talegaon, best pest control Talegaon pune, professional pest control Talegaon, termite control Talegaon, cockroach control Talegaon, bed bug control Talegaon, pest control services Talegaon pune, affordable pest control Talegaon, emergency pest control Talegaon, residential pest control Talegaon, commercial pest control Talegaon, pest control near me Talegaon, same day pest control Talegaon, eco friendly pest control Talegaon, licensed pest control Talegaon, guaranteed pest control Talegaon, 24/7 pest control Talegaon, pest exterminators Talegaon, pest management Talegaon, fumigation services Talegaon, anti termite treatment Talegaon, rodent control Talegaon, mosquito control Talegaon, lizard control Talegaon, spider control Talegaon, ant control Talegaon, fly control Talegaon, karve road pest control, paud road pest control, mayur colony pest control, deepak society pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-Talegaon",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-Talegaon',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-Talegaon',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-Talegaon'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Talegaon | Super Pest Control Services',
    description: 'Get the best pest control services in Talegaon, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-Talegaon',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-Talegaon-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Talegaon'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Talegaon | Super Pest Control',
    description: 'Professional pest control services in Talegaon, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-Talegaon-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Talegaon, Pune',
    'geo.position': '18.5074;73.8077',
    'ICBM': '18.5074, 73.8077',
  }
};

export default function PestControlInTalegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
