'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermitesControl() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the main termites control page
    router.replace('/termites-control-mumbai');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Termite Control Services...</p>
      </div>
    </div>
  );
}
