import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Fort | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Fort, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Ballard Estate, CST, Horniman Circle. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in fort, best pest control fort mumbai, professional pest control fort, termite control fort, cockroach control fort, bed bug control fort, pest control services fort mumbai, affordable pest control fort, emergency pest control fort, residential pest control fort, commercial pest control fort, pest control near me fort, same day pest control fort, eco friendly pest control fort, licensed pest control fort, guaranteed pest control fort, 24/7 pest control fort, pest exterminators fort, pest management fort, fumigation services fort, anti termite treatment fort, rodent control fort, mosquito control fort, lizard control fort, spider control fort, ant control fort, fly control fort, ballard estate pest control, cst pest control, horniman circle pest control, kala ghoda pest control, south mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-fort",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-fort',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-fort',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-fort'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Fort | Super Pest Control Services',
    description: 'Get the best pest control services in Fort, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-fort',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-fort-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Fort'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Fort | Super Pest Control',
    description: 'Professional pest control services in Fort, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-fort-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Fort, Mumbai',
    'geo.position': '18.9322;72.8347',
    'ICBM': '18.9322, 72.8347',
  }
};

export default function PestControlInFortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}