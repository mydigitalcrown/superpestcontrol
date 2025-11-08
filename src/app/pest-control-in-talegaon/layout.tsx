import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Talegaon | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Talegaon, Pune. Expert termite control, cockroach treatment, bed bug removal near Chakan, Dehu Road, Alandi, Bhosari. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in talegaon, best pest control talegaon pune, professional pest control talegaon, termite control talegaon, cockroach control talegaon, bed bug control talegaon, pest control services talegaon pune, affordable pest control talegaon, emergency pest control talegaon, residential pest control talegaon, commercial pest control talegaon, pest control near me talegaon, same day pest control talegaon, eco friendly pest control talegaon, licensed pest control talegaon, guaranteed pest control talegaon, 24/7 pest control talegaon, pest exterminators talegaon, pest management talegaon, fumigation services talegaon, anti termite treatment talegaon, rodent control talegaon, mosquito control talegaon, lizard control talegaon, spider control talegaon, ant control talegaon, fly control talegaon, chakan pest control, dehu road pest control, alandi pest control, bhosari pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-talegaon",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-talegaon',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-talegaon',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-talegaon'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Talegaon | Super Pest Control Services',
    description: 'Get the best pest control services in Talegaon, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-talegaon',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-talegaon-banner.jpg',
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
    images: ['https://superpestcontrol.in/images/pest-control-talegaon-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Talegaon, Pune',
    'geo.position': '18.7351;73.6758',
    'ICBM': '18.7351, 73.6758',
  }
};

export default function PestControlInTalegaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
