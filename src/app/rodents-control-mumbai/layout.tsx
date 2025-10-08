import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Rodents Control in Mumbai | Rat & Mice Extermination Services",
  },
  description: "Professional rodent control services in Mumbai. Eliminate rats and mice with advanced baiting systems, traps, and exclusion methods. 24/7 emergency service. Call +91 80979 41077",
  keywords: "rodents control mumbai, rat control mumbai, mice control, rodent exterminator, rat removal mumbai, mouse pest control",
  alternates: {
    canonical: "https://superpestcontrol.in/rodents-control-mumbai",
  },
};

export default function RodentsControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}