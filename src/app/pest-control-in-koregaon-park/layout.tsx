import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Koregaon Park | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Koregaon Park, Pune. Expert termite control, cockroach treatment, bed bug removal near Camp, MG Road, JM Road, FC Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in koregaon park, best pest control koregaon park pune, professional pest control koregaon park, termite control koregaon park, cockroach control koregaon park, bed bug control koregaon park, pest control services koregaon park pune, affordable pest control koregaon park, emergency pest control koregaon park, residential pest control koregaon park, commercial pest control koregaon park, pest control near me koregaon park, same day pest control koregaon park, eco friendly pest control koregaon park, licensed pest control koregaon park, guaranteed pest control koregaon park, 24/7 pest control koregaon park, pest exterminators koregaon park, pest management koregaon park, fumigation services koregaon park, anti termite treatment koregaon park, rodent control koregaon park, mosquito control koregaon park, lizard control koregaon park, spider control koregaon park, ant control koregaon park, fly control koregaon park, camp pest control, mg road pest control, jm road pest control, fc road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-koregaon-park",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-koregaon-park',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-koregaon-park',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-koregaon-park'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Koregaon Park | Super Pest Control Services',
    description: 'Get the best pest control services in Koregaon Park, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-koregaon-park',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-koregaon-park-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Koregaon Park'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Koregaon Park | Super Pest Control',
    description: 'Professional pest control services in Koregaon Park, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-koregaon-park-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Koregaon Park, Pune',
    'geo.position': '18.5362;73.8847',
    'ICBM': '18.5362, 73.8847',
  }
};

export default function PestControlInKoregaonParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
