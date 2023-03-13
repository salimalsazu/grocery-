import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd, } from 'react-icons/ai';
import {
    BsClipboard, BsChevronDown, BsFillArrowLeftCircleFill, BsArrowRightCircleFill
} from 'react-icons/bs';
import { GrChapterAdd } from 'react-icons/gr';


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [hide, setHide] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        console.log(option);
        setIsOpen(false);
    };

    const subMenu = [
        { value: 'option1', label: 'Users Sub Menu-1', path: "/dashboard/AllUser" },
        { value: 'option2', label: 'Users Sub Menu-1', path: "/dashboard/AllUser" },

    ];

    return (
        <aside className="w-full h-screen p-6 sm:w-60 ">
            <nav className={` absolute duration-500 ease-in-out space-y-8 text-lg text-gray-500 ${hide ? "-left-24" : "left-20"}`}>
                <div className="space-y-2">

                    <div className='flex justify-between items-center mb-5'>
                        <div>
                            <h2 className={`text-sm tracking-widest uppercase font-bold ${hide && "text-white"}`}>Admin Panel </h2>
                        </div>

                        <div>
                            <button onClick={() => setHide(!hide)} className={`text-blue-600 ml-10`} >{hide ? <BsArrowRightCircleFill></BsArrowRightCircleFill> : <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>}</button>
                        </div>
                    </div>

                    <div className={`flex flex-col space-y-1 ${hide && "hidden"} `}>


                        <div className="relative inline-block text-left">
                            <div>
                                <div className='flex items-center '
                                    onClick={handleToggle}
                                >
                                    <span className='flex items-center ' ><BsClipboard className='mr-2'></BsClipboard> All Users</span>
                                    <BsChevronDown className='ml-5 cursor-pointer'></BsChevronDown>
                                </div>
                            </div>
                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {subMenu.map((option) => (
                                            <Link to={option.path}

                                                key={option.value}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                onClick={() => handleSelect(option)}
                                            >
                                                {option.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link rel="noopener noreferrer" to='/dashboard/adduser'> <span className='flex items-center mt-3' ><AiOutlineUserAdd className='mr-2'></AiOutlineUserAdd> Add New User</span></Link>
                        <Link rel="noopener noreferrer" to='/dashboard/addProduct'> <span className='flex items-center mt-3'><GrChapterAdd className='mr-2'></GrChapterAdd> Add New Product</span></Link>
                    </div>
                </div>

            </nav>
        </aside >
    );
};

export default Dashboard;