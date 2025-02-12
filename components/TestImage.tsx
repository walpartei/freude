'use client';

import { useState } from 'react';

export default function TestImage() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className="w-64 h-64 mx-auto mb-8 flex items-center justify-center bg-red-100 rounded-lg">
        <p className="text-red-500">Failed to load image</p>
      </div>
    );
  }

  return (
    <div className="w-64 h-64 mx-auto mb-8 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src="/images/screenshot1.png"
        alt="Test screenshot"
        className={`w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Error loading image:', e);
          setHasError(true);
        }}
      />
    </div>
  );
}
