import React, { useState, useEffect } from 'react';
import PsProduct from '../assets/images/PsProduct.png';
import Women from '../assets/images/Women.png';
import Parfume from '../assets/images/Parfume.png';
import Speaker from '../assets/images/Speaker.png';

const Featured =() => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000, // Durasi animasi dalam milidetik
                once: true,     // Animasi hanya terjadi sekali
            });
        }
    }, []);
    return (
        <div className="mt-16 ms-[70px] w-[90%] pb-36">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Featured</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">
                    New Arrival
                </div>
            </div>
            <div className="mt-12 flex flex-row gap-x-8">
                <div className="relative w-1/2 h-[600px] bg-black flex items-end justify-center" data-aos="fade-right">
                    <img src={PsProduct} className="w-[500px] h-[500px]" alt={PsProduct} />
                    <div className="absolute bottom-3 left-10 p-4 text-white">
                        <h1 className="text-2xl font-semibold">PlayStation 5</h1>
                        <div className="w-[242px]">
                            <p className="text-sm mt-[14px] pb-3">Black and White version of the PS5 coming out on sale.</p>
                        </div>
                        <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                    </div>
                </div>
                <div className="w-1/2 bg-transparant">
                    <div className="relative w-full h-[284px] bg-black flex items-end justify-end" data-aos="fade-down">
                        <img src={Women} className="h-[280px]" alt={Women}/>
                        <div className="absolute bottom-3 left-10 p-4 text-white">
                            <h1 className="text-2xl font-semibold">Women’s Collections</h1>
                            <div className="w-[220px]">
                                <p className="text-sm mt-[14px] pb-3">Featured woman collections that give you another vibe.</p>
                            </div>
                            <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-8 mt-8">
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <img src={Speaker} className="h-[220px]" alt={Speaker} />
                            <div className="absolute bottom-3 left-10 p-4 text-white">
                                <h1 className="text-2xl font-semibold">Speakers</h1>
                                    <p className="text-sm mt-[14px] pb-3">Amazon wireless speakers</p>
                                <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                        <div className="relative w-full h-[284px] bg-black flex items-center justify-center" data-aos="fade-up">
                            <img src={Parfume} className="h-[220px] filter drop-shadow-grey" alt={Parfume} />
                            <div className="absolute bottom-3 left-10 p-4 text-white">
                                <h1 className="text-2xl font-semibold">Perfume</h1>
                                    <p className="text-sm mt-[14px] pb-3">GUCCI INTENSE OUD EDP</p>
                                <a href='#' className="text-base font-medium underline underline-offset-2">Shop Now.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-x-36 justify-center mt-24" >
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-truck-fast fa-lg"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>FREE AND FAST DELIVERY</h1>
                        <p className='text-sm text-center'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-headset fa-xl"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-sm text-center'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center" data-aos="zoom-out">
                    <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-300 text-xl text-white flex items-center justify-center mb-2">
                        <i className="fa-solid fa-hand-holding-dollar fa-xl"></i>
                    </div>
                    <div className='items-center justify-center'>
                        <h1 className='font-semibold text-xl text-center'>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm text-center'>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;