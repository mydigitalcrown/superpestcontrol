import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Mahim | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Mahim, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Mahim Bay, Shivaji Park, Dadar West, King Circle. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in mahim, best pest control mahim mumbai, professional pest control mahim, termite control mahim, cockroach control mahim, bed bug control mahim, pest control services mahim mumbai, affordable pest control mahim, emergency pest control mahim, residential pest control mahim, commercial pest control mahim, pest control near me mahim, same day pest control mahim, eco friendly pest control mahim, licensed pest control mahim, guaranteed pest control mahim, 24/7 pest control mahim, pest exterminators mahim, pest management mahim, fumigation services mahim, anti termite treatment mahim, rodent control mahim, mosquito control mahim, lizard control mahim, spider control mahim, ant control mahim, fly control mahim, mahim bay pest control, shivaji park pest control, dadar west pest control, king circle pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-mahim",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-mahim',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-mahim',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-mahim'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Mahim | Super Pest Control Services',
    description: 'Get the best pest control services in Mahim, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-mahim',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-mahim-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Mahim'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Mahim | Super Pest Control',
    description: 'Professional pest control services in Mahim, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-mahim-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mahim, Mumbai',
    'geo.position': '19.0426;72.8398',
    'ICBM': '19.0426, 72.8398',
  }
};

export default function PestControlInMahimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
