import React, { useState } from 'react';
import { BsFileMinus, BsFilePlus } from 'react-icons/bs';

const SingleProducts = ({ product }) => {

    const [change, setChange] = useState(false)

    const handleAddtoCart = () => {
        setChange(!change)

    }


    return (
        <div className="p-6 rounded-md shadow-md">
            <img src={product.image} alt="" className="object-cover object-center w-full rounded-md h-60" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase ">{product.name}</span>
                <div className='flex items-center justify-between mt-5' >
                    <h2 className="text-xl font-semibold tracking-wide">Price: ${product.price}</h2>
                    <p className="text-black">QTY: {product.stock}</p>
                </div>
            </div>
            <div>
                {
                    !change && <button onClick={handleAddtoCart} className='w-full py-2 bg-blue-600 text-white rounded-md' >Add to Product</button>
                }

                {
                    change && <div className='w-full py-2 bg-white text-gray-700  font-bold border rounded-lg' >

                        <div className='flex items-center justify-center text-2xl' ><span className='mr-3' ><BsFileMinus></BsFileMinus></span>
                            <span>0</span>
                            <span><BsFilePlus className='ml-3' ></BsFilePlus></span>

                            <button className='px-6 py-1 bg-blue-600 rounded-lg text-white ml-4' >Buy Now</button>
                        </div>


                    </div>
                }
            </div>
        </div>


    );
};


export default SingleProducts;