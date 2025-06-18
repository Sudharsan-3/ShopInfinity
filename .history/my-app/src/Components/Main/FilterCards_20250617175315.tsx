'use client'

import React from 'react'
import products from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    image: string,
    description: string,
    rating: number
}


const FilterCards = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const category = searchParams.get('category') || ""
    console.log(category, "from the filtercards")

    const productData: Product[] = products as Product[]

    let filterByType = category ? productData.filter((item) => item.category.toLowerCase() == category?.toLocaleLowerCase())
        : products
    console.log(filterByType)

    const handelClick = (id:number) => {
        router.push(`/productbyid?id=${id}`)
    }

    return (
        <div className="container mx-auto px-4 py-6 bg-gray-50">
  {filterByType.length > 0 ? (
    <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 cursor-pointer">
      {filterByType.map((item) => (
        <div onClick={(()=>handelClick(item.id))}
          key={item.id}
          className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain mb-4"
          />
          <div className="text-center">
            <p className="text-lg font-semibold truncate mb-1">{item.name}</p>
            <p className="text-green-600 font-bold mb-1">₹{item.price}</p>
            <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-20 text-gray-500 text-lg">
      <p>
        Sorry, there are no items available under the category:{" "}
        <span className="font-semibold text-black">{category}</span>
      </p>
    </div>
  )}
</div>

    )
}

export default FilterCards
