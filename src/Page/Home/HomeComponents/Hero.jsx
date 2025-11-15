import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-12 pt-8'>
            <div 
                className="bg-[url('https://i.postimg.cc/Kzq1QJJQ/hero.jpg')] bg-cover bg-center h-[340px] md:h-[460px] lg:h-140 w-full rounded-xl"
            >
                <div 
                    className='flex flex-col justify-center items-center h-full text-center px-4'
                    data-aos="fade-up"
                >
                    <h1 
                        className='text-3xl md:text-5xl lg:text-6xl text-[#FFFFFF] font-bold leading-tight md:leading-[60px] lg:leading-20'
                        data-aos="zoom-in"
                    >
                        Experience the World, Your Way!
                    </h1>

                    <p 
                        className='text-[#FFFFFF] text-sm md:text-lg lg:text-xl mt-3 md:mt-4 lg:mt-1'
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Discover exciting destinations, find amazing deals, and book your dream vacation hassle-free.
                    </p>

                    <Link to={"/services"}>
                        <div 
                            className='flex gap-1 items-center hover:scale-105 mt-6 duration-300 w-32 md:w-36 lg:w-40 justify-center p-2 md:p-3 rounded-full bg-[#FFFFFF]'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <button className='font-semibold text-sm md:text-base'>Explore</button>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
