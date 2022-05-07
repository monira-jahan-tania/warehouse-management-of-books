import React from 'react';
import about from '../../../images/about.jpeg';
import './About.css';

const About = () => {
    return (
        <div className='about my-5 mx-auto'>
            <div className='about-info mx-5'>
                <h1>About Us</h1>
                <p>Reading is a very good habit that one needs to develop in life. Good books can inform you, enlighten you and lead you in the right direction. There is no better companion than a good book. Reading is important because it is good for your overall well-being. Once you start reading, you experience a whole new world. When you start loving the habit of reading you eventually get addicted to it. Reading develops language skills and vocabulary. Reading books is also a way to relax and reduce stress. It is important to read a good book at least for a few minutes each day to stretch the brain muscles for healthy functioning. So we start to make a good quality stock for the inventors.</p>
            </div>
            <div className='about-img'><img width='500px' src={about} alt="" /></div>
        </div>
    );
};

export default About;