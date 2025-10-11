import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Worli | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Worli. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in worli, best pest control worli mumbai, professional pest control worli, termite control worli, cockroach control worli, bed bug control worli, pest control services worli mumbai, affordable pest control worli, emergency pest control worli, residential pest control worli, commercial pest control worli, pest control near me worli, same day pest control worli, eco friendly pest control worli, licensed pest control worli, guaranteed pest control worli, 24/7 pest control worli, pest exterminators worli, pest management worli, fumigation services worli, anti termite treatment worli, rodent control worli, mosquito control worli, lizard control worli, spider control worli, ant control worli, fly control worli, lower parel pest control, prabhadevi pest control, mahalaxmi pest control, dadar pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-worli",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-worli',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-worli',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-worli'
    }
  },
  openGraph: {
    title: 'Pest Control in Worli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Worli. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-worli',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-worli-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Worli'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Worli | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Worli. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-worli-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Worli, Mumbai',
    'geo.position': '19.0176;72.8125',
    'ICBM': '19.0176, 72.8125',
  }
};

export default function PestControlInWorliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
