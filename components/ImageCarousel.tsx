'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
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
    <div className="relative w-full max-w-md mx-auto h-[600px] overflow-hidden rounded-2xl shadow-xl">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            {item.type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src={item.src} type="video/quicktime" />
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt || 'App screenshot'}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority={index === 0}
                    loading="eager"
                    onError={(e) => {
                      console.error('Error loading image:', item.src);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                    className="transition-opacity duration-300 opacity-0"
                    onLoadingComplete={(image) => {
                      image.classList.remove('opacity-0');
                      image.classList.add('opacity-100');
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              </div>
            )}
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
