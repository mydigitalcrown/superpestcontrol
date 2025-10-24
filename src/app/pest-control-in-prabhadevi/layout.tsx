import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Prabhadevi | 24/7 Service | Super Pest Control',
    absolute: "Pest Control in Prabhadevi, Mumbai | Professional Services",
  },
  description: 'Get fast pest control in Prabhadevi. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control prabhadevi mumbai, termite control prabhadevi, pest control services prabhadevi",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-prabhadevi",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-prabhadevi',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-prabhadevi',
    }
  },
};

export default function PestControlInPrabhadeviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
