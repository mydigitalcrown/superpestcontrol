import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Virar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Virar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in virar, best pest control virar mumbai, professional pest control virar, termite control virar, cockroach control virar, bed bug control virar, pest control services virar mumbai, affordable pest control virar, emergency pest control virar, residential pest control virar, commercial pest control virar, pest control near me virar, same day pest control virar, eco friendly pest control virar, licensed pest control virar, guaranteed pest control virar, 24/7 pest control virar, pest exterminators virar, pest management virar, fumigation services virar, anti termite treatment virar, rodent control virar, mosquito control virar, lizard control virar, spider control virar, ant control virar, fly control virar, virar east pest control, virar west pest control, vasai pest control, nalasopara pest control, mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-virar",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-virar',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-virar',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-virar'
    }
  },
  openGraph: {
    title: 'Pest Control in Virar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Virar. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-virar',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-virar-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Virar'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Virar | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Virar. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-virar-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Virar, Mumbai',
    'geo.position': '19.4559;72.8081',
    'ICBM': '19.4559, 72.8081',
  }
};

export default function PestControlInVirarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
