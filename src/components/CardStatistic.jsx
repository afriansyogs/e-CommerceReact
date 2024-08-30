import React, { useState, useEffect } from 'react';

const CardStatistic = () => {

    const fieldStatistic = [
        {jumlahStatistic:"10.5k", descriptionStatistic:"Sallers active our site", iconStatistic:"10.5k"},
        {jumlahStatistic:"33k", descriptionStatistic:"Mopnthly Produduct Sale", iconStatistic:"10.5k"},
        {jumlahStatistic:"45.5k", descriptionStatistic:"Customer active in our site", iconStatistic:"10.5k"},
        {jumlahStatistic:"25k", descriptionStatistic:"Anual gross sale in our site", iconStatistic:"10.5k"},
    ]
{/* <i class="fa-solid fa-shop"></i> */}

    return (
            <div className="flex flex-row gap-x-16 justify-center mb-32" data-aos="zoom-in" data-aos-duration="500">
                <div className="flex flex-col items-center justify-center w-64 h-60 border-2 border-black bg-transparent hover:bg-red-500 hover:text-white text-black group transition duration-105">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2 group-hover:border-red-300 group-hover:bg-white">
                        {/* <i className="fa-solid fa-truck-fast fa-lg group-hover:text-black transition"></i> */}
                        <i class="fa-solid fa-shop fa-lg group-hover:text-black transition"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='mt-2 font-bold text-3xl text-center'>10.5k </h1>
                        <p className='text-sm text-center mt-3'>Sallers active our site</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-64 h-60 border-2 border-black bg-transparent hover:bg-red-500 hover:text-white group transition duration-105">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2 group-hover:border-red-300 group-hover:bg-white">
                        <i className="fa-solid fa-money-bill-trend-up fa-xl group-hover:text-black transition"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='mt-2 font-bold text-3xl text-center'>33k</h1>
                        <p className='text-sm text-center mt-3'>Mopnthly Produduct Sale</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-64 h-60 border-2 border-black bg-transparent hover:bg-red-500 hover:text-white group transition duration-105">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2 group-hover:border-red-300 group-hover:bg-white">
                        <i className="fa-solid fa-users fa-xl group-hover:text-black transition"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='mt-2 font-bold text-3xl text-center'>45.5k</h1>
                        <p className='text-sm text-center mt-3'>Customer active in our site</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-64 h-60 border-2 border-black bg-transparent hover:bg-red-500 hover:text-white group transition duration-105">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2 group-hover:border-red-300 group-hover:bg-white">
                        <i className="fa-solid fa-sack-dollar fa-xl group-hover:text-black transition"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='mt-2 font-bold text-3xl text-center'>25k</h1>
                        <p className='text-sm text-center mt-3'>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
    );
};

export default CardStatistic;
