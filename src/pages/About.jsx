import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutStory from '../components/AboutStory';
import CardStatistic from '../components/CardStatistic';
import Service from '../components/Service';

const About = () => {
    return (
        <>
        <Header />
        <Navbar />
        <AboutStory />
        <CardStatistic />
        <Service />
        <Footer />
        </>
    );
};

export default About;