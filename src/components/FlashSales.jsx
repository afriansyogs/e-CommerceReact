import React, { useState, useEffect } from 'react';
import productData from './ProductData';

const FlashSales = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="mt-14 ms-[70px]">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Today's</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">
                    Flash Sales
                </div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max ms-20">
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Days</div>
                        <span className="countdown font-mono text-4xl font-bold">
                        <span className='mx-auto' style={{ "--value": 3 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col text">
                        <div className="text-sm font-medium">Hours</div>
                        <span className="countdown font-mono text-4xl font-bold">
                        <span className='mx-auto' style={{ "--value": 10 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Minutes</div>
                        <span className="countdown font-mono text-4xl font-bold">
                        <span className='mx-auto' style={{ "--value": 24 }}></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">Seconds</div>
                        <span className="countdown font-mono text-4xl font-bold">
                        <span className='mx-auto' style={{ "--value": counter }}></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 mt-12 w-max pb-8">
                    {productData.map((item, index) => (
                        <div key={index} className="group relative card bg-base-100 w-72 shadow-xl overflow-hidden">
                            <figure className="w-full h-48 flex justify-center items-center bg-gray-200">
                                <div className="absolute top-3 left-3 w-14 h-7 bg-red-600 flex items-center justify-center rounded">
                                    <h1 className="text-white text-sm">
                                        -{item.discount}%
                                    </h1>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <button className=" w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                        <i class="fa-regular fa-heart"></i>
                                    </button>
                                    <button className="mt-2 w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                        <i class="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <img src={item.images} alt={item.productName} className="max-w-full max-h-full object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[16px] font-medium">{item.productName}</h2>
                                <p>{item.productDescription}</p>
                                <div className="flex">
                                    <p className='text-[16px] font-medium text-red-500'>{(item.harga - item.discount).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                    <p className='text-[16px] font-medium text-slate-400'><s>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</s></p>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-white py-2">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <button className='w-72 h-14 rounded-md bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 active:scale-110 transition duration-200'>View All Products</button>
            </div>
        </div>
        <div className=" border-b-2 border-base w-[91%] mx-auto mt-16"></div>
        <div className="">haha</div>
        </>
    );
};

export default FlashSales;
