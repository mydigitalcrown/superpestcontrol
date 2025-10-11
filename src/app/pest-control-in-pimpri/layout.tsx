import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Pimpri | 24/7 Service | Super Pest Control',
    absolute: "Pest Control in Pimpri | Professional Pest Management Services",
  },
  description: 'Get fast pest control in Pimpri. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control pimpri, termite control pimpri, pest control services pimpri pune",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pimpri",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pimpri',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pimpri',
    }
  },
};

export default function PestControlInPimpriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
