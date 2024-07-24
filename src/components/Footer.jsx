import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black w-full h-auto p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Exclusive</h1>
                    <ul>
                        <li className='py-2'>
                            <p className="text-white text-xl font-medium">Subscribe</p>
                        </li>
                        <li className='py-2'>
                            <p className="text-md">Get 10% off your first order</p>
                        </li>
                        <li className='py-2'>
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 border border-white bg-transparent text-white placeholder-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"/>
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 text-white">
                                    <i class="fa-solid fa-paperclip"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-2">Support</h3>
                    <ul>
                        <li className='py-2'><p className="text-[16px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p></li>
                        <li className='py-2'><p  className="text-[16px]">exclusive@gmail.com</p></li>
                        <li className='py-2'><p  className="text-[16px]">+88015-88888-9999</p></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-2">Account</h3>
                    <ul>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">My Account</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Login / Register</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Cart</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Wishlist</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Shop</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-2">Quick Link</h3>
                    <ul>
                    <li className='py-2'><a href="#" className="text-[16px] hover:underline">Privacy Policy</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Terms Of Use</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">FAQ</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-2">Download App</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Link 1</a></li>
                        <li><a href="#" className="hover:underline">Link 2</a></li>
                        <li><a href="#" className="hover:underline">Link 3</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
