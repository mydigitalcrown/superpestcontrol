import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Camp | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Camp. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control camp pune, pest control services camp, termite control camp, cockroach control camp",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-camp",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-camp',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-camp',
    }
  },
};

export default function PestControlInCampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
