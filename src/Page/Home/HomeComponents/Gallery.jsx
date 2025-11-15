import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';

const Gallery = () => {
    const {gallery} = useData()
    return (
        <div className='container mx-auto px-'>
            <div className='pt-15'>
                <SharedHeading sortHeading={"Our Gallery"} heading={"Capture Unforgettable Moments"}></SharedHeading>
            </div>
            <div className='grid grid-cols-4 gap-4 py-15 justify-between'>
                {
                    gallery.slice(0,8).map(g=>(
                        <div>
                            <img className='w-110 h-70 object-cover rounded-xl' src={g.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Gallery;