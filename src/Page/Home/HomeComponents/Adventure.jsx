import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';

const Adventure = () => {
    return (
        <div className='pt-20 container mx-auto px-12'>
            <div>
                <SharedHeading sortHeading={"Discover Your Next Adventure"} heading={"From hidden gems to iconic destinations, there’s always something new to explore."}></SharedHeading>
            </div>
            <div className='flex gap-10 items-center justify-between mt-15'>
                <div className='flex gap-8 items-center justify-center hover:scale-105 duration-300 rounded-xl shadow-lg shadow-orange-200'>
                    <div>
                        <img className='w-95 h-65 rounded-xl' src={"https://i.postimg.cc/pXHqyH6Z/discover1.jpg"} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold pb-3'>Discover Exotic Places</h1>
                        <p className='text-gray-700 w-80 pb-4'>Experience the beauty of exotic locations, stunning landscapes, and thrilling adventures that await you around the world.</p>
                        <div className='border w-50 text-center p-2 rounded-lg bg-[#E5E7EB] border-gray-400 hover:border-[#306366] hover:bg-[#306366] hover:text-[#FFFFFF] font-semibold hover:scale-105 duration-300 cursor-pointer'>
                            <p>Explore More</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center rounded-xl hover:scale-105 duration-300 justify-center shadow-lg shadow-orange-200'>
                    <div>
                        <img className='w-95 h-65 rounded-xl' src={"https://i.postimg.cc/WbvXtvyc/discover2.jpg"} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold pb-3'>Unforgettable Journeys</h1>
                        <p className='text-gray-700 w-80 pb-4'>Embark on journeys that will leave you with memories for a lifetime. Explore unique cultures, cuisine, and more.</p>
                        <div className='border w-50 text-center p-2  rounded-lg bg-[#E5E7EB] border-gray-400 hover:border-[#306366] hover:bg-[#306366] hover:text-[#FFFFFF] font-semibold hover:scale-105 duration-300 cursor-pointer'>
                            <p>Start Your Journey</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Adventure;