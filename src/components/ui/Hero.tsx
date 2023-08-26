'use client';
import Image from 'next/image';
import HeroSectionImg from "@/components/assets/Images/HeroSectionImg.png";
import { BsCart2 } from 'react-icons/bs';
import BazaarLogo from "@/components/assets/Images/BazaarLogo.webp";
import BustleLogo from "@/components/assets/Images/BustleLogo.webp";
import VersaceLogo from "@/components/assets/Images/VersaceLogo.webp";
import InstyleLogo from "@/components/assets/Images/InstyleLogo.webp";
import { ShoppingCart } from 'lucide-react';

const Hero = () => {
  const btnText = "Start\n Shopping"
  return (
    <div className='px-6 flex justify-center items-center mt-5 '>
      {/* Left Section */}
      <div className='space-y-10 max-w-[50%] mt-5 lg:mt-10'>
        <div className='bg-[#e1edff] text-blue-700 rounded-md font-semibold w-28 h-10 flex justify-center items-center p-2 '>
          Sale 70%
        </div>
        <h1 className='text-5xl lg:text-6xl font-bold lg:tracking-wide'>
          An Industrial Take on Streetwear
        </h1>
        <p className='text-slate-500 max-w-[70%]'>
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <button className='flex gap-1 bg-slate-900 p-6 text-white font-semibold rounded-md'>
          <ShoppingCart className="mr-2 h-6 w-6" />
          {btnText}
        </button>
        <div className='flex flex-shrink-0 items-center gap-4 '>
          <Image src={BazaarLogo} alt='Bazaar' height={100} width={100} />
          <Image src={BustleLogo} alt='Bazaar' height={100} width={100} />
          <Image src={VersaceLogo} alt='Bazaar' height={100} width={100} />
          <Image src={InstyleLogo} alt='Bazaar' height={100} width={100} />
        </div>
      </div>
      {/* Right Section */}
      <div className='hidden md:flex md:h-900 w-800 rounded-full bg-[#ffece3] max-w-[50%]'>
        <Image src={HeroSectionImg} alt='HeroSectionImage' height={600} width={550} />
      </div>
    </div>
  )
}

export default Hero