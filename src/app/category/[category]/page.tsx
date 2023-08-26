
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { urlForImage } from '../../../../sanity/lib/image';
import DataFetching from '../../../../sanity/lib/DataFetching';

export interface Product {
    id: string,
    title: string,
    slug: string,
    category: string,
    price: number,
    subcategory: string,
}

export async function generateStaticParams() {
    const data = await DataFetching();
    return data.map((item: any) => ({
        product: item.slug.current,
    }))
}

export default async function page({ params }: { params: Product }) {
    const res = await DataFetching();
    const filteredData = res.filter(
        (item: any) =>
            item.category === params.category
    )

    return (
        <div>
            <div className='grid grid-cols-3 justify-center gap-x-5 mt-12'>
                {filteredData.map((data: any) => (
                    <Link href={`/product/${data.slug.current}`} className='pb-10' key={data.id}>
                        <Image className='max-h-[250px] object-cover' src={urlForImage(data.image).url()} alt={data.title} width="250" height="300" />
                        <h3 className='font-semibold pt-3'>{data.title}</h3>
                        <h3 className='text-gray-500 font-semibold'>{data.subcategory}</h3>
                        <h3 className='font-semibold'>${data.price}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}
