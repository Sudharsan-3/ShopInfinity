import React from 'react'
import { FaUser, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Image from 'next/image';
import ShopInfinity from "../../../public/assets/shopinfinity-icon.png"


const Nav = () => {
    return (
        <div className='grid fixed p-2 bg-white  '>
            <header className='flex justify-around pt-3 flex-wrap'>
                {/* Logo */}
                <div className='cursor-pointer'>
                    <Image src={ShopInfinity} alt='shopinfinity' className='bg-transparent' width={100} />
                </div>
                {/* Search box */}
                <div className='flex items-center border border-gray-300 rounded overflow-hidden w-1/2 '>
                    <input type="search" className='px-4 py-2 w-full outline-none ' name="search" id="search" placeholder='Search for products'/>
                    <button className='px-3 text-black  cursor-pointer'>
                        <FaSearch />
                    </button>
                </div>
                <div className='flex items-center gap-6'>
                    {/* Login */}
                <div className='flex gap-2  items-center justify-center cursor-pointer'>
                    <FaUser className="text-lg " />
                    <span>Login
                    </span>
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer'>
                    <AiOutlineShoppingCart className="text-xl" />

                    <span >Cart
                    </span>
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer'>
                    <CiShop className="text-xl" />
                    <h4>Becom a Seller</h4>
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer'>
                    <PiDotsThreeOutlineVerticalLight className="text-xl" />

                </div>
                </div>
                

            </header>

        </div>
    )
}

export default Nav
