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
       <header className='flex justify-around'>
        <div>
            <Image src={ShopInfinity} alt='shopinfinity' width={100} />
        </div>
        <div className='flex'>
            <input type="search" className='border fa-user ' name="search" id="search"  />
            <FaSearch />


        </div> 
        <div className='flex'>
        <FaUser />

           <h4>Login
            </h4> 
        </div>
        <div className='flex'>
        <AiOutlineShoppingCart />
    
        <h4>Cart
        </h4> 
        </div>
    <div className='flex'>
    <CiShop width={40} height={} />
<h4>Becom a Seller</h4>
    </div>
<div>
<PiDotsThreeOutlineVerticalLight />

</div>

       </header>
      
    </div>
  )
}

export default Nav
