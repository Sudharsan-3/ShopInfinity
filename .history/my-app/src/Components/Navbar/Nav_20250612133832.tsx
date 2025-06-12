import React from 'react'
import { FaUser , FaSearch  } from "react-icons/fa";
import ShopInfinity from "../../../public/assets/shopinfinity-icon.png"


const Nav = () => {
  return (
    <div>
       <header>
        <div>
            <img src={ShopInfinity} width="20" alt="" />
        </div>
        <div>
            <input type="search" className='border fa-user ' name="search" id="search"  />
            <FaSearch />


        </div> 
        <div>
        <FaUser />

            Login
        </div>
    


       </header>
      
    </div>
  )
}

export default Nav
