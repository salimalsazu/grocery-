import React from 'react';
import { useSelector } from 'react-redux';
import AllLink from './AllLink';

const Navbar = () => {

    const nav = [
        { id: 1, title: 'Home', src: '/' },
        { id: 1, title: 'Dashboard', src: '/dashboard' },
        { id: 1, title: 'My Cart', src: '/cart' },
        { id: 1, title: 'Login', src: '/login' },
    ]


    let navigation;

    navigation = nav.map(singleNav => <AllLink singleNav={singleNav}></AllLink>)

    return (
        <header className="p-4 bg-slate-300 sticky top-0 z-50">
            <div className="container flex justify-between h-10 mx-auto">
                <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <span className='text-3xl font-extrabold' >Salim_Grocery</span>
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {navigation}
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;