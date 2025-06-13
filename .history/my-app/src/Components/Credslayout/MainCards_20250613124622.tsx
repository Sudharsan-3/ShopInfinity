import React from 'react'
import Cards from '../Main/Cards'

export const MainCards = () => {
  return (
    <div className='flex   justify-center  items-center  gap-5'>
        <h3>Beast Electronics</h3>
        <div className='flex flex-wrap w-full justify-around'>
            <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
        
       

    </div>
  )
}
