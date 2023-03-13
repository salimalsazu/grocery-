import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';

const LeftSide = () => {
    return (
        <div className='flex bg-gray-100 h-full'>
            <aside>
                <Dashboard />
            </aside>
            <main className='w-full m-20 ' >
                <Outlet />
            </main>

        </div>
    );
};

export default LeftSide;