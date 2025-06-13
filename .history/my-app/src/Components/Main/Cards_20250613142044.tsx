import React from 'react'
import {Products} from "@/Components/Products/Products"

const Cards = () => {
  const data = Products
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
     
      <div>
        <img src={Products[0]. } alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p>Product name</p>
        <strong>Price or nice things</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
