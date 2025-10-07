'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CockroachControlRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/cockroach-control-mumbai');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to Cockroach Control Mumbai...</p>
      </div>
    </div>
  );
}
