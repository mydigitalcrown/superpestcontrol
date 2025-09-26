import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Andheri West | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Expert pest control services in Andheri West, Mumbai. Professional termite control, cockroach treatment, bed bug removal near Lokhandwala, Juhu, Versova. 100% guaranteed results. Call +91-9136036071.',
  keywords: 'pest control andheri west, pest control in andheri west, best pest control andheri west, professional pest control andheri west, termite control andheri west, cockroach control andheri west, bed bug control andheri west, pest control services andheri west mumbai, affordable pest control andheri west, emergency pest control andheri west, residential pest control andheri west, commercial pest control andheri west, pest control near lokhandwala, pest control near juhu, pest control near versova, pest control near oshiwara, licensed pest control andheri west, guaranteed pest control andheri west, 24/7 pest control andheri west',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-andheri-west",
  },
};

export default function PestControlInAndheriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}