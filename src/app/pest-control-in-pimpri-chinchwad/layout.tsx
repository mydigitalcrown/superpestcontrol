import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Pimpri Chinchwad | 24/7 Service | Super Pest Control',
    absolute: "Pest Control in Pimpri Chinchwad | Professional Services",
  },
  description: 'Get fast pest control in Pimpri Chinchwad. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control pimpri chinchwad, termite control pimpri chinchwad, pest control pcmc",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pimpri-chinchwad",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pimpri-chinchwad',
    }
  },
};

export default function PestControlInPimpriChinchwadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
