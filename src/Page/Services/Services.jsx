import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import useData from '../../hooks/useData';
import SharedHeading from '../../Components/Shared/SharedHeading';
import Footer from '../../Components/Shared/Footer';


const PopularHotels = () => {
    const { hotels } = useData()
    return (
        <><div className='my-15 container mx-auto px-12'>
            <SharedHeading sortHeading={"Popular Hotels"} heading={"Discover some of the world’s most beautiful hotels."}></SharedHeading>
            <div className='grid grid-cols-3 items-center gap-6  pt-10'>
                {
                    hotels.map(h => (
                        <div>
                            <div className='border border-gray-300 rounded-xl flex flex-col shadow-lg shadow-amber-200 cursor-pointer h-100 w-115 hover:scale-105 duration-300'>

                                <div>
                                    <img className='w-115 h-60 object-cover rounded-t-xl' src={h.img} alt="" />
                                </div>

                                <div className='p-4'>
                                    <h2 className='text-[#1A1E18] text-3xl font-semibold hover:text-[#306366]'>{h.name}</h2>
                                    <div className='flex gap-1 items-center'>
                                        <CiLocationOn />
                                        <p className=' text-gray-700 text-sm pt-1'>{h.location}</p>
                                    </div>
                                    <div className='flex gap-1 items-center pt-2'>
                                        <FaStar color='#FACC15' />
                                        <FaStar color='#FACC15' />
                                        <FaStar color='#FACC15' />
                                        <FaStar color='#FACC15' />
                                        <FaRegStarHalfStroke color='#FACC15' />

                                        <p className='text-gray-700 text-md '>{h.rating}</p>
                                        <p className='text-gray-700 text-md'>{h.review}</p>

                                    </div>
                                    <p className='text-md text-gray-800 font-semibold'>${h.pricePerNight} per night</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
                

            </div>  
        </div>
        <Footer></Footer>
        </>
    );
};

export default PopularHotels;