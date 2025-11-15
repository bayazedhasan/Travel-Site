import React from 'react';

const SharedHeading = ({sortHeading,heading}) => {
    return (
        <div className='container mx-auto px-12'>
            <div className='text-center'>
                <h3 className='text-[#1F2937] text-xl font-semibold'>{sortHeading}</h3>
                <h1 className='text-[#1F2937] text-3xl font-bold'>{heading}</h1>
            </div>
        </div>
    );
};

export default SharedHeading;