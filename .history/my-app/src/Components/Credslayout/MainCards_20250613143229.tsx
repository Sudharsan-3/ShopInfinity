import React from 'react'
import Cards from '../Main/Cards'
import {electronics} from "../Products/Products"

export const MainCards = () => {
    
  return (
    <div className='flex   justify-center  items-center  gap-5'>
        <div className='flex flex-wrap w-full justify-around'>
            <Cards />
       
        </div>
        
       

    </div>
  )
}
