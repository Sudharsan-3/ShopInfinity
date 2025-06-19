import React from 'react'
import Cards from '../Main/Cards'
import {foods} from "../../JsObjects/Products/Food"


export const MainCards1 = () => {
  
    const data = foods
  return (
    <div className='flex flex-col justify-center mt-2  items-center'>
        
    <div className='flex flex-col flex-wrap w-360 justify-around bg-white '>
        <h3 className='p-3 text-2xl'>Beauty, Food, Toys & more</h3>
        <div className='grid sm:grid-cols-1 lg:grid-cols-7 lg w-360 justify-around bg-white '>
            {
        data.map((e:string|number|any) =>(
     <Cards value={e} key={e.id} id={e.id} category={e.type} />
  ))}
       
        </div>
       
   
    </div>
    
   

</div>
  )
}
