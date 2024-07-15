// src/components/Carousel.jsx
import React from 'react';
import CarouselGambar1 from '../assets/images/Carousel1.png';

const Carousel = () => {
    return (
        <div class="carousel rounded-box w-[892px] h-[392px] mt-6 mx-auto">
            <div class="carousel-item w-full">
                <img
                    src={CarouselGambar1}
                    class="w-full"
                    alt={CarouselGambar1}/>
            </div>
        </div>
    );
};

export default Carousel;
