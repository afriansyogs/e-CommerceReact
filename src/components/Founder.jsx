// src/components/Founder.jsx
import React from 'react';

const Founder = () => {
    const founderData = [
        { founderName: 'James Cruise', position: 'Chief Technology Officer', founderImg: '../assets/images/founder111.png' },
        { founderName: 'Emma Watson', position: 'Chief Executive Officer', founderImg: '../assets/images/founder222.png' },
        { founderName: 'Will Smith', position: 'Chief Financial Officer', founderImg: '../assets/images/founder333.png' }
    ];

    return (
        <div className="flex justify-center w-full gap-32 pt-24">
            {founderData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="relative w-56 h-44 rounded-t-full bg-red-500">
                        <img src={item.founderImg} alt={item.founderName} className="absolute bottom-0 left-0 w-full h-72 object-cover rounded-t-full" />
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="text-black font-bold text-lg">{item.founderName}</h1>
                        <h2 className="text-black font-medium text-base">{item.position}</h2>
                    </div>
                    <div className="flex gap-4 mt-3">
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Founder;
