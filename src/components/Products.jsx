import React from 'react';
import { useSelector } from 'react-redux';

import SingleProducts from './SingleProducts';

const Products = () => {

    const { products } = useSelector((state) => state.products)

    let dataFetch;

    if (products.length > 0) {
        dataFetch = products.map(product => <SingleProducts product={product} key={product.id} ></SingleProducts>)
    }



    return (
        <div className='flex my-20'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full' >
                {dataFetch}
            </div>
        </div>
    );
};

export default Products;