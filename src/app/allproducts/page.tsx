import React from 'react';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';
import DataFetching from '../../../sanity/lib/DataFetching';

export default async function page() {
    const res = await DataFetching()

    return (
        <div>
            <div className='grid grid-cols-3 justify-evenly items-center gap-x-5 mt-12'>
                {res.map((products: any, index: number) => (
                    <Link href={`/product/${products.slug.current}`} className='pb-10' key={index}>
                        <Image className='max-h-[250px] object-cover' src={urlForImage(products.image).url()} alt={products.title} width="250" height="300" />
                        <h3 className='font-semibold pt-3'>{products.title}</h3>
                        <h3 className='text-gray-500 font-semibold'>{products.subcategory}</h3>
                        <h3 className='font-semibold'>${products.price}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

