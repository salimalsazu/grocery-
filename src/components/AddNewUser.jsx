import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/features/users/userSlice';
import Swal from 'sweetalert2'

const AddNewUser = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageHostKey = "f04df4e1343869002a97bc435ec536f7";

    const roles = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Author', label: 'Author' },
        { value: 'Maintianer', label: 'Maintianer' },
        { value: 'Subscriber', label: 'Subscriber' },
    ];
    const plans = [
        { value: 'Enterprise', label: 'Enterprise' },
        { value: 'Team', label: 'Team' },
        { value: 'Company', label: 'Company' },
        { value: 'Basic', label: 'Basic' },

    ];

    const dispatch = useDispatch()

    const handleSubmitUser = (data) => {

        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);
                }
                const dataUser = {
                    ...data,
                    image: imgData.data.url,
                    status: "pending"

                }
                // console.log(dataUser);
                dispatch(addUser(dataUser))
                reset()
                Swal.fire('User has been added')
            })
    }

    return (
        <div >
            <h1 className='text-blue-500 font-bold text-2xl' >Add New User</h1>

            <div className='bg-white mt-5 shadow-md shadow-gray-400 rounded-md  w-full h-full p-10 ' >
                <form onSubmit={handleSubmit(handleSubmitUser)} className="w-full max-w-lg mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                User Name
                            </label>
                            <input
                                {...register("user", { required: true })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                placeholder='@user name'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                placeholder='Your Name'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="name"
                                type="text"
                                placeholder=' Your Email'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Upload Image
                            </label>
                            <input
                                {...register("image", { required: true })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="file"
                                min="0"
                                step="0.01"
                                placeholder='Your Image Link'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Role
                            </label>
                            <select {...register("role", { required: true })} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                {roles.map((role) => (
                                    <option key={role.value} value={role.value}>
                                        {role.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Plan
                            </label>
                            <select {...register("plan", { required: true })} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                {plans.map((plan) => (
                                    <option key={plan.value} value={plan.value}>
                                        {plan.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                Add User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;