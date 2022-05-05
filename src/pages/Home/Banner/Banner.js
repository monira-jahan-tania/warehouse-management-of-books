import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/bg.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <h2>A room without Books is like a body without a soul</h2>
            <p className='description'>“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”
                – Charles W. Eliot</p>
            <Link to='/items'><p className='hero-btn'>See All Items</p></Link>

        </div>
    );
};

export default Banner;