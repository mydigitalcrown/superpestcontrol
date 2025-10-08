import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodent Control Mumbai | Professional Rat & Mouse Elimination Services",
  description: "Expert rodent control in Mumbai. Complete rat and mouse extermination with advanced trapping, baiting & exclusion. Safe for homes & offices. Call +91 80979 41077",
  keywords: "rodent control mumbai, rat control, mouse extermination, rodent removal mumbai, rat pest control, mouse traps mumbai",
  alternates: {
    canonical: "https://superpestcontrol.in/rodent-control-mumbai",
  },
};

export default function RodentControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}