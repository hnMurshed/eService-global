import React from 'react';
import './Services.css';
import socialMediaIcon1 from '../../../../images/icons/004-social-media-1.png';
import socialMediaIcon from '../../../../images/icons/003-social-media.png';
import payPerClickIcon from '../../../../images/icons/002-pay-per-click.png';
import emailMarketingIcon from '../../../../images/icons/001-email-marketing.png';
import seoReportIcon from '../../../../images/icons/005-seo-report.png';
import webDesignIcon from '../../../../images/icons/006-web-design.png';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate()
    return (
        <section className='service-section'>
            <div className="custom-container">
                <h2 className='section-title'>Your Social Media and Online Lead Generation Experts</h2>
                <div className="services">
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/social-media-marketing')}>
                            <img src={socialMediaIcon1} alt="" />
                            <img src={socialMediaIcon1} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/social-media-marketing')}>Social Media Marketing</h3>
                    </div>
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/social-media-ads')}>
                            <img src={socialMediaIcon} alt="" />
                            <img src={socialMediaIcon} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/social-media-ads')}>Social Media Ads</h3>
                    </div>
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/pay-per-click')}>
                            <img src={payPerClickIcon} alt="" />
                            <img src={payPerClickIcon} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/pay-per-click')}>Pay Per Click</h3>
                    </div>
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/email-marketing')}>
                            <img src={emailMarketingIcon} alt="" />
                            <img src={emailMarketingIcon} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/email-marketing')}>Email Marketing</h3>
                    </div>
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/seo-service')}>
                            <img src={seoReportIcon} alt="" />
                            <img src={seoReportIcon} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/seo-service')}>Search Engine Optimization</h3>
                    </div>
                    <div className="service">
                        <div className="service-icons" onClick={() => navigate('services/web-design')}>
                            <img src={webDesignIcon} alt="" />
                            <img src={webDesignIcon} alt="" />
                        </div>
                        <h3 className='service-name' onClick={() => navigate('services/web-design')}>Web Design</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;