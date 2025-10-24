import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Palghar | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Palghar. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control palghar, pest control services palghar, termite control palghar, cockroach control palghar",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-palghar",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-palghar',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-palghar',
    }
  },
};

export default function PestControlInPalgharLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
