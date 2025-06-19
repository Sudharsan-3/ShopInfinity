'use client'

import React, { useState } from 'react'
import products from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Filter from '../Productfilter/Filter'

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
    const [filter,setFilter] = useState<number>(0);
    const [star,setStar] = useState<number>(0);
    console.log(category, "from the filtercards")
  

    const productData: Product[] = products as Product[]

    let filterByType = productData.filter((item) => {
      const matchesCategory = category
        ? item.category.toLowerCase() === category.toLowerCase()
        : true;
    
      const matchesPrice = filter === 0 || item.price <= filter;
      const matchesStar = star === 0 || item.rating >= star;
    
      return matchesCategory && matchesPrice && matchesStar;
    });
    
    console.log(filterByType)

    const handelClick = (id:number) => {
      window.open(`/productbyid?id=${id}`, '_blank')
        
    }
    console.log(filter,star)

    return (
        <div className="container mx-auto px-4 py-6 bg-gray-50 grid lg:grid-flow-col-dense ">
          <div >
        <Filter setfilter = {setFilter} setStar={setStar} />
      </div>
  {filterByType.length > 0 ? (
    <div className='' >
      
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
