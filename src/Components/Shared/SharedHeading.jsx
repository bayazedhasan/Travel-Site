import React from 'react';

const SharedHeading = ({ sortHeading, heading }) => {
    return (
        <div className='container mx-auto px-4 sm:px-6 md:px-12'>
            <div className='text-center'>
                <h3 className='text-[#1F2937] text-lg sm:text-xl font-semibold'>{sortHeading}</h3>
                <h1 className='text-[#1F2937] text-2xl sm:text-4xl font-bold mt-2'>{heading}</h1>
            </div>
        </div>
    );
};

export default SharedHeading;
