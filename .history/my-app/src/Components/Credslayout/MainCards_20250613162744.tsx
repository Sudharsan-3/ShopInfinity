import React from 'react'
import Cards from '../Main/Cards'
import {electronics} from "../../JsObjects/Products/Products"

export const MainCards = () => {
    const data:string|number|any = electronics
   
  return (

    <div className='flex justify-center mt-2  items-center'>
       <div className='flex flex-col flex-wrap w-350 justify-around bg-white '>
        <h3 className='p-3 text-2xl'>Best of Electronics</h3>
        <div className='flex flex-wrap w-365 justify-around bg-white '>
            {
        data.map((e:string|number|any) =>(
     <Cards value={e} key={e.id} id={e.id} />
  ))}
       
        </div>
       
   
    </div>
        
       

    </div>
  )
}
