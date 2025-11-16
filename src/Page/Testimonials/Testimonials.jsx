
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SharedHeading from '../../Components/Shared/SharedHeading';
import useData from '../../hooks/useData';
import Footer from '../../Components/Shared/Footer';

const Testimonials = () => {
    const { customerss } = useData()

    return (
        <><div className='container mx-auto px-12 my-12'>
            <div>
                <SharedHeading sortHeading={"What Our Customers Say"} heading={"Hear from our happy travelers who have had wonderful experiences with us."}></SharedHeading>
            </div>
            <div className='pt-15 grid grid-cols-3 gap-6 justify-center'>
                {
                    customerss.map(C => (
                        <div className='border w-110 border-none flex flex-col justify-center items-center p-5 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-amber-200'>
                            <div>
                                <img className='rounded-full w-30 object-cover h-30 mb-2' src={C.img} alt="" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-[#1F2C37] text-center text-md w-80'>"{C.description}"</p>
                                <div className='flex gap-1 pt-2'>
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                    <IoStar color='#FACC15' />
                                </div>
                                <h1 className='text-xl pt-2 font-semibold text-gray-700 hover:text-[#306366]'>{C.name}</h1>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        <Footer></Footer>
        </>
    );
};

export default Testimonials;