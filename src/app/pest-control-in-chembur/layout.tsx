import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Chembur | #1 Professional Services Near Me | Super Pest Control',
  description: 'Professional Pest Control Services in Chembur, Mumbai. Expert termite control, cockroach treatment, bed bug removal. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in chembur, best pest control chembur, professional pest control chembur, termite control chembur, cockroach control chembur, bed bug control chembur, pest control services chembur mumbai, affordable pest control chembur, emergency pest control chembur, residential pest control chembur, commercial pest control chembur, pest control near me chembur, same day pest control chembur, eco friendly pest control chembur, licensed pest control chembur, guaranteed pest control chembur, 24/7 pest control chembur, pest exterminators chembur, pest management chembur, fumigation services chembur, anti termite treatment chembur, rodent control chembur, mosquito control chembur, lizard control chembur, spider control chembur, ant control chembur, fly control chembur, chembur east pest control, chembur west pest control, eastern mumbai pest control',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-chembur"
  },
  openGraph: {
    title: 'Professional Pest Control in Chembur | Super Pest Control Services',
    description: 'Get the best pest control services in Chembur with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-chembur',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/images/pest-control-chembur-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Chembur'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Chembur | Super Pest Control',
    description: 'Professional pest control services in Chembur with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/images/pest-control-chembur-twitter.jpg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Chembur, Mumbai',
    'geo.position': '19.0626;72.8970',
    'ICBM': '19.0626, 72.8970',
  }
};

export default function PestControlInChemburLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
