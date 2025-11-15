import React from 'react';
import { FaComments } from 'react-icons/fa';
import { TiEye } from 'react-icons/ti';
import SharedHeading from '../../Components/Shared/SharedHeading';
import useData from '../../hooks/useData';

const Blog = () => {
    const {blogs} = useData()
    return (
        <div className='my-15 container mx-auto px-12'>
            <div>
                <SharedHeading sortHeading={"Our Latest Blogs"} heading={"Discover inspiring stories, tips, and guides from our expert travelers."}></SharedHeading>
            </div>
            <div className='grid grid-cols-3 gap-6 justify-center items-center pt-15'>
                {
                    blogs.map(b=>(
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
        </div>
    );
};

export default Blog;