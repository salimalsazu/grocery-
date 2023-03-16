import React, { useRef, useState } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import { AiOutlineFilePdf, AiOutlineFileExcel, AiFillPrinter, AiFillCaretDown } from 'react-icons/ai';

import { useReactToPrint } from "react-to-print";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleUser from './SingleUser';



const AllUsers = () => {
    const conponentPDF = useRef();

    const [user, setUser] = useState(false);
    const [email, setEmail] = useState(false);
    const [role, setRole] = useState(false);
    const [plan, setPlan] = useState(false);
    const [status, setStatus] = useState(false);
    const [action, setAction] = useState(false);



    const [isOpen, setIsOpen] = useState(false);



    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    //data fetch 

    const { users } = useSelector((state) => state.users)


    let allUser;

    if (users.length > 0) {
        allUser = users.map(u => <SingleUser u={u} user={user} email={email} role={role} plan={plan} status={status} action={action}   ></SingleUser>)
    }



    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Userdata",
        onAfterPrint: () => alert("Data saved in PDF")
    });

    return (
        <div>
            <h1 className='text-blue-500 font-bold text-2xl' >All Users</h1>
            <div className='bg-white mt-5 shadow-md shadow-gray-400 rounded-md  w-full h-screen p-10 '>
                <div className='flex justify-between items-center ' >
                    <div className='flex gap-4' >
                        <button onClick={generatePDF} className='px-6 py-1 border rounded-lg text-gray-500 flex items-center  ' ><AiOutlineFilePdf className='mr-2'></AiOutlineFilePdf>PDF</button>


                        <ReactHtmlTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button"
                            table="table-to-xls"
                            filename="AllUser"
                            sheet="tablexls"
                            buttonText={
                                <button className='px-6 pdf-button py-1 border rounded-lg text-gray-500 flex items-center' ><AiOutlineFileExcel className='mr-2'></AiOutlineFileExcel>EXCEL</button>
                            }
                        />

                        <button className='px-6 py-1 border rounded-lg text-gray-500 flex items-center ' ><AiFillPrinter className='mr-2' ></AiFillPrinter>PRINT</button>
                        <button className='px-6 py-1 border rounded-lg text-gray-500 ' >

                            <div className="relative inline-block text-left">
                                <div>
                                    <div className='flex items-center '
                                        onClick={handleToggle}
                                    >SHOW/HIDE CLOUMN  <AiFillCaretDown></AiFillCaretDown>

                                    </div>
                                </div>
                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                                            <div className='flex items-center'>
                                                <input onClick={() => setUser(!user)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">User</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input onClick={() => setEmail(!email)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">Email</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input onClick={() => setRole(!role)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">Role</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input onClick={() => setPlan(!plan)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">Plan</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input onClick={() => setStatus(!status)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">Status</label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input onClick={() => setAction(!action)} type="checkbox" name="" id="" />
                                                <label className='ml-3' htmlFor="">Action</label>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>


                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <input className='px-4 py-1 border rounded-lg' type="text" name="" id="" placeholder='Search Invoice' />
                        <Link to="/dashboard/adduser" ><button className='px-4 py-1 border rounded-lg text-white bg-blue-500'>ADD NEW USER</button></Link>
                    </div>
                </div>

                <div className='mt-3' ref={conponentPDF} style={{ width: '100%' }} >
                    <table id="table-to-xls" className="table-auto w-full ">
                        <thead className='bg-gray-100 w-full rounded-lg text-gray-600'>
                            <tr>
                                {!user && <th className="px-4 py-2">User</th>}
                                {!email && <th className="px-4 py-2">Email</th>}
                                {!role && <th className="px-4 py-2">Role</th>}
                                {!plan && <th className="px-4 py-2">Plan</th>}
                                {!status && <th className="px-4 py-2">Status</th>}
                                {!action && <th className="px-4 py-2">Action</th>}
                            </tr>
                        </thead>
                        <tbody className='border-hidden text-center' >
                            {allUser}

                        </tbody>

                    </table>

                </div>
            </div >
        </div >
    );
};

export default AllUsers;