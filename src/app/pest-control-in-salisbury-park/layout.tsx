import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Salisbury Park | 24/7 Service | Super Pest Control',
    absolute: "Pest Control in Salisbury Park, Pune | Professional Services",
  },
  description: 'Get fast pest control in Salisbury Park. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control salisbury park pune, termite control salisbury park, pest control services salisbury park",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-salisbury-park",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-salisbury-park',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-salisbury-park',
    }
  },
};

export default function PestControlInSalisburyParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
