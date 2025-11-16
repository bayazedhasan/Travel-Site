import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';
import { FaComments } from 'react-icons/fa';
import { TiEye } from 'react-icons/ti';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router';

const Blogs = () => {
    const {blogs} = useData()
    return (
        <div className='pt-30 container mx-auto px-12'>
            <div>
                <SharedHeading sortHeading={"Our Latest Blogs"} heading={"Discover inspiring stories, tips, and guides from our expert travelers."}></SharedHeading>
            </div>
            <div className='grid grid-cols-3 gap-6 justify-center items-center pt-15'>
                {
                    blogs.slice(0,3).map(b=>(
                        <div className='w-115 border border-gray-200 rounded-lg shadow-lg shadow-amber-200'>
                            <div>
                                <img className='w-115 rounded-lg h-50 object-cover' src={b.img} alt="" />
                            </div>
                            <div className='p-6'>
                                <p className='font-semibold text-sm text-gray-700 pb-2'>{b.name}</p>
                                <h2 className='text-xl font-semibold text-gray-800 pb-4'>{b.shortMessage}</h2>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <FaComments />
                                    <p className='text-sm text-gray-500 font-semibold'>{b.comment}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <TiEye />
                                        <p className='text-sm text-gray-500 font-semibold'>{b.views}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to={"/blog"}>
            <div className='flex gap-1 justify-end pt-12 hover:text-[#306366] text-gray-500 items-center cursor-pointer'>
                <button className='cursor-pointer text-lg  font-semibold'>More Blogs</button>
                <IoIosArrowRoundForward size={30}/>
            </div>
            </Link>
        </div>
    );
};

export default Blogs;