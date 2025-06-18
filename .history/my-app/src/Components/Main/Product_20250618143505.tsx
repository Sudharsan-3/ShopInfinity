'use client'
import React from 'react'
import Produts from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'
import { FaRegStar } from "react-icons/fa";


interface ProductById  {
    id:number,
    name : string,
    price : number,
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
    <div className='flex items-center justify-center mt-4'>
        
        {filterByid.length>0?filterByid.map((item)=>(
          <div className='grid grid-cols-2 w-350 h-auto bg-gray-50 p-2  ' key={item.id}>
           
            <div className='border w-fit'>
               <img className='w-3/4' src={item.image} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <h3>Name : </h3>
                <h4>{item.name}</h4>
              </div>
              <div className='flex gap-2'><h3>Description : </h3>
                <h4>{item.description}</h4>
              </div>
              <div className='flex gap-2'>
                <h3>Price :</h3>
                            <h4>{item.price}</h4> 
              </div>
          
              <div>

              <div className='flex items-center  '>
                 <div className='flex items-center gap-2 border justify-center px-2 rounded-sm  bg-green-700 text-amber-50'>
                  <h4>{item.rating}</h4>  
                 
                     <FaRegStar />
                  
                 
                </div>

              </div>
                
              </div>
             
            
                           
           
            </div>
           
                                  
                                     
          </div>
          
          
          )):<h1>No product available with id of {id}</h1>}
      
    </div>
  )
}

export default Product
