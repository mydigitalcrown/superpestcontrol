import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Goregaon | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Professional Pest Control Services in Goregaon, Mumbai. Expert termite control, cockroach treatment, bed bug removal near Goregaon Station, Malad, Film City. 100% guaranteed results. Call ☎️ +91-9136036071 for immediate service.',
  keywords: 'pest control in goregaon, best pest control goregaon mumbai, professional pest control goregaon, termite control goregaon, cockroach control goregaon, bed bug control goregaon, pest control services goregaon mumbai, affordable pest control goregaon, emergency pest control goregaon, residential pest control goregaon, commercial pest control goregaon, pest control near me goregaon, same day pest control goregaon, eco friendly pest control goregaon, licensed pest control goregaon, guaranteed pest control goregaon, 24/7 pest control goregaon, pest exterminators goregaon, pest management goregaon, fumigation services goregaon, anti termite treatment goregaon, rodent control goregaon, mosquito control goregaon, lizard control goregaon, spider control goregaon, ant control goregaon, fly control goregaon, goregaon station pest control, malad pest control, film city pest control, mumbai west pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-goregaon"
  },
  openGraph: {
    title: 'Professional Pest Control in Goregaon | Super Pest Control Services',
    description: 'Get the best pest control services in Goregaon, Mumbai with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-goregaon',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-goregaon-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Goregaon'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Goregaon | Super Pest Control',
    description: 'Professional pest control services in Goregaon, Mumbai with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-goregaon-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Goregaon, Mumbai',
    'geo.position': '19.1663;72.8526',
    'ICBM': '19.1663, 72.8526',
  }
};

export default function PestControlInGoregaonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}