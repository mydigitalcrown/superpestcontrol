import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Karve Nagar | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Karve Nagar, Pune. Expert termite control, cockroach treatment, bed bug removal near Deccan, Prabhat Road, FC Road. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in karve nagar, best pest control karve nagar pune, professional pest control karve nagar, termite control karve nagar, cockroach control karve nagar, bed bug control karve nagar, pest control services karve nagar pune, affordable pest control karve nagar, emergency pest control karve nagar, residential pest control karve nagar, commercial pest control karve nagar, pest control near me karve nagar, same day pest control karve nagar, eco friendly pest control karve nagar, licensed pest control karve nagar, guaranteed pest control karve nagar, 24/7 pest control karve nagar, pest exterminators karve nagar, pest management karve nagar, fumigation services karve nagar, anti termite treatment karve nagar, rodent control karve nagar, mosquito control karve nagar, lizard control karve nagar, spider control karve nagar, ant control karve nagar, fly control karve nagar, deccan pest control, prabhat road pest control, fc road pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-karve-nagar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-karve-nagar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-karve-nagar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-karve-nagar'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Karve Nagar | Super Pest Control Services',
    description: 'Get the best pest control services in Karve Nagar, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-karve-nagar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-karve-nagar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Karve Nagar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Viman Nagar | Super Pest Control',
    description: 'Professional pest control services in Viman Nagar, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-viman-nagar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Viman Nagar, Pune',
    'geo.position': '18.5679;73.9143',
    'ICBM': '18.5679, 73.9143',
  }
};

export default function PestControlInVimanNagarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
