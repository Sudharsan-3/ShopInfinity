'use client'

import React from 'react'
import Products from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";


interface ProductById {
  id: number,
  name: string,
  price: number,
  catogery: string,
  image: string,
  description: string,
  rating: number
}

const Product = () => {
  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id')) || ""
  const product: ProductById[] = Products as unknown as ProductById[]
  const filterById = id ? product.filter((item) => item.id === id) : []

  return (
    <div className='flex items-center justify-center py-8 px-4'>
      {filterById.length > 0 ? filterById.map((item) => (
        <div
          key={item.id}
          className='w-full max-w-5xl bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 grid lg:grid-cols-2 gap-8 p-6'
        >
          {/* Image Section */}
          <div className='flex items-center justify-center'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-auto max-h-[400px] object-contain rounded-md'
            />
          </div>
          <div>
            <div>
            <IoCartOutline />


            </div>
            <div>
            <AiOutlineThunderbolt />
        
            </div>

          </div>

          {/* Details Section */}
          <div className='flex flex-col justify-center gap-5'>
            <h2 className='text-2xl font-bold text-gray-800'>{item.name}</h2>

            <p className='text-gray-600'>
              <span className='font-semibold text-gray-800'>Description:</span> {item.description}
            </p>

            <p className='text-lg text-gray-700'>
              <span className='font-semibold'>Category:</span> {item.catogery}
            </p>

            <p className='text-xl font-bold text-green-600'>
              ₹ {item.price}
            </p>

            <div className='flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-md w-fit'>
              <span className='font-medium'>{item.rating}</span>
              <FaRegStar className='text-yellow-300' />
            </div>
          </div>
        </div>
      )) : (
        <h1 className='text-lg text-center text-red-500 font-semibold'>No product available with ID {id}</h1>
      )}
    </div>
  )
}

export default Product
