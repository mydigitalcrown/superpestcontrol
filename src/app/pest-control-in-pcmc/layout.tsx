import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in PCMC | 24/7 Service | Super Pest Control',
    absolute: "Pest Control in PCMC | Pimpri Chinchwad Pest Management",
  },
  description: 'Get fast pest control in PCMC. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: "pest control pcmc, pest control pimpri chinchwad, termite control pcmc, pest control services pcmc",
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-pcmc",
    languages: {
      'x-default': 'https://superpestcontrol.in/pest-control-in-pcmc',
      'en-IN': 'https://superpestcontrol.in/pest-control-in-pcmc',
    }
  },
};

export default function PestControlInPCMCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
