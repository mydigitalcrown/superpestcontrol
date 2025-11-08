import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Wakad | #1 Professional Services Pune | Super Pest Control',
  description: 'Professional Pest Control Services in Wakad, Pune. Expert termite control, cockroach treatment, bed bug removal near Hinjewadi, Baner, Bavdhan, Aundh. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in wakad, best pest control wakad pune, professional pest control wakad, termite control wakad, cockroach control wakad, bed bug control wakad, pest control services wakad pune, affordable pest control wakad, emergency pest control wakad, residential pest control wakad, commercial pest control wakad, pest control near me wakad, same day pest control wakad, eco friendly pest control wakad, licensed pest control wakad, guaranteed pest control wakad, 24/7 pest control wakad, pest exterminators wakad, pest management wakad, fumigation services wakad, anti termite treatment wakad, rodent control wakad, mosquito control wakad, lizard control wakad, spider control wakad, ant control wakad, fly control wakad, hinjewadi pest control, baner pest control, bavdhan pest control, aundh pest control, pune pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-wakad",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-wakad',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-wakad',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-wakad'
    }
  },
  openGraph: {
    title: 'Professional Pest Control in Wakad | Super Pest Control Services',
    description: 'Get the best pest control services in Wakad, Pune with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-wakad',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-wakad-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Wakad'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Wakad | Super Pest Control',
    description: 'Professional pest control services in Wakad, Pune with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-wakad-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Wakad, Pune',
    'geo.position': '18.5974;73.7898',
    'ICBM': '18.5974, 73.7898',
  }
};

export default function PestControlInWakadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
