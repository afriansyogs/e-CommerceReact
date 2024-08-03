import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import FlashSales from '../components/FlashSales';
import Category from '../components/Category';
import BestProduct from '../components/BestProduct';
import Footer from '../components/Footer';
import OurProduct from '../components/OurProduct';
import Featured from '../components/Featured';
import Service from '../components/Service';

const Home = () => {
    return (
        <>
        <Header />
        <Navbar />
        <div className="flex">
        <Sidebar /> 
        <Carousel />
        </div>
        <FlashSales />
        <Category />
        <BestProduct />
        <OurProduct />
        <Featured />
        <Service />
        <Footer />
        </>
    );
};

export default Home;