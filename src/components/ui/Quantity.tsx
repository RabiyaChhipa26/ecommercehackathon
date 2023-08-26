'use client';
import React, { useState } from 'react'

const Quantity = () => {
    const [num, setNum] = useState(1)

    return (
        <div className='center gap-x-2'>
            {/* Minus */}
            <button className='h-7 w-7 rounded-full border center' onClick={() => setNum(num <= 1 ? 1 : num - 1)}>
                -
            </button>
            {/* Number */}
            <span className='text-sm'> {num} </span>
            {/* Plus */}
            <button className='h-7 w-7 rounded-full border center' onClick={() => setNum(num >= 10 ? 10 : num + 1)}>
                +
            </button>
        </div >
    )
}

export default Quantity;


