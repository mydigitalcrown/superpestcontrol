import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Vasai | #1 Professional Services Western Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Vasai, Western Mumbai. Expert termite control, cockroach treatment, bed bug removal near Vasai East, Vasai West, Nalasopara, Virar. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in vasai, best pest control vasai western mumbai, professional pest control vasai, termite control vasai, cockroach control vasai, bed bug control vasai, pest control services vasai mumbai, affordable pest control vasai, emergency pest control vasai, residential pest control vasai, commercial pest control vasai, pest control near me vasai, same day pest control vasai, eco friendly pest control vasai, licensed pest control vasai, guaranteed pest control vasai, 24/7 pest control vasai, pest exterminators vasai, pest management vasai, fumigation services vasai, anti termite treatment vasai, rodent control vasai, mosquito control vasai, lizard control vasai, spider control vasai, ant control vasai, fly control vasai, vasai east pest control, vasai west pest control, nalasopara pest control, virar pest control, western mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-vasai",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-vasai',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-vasai',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-vasai'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Vasai | Super Pest Control Services',
    description: 'Get the best pest control services in Vasai, Western Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-vasai',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-vasai-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Vasai'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Vasai | Super Pest Control',
    description: 'Professional pest control services in Vasai, Western Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-vasai-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Vasai, Western Mumbai',
    'geo.position': '19.4010;72.8302',
    'ICBM': '19.4010, 72.8302',
  }
};

export default function PestControlInVasaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
