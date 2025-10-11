'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ShivajiParkRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/pest-control-in-dadar');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to Pest Control in Dadar...</p>
      </div>
    </div>
  );
}
