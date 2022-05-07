import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Items></Items>
            <Contact></Contact>

        </div>
    );
};

export default Home;