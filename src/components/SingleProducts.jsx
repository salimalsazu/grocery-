import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFileMinus, BsFilePlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToBuy, addToCart } from '../redux/features/carts/cartSlice';
import { decrementQuantity, incrementQuantity, updateQty, stockIncrement, stockDecrement } from '../redux/features/products/productsSlice';

const SingleProducts = ({ product }) => {

    const dispatch = useDispatch()

    const [change, setChange] = useState(false)

    const handleAddtoBuy = () => {
        setChange(!change)
        dispatch(updateQty(product))
        dispatch(addToBuy(product))

    }
    const { buy } = useSelector((state) => state.cart)

    console.log(buy);


    const handleIncrement = () => {
        if (product.stock > 0) {
            dispatch(stockDecrement(product?.id))
            dispatch(incrementQuantity(product?.id))
        }
    }

    const handleDecrement = () => {

        if (product.quantity > 1) {
            dispatch(stockIncrement(product?.id))
            dispatch(decrementQuantity(product?.id))
        }

    }

    ///price update 
    const total = product.price * product.quantity;



    //add to Cart 

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success('Product has been added to cart')
    }



    return (
        <div className="p-6 rounded-md shadow-md">
            <img src={product.image} alt="" className="object-cover object-center w-full rounded-md h-60" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase ">{product.name}</span>
                <div className='flex items-center justify-between mt-5' >
                    <h2 className="text-xl font-semibold tracking-wide">Price: ${total}</h2>
                    <p className="text-black">QTY: {product.stock}</p>
                </div>
            </div>
            <div>
                {
                    !change && <button onClick={handleAddtoBuy} className='w-full py-2 bg-blue-600 text-white rounded-md' >Add to Product</button>
                }

                {
                    change && <div className='w-full py-2 bg-white text-gray-700  font-bold border rounded-lg' >

                        <div className='flex items-center justify-center text-2xl' ><span onClick={handleDecrement} className='mr-3' ><BsFileMinus></BsFileMinus></span>
                            <span> {product.quantity}</span>

                            <span onClick={handleIncrement} ><BsFilePlus className='ml-3' ></BsFilePlus></span>

                            <button onClick={handleAddToCart} className='px-6 py-1 bg-blue-600 rounded-lg text-white ml-4' >Buy Now</button>
                        </div>


                    </div>
                }
            </div>
        </div>


    );
};


export default SingleProducts;