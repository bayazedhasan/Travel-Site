import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Customers = () => {
    const { customerss } = useData()

    return (
        <div className='container mx-auto px-12'>
            <div>
                <SharedHeading sortHeading={"What Our Customers Say"} heading={"Hear from our happy travelers who have had wonderful experiences with us."}></SharedHeading>
            </div>
            <div className='pt-15 grid grid-cols-3 justify-center'>
                {
                    customerss.slice(0, 3).map(C => (
                        <div className='border w-110 border-none flex flex-col justify-center items-center p-5 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-amber-200'>
                            <div>
                                <img className='rounded-full w-30 object-cover h-30 mb-2' src={C.img} alt="" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-[#1F2C37] text-center text-md w-80'>"{C.description}"</p>
                                <div className='flex gap-1 pt-2'>
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                </div>
                                <h1 className='text-xl pt-2 font-semibold text-gray-700 hover:text-[#306366]'>{C.name}</h1>

                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to={"/testimonials"}>
                <div className='flex gap-1 justify-end pt-12 hover:text-[#306366] text-gray-500 items-center cursor-pointer'>
                    <button className='cursor-pointer text-lg  font-semibold'>More</button>
                    <IoIosArrowRoundForward size={30} />
                </div>
            </Link>
            <div className=' mb-12 container mx-auto px-2 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center text-center pt-20 '>
                    <h1 className='text-3xl leading-14 font-semibold text-[#1F2937]'>Stay Updated</h1>
                    <p className='text-gray-500 text-md w-180'>Sign up for our newsletter to get the latest news, travel deals, and tips delivered straight to your inbox!</p>
                </div>
                <div className="relative w-115 mt-6">
                    <input
                        className="border p-3 w-100 rounded-lg border-gray-300 hover:border-[#306366] "
                        type="email"
                        name="Email"
                        placeholder="Enter your email"
                    />

                    <button
                        className="absolute right-0 top-0 h-full w-45 bg-[#306366] cursor-pointer  text-white px-4 rounded-r-lg"
                    >
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Customers;