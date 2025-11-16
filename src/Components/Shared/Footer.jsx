import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaGithubSquare, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import useData from '../../hooks/useData';

const Footer = () => {
    const {gallery} = useData()
    return (
        <>
        <div className='container mx-auto px-6'>
            <div className='flex justify-between  mt-24 mb-6'>
            <div>
                <img className='w-25' src="/assets/logo-removebg-preview.png" alt="" />
                <p className='text-[#253D4E] w-90 mb-4'>Have questions or need assistance? Our friendly customer support team is here to help. Get in touch with us via phone, email, or live chat, and we'll gladly assist you with any inquiries or concerns. Your satisfaction is our top priority!</p>
                <div className="flex flex-col gap-2 text-xl ">
                    <p className="text-[#253D4E] text-md font-medium">Follow us on:</p>

                   <div className='flex gap-3'>
                     <a
                        href="https://www.facebook.com/bayazedhasan49"
                        className="hover:text-blue-600 duration-300"
                    >
                        <FaFacebook size={24}/>
                    </a>

                    <a
                        href="https://github.com/bayazedhasan"
                        className="hover:text-gray-900 duration-300"
                    >
                        <FaGithubSquare size={24}/>
                    </a>

                    <a
                        href="https://www.instagram.com/bayazedhasan"
                        className="hover:text-pink-600 duration-300"
                    >
                        <FaInstagram size={24}/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bayazedhasan24"
                        className="hover:text-blue-700 duration-300"
                    >
                        <CiLinkedin size={24}/>
                    </a>
                   </div>
                </div>

            </div>
            <div className='grid grid-cols-3'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-2 '>Services</h1>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Flight Booking</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'>Hotel Reservations</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Car Rentals</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Travel Insurance</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Destination Guides</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-2'>Contact Info</h1>
                    <p className='flex gap-1 items-center text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>
                        <FaPhoneAlt />
                        +880 1791971760
                    </p>
                    <p className='flex gap-1 items-center text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'><FaPhoneAlt />Sun-Fri 9:00-18:00</p>
                    <p className='flex gap-1 items-center text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'><IoLocationOutline /> 123 Travel Street, City</p>
                    
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-2'>Gallery</h1>
                    <div className='grid grid-cols-3 gap-3'>
                    
                    {
                        gallery.slice(0,6).map(g=>(
                            <div>
                                
                                <img className='w-25 h-20 object-cover' src={g.img} alt="" />
                            </div>
                        ))
                    }
                </div>
                </div>
                
            </div>
            
        </div>
        <div>
            <div className='border border-b border-gray-200'></div>
            <div>
                <h2 className='text-xs text-gray-800 text-center mt-4 mb-7'>© 2025 Travels. All rights reserved.</h2>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default Footer;