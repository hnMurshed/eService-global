import React from 'react';
import CustomBtn from '../../../shared/CustomBtn';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-section text-center'>
            <div className="banner-content custom-container">
                <div className="banner-headline">
                    <h2 className=' capitalize text-6xl linear-text'>we can help with...</h2>
                </div>
                <CustomBtn>OUR SERVICES</CustomBtn>
            </div>
        </section>
    );
};

export default Banner;