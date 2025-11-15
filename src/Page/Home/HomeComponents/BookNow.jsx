import React, { useState } from 'react';
import { FaCar, FaHotel, FaPlaneDeparture, FaShip } from 'react-icons/fa';

const BookNow = () => {
    const [active, setActive] = useState("hotel");

    return (
        <div>
            <div className='flex gap-4 container mx-auto px-12 mt-10 justify-center'>

            
            <div
                onClick={() => setActive("hotel")}
                className={`px-4 py-2 duration-300 flex gap-1 items-center text-[#1F2937] hover:bg-[#306366] border border-none rounded-full cursor-pointer 
                ${active === "hotel" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
            >
                <FaHotel />
                <p>Hotel</p>
            </div>

            
            <div
                onClick={() => setActive("flight")}
                className={`px-4 py-2 duration-300 flex gap-1 items-center border text-[#1F2937] hover:bg-[#306366] border-none rounded-full cursor-pointer 
                ${active === "flight" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
            >
                <FaPlaneDeparture />
                <p>Flight</p>
            </div>

            
            <div
                onClick={() => setActive("car")}
                className={`px-4 py-2 duration-300 flex gap-1 items-center border border-none text-[#1F2937] hover:bg-[#306366] rounded-full cursor-pointer 
                ${active === "car" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
            >
                <FaCar />
                <p>Car</p>
            </div>

            
            <div
                onClick={() => setActive("ship")}
                className={`px-4 py-2 duration-300 flex gap-1 items-center border border-none text-[#1F2937] hover:bg-[#306366] rounded-full cursor-pointer 
                ${active === "ship" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
            >
                <FaShip />
                <p>Ship</p>
            </div>

        </div>
        <div className='flex items-center justify-between container mx-auto px-12 pt-10'>
            <div className=' flex items-center gap-2 '>
            <p className='text-[#374151]'>Your Destination</p>
            <input className='border hover:border-[#306366] w-40 p-2 rounded-md' type="text" name="" placeholder='Thailand' id="" />
            </div>
            <div className='flex items-center gap-2 '>
                <p className='text-[#374151]'>Check In</p>
                <input className='border hover:border-[#306366] w-40 p-2 rounded-md' type="date" name="date" id="" />
            </div>
            <div className='flex items-center gap-2 '>
                <p className='text-[#374151]'>Check Out</p>
                <input className='border hover:border-[#306366] w-40 p-2 rounded-md' type="date" name="date" id="" />
            </div>
            <div className='flex items-center gap-2 '>
                <p className='text-[#374151]'>Adult</p>
                <input className='border hover:border-[#306366] w-40 p-2 rounded-md' type="text" name="text" placeholder='2' id="" />
            </div>
            <div className='flex items-center gap-2 '>
                <p className='text-[#374151]'>Child</p>
                <input className='border hover:border-[#306366] w-40 p-2 rounded-md' type="text" name="text" placeholder='2' id="" />
            </div>
            <div className='border bg-[#306366] text-white text-sm font-semibold cursor-pointer w-30 text-center p-3 rounded-md'>
                <input className='cursor-pointer' type="submit" value="Book Now" />
            </div>
        </div>
        </div>
    );
};

export default BookNow;
