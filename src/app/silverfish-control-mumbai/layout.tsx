import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Silverfish Control Services in Mumbai | Complete Elimination Treatment",
  },
  description: "Expert silverfish control in Mumbai. Eliminate silverfish from homes, offices & warehouses. Safe, eco-friendly treatments with long-term prevention. Free inspection. Call +91 80979 41077",
  keywords: "silverfish control mumbai, silverfish removal, silverfish pest control, silverfish exterminator mumbai, silverfish treatment",
  alternates: {
    canonical: "https://superpestcontrol.in/silverfish-control-mumbai",
  },
};

export default function SilverfishControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}