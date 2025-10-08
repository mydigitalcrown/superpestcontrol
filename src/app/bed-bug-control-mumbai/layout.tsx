import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bed Bug Control in Mumbai | Heat Treatment & Chemical Elimination",
  description: "Expert bed bug control in Mumbai. Complete bed bug elimination with heat treatment, chemical solutions & mattress sanitization. Same-day service. Call +91 80979 41077",
  keywords: "bed bug control mumbai, bed bug treatment, bed bug removal, bed bug exterminator mumbai, bed bug heat treatment, mattress sanitization",
  alternates: {
    canonical: "https://superpestcontrol.in/bed-bug-control-mumbai",
  },
};

export default function BedBugControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}