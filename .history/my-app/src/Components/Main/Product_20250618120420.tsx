'use client'
import React from 'react'
import Produts from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'

interface ProductById  {
    id:number,
    name : string,
    peice : number,
    catogery :string,
    image : string,
    description : string,
    rating : number
    
}

const Product = () => {
     const searchParams = useSearchParams()
        const id = Number(searchParams.get('id')) || ""
            console.log(id,"fom products")
    const product:ProductById[]=Produts as unknown as ProductById[] 
    const filterByid = id? product.filter((item)=>item.id === id):product
  return (
    <div>
        welcom to product page
        {filterByid.length>0?filterByid.map((item)=>(
          <div>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <h2>{item}</h2>
          </div>
          
          
          )):<h1>No product available with id of {id}</h1>}
      
    </div>
  )
}

export default Product
