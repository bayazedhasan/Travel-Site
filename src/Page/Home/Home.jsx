import React from 'react';
import Hero from './HomeComponents/Hero';
import BookNow from './HomeComponents/BookNow';
import Packages from './HomeComponents/Packages';
import PopularHotels from './HomeComponents/PopularHotels';
import Adventure from './HomeComponents/Adventure';
import Blogs from './HomeComponents/Blogs';
import Gallery from './HomeComponents/Gallery';
import Customers from './HomeComponents/Customers';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BookNow></BookNow>
            <Packages></Packages>
            <PopularHotels></PopularHotels>
            <Adventure></Adventure>
            <Blogs></Blogs>
            <Gallery></Gallery>
            <Customers></Customers>
        </div>
    );
};

export default Home;