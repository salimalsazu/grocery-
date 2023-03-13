import React from 'react';
import { Link } from 'react-router-dom';

const AllLink = ({ singleNav }) => {
    return (
        <div className='hover:bg-gray-400 hover:rounded-lg hover:p-2 p-2 '>
            <Link to={singleNav.src}> {singleNav.title} </Link>
        </div>
    );
};
export default AllLink;