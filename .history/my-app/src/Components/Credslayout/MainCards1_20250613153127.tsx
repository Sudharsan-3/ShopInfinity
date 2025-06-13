import React from 'react'

export const MainCards1 = () => {
  return (
    <div className='flex justify-center mt-2  items-center'>
    <div className='flex flex-wrap w-365 justify-around bg-white '>
       {
        data.map((e:string|number|any) =>(
     <Cards value={e} key={e.id} id={e.id} />
  ))}
       
   
    </div>
    
   

</div>
  )
}
