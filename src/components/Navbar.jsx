// src/components/Header.jsx
import React from 'react';

const menu = [
    { menu:'Home', url: 'https://example.com/yoga', },
    { menu:'Contact', url: 'https://example.com/yoga', },
    { menu:'About', url: 'https://example.com/yoga', },   
    { menu:'Sign Up', url: 'https://example.com/yoga', }   
];

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 border-b-2 border-base-300">
            <div className="navbar-start">
                <a className="mx-16 text-2xl font-bold">Exclusive</a>
            </div>
            <div className="navbar-center hidden lg:flex me-12">
                <ul className="menu menu-horizontal px-1">
                    {menu.map((item, index) => (
                    item.menu === 'Sign Up' ? (
                        <li key={index}>
                        <button className="btn btn-sm btn-active bg-black border-2 border-black text-white hover:bg-white hover:text-black hover:border-black mt-[2px]">
                            {item.menu}
                        </button>
                        </li>
                    ) : (
                        <li key={index} className="hover:text-black">
                        <a href={item.url}>{item.menu}</a>
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
