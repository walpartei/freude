'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TestImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-64 h-64 mx-auto mb-8 flex items-center justify-center bg-red-100 rounded-lg">
        <p className="text-red-500">Failed to load image</p>
      </div>
    );
  }

  return (
    <div className="w-64 h-64 mx-auto mb-8 relative">
      <Image
        src="/images/screenshot1.png"
        alt="Test screenshot"
        width={256}
        height={256}
        className="rounded-lg shadow-lg object-cover"
        onError={() => {
          console.error('Error loading image');
          setHasError(true);
        }}
      />
    </div>
  );
}
