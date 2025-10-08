import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Mosquito Control Mumbai | Dengue & Malaria Prevention Services",
  },
  description: "Professional mosquito control in Mumbai. Fogging, breeding site elimination & seasonal protection. Protect from dengue & malaria. Call +91 80979 41077",
  keywords: "mosquito control mumbai, mosquito fogging, dengue prevention, mosquito pest control",
  alternates: {
    canonical: "https://superpestcontrol.in/mosquitoes-control",
    languages: {
      'x-default': 'https://superpestcontrol.in/mosquitoes-control',
      'en-IN': 'https://superpestcontrol.in/mosquitoes-control',
    }
  },
};

export default function MosquitoesControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
