import React from 'react';
import { useNavigate } from 'react-router-dom';
import Qrcode1 from '../assets/images/Qrcode1.png';
import GooglePlay from '../assets/images/GooglePlay.png';
import AppStore from '../assets/images/AppStore.png';

const Footer = () => {

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/SignUp');
    };

    return (
        <footer className="bg-black w-full h-auto p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className='ms-5'>
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
                <div className='w-[217px] ms-12'>
                    <h3 className="text-xl font-medium mb-2">Support</h3>
                    <ul>
                        <li className='py-2'><p className="text-[16px]">SetiaBudi 115, Jakarta Selatan, DKI Jakarta, Indonesia.</p></li>
                        <li className='py-2'><p  className="text-[16px]">exclusive@gmail.com</p></li>
                        <li className='py-2'><p  className="text-[16px]">+62-812-456-3374</p></li>
                    </ul>
                </div>
                <div className='w-44 ms-16'>
                    <h3 className="text-xl font-medium mb-2">Account</h3>
                    <ul>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">My Account</a></li>
                        <li className='py-2'><a onClick={goToSignUp} className="text-[16px] hover:underline cursor-pointer">Login / Register</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Cart</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Wishlist</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Shop</a></li>
                    </ul>
                </div>
                <div className='ms-5'>
                    <h3 className="text-xl font-medium mb-2">Quick Link</h3>
                    <ul>
                    <li className='py-2'><a href="#" className="text-[16px] hover:underline">Privacy Policy</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Terms Of Use</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">FAQ</a></li>
                        <li className='py-2'><a href="#" className="text-[16px] hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className='pr-5'>
                    <h3 className="text-xl font-medium mb-2">Download App</h3>
                    <ul>
                        <li>
                            <p className="text-[12px] text-gray-400">
                                Save $3 with App New User Only
                            </p>
                        </li>
                        <div className="flex flex-row mt-2">
                            <div className="w-[40%]">
                                <img src={Qrcode1} class="w-20 h-20" alt={Qrcode1}/>
                            </div>
                            <div className="w-1/2">
                                <img src={GooglePlay} class="w-[104px] h-[30px]" alt={GooglePlay}/>
                                <img src={AppStore} class="w-[104px] h-[30px] mt-4" alt={AppStore}/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-7 ms-8">
                            <i className="fa-brands fa-facebook-f transition-transform duration-200 hover:-translate-y-1"></i>
                            <i className="fa-brands fa-x-twitter transition-transform duration-200 hover:-translate-y-1"></i>
                            <i className="fa-brands fa-instagram transition-transform duration-200 hover:-translate-y-1"></i>
                            <i className="fa-brands fa-linkedin-in transition-transform duration-200 hover:-translate-y-1"></i>
                            <i className="fa-brands fa-wikipedia-w transition-transform duration-200 hover:-translate-y-1"></i>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
