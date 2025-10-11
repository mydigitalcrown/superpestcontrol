import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cockroach Control in Mumbai | German Cockroach Extermination Services",
  },
  description: "Professional cockroach control in Mumbai. Eliminate German cockroaches & American cockroaches with gel treatment & spray. 3-month warranty. Call +91 80979 41077",
  keywords: "cockroach control mumbai, cockroach pest control, german cockroach treatment, cockroach exterminator mumbai, cockroach gel treatment",
  alternates: {
    canonical: "https://superpestcontrol.in/cockroach-control-mumbai",
  },
};

export default function CockroachControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
