import React from 'react'
const Cards = ({value ,id}) => {
  console.log(value)

  return (
    <div key={id} className='flex flex-col justify-center items-center cursor-pointer'>
     
      <div>
        <img src={value.image} width={50} alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <p>{value.name}</p>
        <strong>{value.price}</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
