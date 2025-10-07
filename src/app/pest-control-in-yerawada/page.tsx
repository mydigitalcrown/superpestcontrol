'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PestControlYerawada() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to Pune page
    router.replace('/pest-control-in-pune');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Pest Control Services...</p>
      </div>
    </div>
  );
}
