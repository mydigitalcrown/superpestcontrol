import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Bavdhan | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Bavdhan, Pune. Expert termite control, cockroach treatment, bed bug removal with 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in bavdhan, best pest control bavdhan pune, professional pest control bavdhan, termite control bavdhan, cockroach control bavdhan, bed bug control bavdhan, pest control services bavdhan pune, affordable pest control bavdhan, emergency pest control bavdhan, residential pest control bavdhan, commercial pest control bavdhan, pest control near me bavdhan, same day pest control bavdhan, eco friendly pest control bavdhan, licensed pest control bavdhan, guaranteed pest control bavdhan, 24/7 pest control bavdhan, pest exterminators bavdhan, pest management bavdhan, fumigation services bavdhan, anti termite treatment bavdhan, rodent control bavdhan, mosquito control bavdhan, lizard control bavdhan, spider control bavdhan, ant control bavdhan, fly control bavdhan',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bavdhan"
  },
  openGraph: {
    title: 'Professional Pest Control in Bavdhan | Super Pest Control Services',
    description: 'Get the best pest control services in Bavdhan, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-bavdhan',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/location/mumbai.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Bavdhan'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Bavdhan | Super Pest Control',
    description: 'Professional pest control services in Bavdhan, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/location/mumbai.webp'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Bavdhan, Pune',
    'geo.position': '18.5074;73.7898',
    'ICBM': '18.5074, 73.7898',
  }
};

export default function PestControlInBavdhanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}