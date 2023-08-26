
import React from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import DataFetching from '../../../../sanity/lib/DataFetching';
import Image from 'next/image';
import Quantity from '@/components/ui/Quantity';
import { ShoppingCart } from 'lucide-react';
import ProductInfo from '@/components/ui/ProductInfo';

// export default function ProductDetails({
//     filteredData,
// }: {
//     filteredData: any;
// }) 
// {
//     const { userId } = useAuth();
//     // console.log(userId);
//     const [quantity, setQuantity] = useState(1);

//     // console.log("filteredData", filteredData);

//     function handleIncrement() {
//         setQuantity(quantity + 1);
//     }
//     function handleDecrement() {
//         setQuantity(quantity - 1);
//     }


// async function handleAddToCart(): Promise<void> {
//     try {
//         const res = await fetch("/api/cart", {
//             method: "POST",
//             body: JSON.stringify({
//                 user_id: userId,
//                 product_id: filteredData._id,
//                 product_title: filteredData.title,
//                 product_price: filteredData.price * quantity,
//                 product_quantity: quantity,
//                 image_url: urlForImage(filteredData.image).url(),
//             }),
//         });
//     } catch (error) {
//         console.log("error", error);
//     }
// }








const sizes = ["XS", "S", "M", "L", "XL"];

export default async function page({ params }: { params: any }) {
    const res = await DataFetching()
    const filteredData = res.find(
        (item: any) =>
            item.slug.current === params.product
    );

    return (
        <>
            <div className='center flex-wrap mt-12 bg-white' key={filteredData.id}>
                {/* Left Image */}
                <div className='flex-1 p-10 justify-between '>
                    <Image src={urlForImage(filteredData.image).url()} alt={filteredData.slug} width={420} height={420} />
                </div>
                {/* Right Content */}
                <div className='flex-1 '>
                    <div>
                        <h1 className='text-2xl'>{filteredData.title}</h1>
                        <h2 className='text-base font-semibold py-2 text-gray-400'>{filteredData.subcategory}</h2>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold mt-6'>SELECT SIZE</h3>
                        {/* Sizes */}
                        <div className='flex gap-x-3'>
                            {sizes.map((item) => {
                                return (
                                    <div className='center w-8 h-8 rounded-full border mt-2 hover:shadow-3xl duration-300 '>
                                        <span className='text-sm font-semibold text-center text-gray-600'>
                                            {item}
                                        </span>
                                    </div>
                                )
                            })};
                        </div>
                        {/* Quantity */}
                        <div className='flex mt-6 gap-3 items-center'>
                            <h3 className='text-md py-1 font-semibold'>Quantity:</h3>
                            <div>
                                <Quantity />
                            </div>
                            {/* Add to Cart */}
                            <div className=' gap-x-3'>
                                <button className='center gap-1 rounded-md bg-slate-900 p-3 text-white font-semibold '>
                                    <ShoppingCart className="mr-2 h-6 w-6" />
                                    Add to Cart
                                </button>
                                <h2 className='text-xl font-bold gap-x-3'>${filteredData.price.toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductInfo />
        </>
    )
}
    // function useAuth(): { userId: any; } {
    //     throw new Error('Function not implemented.');
    // }

    // function useState(arg0: number): [any, any] {
    //     throw new Error('Function not implemented.');
    // }

