import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Yerawada | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Yerawada, Pune. Expert termite control, cockroach treatment, bed bug removal near Kalyani Nagar, Koregaon Park, Nagar Road, Mundhwa. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in yerawada, best pest control yerawada pune, professional pest control yerawada, termite control yerawada, cockroach control yerawada, bed bug control yerawada, pest control services yerawada pune, affordable pest control yerawada, emergency pest control yerawada, residential pest control yerawada, commercial pest control yerawada, pest control near me yerawada, same day pest control yerawada, eco friendly pest control yerawada, licensed pest control yerawada, guaranteed pest control yerawada, 24/7 pest control yerawada, pest exterminators yerawada, pest management yerawada, fumigation services yerawada, anti termite treatment yerawada, rodent control yerawada, mosquito control yerawada, lizard control yerawada, spider control yerawada, ant control yerawada, fly control yerawada, kalyani nagar pest control, koregaon park pest control, nagar road pest control, mundhwa pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-yerawada",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-yerawada',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-yerawada',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-yerawada'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Yerawada | Super Pest Control Services',
    description: 'Get the best pest control services in Yerawada, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-yerawada',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-yerawada-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Yerawada'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Yerawada | Super Pest Control',
    description: 'Professional pest control services in Yerawada, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-yerawada-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Yerawada, Pune',
    'geo.position': '18.5626;73.8087',
    'ICBM': '18.5626, 73.8087',
  }
};

export default function PestControlInYerawadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
