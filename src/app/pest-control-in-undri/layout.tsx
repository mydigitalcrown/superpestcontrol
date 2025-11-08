import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Undri | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Undri, Pune. Expert termite control, cockroach treatment, bed bug removal near Pisoli, Manjri, NIBM, Kondhwa. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in undri, best pest control undri pune, professional pest control undri, termite control undri, cockroach control undri, bed bug control undri, pest control services undri pune, affordable pest control undri, emergency pest control undri, residential pest control undri, commercial pest control undri, pest control near me undri, same day pest control undri, eco friendly pest control undri, licensed pest control undri, guaranteed pest control undri, 24/7 pest control undri, pest exterminators undri, pest management undri, fumigation services undri, anti termite treatment undri, rodent control undri, mosquito control undri, lizard control undri, spider control undri, ant control undri, fly control undri, pisoli pest control, manjri pest control, nibm pest control, kondhwa pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-undri",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-undri',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-undri',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-undri'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Undri | Super Pest Control Services',
    description: 'Get the best pest control services in Undri, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-undri',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-undri-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Undri'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Undri | Super Pest Control',
    description: 'Professional pest control services in Undri, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-undri-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Undri, Pune',
    'geo.position': '18.4574;73.9057',
    'ICBM': '18.4574, 73.9057',
  }
};

export default function PestControlInUndriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
