import React from 'react';
import { BsThreeDotsVertical, BsLaptop } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai';
import { CgShapeCircle } from 'react-icons/cg';


const SingleUser = ({ u, user, email, role, plan, status, action }) => {
    return (
        <tr className=' border-[2px]'>
            {!user && <td className=" px-4 py-2">
                <div className='flex justify-center items-center' >
                    < div >
                        <img className='w-10 h-10 rounded-full' src={u.image} alt="" />
                    </ div>


                    <div className='flex flex-col items-start' >
                        <p className='text-gray-700' >{u.name}</p>
                        <p className='text-gray-500' >{u.user}</p>
                    </div>
                </div >

            </td >}
            {!email && <td className=" px-4 py-2 text-gray-500">{u.email}</td>}
            {!role && <td className=" px-4 py-2 text-gray-500 flex items-center">


                <span className=' text-yellow-500 text-xl'>{(u.role === "Admin") && <BsLaptop></BsLaptop>}</span>
                <span className='mr-2 text-xl'>{(u.role === "Editor") && <MdOutlineModeEdit></MdOutlineModeEdit>}</span>
                <span className='mr-2 text-xl'>{(u.role === "Author") && <AiFillSetting></AiFillSetting>}</span>
                <span className='text-yellow-500 text-2xl'>{(u.role === "Maintianer") && <CgShapeCircle></CgShapeCircle>}</span>
                <span className='mr-2 text-xl'>{(u.role === "Subscriber") && <AiOutlineUser></AiOutlineUser>}</span>

                {u.role}

            </td>}
            {!plan && <td className=" px-4 py-2">{u.plan}</td>}
            {!status && <td className=" px-4 py-2">{u.status}</td>}
            {!action && <td className=" px-4 py-5 flex justify-end items-center  border-none text-xl"><BsThreeDotsVertical></BsThreeDotsVertical></td>}
        </tr >


    );
};

export default SingleUser;