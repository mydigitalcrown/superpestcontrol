import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Mosquito Control in Mumbai | Dengue & Malaria Prevention Services",
  },
  description: "Professional mosquito control services in Mumbai. Fogging, breeding site elimination & seasonal protection. Protect your family from dengue & malaria. Call +91 80979 41077",
  keywords: "mosquito control mumbai, mosquito fogging, dengue prevention, malaria control, mosquito exterminator mumbai, mosquito pest control",
  alternates: {
    canonical: "https://superpestcontrol.in/mosquitoes-control-mumbai",
  },
};

export default function MosquitoesControlMumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}