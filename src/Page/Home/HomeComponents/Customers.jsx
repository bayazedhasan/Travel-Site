import React from 'react';
import SharedHeading from '../../../Components/Shared/SharedHeading';
import useData from '../../../hooks/useData';
import { IoStar } from 'react-icons/io5';

const Customers = () => {
    const {customerss} = useData()
    return (
        <div>
            <div>
                <SharedHeading sortHeading={"What Our Customers Say"} heading={"Hear from our happy travelers who have had wonderful experiences with us."}></SharedHeading>
            </div>
            <div>
                {
                    customerss.slice(0,3).map(c=>(
                        <div>
                            <div>
                                <img src={c.img} alt="" />
                            </div>
                            <div>
                                <p>{c.description}</p>
                                <div className='flex gap-1'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Customers;