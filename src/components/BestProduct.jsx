// src/components/BestProduct.jsx
import React from 'react';
import productData from './ProductData';

const BestProduct = () => {
    // Urutkan produk berdasarkan penjualan terbanyak
    const sortedProducts = productData.sort((a, b) => b.terjual - a.terjual);
    // Ambil 10 produk teratas
    const bestProducts = sortedProducts.slice(0, 10);

    return (
        <>
        <div className="mt-14 ms-[70px] w-[90%]">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">This Month</div>
            </div>
            <div className="mt-2 flex justify-between items-end">
                <div className="text-[36px] font-bold">
                    Browse By Category
                </div>
                    <button className='w-40 h-14 rounded-md bg-red-500 text-white border-2 hover:bg-white hover:text-red-500 hover:border-red-500 active:scale-110 transition duration-200'>View All</button>
            </div>
            <div className="overflow-x-auto scrollbar-hide ">
                <div className="flex gap-8 mt-12 w-max pb-8">
                    {bestProducts.map((product, index) => (
                        <div key={index} className="group relative card bg-base-100 w-72 shadow-xl overflow-hidden">
                            <figure className="w-full h-48 flex justify-center items-center bg-gray-200">
                                <div className="absolute top-3 right-3">
                                    <button className="w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-red-500 hover:text-white transition duration-200">
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                    <button className="mt-2 w-8 h-8 bg-white flex items-center justify-center rounded-full active:scale-110 hover:bg-black hover:text-white transition duration-200">
                                        <i className="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <img src={product.images} alt={product.productName} className="max-w-full max-h-full object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[16px] font-medium">{product.productName}</h2>
                                <p>{product.productDescription}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-[16px] font-medium text-red-500">{product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex justify-center bg-white py-2">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-32 bg-black w-full h-[500px]"></div>
            <div className="mt-10"></div>
        </div>
        </>
    );
};

export default BestProduct;
