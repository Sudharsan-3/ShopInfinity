'use client'
import React, { useState } from 'react';
import { FaUser, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ShopInfinity from "../../../public/assets/shopinfinity-icon.png";

const Nav = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const LoginHandel = () => {
    router.push('/login');
  };

  return (
    <div className='p-2 bg-white sticky top-0 z-50 shadow-md'>
      <header className='flex justify-between items-center px-4 lg:px-12 py-2'>
        {/* Logo & Hamburger */}
        <div className='flex items-center gap-4'>
          <div onClick={() => setMenuOpen(!menuOpen)} className='block lg:hidden cursor-pointer text-2xl'>
            <RxHamburgerMenu />
          </div>
          <div onClick={() => router.push('/')} className='cursor-pointer'>
            <Image src={ShopInfinity} alt='shopinfinity' width={100} priority />
          </div>
        </div>

        {/* Search box */}
        <div className='flex items-center w-full max-w-md border border-gray-300 rounded overflow-hidden mx-4'>
          <input type="search" className='px-4 py-2 w-full outline-none' placeholder='Search for products' />
          <button className='px-3 text-black'>
            <FaSearch />
          </button>
        </div>

        {/* Desktop Nav Items */}
        <div className='hidden lg:flex items-center gap-6'>
          <div onClick={LoginHandel} className='flex gap-2 items-center cursor-pointer'>
            <FaUser className="text-lg" />
            <span>Login</span>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <AiOutlineShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <CiShop className="text-xl" />
            <span>Become a Seller</span>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <PiDotsThreeOutlineVerticalLight className="text-xl" />
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 animate-slide-down">
          <div onClick={LoginHandel} className='flex items-center gap-2 py-2 border-b cursor-pointer'>
            <FaUser />
            <span>Login</span>
          </div>
          <div className='flex items-center gap-2 py-2 border-b cursor-pointer'>
            <AiOutlineShoppingCart />
            <span>Cart</span>
          </div>
          <div className='flex items-center gap-2 py-2 border-b cursor-pointer'>
            <CiShop />
            <span>Become a Seller</span>
          </div>
          <div className='flex items-center gap-2 py-2 cursor-pointer'>
            <PiDotsThreeOutlineVerticalLight />
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
