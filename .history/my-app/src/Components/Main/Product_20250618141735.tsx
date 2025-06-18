'use client'
import React from 'react'
import Produts from "@/JsObjects/sepProduct/All.json"
import { useSearchParams } from 'next/navigation'
import { CiStar } from "react-icons/ci";


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
    <div className='flex items-center justify-center'>
        
        {filterByid.length>0?filterByid.map((item)=>(
          <div className='grid grid-cols-2 w-350 h-auto  ' key={item.id}>
           
            <div>
               <img src={item.image} alt="" />
            </div>
            <div>
              <div>
                <h3>Name : </h3>
                <h4>{item.name}</h4>
              </div>
              <div><h3>Description : </h3>
                <h4>{item.description}</h4>
              </div>
              <div><h3>Price</h3>
                            <h4>{item.peice}</h4> 
              </div>
          
              <div>

              <div className='flex items-center justify-center '> <h4>{item.rating}</h4>  
              <CiStar />

              </div>
                
              </div>
             
            
                           
           
            </div>
           
                                  
                                     
          </div>
          
          
          )):<h1>No product available with id of {id}</h1>}
      
    </div>
  )
}

export default Product
