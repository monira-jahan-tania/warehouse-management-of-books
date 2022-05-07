import React from 'react';
import contact from '../../../images/contact.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact container mx-auto'>
            <div className='contact-heading'>
                <h1>Contact Us</h1>
                <div className="line"></div>
            </div>
            <div className='contact-form'>
                <div className='d-flex align-items-center justify-content-center'>
                    <form className='message'>
                        <h3>Send Message</h3>
                        <input name='name' placeholder='Enter Your Name' type="text" />
                        <input name='Email' placeholder='Enter Your Name' type="text" />
                        <textarea name="message" placeholder='Enter YOur Message'></textarea>
                        <input className='btn' type="submit" value="Send"></input>
                    </form>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={contact} width='400px' height='400px' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;