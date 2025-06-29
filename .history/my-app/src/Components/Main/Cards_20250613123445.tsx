import React from 'react'

const Cards = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
     
     <div class="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  {/* <!-- product card --> */}
  <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img class="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Converse sneakers" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">Converse Sneakers</h2>
      <span class="font-normal text-gray-600 dark:text-gray-300">High Top (Lemon Yellow)</span>
      <span class="font-semibold text-gray-800 dark:text-gray-50">$60</span>
    </div>

    <div class="flex gap-4 mt-4 px-4">
      <span class="sr-only">Colors available</span>

      <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

      <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

      <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

      <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
    </div>

    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
      <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
        <span class="text-base">Add to Cart</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </article>
</div>

   
      <h3>Heading</h3>
      <div>
        <img src="https://rukminim2.flixcart.com/image/128/128/kxdl3m80/monitor/a/f/x/d22e-20-full-hd-21-45-66d2kac6in-lenovo-original-imag9ua7zzqxer2e.jpeg?q=70&crop=false" alt="" />
      </div>
      <div>
        <p>Product name</p>
        <strong>Price or nice things</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
