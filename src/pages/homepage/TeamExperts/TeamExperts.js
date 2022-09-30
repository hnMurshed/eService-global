import React from 'react';
import './TeamExperts.css';
import groupWorkImg from '../../../images/group-people-working-out-business-plan-office1.jpg';
import CustomBtn from '../../shared/CustomBtn';

const TeamExperts = () => {
    return (
        <section className='team-experts-section'>
            <div className="image-with-text custom-container">
                <div className="img-area">
                    <img src={groupWorkImg} alt="group-people-working-out-business-plan-office" />
                </div>
                <div className="text-area">
                    <h2 className=' text-3xl font-bold mb-6'>Team of Experts at your Disposal</h2>
                    <p>We offer social media management, social media advertising Google PPC ads, email marketing, website design, search engine optimization and more. <br />
                        It’s as easy as, you tell us about your business and how it’s run and we do all the heavy lifting.</p>
                    <p>Our company saves small businesses money compared to hiring in-house and we’re experts at what we do. We’re month to month, which makes it easy to turn it on or off. In short, we help businesses grow and hit their goals because we’re a full service agency.</p>
                    <div className=" mt-8">
                        <CustomBtn>GET STARTED</CustomBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamExperts;