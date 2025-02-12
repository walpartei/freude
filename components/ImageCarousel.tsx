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

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full max-w-[472px] h-[80vh] max-h-[1024px] mx-auto overflow-hidden rounded-2xl shadow-xl">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
              <Image
                  src={item.src}
                  alt={item.alt || 'App screenshot'}
                  width={472}
                  height={1024}
                  sizes="(max-width: 639px) 100vw, 472px"
                  className="w-full h-full object-scale-down transition-opacity duration-300"
                  style={{ opacity: 0 }}
                onError={(e) => {
                  console.error('Error loading image:', item.src);
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const spinner = parent.querySelector('.animate-pulse');
                    if (spinner) {
                      spinner.innerHTML = '<div class="text-red-500">Failed to load image</div>';
                    }
                  }
                }}
                onLoadingComplete={(e) => {
                  e.style.opacity = '1';
                  const parent = e.parentElement;
                  if (parent) {
                    const spinner = parent.querySelector('.animate-pulse');
                    if (spinner) {
                      spinner.remove();
                    }
                  }
                }}
              />

            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors"
      >
        →
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
