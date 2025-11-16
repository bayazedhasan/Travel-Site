import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router';

const Packages = () => {
    const { packages } = useData()

    return (
        <div className='pt-15 container mx-auto px-6 lg:px-12'>
            <SharedHeading sortHeading={"Special Offers"} heading={"Don't miss out on our exclusive deals and discounts!"}></SharedHeading>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6'>
                    {
                        packages.slice(0, 6).map(p => (
                            <div key={p.packageNumber}>
                                <div className='border border-gray-300 rounded-xl flex flex-col shadow-lg shadow-amber-200 cursor-pointer
                        h-[340px] sm:h-105 w-full sm:w-115 items-center hover:scale-105 duration-300'>

                                    <div>
                                        <img className='w-85 sm:w-115 h-[200px] sm:h-65 object-cover rounded-t-xl' src={p.img} alt="" />
                                    </div>
                                    <p className='text-gray-700 text-center text-lg sm:text-xl p-1 sm:p-2'>{p.packageNumber}</p>
                                    <div className='text-center'>
                                        <h2 className='text-[#1A1E18] text-2xl sm:text-3xl font-semibold hover:text-[#306366]'>{p.country}</h2>
                                        <p className='text-gray-700 text-sm pt-1'>{p.shortMessage}</p>
                                        <div className='flex gap-2 sm:gap-3 items-center pt-2 justify-center'>
                                            <p className='text-red-50 text-sm sm:text-md bg-amber-700 w-16 sm:w-18 text-center rounded-2xl'>${p.price}</p>
                                            <p className='text-gray-700 text-sm sm:text-md line-through'>${p.mrp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Link to={"/discover"}>
                    <div className='flex gap-1 justify-end pt-12 text-gray-500 items-center cursor-pointer'>
                        <button className='cursor-pointer text-lg font-semibold'>More Countrys</button>
                        <IoIosArrowRoundForward size={30} />
                    </div>
                </Link>
            </div>
            
            </div>

    );
};

export default Packages;