import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="custom-container flex justify-between items-center">
                <div className="navbarStart">
                    <Link className='text-4xl' to='/'>eService Global</Link>
                </div>
                <div className="navbarEnd">
                    <nav className='nav-menus flex gap-x-3'>
                        <Link to='/home'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/case-studies'>Our Case Studies</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/home'>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;