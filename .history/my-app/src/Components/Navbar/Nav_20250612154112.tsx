import React from 'react'
import { FaUser , FaSearch    } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Image from 'next/image';
import ShopInfinity from "../../../public/assets/shopinfinity-icon.png"


const Nav = () => {
  return (
    <div>
       <header className='flex justify-around pt-3'>
        {/* Logo */}
        <div>
            <Image src={ShopInfinity} alt='shopinfinity' className='bg-transparent' width={100} />
        </div>
        {/* Search box */}
        <div className='flex items-center border border-gray-300 rounded overflow-hidden w-1/2'>
            <input type="search" className='px-4 py-2 w-full outline-none ' name="search" id="search"  />
          <button className='px-3 text-black '>
            <FaSearch />
            </button>  
        </div> 
        {/* Login */}
        <div className='flex'>
        <FaUser className="text-" />

           <span>Login
            </span> 
        </div>
        <div className='flex'>
        <AiOutlineShoppingCart className="text-xs" />
    
        <span>Cart
        </span> 
        </div>
    <div className='flex'>
    <CiShop className="text-xs"  />
<h4>Becom a Seller</h4>
    </div>
<div>
<PiDotsThreeOutlineVerticalLight className="text-xl" />

</div>

       </header>
      
    </div>
  )
}

export default Nav
