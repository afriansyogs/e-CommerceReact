// src/components/Sidebar.jsx
import React from 'react';

const category = [
        { category: "Woman's Fashion", url: 'https://example.com/womans-fashion' },
        { category: "Men's Fashion", url: 'https://example.com/mens-fashion' },
        { category: "Electronics", url: 'https://example.com/electronics' },
        { category: "Home & Lifestyle", url: 'https://example.com/home-lifestyle' },
        { category: "Medicine", url: 'https://example.com/medicine' },
        { category: "Sports & Outdoor", url: 'https://example.com/sports-outdoor' },
        { category: "Baby's & Toys", url: 'https://example.com/babys-toys' },
        { category: "Groceries & Pets", url: 'https://example.com/groceries-pets' },
        { category: "Health & Beauty", url: 'https://example.com/health-beauty' }
    ];

const Sidebar = () => {
    return (
        <div className="h-97 w-72 px-12 flex flex-col border-e-2 border-base-300">
            <nav className="flex-1 p-2 pt-4">
                <ul className="">
                    {category.map((item, index) => (
                        <li key={index} className="text-black block py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">
                            <a href={item.url}>{item.category}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
