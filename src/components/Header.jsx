// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-black w-full h-12">
            <div className="flex justify-center items-center pt-3">
                <div className="text-md text-white font-light">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                <div className="text-md text-white font-semibold ms-3">ShopNow</div>
                {/* <div className="text-white justify-items-end">hai</div> */}
            </div>
            <div className="absolute right-14 top-0 text-white">
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <details>
                            <summary className='text-white'>English</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li className='text-black hover:bg-black hover:text-white rounded-lg'><a>Indonesia</a></li>
                                <li className='text-black hover:bg-black hover:text-white rounded-lg'><a>Spanyol</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            
            {/* <div className="flex">
                <div className="justify-center items-center">
                    <div className="text-md text-white font-light">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                    <div className="text-md text-white font-semibold ms-3">ShopNow</div>
                </div>
                <div className="justify-end items">
                    <div className="text-md text-white font-light">tet!</div>

                </div>
            </div> */}
        </header>
    );
};

export default Header;
