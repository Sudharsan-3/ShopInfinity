import React from 'react'
import { FaUser , FaSearch  } from "react-icons/fa";


const Nav = () => {
  return (
    <div>
       <header>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <input type="search" className='' name="search" id="search"  />
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
