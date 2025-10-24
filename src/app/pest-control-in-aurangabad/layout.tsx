import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Aurangabad | #1 Professional Services Near Me | Super Pest Control',
  description: 'Professional Pest Control Services in Aurangabad, Maharashtra. Expert termite control, cockroach treatment, bed bug removal. 100% guaranteed results. Call ☎️ +91-8097941077 for immediate service.',
  keywords: 'pest control in aurangabad, best pest control aurangabad, professional pest control aurangabad, termite control aurangabad, cockroach control aurangabad, bed bug control aurangabad, pest control services aurangabad maharashtra, affordable pest control aurangabad, emergency pest control aurangabad, residential pest control aurangabad, commercial pest control aurangabad, pest control near me aurangabad, same day pest control aurangabad, eco friendly pest control aurangabad, licensed pest control aurangabad, guaranteed pest control aurangabad, 24/7 pest control aurangabad, pest exterminators aurangabad, pest management aurangabad, fumigation services aurangabad, anti termite treatment aurangabad, rodent control aurangabad, mosquito control aurangabad, lizard control aurangabad, spider control aurangabad, ant control aurangabad, fly control aurangabad',
  authors: [{ name: 'Super Pest Control' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1.0',
  generator: 'Super Pest Control SEO System',
  applicationName: 'Super Pest Control',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  creator: 'Super Pest Control Maharashtra',
  publisher: 'Super Pest Control',
  category: 'Pest Control Services',
  classification: 'Business',
  openGraph: {
    title: 'Professional Pest Control in Aurangabad | Super Pest Control Services',
    description: 'Get the best pest control services in Aurangabad with 100% guaranteed results. Expert treatment for all pests including termites, cockroaches, bed bugs, and more.',
    url: 'https://superpestcontrol.in/pest-control-in-aurangabad',
    siteName: 'Super Pest Control',
    images: [
      {
        url: 'https://superpestcontrol.in/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Professional Pest Control Services in Aurangabad'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pest Control in Aurangabad | Super Pest Control',
    description: 'Professional pest control services in Aurangabad with guaranteed results. Call now for expert treatment!',
    images: ['https://superpestcontrol.in/logo.svg'],
    creator: '@superpestcontrol',
    site: '@superpestcontrol'
  },
  alternates: {
    canonical: 'https://superpestcontrol.in/pest-control-in-aurangabad',
    languages: {
      'en-IN': 'https://superpestcontrol.in/pest-control-in-aurangabad',
      'hi-IN': 'https://superpestcontrol.in/hi/pest-control-in-aurangabad',
      'mr-IN': 'https://superpestcontrol.in/mr/pest-control-in-aurangabad'
    }
  },
  verification: {
    google: 'google857220722364cb08',
    other: {
      me: ['https://superpestcontrol.in', 'mailto:info@superpestcontrol.in']
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Aurangabad, Maharashtra',
    'geo.position': '19.8762;75.3433',
    'ICBM': '19.8762, 75.3433',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=yes',
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff'
  }
};

export default function PestControlInAurangabadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
