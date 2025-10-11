import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Andheri West | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Andheri West. 100% guaranteed results. Call 8097941077 for same-day service!',
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
