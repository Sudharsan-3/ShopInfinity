import React from 'react'
import { FaUser , FaSearch    } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiShop } from "react-icons/ci";

import ShopInfinity from "../../../public/assets/shopinfinity-icon.png"


const Nav = () => {
  return (
    <div>
       <header className='flex'>
        <div>
            <img src={ShopInfinity}  alt="" />
        </div>
        <div>
            <input type="search" className='border fa-user ' name="search" id="search"  />
            <FaSearch />


        </div> 
        <div>
        <FaUser />

           <h4>Login
            </h4> 
        </div>
        <div>
        <AiOutlineShoppingCart />
    
        <h4>Cart
        </h4> 
        </div>
    <div>
    <CiShop />
<h4></h4>
    </div>


       </header>
      
    </div>
  )
}

export default Nav
