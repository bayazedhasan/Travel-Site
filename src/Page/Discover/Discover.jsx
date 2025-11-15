import React from 'react';

import SharedHeading from '../../Components/Shared/SharedHeading';
import useData from '../../hooks/useData';

const Discover = () => {
    const {packages} = useData()

    return (
        <div className='my-15 container mx-auto px-12'>
            <SharedHeading sortHeading={"Special Offers"} heading={"Don't miss out on our exclusive deals and discounts!"}></SharedHeading>
            <div className=' mt-10'>
                <div className='grid grid-cols-3 items-center gap-6'>
                    {
                        packages.map(p=>(
                            <div>
                                <div className='border border-gray-300 rounded-xl flex flex-col shadow-lg shadow-amber-200 cursor-pointer h-105 w-115 items-center hover:scale-105 duration-300'>
                                    
                                    <div>
                                        <img className='w-115 h-65 object-cover rounded-t-xl' src={p.img} alt="" />
                                    </div>
                                    <p className='text-gray-700 text-center text-xl p-2'>{p.packageNumber}</p>
                                    <div className='text-center'>
                                        <h2 className='text-[#1A1E18] text-3xl font-semibold hover:text-[#306366]'>{p.country}</h2>
                                    <p className='text-gray-700 text-sm pt-1'>{p.shortMessage}</p>
                                    <div className='flex gap-3 items-center pt-2 justify-center'>
                                        <p className='text-red-50 text-md bg-amber-700 w-18 text-center rounded-2xl '>${p.price}</p>
                                    <p className='text-gray-700 text-md line-through'>${p.mrp}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Discover;