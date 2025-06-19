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
import products from "@/JsObjects/sepProduct/All.json";

const Nav = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelect = (category: string) => {
    router.push(`/filtercard?category=${category}`)
    setQuery('');
    setShowSuggestions(false);
  };

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5); // limit to 5 suggestions

  return (
    <div className='p-2 bg-white sticky top-0 z-50 shadow-md'>
      <header className='flex justify-between items-center px-4 lg:px-12 py-2 relative'>
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
        <div className='relative w-full max-w-md'>
          <div className='flex items-center w-full border border-gray-300 rounded overflow-hidden'>
            <input
              onChange={handleChange}
              value={query}
              type="search"
              className='px-4 py-2 w-full outline-none'
              placeholder='Search for products'
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => query && setShowSuggestions(true)}
            />
            <button className='px-3 text-black'>
              <FaSearch />
            </button>
          </div>

          {showSuggestions && query && (
            <div className='absolute top-12 left-0 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50 max-h-60 overflow-y-auto'>
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.category)}
                    className='px-4 py-2 cursor-pointer hover:bg-gray-100'
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className='px-4 py-2 text-gray-500'>No matches found</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Nav Items */}
        <div className='hidden lg:flex items-center gap-6'>
          <div onClick={() => router.push('/login')} className='flex gap-2 items-center cursor-pointer'>
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
          <div onClick={() => router.push('/login')} className='flex items-center gap-2 py-2 border-b cursor-pointer'>
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
