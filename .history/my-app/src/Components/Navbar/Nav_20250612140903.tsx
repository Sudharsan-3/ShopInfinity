import React from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiShop } from 'react-icons/ci';
import { PiDotsThreeOutlineVerticalLight } from 'react-icons/pi';
import Image from 'next/image';
import ShopInfinity from '../../../public/assets/shopinfinity-icon.png';

const Nav = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/" alt="ShopInfinity" width={40} height={40} />
        <h1 className="text-xl font-semibold">Shopfinity</h1>
      </div>

      {/* Search */}
      <div className="flex items-center border border-gray-300 rounded overflow-hidden w-1/2">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for products..."
          className="px-4 py-2 w-full outline-none"
        />
        <button className="px-3 text-white bg-blue-600">
          <FaSearch />
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center cursor-pointer">
          <FaUser className="text-lg" />
          <span className="text-xs">Login</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <AiOutlineShoppingCart className="text-lg" />
          <span className="text-xs">Cart</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <CiShop className="text-lg" />
          <span className="text-xs text-center">Become a Seller</span>
        </div>
        <div className="cursor-pointer">
          <PiDotsThreeOutlineVerticalLight className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
