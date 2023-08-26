'use client';
import { BsCart2 } from 'react-icons/bs';
import { useState } from 'react';

const CartIcon = () => {
    const [ cartItems, setCartItems] = useState<number>(0)
    return (
        <div className='flex-shrink-0 relative w-10 h-10 bg-gray-200 rounded-full items-center flex justify-center'>
            <div className='w-4 h-4 text-xs right-2 absolute top-1 bg-red-500 text rounded-full font-light flex justify-center items-center'>{cartItems}</div>
            <BsCart2 size={22} />
        </div>
    )
}

export default CartIcon