import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Removal Services in Mumbai | Safe Beehive Relocation & Control",
  description: "Professional bee removal & control in Mumbai. Safe beehive relocation, wasp nest removal & honey bee swarm management. 24/7 emergency service. Call +91 80979 41077",
  keywords: "bee removal mumbai, beehive removal, wasp control, honey bee relocation, bee exterminator mumbai, bee control services",
  alternates: {
    canonical: "https://superpestcontrol.in/bees-control-mumbai",
  },
};

export default function BeesControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}