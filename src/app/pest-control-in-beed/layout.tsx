import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pest Control in Beed | 24/7 Service | Super Pest Control',
  description: 'Expert pest control services in Beed with same-day treatment. Professional cockroach, termite, bed bug control. Call 8097941077 for immediate assistance.',
  keywords: 'pest control Beed, cockroach control Beed, termite control Beed, bed bug control Beed, professional pest control services',
  alternates: {
    canonical: 'https://superpestcontrol.com/pest-control-in-beed',
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
