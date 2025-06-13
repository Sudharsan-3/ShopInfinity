import React from 'react'
const Cards = ({value ,id}) => {
  console.log(value)

  return (
    <div id={id} className='flex flex-col bg-white  justify-center items-center cursor-pointer'>
     
      <div>
        <img className='cursor-pointer hover:w-20 w-10' src={value.image} alt={value.name} />
      </div>
      <div className='flex flex-col items-center'>
        <p>{value.name}</p>
        <strong>{value.price}</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
