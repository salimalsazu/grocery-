import React from 'react';
import { useSelector } from 'react-redux';
import SingleCart from '../components/SingleCart';


const Cart = () => {

    const { cart } = useSelector((state) => state.cart)

    let content;

    if (cart.length > 0) {
        content = cart.map(singleCart => <SingleCart singleCart={singleCart} key={singleCart.id} />)
    } else if (cart.length === 0) {
        content = <p className='font-extrabold text-2xl text-red-500'> No Product has Been Added </p>
    }


    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 justify-center mx-auto">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {content}
            </ul>
            <div className="space-y-1 text-right">
                {/* <p>Total amount:
                <span className="font-semibold">357 €</span>
            </p> */}
                <p className="text-sm dark:text-gray-400">{cart.length > 0 && "Not including taxes and shipping costs"}</p>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                {
                    cart.length > 0 && <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                }
            </div>
        </div>



    );
};

export default Cart;