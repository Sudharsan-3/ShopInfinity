import React from 'react'
import Cards from '../Main/Cards'
import {sports} from "../../JsObjects/Products/Sport"

export const MainCards2 = () => {
    const data = sports
  return (
    <div className='grid  justify-center mt-2  items-center '>
        
    <div className='flex flex-col flex-wrap w-360 justify-around bg-white '>
        <h3 className='p-3 text-2xl'>Sports, Healthcare & more</h3>
        <div className='grid sm:grid-cols-1 lg:grid-cols-7 lg w-360 justify-around bg-white'>
            {
        data.map((e:string|number|any) =>(
     <Cards value={e} key={e.id} id={e.id} category={e.type} />
  ))}
       
        </div>
       
   
    </div>
    
   

</div>
  )
}
