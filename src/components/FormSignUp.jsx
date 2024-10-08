import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconGoogle from '../assets/images/IconGoogle.png';
import Sunday from '../assets/images/Sunday.png';
import Sunday1 from '../assets/images/Sunday1.png';

const FormSignUp = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/Login');
    };

    return (
        <>
            <div className="flex flex-wrap w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 flex items-end justify-end">
                <img src={Sunday} className="w-[97%]" alt={Sunday} />
            </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="w-[380px] mx-auto">
                        <h1 className="text-5xl font-bold text-center text-black">Create Acount</h1>
                        <form className='mt-10'>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="border-b border-black focus:outline-none w-full pb-2"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border-b border-black focus:outline-none w-full pb-2"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="border-b border-black focus:outline-none w-full pb-2"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="w-full h-14 bg-red-500 rounded-md border-2 border-red-500 hover:bg-white hover:text-red-500 active:scale-105 transform duration-200 text-white font-semibold">
                                    Register
                                </button>
                            </div>
                            <div className="text-center text-base font-medium my-1">Or</div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="w-full h-14 rounded-md border-2 border-black hover:bg-black hover:text-white active:scale-105 transform duration-200 text-black font-semibold">
                                    <div className="flex justify-center items-center space-x-3">
                                        <img src={IconGoogle} class="w-6 h-6" alt={IconGoogle}/>
                                        <div className='text-base'>SignUp with Google</div>
                                    </div>
                                </button>
                            </div>
                            <div className="mt-8 text-center text-base">Already have account? <span className='font-bold underline underline-offset-2 cursor-pointer hover:text-blue-600' onClick={goToLogin}>Login</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormSignUp;