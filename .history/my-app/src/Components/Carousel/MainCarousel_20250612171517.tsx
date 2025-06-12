import React from 'react'
import 'flowbite';


export const MainCarousel = () => {
  return (
    

<div id="default-carousel" className="relative w-full max-w-screen-xl mx-auto" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Slide 1 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src="https://rukminid2.flixcart.com/fk-p-flap/1010/170/image/ff79341b24d091cd.jpg?q=90"
        className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Banner 1"
      />
    </div>

    {/* Slide 2 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src="/docs/images/carousel/carousel-2.svg"
        className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Banner 2"
      />
    </div>

    {/* Slide 3 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src="/docs/images/carousel/carousel-3.svg"
        className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Banner 3"
      />
    </div>

    {/* Slide 4 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src="/docs/images/carousel/carousel-4.svg"
        className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Banner 4"
      />
    </div>

    {/* Slide 5 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src="/docs/images/carousel/carousel-5.svg"
        className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt="Banner 5"
      />
    </div>
  </div>

  {/* Slider indicators */}
  <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
    {[0, 1, 2, 3, 4].map((i) => (
      <button
        key={i}
        type="button"
        className="w-3 h-3 rounded-full bg-white/70 hover:bg-white"
        aria-label={`Slide ${i + 1}`}
        data-carousel-slide-to={i}
      />
    ))}
  </div>

  {/* Previous button */}
  <button
    type="button"
    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 group-focus:ring-2 group-focus:ring-white">
      <svg
        className="w-4 h-4 text-white rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 6 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 1 1 5l4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>

  {/* Next button */}
  <button
    type="button"
    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 group-focus:ring-2 group-focus:ring-white">
      <svg
        className="w-4 h-4 text-white rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 6 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m1 9 4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

  )
}
