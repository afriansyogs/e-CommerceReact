// src/components/ContactCompany.jsx
import React from 'react';
// import CarouselGambar1 from '../assets/images/Carousel1.png';

const ContactCompany = () => {
    return (
        <div className="h-screen">
            <h1 className='mt-3 text-center text-2xl font-bold '>Contact</h1>
            <div className="w-[90%] mx-auto">
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="w-1/2">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666307543373!2d106.82458402475007!3d-6.175408343811958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2db8c5617%3A0x4e446b7ac891d847!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1724207839247!5m2!1sid!2sid"
                    className='w-full h-96'
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default ContactCompany;
