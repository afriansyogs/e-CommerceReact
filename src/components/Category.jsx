// src/components/Category.jsx
import React from 'react';
import productData from './ProductData';

const Category = () => {

    const filterSubCategory = productData
    .map(product => product.subCategory)
    .filter((subCategory, index, self) => self.indexOf(subCategory) === index);


    return (
        <>
        <div className="mt-20 ms-[70px] w-[90%]">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-600 rounded-md"></div>
                <div className="ms-4 text-md text-red-600 font-semibold">Categories</div>
            </div>
            <div className="mt-2 flex items-end">
                <div className="text-[36px] font-bold">
                    Browse By Category
                </div>
            </div>
            <div className="flex gap-8 mt-14">
                {filterSubCategory.map((subCategory, index) => (
                    <div key={index} className="w-40 h-36 border-2 border-black p-2 flex items-center justify-center">
                        <div className="text-base font-semibold">
                            {subCategory}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Category;
