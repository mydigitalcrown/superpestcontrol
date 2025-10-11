import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Navi Mumbai | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Navi Mumbai. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control in navi mumbai, best pest control navi mumbai, professional pest control navi mumbai, termite control navi mumbai, cockroach control navi mumbai, bed bug control navi mumbai, pest control services navi mumbai, affordable pest control navi mumbai, emergency pest control navi mumbai, residential pest control navi mumbai, commercial pest control navi mumbai, pest control near me navi mumbai, same day pest control navi mumbai, eco friendly pest control navi mumbai, licensed pest control navi mumbai, guaranteed pest control navi mumbai, 24/7 pest control navi mumbai, pest exterminators navi mumbai, pest management navi mumbai, fumigation services navi mumbai, anti termite treatment navi mumbai, rodent control navi mumbai, mosquito control navi mumbai, lizard control navi mumbai, spider control navi mumbai, ant control navi mumbai, fly control navi mumbai, vashi pest control, belapur pest control, kharghar pest control, panvel pest control, maharashtra pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-navi-mumbai",
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-navi-mumbai',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-navi-mumbai',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-navi-mumbai'
    }
  },
  openGraph: {
    title: 'Pest Control in Navi Mumbai | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Navi Mumbai. 100% guaranteed results. Call 8097941077 for same-day service!',
    url: 'https://superpestcontrol.in/pest-control-in-navi-mumbai',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-navi-mumbai-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Navi Mumbai'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control in Navi Mumbai | 24/7 Service | Super Pest Control',
    description: 'Get fast pest control in Navi Mumbai. 100% guaranteed results. Call 8097941077 for same-day service!',
    images: ['https://superpestcontrol.in/images/pest-control-navi-mumbai-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Navi Mumbai, Maharashtra',
    'geo.position': '19.0330;73.0297',
    'ICBM': '19.0330, 73.0297',
  }
};

export default function PestControlInNaviMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
