import React from 'react'
const Cards = ({value}) => {

  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
     
      <div>
        <img src={value.im} alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p>Product name</p>
        <strong>Price or nice things</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
