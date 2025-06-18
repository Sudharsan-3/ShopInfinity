import React from 'react'
import Cards from '../Main/Cards'
import {electronics} from "../../JsObjects/Products/Products"

export const MainCards = () => {
    const data:string|number|any = electronics
   
  return (

    <div className='flex justify-center mt-2  items-center'>
       <div className='flex flex-col flex-wrap w-360 justify-around bg-white '>
        <h3 className='p-3 text-2xl'>Best of Electronics</h3>
        <div className='grid sm:grid-cols-1 lg:grid-cols-1 w-360 justify-around bg-white '>
            {
        data.map((e:string|number|any) =>(
     <Cards value={e} key={e.id} id={e.id} category={e.type} />
  ))}
       
        </div>
       
   
    </div>
        
       

    </div>
  )
}
