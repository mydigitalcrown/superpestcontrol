import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pest Control in Bhayander | 24/7 Service | Super Pest Control',
  description: 'Get fast pest control in Bhayander. 100% guaranteed results. Call 8097941077 for same-day service!',
  keywords: 'pest control Bhayander, termite control Bhayander, cockroach control Bhayander, rodent control Bhayander, bed bug control Bhayander, ant control Bhayander, pest control services Bhayander, fumigation services Bhayander, pest control Bhayander East, pest control Bhayander West',
  alternates: {
    canonical: "https://superpestcontrol.in/pest-control-in-bhayander",
  },
};

export default function PestControlInBhayanderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
