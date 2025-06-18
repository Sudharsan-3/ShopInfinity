'use client'

import React from 'react'

const quickFilters = [
  { label: 'Kilo', img: 'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' },
  { label: 'Mobiles', img: 'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' },
  { label: 'Fashion', img: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100' },
  { label: 'Electronics', img: 'https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' },
  { label: 'Home & Furniture', img: 'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100' },
  { label: 'Appliances', img: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100' },
  { label: 'Flight Bookings', img: 'https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100' },
  { label: 'Beauty, Toys & More', img: 'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
  { label: 'Two Wheelers', img: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' },
]

const MainFilter = () => {
  return (
    <div className='pt-4 pb-6 px-4 md:px-10'>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4 bg-gray-50 p-5 rounded-lg'>
        {quickFilters.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md p-2 rounded-md transition duration-300'
          >
            <div className='w-16 h-16 flex items-center justify-center'>
              <img
                src={item.img}
                alt={item.label}
                className='w-full h-full object-contain transition-transform duration-300 hover:scale-110'
              />
            </div>
            <span className='text-center text-sm font-medium'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainFilter
