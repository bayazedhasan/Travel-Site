import React from 'react';
import Hero from './HomeComponents/Hero';
import BookNow from './HomeComponents/BookNow';
import Packages from './HomeComponents/Packages';
import PopularHotels from './HomeComponents/PopularHotels';
import Adventure from './HomeComponents/Adventure';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BookNow></BookNow>
            <Packages></Packages>
            <PopularHotels></PopularHotels>
            <Adventure></Adventure>
        </div>
    );
};

export default Home;