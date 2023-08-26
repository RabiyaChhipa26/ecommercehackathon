'use client';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import MobileNavbar from '@/components/shared/MobileNavbar'
import CartIcon from '../shared/CartIcon';


const Navbar = () => {
  const [isNavbarOpen, setNabarOpen] = useState<boolean>(false);
  // const [cartItems, setCartItems] = useState<number>(0)
  return (
    <div className="sticky top-0 bg-white ">
      <div className=" py-4 flex justify-center items-center space-x-16">
        <Link href={"/"}>
          <div className="w-36 flex-shrink-0 px-4">
            <Image src={"/Logo.png"} alt="Dine Market" width={380} height={380} />
          </div>
        </Link>
        <div className='hidden lg:flex justify-between items-center w-full'>
          <ul className="flex gap-x-10">
            <li className="text-lg">
              <Link href={"/category/female"}>Female</Link>
            </li>
            <li className="text-lg">
              <Link href={"/category/male"}>Male</Link>
            </li>
            <li className="text-lg">
              <Link href={"/category/kids"}>Kids</Link>
            </li>
            <li className="text-lg">
              <Link href={"/allproducts"}>All Products</Link>
            </li>
          </ul>
          <div className='border flex text-slate-600 px-3 rounded-md items-center '>
            <BiSearch />
            <input type='text' placeholder='What you looking for' className='pr-5 py-1 w-64 ' />
          </div>
          <div >
            <CartIcon />
          </div>
        </div>
        <div onClick={() => setNabarOpen(!isNavbarOpen)}>
          {isNavbarOpen ?
            <div className='flex lg:hidden'>
              <IoMdClose size={28} />
            </div>
            :
            <div className='flex lg:hidden'>
              <GiHamburgerMenu size={30} />
            </div>
          }
        </div>
      </div>
      {
        isNavbarOpen && <MobileNavbar />
      }
    </div>
  )
}

export default Navbar
