import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';

const Gallery = () => {
    const { gallery } = useData()
    return (
        <div className='container mx-auto px-12'>
            <div className='pt-15'>
                <SharedHeading sortHeading={"Our Gallery"} heading={"Capture Unforgettable Moments"}></SharedHeading>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 justify-between'>
                {
                    gallery.slice(0, 8).map((g, idx) => (
                        <div key={idx}>
                            <img className='w-full sm:w-110 h-48 sm:h-70 object-cover rounded-xl' src={g.img} alt={`Gallery ${idx + 1}`} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Gallery;