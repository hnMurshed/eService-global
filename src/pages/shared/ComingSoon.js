import React from 'react';

const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b3663',
    height: '100vh'
}
const textStyle = {
    fontSize: '60px',
    padding: '20px 0',
    fontWeight: 'bold'
}

const ComingSoon = () => {
    return (
        <section style={sectionStyle}>
            <span className='linear-text' style={textStyle}>COMING SOON</span>
        </section>
    );
};

export default ComingSoon;