import React from 'react'
const Cards = ({value ,id}) => {
  console.log(value)

  return (
    <div id={id} className='flex flex-col bg-white p-5 justify-center items-center cursor-pointer'>
     
      <div>
        <img class src={value.image} width={50} alt={value.name} />
      </div>
      <div className='flex flex-col items-center'>
        <p>{value.name}</p>
        <strong>{value.price}</strong>
      </div>
      </div>  


      
    
  )
}

export default Cards
