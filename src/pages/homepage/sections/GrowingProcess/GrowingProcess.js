import React from 'react';
import { FaCommentAlt } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import './GrowingProcess.css';

const GrowingProcess = () => {
    return (
        <section className='growing-process-section relative py-12'>
            <div className=" w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="custom-container text-white relative">
                <h2 className='text-3xl font-bold text-center text-white mb-12'>How We Help You Grow</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                    {/* stage-1 */}
                    <div className=" flex flex-col items-center">
                        <div className=" flex justify-center items-center w-[126px] h-[126px] relative bg-white rounded-full">
                            <span className=' absolute top-[6px] left-[60px] bg-primary py-1 px-2 border-2 border-white rounded-2xl text-sm'>Stage 1</span>
                            <span className=' text-[46px] text-black'><FaCommentAlt /></span>
                            <span className='arrow absolute text-3xl'><HiArrowNarrowRight /></span>
                        </div>
                        <h3 className=' text-2xl text-white font-bold my-2'>Foundation</h3>
                        <p>This is where we establish an online presence. Ex: Webpages, videos, photography, graphics, email drips</p>
                    </div>
                    {/* stage-2 */}
                    <div className=" flex flex-col items-center">
                        <div className=" flex justify-center items-center w-[126px] h-[126px] relative bg-white rounded-full">
                            <span className=' absolute top-[6px] left-[60px] bg-primary py-1 px-2 border-2 border-white rounded-2xl text-sm'>Stage 2</span>
                            <span className=' text-[46px] text-black'><FaCommentAlt /></span>
                            <span className='arrow absolute text-3xl'><HiArrowNarrowRight /></span>
                        </div>
                        <h3 className=' text-2xl text-white font-bold my-2'>Brand Awareness</h3>
                        <p>This is where we build more brand awareness Social posts, social ads, organic serach, paid search</p>
                    </div>
                    {/* stage-3 */}
                    <div className=" flex flex-col items-center">
                        <div className=" flex justify-center items-center w-[126px] h-[126px] relative bg-white rounded-full">
                            <span className=' absolute top-[6px] left-[60px] bg-primary py-1 px-2 border-2 border-white rounded-2xl text-sm'>Stage 3</span>
                            <span className=' text-[46px] text-black'><FaCommentAlt /></span>
                            <span className='arrow absolute text-3xl'><HiArrowNarrowRight /></span>
                        </div>
                        <h3 className=' text-2xl text-white font-bold my-2'>Engage</h3>
                        <p>Customer starts to engage and fill out their info Pre-sales blog, lead magnet, low-dollar offer, sales page</p>
                    </div>
                    {/* stage-4 */}
                    <div className=" flex flex-col items-center">
                        <div className=" flex justify-center items-center w-[126px] h-[126px] relative bg-white rounded-full">
                            <span className=' absolute top-[6px] left-[60px] bg-primary py-1 px-2 border-2 border-white rounded-2xl text-sm'>Stage 4</span>
                            <span className=' text-[46px] text-black'><FaCommentAlt /></span>
                            <span className='arrow absolute text-3xl'><HiArrowNarrowRight /></span>
                        </div>
                        <h3 className=' text-2xl text-white font-bold my-2'>Convert</h3>
                        <p>Customers turn into clients Retargeting ads, email newsletters, email drips, text reminders</p>
                    </div>
                    {/* stage-5 */}
                    <div className=" flex flex-col items-center">
                        <div className=" flex justify-center items-center w-[126px] h-[126px] relative bg-white rounded-full">
                            <span className=' absolute top-[6px] left-[60px] bg-primary py-1 px-2 border-2 border-white rounded-2xl text-sm'>Stage 5</span>
                            <span className=' text-[46px] text-black'><FaCommentAlt /></span>
                            <span className='arrow absolute text-3xl'><HiArrowNarrowRight /></span>
                        </div>
                        <h3 className=' text-2xl text-white font-bold my-2'>Nurture</h3>
                        <p>This is where we nuture for future business Email Newsletters + Social Engagement</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowingProcess;