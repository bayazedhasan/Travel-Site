import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div className='sticky top-0 z-50 bg-white shadow-md shadow-amber-200'>
                <div className='flex items-center justify-between container mx-auto px-4 lg:px-12 '>

                    {/* Logo */}
                    <Link to={"/"}>
                        <img className='w-20 lg:w-20' src="/assets/logo-removebg-preview.png" alt="Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex gap-10 text-[15px] font-medium text-gray-700'>
                        {["/", "/discover", "/services", "/testimonials", "/blog", "/contact"].map((path, index) => {
                            const labels = ["Home", "Discover", "Services", "Testimonials", "Blogs", "Contact"];
                            return (
                                <NavLink
                                    key={index}
                                    to={path}
                                    className="hover:text-amber-600 transition-all duration-200"
                                >
                                    {labels[index]}
                                </NavLink>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className='md:hidden text-2xl text-gray-800'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className='md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-gray-700 font-medium'>
                    {["/", "/discover", "/services", "/testimonials", "/blog", "/contact"].map((path, index) => {
                        const labels = ["Home", "Discover", "Services", "Testimonials", "Blogs", "Contact"];
                        return (
                            <NavLink
                                key={index}
                                to={path}
                                onClick={() => setOpen(false)}
                                className="hover:text-amber-600 transition-all duration-200"
                            >
                                {labels[index]}
                            </NavLink>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Header;
