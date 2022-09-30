import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#323B43] text-white">
            <div className="custom-container py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    <div>
                        <span className=" text-white text-xl font-bold mb-2">About</span>
                        <p>We offer social media management, social media advertising Google PPC ads, email marketing, website design, search engine optimization and more.</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=" text-white text-xl font-bold mb-2">Contact</span>
                        <p>01882820824</p>
                        <p>murshedbinamir@gmail.com</p>
                        <p>13No, Lelang, Hadinagar, Fatikchari, Chattagram, Bangladesh</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=" text-white text-xl font-bold mb-2">Services</span>
                        <Link to='services/social-media-marketing'>Social Media Marketing</Link>
                        <Link to='services/social-media-ads'>Social Media Ads</Link>
                        <Link to='services/pay-per-click'>Pay Per Click</Link>
                        <Link to='services/email-marketing'>Email Marketing</Link>
                        <Link to='services/seo-service'>Search Engine Optimization</Link>
                        <Link to='services/web-design'>Web Design</Link>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className=" text-white text-xl font-bold mb-2">Community</span>
                        <Link to='/case-studies'>Our Case Studies</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/home'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className=" bg-[#2D363D] py-3 text-center">
                <span>&copy; {new Date().getFullYear} - eService Global. AAll Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;