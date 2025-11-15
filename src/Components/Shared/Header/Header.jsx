import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex items-center justify-between container mx-auto px-12  pt-2 shadow-md shadow-amber-200 '>

                {/* Logo */}
                <div>
                    <Link to={"/"}>
                        <img className='w-15 lg:w-18' src="/assets/logo-removebg-preview.png" alt="" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-12 text-sm text-gray-800 '>
                    <NavLink to={"/"}><p className='hover:text-gray-600 font-semibold'>Home</p></NavLink>
                    <NavLink to={"/discover"}><p className='hover:text-gray-600 font-semibold'>Discover</p></NavLink>
                    <NavLink to={"/services"}><p className='hover:text-gray-600 font-semibold'>Services</p></NavLink>
                    <NavLink to={"/testimonials"}><p className='hover:text-gray-600 font-semibold'>Testimonials</p></NavLink>
                    <NavLink to={"/contact"}><p className='hover:text-gray-600 font-semibold'>Contact</p></NavLink>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className='md:hidden text-2xl text-gray-800'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className='md:hidden bg-white border-b border-gray-300 py-4 px-12 flex flex-col gap-4 text-gray-800'>
                    <NavLink onClick={() => setOpen(false)} to={"/"}>
                        <p className='hover:text-gray-600 font-semibold'>Home</p>
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to={"/discover"}>
                        <p className='hover:text-gray-600 font-semibold'>Discover</p>
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to={"/services"}>
                        <p className='hover:text-gray-600 font-semibold'>Services</p>
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to={"/testimonials"}>
                        <p className='hover:text-gray-600 font-semibold'>Testimonials</p>
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to={"/contact"}>
                        <p className='hover:text-gray-600 font-semibold'>Contact</p>
                    </NavLink>
                </div>
            )}
        </>
    );
};

export default Header;
