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
    <div className="relative w-full max-w-screen-xxl mx-auto p-5">
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
          className="object-cover"
          priority={index === 0}
        />
      </div>
    ))}

    {/* Previous Button */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      aria-label="Previous"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 6 10"
      >
        <path d="M5 1 1 5l4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>

    {/* Next Button */}
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      aria-label="Next"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 6 10"
      >
        <path d="m1 9 4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>

    {/* Indicators */}
    <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
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
};

export default MainCarousel;
