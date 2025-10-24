import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Dahanu | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Dahanu. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control dahanu, pest control services dahanu, termite control dahanu, pest control palghar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dahanu",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-dahanu',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-dahanu',
    }
  },
};

export default function PestControlInDahanuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
