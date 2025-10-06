import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Dharavi | Professional Services | Super Pest Control',
  description: 'Professional Pest Control Services in Dharavi, Mumbai. Expert termite control, cockroach treatment, bed bug removal. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in dharavi, best pest control dharavi, professional pest control dharavi, termite control dharavi, cockroach control dharavi, bed bug control dharavi, pest control services dharavi mumbai, affordable pest control dharavi, emergency pest control dharavi, residential pest control dharavi, commercial pest control dharavi, pest control near me dharavi, same day pest control dharavi, eco friendly pest control dharavi, licensed pest control dharavi, guaranteed pest control dharavi, 24/7 pest control dharavi, pest exterminators dharavi, pest management dharavi, fumigation services dharavi, anti termite treatment dharavi, rodent control dharavi, mosquito control dharavi, lizard control dharavi, spider control dharavi, ant control dharavi, fly control dharavi, mahim pest control, dadar pest control, central mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dharavi"
  },
  openGraph: {
    title: 'Professional Pest Control in Dharavi | Super Pest Control Services',
    description: 'Get the best pest control services in Dharavi with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-dharavi',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-dharavi-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Dharavi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Dharavi | Super Pest Control',
    description: 'Professional pest control services in Dharavi with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-dharavi-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Dharavi, Mumbai',
    'geo.position': '19.0422;72.8570',
    'ICBM': '19.0422, 72.8570',
  }
};

export default function PestControlInDharaviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}