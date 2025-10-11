import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Kalyan | #1 Professional Services Thane | Super Pest Control',
  description: 'Professional Pest Control Services in Kalyan, Thane. Expert termite control, cockroach treatment, bed bug removal near Dombivli, Kalyan East, Kalyan West, Ulhasnagar, Badlapur. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in kalyan, best pest control kalyan thane, professional pest control kalyan, termite control kalyan, cockroach control kalyan, bed bug control kalyan, pest control services kalyan thane, affordable pest control kalyan, emergency pest control kalyan, residential pest control kalyan, commercial pest control kalyan, pest control near me kalyan, same day pest control kalyan, eco friendly pest control kalyan, licensed pest control kalyan, guaranteed pest control kalyan, 24/7 pest control kalyan, pest exterminators kalyan, pest management kalyan, fumigation services kalyan, anti termite treatment kalyan, rodent control kalyan, mosquito control kalyan, lizard control kalyan, spider control kalyan, ant control kalyan, fly control kalyan, dombivli pest control, kalyan east pest control, kalyan west pest control, ulhasnagar pest control, badlapur pest control, thane pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-kalyan"
  },
  openGraph: {
    title: 'Professional Pest Control in Kalyan | Super Pest Control Services',
    description: 'Get the best pest control services in Kalyan, Thane with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-kalyan',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-kalyan-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Kalyan'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Kalyan | Super Pest Control',
    description: 'Professional pest control services in Kalyan, Thane with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-kalyan-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Kalyan, Thane',
    'geo.position': '19.0430;73.1301',
    'ICBM': '19.0430, 73.1301',
  }
};

export default function PestControlInKalyanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
