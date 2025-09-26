import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Best Pest Control in Dadar | #1 Professional Services Mumbai | Super Pest Control',
  description: 'Expert pest control services in Dadar, Mumbai. Professional termite control, cockroach treatment, bed bug removal near Lokhandwala, Juhu, Versova. 100% guaranteed results. Call +91-9136036071.',
  keywords: 'pest control dadar, pest control in dadar, best pest control dadar, professional pest control dadar, termite control dadar, cockroach control dadar, bed bug control dadar, pest control services dadar mumbai, affordable pest control dadar, emergency pest control dadar, residential pest control dadar, commercial pest control dadar, pest control near lokhandwala, pest control near juhu, pest control near versova, pest control near oshiwara, licensed pest control dadar, guaranteed pest control dadar, 24/7 pest control dadar',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-dadar",
  },
};

export default function PestControlInDadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}