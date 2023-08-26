import React from 'react';
import DataFetching from "../../../sanity/lib/DataFetching";
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';

export default async function ProductSection() {
    const data = await DataFetching();
   

    return (
        <div className='lg:mt-16'>
            <div className="text-center space-y-3">
                <p className="text-blue-600 font-bold text-sm">PRODUCTS</p>
                <h3 className="text-3xl text-gray-800 font-bold">Check What We Have</h3>
            </div>
            <div className="flex overflow-x-auto mt-10">
                {data.map((product: any, index: number) => (
                    <div key={index} className='flex-shrink-0'>
                        <div className='flex flex-col items-center transform transition-transform hover:scale-95'>
                            <Image src={urlForImage(product.image).url()} alt="" width={500} height={500} className='w-80' />
                            <h4 className='text-gray-800 font-semibold tracking-wider text-lg mt-2'>{product.title}</h4>
                            <h4 className='text-gray-800 font-semibold text-xl'>${product.price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

