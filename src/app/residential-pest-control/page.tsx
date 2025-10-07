'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResidentialPestControl() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the main residential pest control page with Mumbai
    router.replace('/residential-pest-control-mumbai');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Residential Pest Control Services...</p>
      </div>
    </div>
  );
}
