// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menu = [
    { menu:'Home', url: '/', },
    { menu:'Contact', url: '/Contact', },
    { menu:'About', url: '/About', },   
    { menu:'Sign Up', url: 'https://example.com/yoga', }   
];

const Navbar = () => {

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/SignUp');
    };

    return (
        <div className="navbar bg-base-100 border-b-2 border-base-300">
            <div className="navbar-start">
                <a className="mx-16 text-2xl font-bold">Exclusive</a>
            </div>
            <div className="navbar-center hidden lg:flex me-12 justify-center">
                <ul className="menu-horizontal px-1 flex items-end justify-center space-x-5">
                    {menu.map((item, index) => (
                    item.menu === 'Sign Up' ? (
                        <li key={index} className="flex items-center">
                            <button onClick={goToSignUp} 
                                className={`btn-sm h-9 rounded-lg border-2 active:scale-105 font-semibold transform duration-200 
                                ${location.pathname === '/SignUp' ? 'bg-white text-black border-black' : 'bg-black text-white border-black hover:bg-white hover:text-black hover:border-black'}`}>
                                {item.menu}
                            </button>
                        </li>
                    ) : (
                        <li key={index} className="flex items-center">
                            <a href={item.url} className={`after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-[4px] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition after:duration-200 
                            ${location.pathname === item.url ? 'after:scale-x-100' : ''}`}>
                            {item.menu}
                            </a>
                        </li>
                        )
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <label class="input input-bordered flex items-center gap-2">
                    <input type="text" class="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-4 w-4 opacity-70">
                            <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                        </svg>
                </label>
                <button className="btn btn-ghost btn-circle hover:text-black">
                <i class="fa-regular fa-heart"></i>
                </button>
                <button className="btn btn-ghost btn-circle hover:text-black">
                    <i class="fa-solid  fa-cart-shopping "></i>
                </button>
                <button className="btn btn-ghost btn-circle hover:text-black me-11">
                    <i class="fa-solid  fa-user"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
