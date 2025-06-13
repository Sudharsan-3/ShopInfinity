'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/ff79341b24d091cd.jpg?q=90',
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/fecbc3f6390232bb.jpeg?q=90',
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/11980ec333f6aa03.jpg?q=90',
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/dbd07c8f0d822f95.jpg?q=90',
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/5b309e98775e22e4.jpg?q=90',
  'https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/076c4f2ee87225d7.jpg?q=90',
  
];

const MainCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-xxl mx-auto">
      {/* Carousel wrapper */}
      <div className="relative h-60 overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-fill" // changed from "object-contain"
              priority={index === 0}
            />
          </div>
        ))}
  
        {/* Navigation Buttons INSIDE image */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
  
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/50 transition"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
  
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full border-2 ${
                i === currentIndex ? 'bg-white' : 'bg-white/70'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
