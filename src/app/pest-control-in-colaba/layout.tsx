import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Colaba | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Expert pest control services in Colaba, Mumbai. Professional termite control, cockroach treatment, bed bug removal near Fort, Navy Nagar, Ballard Estate. 100% guaranteed results. Call +91-9136036071.',
  keywords: 'pest control colaba, pest control in colaba, best pest control colaba, professional pest control colaba, termite control colaba, cockroach control colaba, bed bug control colaba, pest control services colaba mumbai, affordable pest control colaba, emergency pest control colaba, residential pest control colaba, commercial pest control colaba, pest control near fort, pest control near navy nagar, pest control near ballard estate, pest control near cuffe parade, licensed pest control colaba, guaranteed pest control colaba, 24/7 pest control colaba',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-colaba",
  },
};

export default function PestControlInColabaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}