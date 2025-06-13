import React from 'react'
import Cards from '../Main/Cards'
import {electronics} from "../Products/Products"

export const MainCards = () => {
    const data:string|number|any = electronics
   
  return (

    <div className='flex   justify-center  items-center  gap-5'>
        <div className='flex flex-wrap w-full justify-around'>
           {
            data.map(<e:str></e:str> =>(
        console.log(e.id)
      ))}
            <Cards />
       
        </div>
        
       

    </div>
  )
}
