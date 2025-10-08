import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cockroach Control Mumbai | Professional Cockroach Extermination",
  },
  description: "Professional cockroach control in Mumbai. Eliminate German & American cockroaches with gel & spray treatment. 3-month warranty. Call +91 80979 41077",
  keywords: "cockroach control, cockroach pest control mumbai, cockroach treatment, german cockroach control",
  alternates: {
    canonical: "https://superpestcontrol.in/cockroach-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/cockroach-control',
      'en-IN': 'https://superpestcontrol.in/cockroach-control',
    }
  },
};

export default function CockroachControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
