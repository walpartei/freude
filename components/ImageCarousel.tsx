'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  type: 'image';
  src: string;
  alt?: string;
}

export default function ImageCarousel({ items }: { items: CarouselItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="w-full max-w-[472px] mx-auto space-y-4">
      <div className="relative">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <Image
              src={item.src}
              alt={item.alt || 'App screenshot'}
              width={472}
              height={1024}
              className="w-full h-auto"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
