import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tick Control Services in Mumbai | Pet-Safe Tick Treatment & Removal",
  description: "Professional tick control in Mumbai. Protect your family and pets from ticks with safe, effective treatments for homes and gardens. Free inspection. Call +91 80979 41077",
  keywords: "tick control mumbai, tick removal, tick pest control, pet tick treatment, tick exterminator mumbai, tick prevention",
  alternates: {
    canonical: "https://superpestcontrol.in/ticks-control-mumbai",
  },
};

export default function TicksControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}