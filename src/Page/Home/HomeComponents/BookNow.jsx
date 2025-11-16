import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FaCar, FaHotel, FaPlaneDeparture, FaShip } from 'react-icons/fa';

const BookNow = () => {
    const [active, setActive] = useState("hotel");
    const [openMenu, setOpenMenu] = useState(false); // mobile dropdown toggle

    return (
        <div>

            {/*TOP BUTTONS (Mobile: Scrollable Row)*/}
            <div className="flex gap-1 lg:gap-4 container mx-auto px-4 md:px-12 mt-10 justify-center 
                overflow-x-auto no-scrollbar">

                <div
                    onClick={() => setActive("hotel")}
                    className={`px-4 py-2 duration-300 flex shrink-0 lg: items-center 
                    hover:bg-[#306366] rounded-full cursor-pointer
                    ${active === "hotel" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
                >
                    <FaHotel />
                    <p>Hotel</p>
                </div>

                <div
                    onClick={() => setActive("flight")}
                    className={`px-4 py-2 duration-300 flex shrink-0 gap-1 items-center 
                    hover:bg-[#306366] rounded-full cursor-pointer
                    ${active === "flight" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
                >
                    <FaPlaneDeparture />
                    <p>Flight</p>
                </div>

                <div
                    onClick={() => setActive("car")}
                    className={`px-4 py-2 duration-300 flex shrink-0 gap-1 items-center 
                    hover:bg-[#306366] rounded-full cursor-pointer
                    ${active === "car" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
                >
                    <FaCar />
                    <p>Car</p>
                </div>

                <div
                    onClick={() => setActive("ship")}
                    className={`px-4 py-2 duration-300 flex shrink-0 gap-1 items-center 
                    hover:bg-[#306366] rounded-full cursor-pointer
                    ${active === "ship" ? "bg-[#306366] text-white" : "bg-[#E5E7EB] text-black"}`}
                >
                    <FaShip />
                    <p>Ship</p>
                </div>
            </div>

            {/* MOBILE TOGGLE BUTTON*/}
            <div className="container mx-auto px-4 md:hidden mt-6">
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="w-full bg-[#306366] flex items-center justify-center gap-2 
                   text-white p-3 rounded-md font-semibold"
                >
                    {openMenu ? (
                        <>
                            Close <AiOutlineUp className="text-xl" />
                        </>
                    ) : (
                        <>
                            Book Now <AiOutlineDown className="text-xl" />
                        </>
                    )}
                </button>
            </div>


            {/* ====== FORM SECTION */}
           <div className="container mx-auto px-4 md:px-12 pt-10">

      {/* FORM SECTION */}
      <div className={`${openMenu ? "block" : "hidden md:block"}`}>

        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>

          <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
            <p className='text-[#374151]'>Your Destination</p>
            <input className='border hover:border-[#306366] w-full lg:w-40 p-2 rounded-md' type="text" placeholder='Thailand' />
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
            <p className='text-[#374151]'>Check In</p>
            <input className='border hover:border-[#306366] w-full lg:w-40 p-2 rounded-md' type="date" />
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
            <p className='text-[#374151]'>Check Out</p>
            <input className='border hover:border-[#306366] w-full lg:w-40 p-2 rounded-md' type="date" />
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
            <p className='text-[#374151]'>Adult</p>
            <input className='border hover:border-[#306366] w-full lg:w-40 p-2 rounded-md' type="text" placeholder='2' />
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
            <p className='text-[#374151]'>Child</p>
            <input className='border hover:border-[#306366] w-full lg:w-40 p-2 rounded-md' type="text" placeholder='2' />
          </div>

          <div className='border bg-[#306366] text-white text-sm font-semibold cursor-pointer w-full lg:w-30 text-center p-3 rounded-md'>
            <input className='cursor-pointer' type="submit" value="Book Now" />
          </div>

        </div>

      </div>

    </div>
    </div>

    );
};

export default BookNow;
