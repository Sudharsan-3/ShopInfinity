import React from 'react'
import {electronics} from "../Products/Products"
const Cards = () => {
  
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
     {
      electronics.map((e:string|number|any)=>(
        <div>
        <img src="https://rukminim2.flixcart.com/image/128/128/kxdl3m80/monitor/a/f/x/d22e-20-full-hd-21-45-66d2kac6in-lenovo-original-imag9ua7zzqxer2e.jpeg?q=70&crop=false" alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p>Product name</p>
        <strong>Price or nice things</strong>
      </div>
      ))
     }
      
      </div>  


      
    
  )
}

export default Cards
