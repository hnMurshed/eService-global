import React from 'react';
import { Link } from 'react-router-dom';
import './CustomBtn.css';

const CustomBtn = ({children}) => {
    return (
        <>
            <Link to="/services" className='custom-btn bg-primary'>{children}</Link>
        </>
    );
};

export default CustomBtn;