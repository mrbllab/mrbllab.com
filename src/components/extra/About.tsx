import React from 'react';
import img from '../../assets/Images/sec1.webp'

const About: React.FC = () => {
    return (
        <div className='w-full min-h-screen flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center px-5 md:px-0'>
            <div data-aos="zoom-in" className='space-y-20 w-full md:w-[55%]'>
                <div className='text-5xl md:text-6xl font-bold flex gap-5'>
                    <p>What</p>
                    <div className='relative w-fit'>
                        <p>we do</p>
                        <div className='w-full h-1 bg-main rounded-full absolute bottom-0' />
                    </div>
                </div>
                <div className='space-y-5 text-pretty'>
                    <p>At Marble, we specialize in creating innovative Web3 solutions on the TON blockchain. Our expertise spans from developing engaging Telegram mini apps to building play-to-earn platforms that drive user adoption.</p>
                    <p>We focus on combining gamification elements with seamless blockchain integration, making it easier for users to interact with decentralized technology.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className='w-full md:w-[40%] flex justify-center'>
                <img src={img} alt='section_2_img' loading='eager' className='h-full object-center object-contain' />
            </div>
        </div>
    );
}

export default About;
