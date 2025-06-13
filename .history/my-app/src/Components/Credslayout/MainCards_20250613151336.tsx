import React from 'react'
import Cards from '../Main/Cards'
import {electronics} from "../../JsObjects/Products/Products"

export const MainCards = () => {
    const data:string|number|any = electronics
   
  return (

    <div className='flex  justify-center  items-center bg-white w-'>
        <div className='flex flex-wrap w-full justify-around '>
           {
            data.map((e:string|number|any) =>(
         <Cards value={e} key={e.id} id={e.id} />
      ))}
           
       
        </div>
        
       

    </div>
  )
}
