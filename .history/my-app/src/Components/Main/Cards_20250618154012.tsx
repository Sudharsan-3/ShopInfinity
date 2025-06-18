import React from 'react';
import { useRouter } from 'next/navigation';




const Cards = ({ value, id, category }:{value:string|any,id:number|any,category:string}) => {
  const router = useRouter()
  
  const handelClick = ()=>{
    if(category){
      router.push(`/filtercard?category=${category}`)
    }
    
  }
  return (
    <div onClick={()=>handelClick(value.name , id)}
      id={id}
      className="flex flex-col items-center justify-between gap-2 p-4  hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="w-32 h-32">
        <img
          src={value.image}
          alt={value.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">{value.name}</p>
        <strong className="text-base text-gray-800">₹{value.price.toLocaleString()}</strong>
      </div>
    </div>
  );
};

export default Cards;
