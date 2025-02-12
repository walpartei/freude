'use client';

import { useState } from 'react';
import { getImageUrl } from '../config/urls';

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
      <img 
        src={getImageUrl('images/screenshot1.png')}
        alt="Test screenshot" 
        className="w-full h-full object-cover rounded-lg shadow-lg"
        onError={(e) => {
          console.error('Error loading image:', e);
          setHasError(true);
        }}
      />
    </div>
  );
}
