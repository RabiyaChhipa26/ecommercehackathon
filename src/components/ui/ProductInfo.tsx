import React from 'react';


const ProductInfo = async () => {
    return (
        <div className=' m-20'>
            <div className='items-center '>
                <h5 className='absolute text-7xl items-center pb-4 font-bold text-gray-200'>Overview</h5>
                <h2 className='relative text-2xl font-bold pt-5 pl-1'>Product Information</h2>
                <hr className="h-px my-12 bg-gray-200 border-1 dark:bg-gray-900"></hr>
            </div>
            {/* BottomSection */}
            <div className='' >
                {/* Div 1 */}
                <div className="flex flex-wrap">
                    <div className="flex-[40%] h-20 mt-8 ">
                        <h3 className='font-bold text-gray-500 pl-6'>PRODUCT DETAILS</h3>
                    </div>
                    <div className="flex-[60%] h-20">
                        <p className='mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis repudiandae modi! Fugit illum pariatur quas nulla eveniet deserunt laudantium vero.</p>
                    </div>
                </div>
                {/* Div 2 */}
                <div className="flex flex-wrap mt-2">
                    <div className="flex-[40%] h-20 mt-12">
                        <h3 className='font-bold text-gray-500 pl-6'>PRODUCT CARE</h3>
                    </div>
                    <div className="flex-[60%] h-20 mt-10">
                        <ul className='list-disc pl-4 font-semibold'>
                            <li>Hand wash using cold water.</li>
                            <li>Do not using bleach.</li>
                            <li>Hang it to dry..</li>
                            <li>Iron on low temperature.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductInfo;

